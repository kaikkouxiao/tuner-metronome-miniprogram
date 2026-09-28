// pages/index/index.js
Page({
  data: {
    banners: [
      '/images/banner1.png',
      '/images/banner2.png',
      '/images/banner3.png'
    ],
    grids: [
      { icon: '🎸', name: '吉他' },
      { icon: '🪕', name: '尤克里里' },
      { icon: '🎻', name: '小提琴' },
      { icon: '🎵', name: '贝斯' },
      { icon: '♪', name: '标准调弦' },
      { icon: '↓', name: 'Drop D' },
      { icon: '♯', name: '半音阶' },
      { icon: '⏱', name: '节拍器' }
    ],
    tunings: [
      { name: '标准调弦', notes: 'E A D G B E', desc: '吉他默认调弦', tag: '常用' },
      { name: 'Drop D', notes: 'D A D G B E', desc: '六弦降全音，重型 riff 常用', tag: '摇滚' },
      { name: 'Open G', notes: 'D G D G B D', desc: '开放 G 和弦，滑棒友好', tag: '布鲁斯' },
      { name: 'DADGAD', notes: 'D A D G A D', desc: '凯尔特与指弹常用', tag: '指弹' }
    ]
  },

  onGrid(e) {
    wx.showToast({ title: '进入' + e.currentTarget.dataset.name, icon: 'none' });
  },

  onTuning(e) {
    wx.showToast({ title: '已选 ' + e.currentTarget.dataset.name, icon: 'none' });
  }
});
