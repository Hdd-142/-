/**
 * 第9页 - 腰部舒缓视频页面逻辑
 */
const navigation = require('../../utils/navigation.js');

Page({
  data: {
    animationClass: '',
    progressDots: [],
    currentIndex: 8
  },

  onLoad() {
    navigation.triggerPageAnimation(this, 'in');
    this.updateProgress();
  },

  onShow() {
    this.updateProgress();
  },

  updateProgress() {
    const currentIndex = navigation.getCurrentIndex();
    const progressUtil = require('../../utils/progress.js');
    this.setData({
      progressDots: progressUtil.generateProgressDots(currentIndex),
      currentIndex
    });
  },

  onTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
  },

  onTouchEnd(e) {
    const deltaX = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(deltaX) > 80) {
      deltaX < 0 ? navigation.goToNextPage() : navigation.goToPrevPage();
    }
  },

  onPageTap(e) {
    navigation.goToNextPage();
  },

  onPlayVideo() {
    // 跳转到B站视频页面
    wx.navigateToMiniProgram({
      appId: 'wxb4d04714fc561f6f',
      path: 'pages/video/video',
      extraData: {
        videoId: 'BV1pV4y1C7eu'
      },
      fail: () => {
        // 如果跳转失败，复制链接
        wx.setClipboardData({
          data: 'https://www.bilibili.com/video/BV1pV4y1C7eu/',
          success: () => {
            wx.showModal({
              title: '链接已复制',
              content: '请打开微信，粘贴链接到顶部搜索框前往B站观看',
              showCancel: false
            });
          }
        });
      }
    });
  }
});
