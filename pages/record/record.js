// pages/record/record.js
Page({
  data: {
    statusBarHeight: 20,   // 状态栏高度（px），onLoad 中按真机重算
    navContent: 44,        // 导航栏内容高度
    navTotal: 64,
    instruments: ['吉他', '尤克里里', '贝斯', '小提琴'],
    instrumentIndex: 0,
    strings: ['1', '2', '3', '4', '5', '6']
  },

  onLoad() {
    // 自定义导航栏：按状态栏与右上角胶囊位置计算高度
    const win = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
    const capsule = wx.getMenuButtonBoundingClientRect();
    const navContent = (capsule.top - win.statusBarHeight) * 2 + capsule.height;
    this.setData({
      statusBarHeight: win.statusBarHeight,
      navContent: navContent,
      navTotal: win.statusBarHeight + navContent
    });
  },

  onInstrument(e) {
    this.setData({ instrumentIndex: Number(e.detail.value) });
  },

  onCents(e) {
    this.cents = e.detail.value; // 实时偏差，提交时用表单值
  },

  goBack() {
    wx.switchTab({ url: '/pages/index/index' });
  },

  onSubmit(e) {
    const v = e.detail.value;
    // 追加到本地记录
    const records = wx.getStorageSync('tuneRecords') || [];
    records.push({
      instrument: this.data.instruments[Number(v.instrument)],
      string: v.string || '6',
      cents: v.cents,
      tuned: !!v.tuned,
      note: v.note,
      time: new Date().toLocaleString()
    });
    wx.setStorageSync('tuneRecords', records);

    wx.showToast({ title: '记录已保存', icon: 'success' });
    console.log('调音记录：', records);
  },

  onReset() {
    wx.showToast({ title: '已清空', icon: 'none' });
  }
});
