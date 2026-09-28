// app.js
App({
  onLaunch() {
    // 初始化本地调音记录存储
    if (!wx.getStorageSync('tuneRecords')) {
      wx.setStorageSync('tuneRecords', []);
    }
  },
  globalData: {
    basePitch: 440 // 基准音 A4 = 440Hz
  }
});
