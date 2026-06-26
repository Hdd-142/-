/**
 * 第10页 - 腰部完成鼓励页面逻辑
 */
const navigation = require('../../utils/navigation.js');

Page({
  data: {
    animationClass: '',
    progressDots: [],
    currentIndex: 9,
    dogImageSrc: '/image/送你花花.gif'
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
    if (Math.abs(deltaX) > 50) {
      // 最后一页右滑返回上一页
      if (deltaX > 0) {
        navigation.goToPrevPage();
      }
      // 左滑不响应（已经是最后一页）
    }
  },

  onPageTap() {
    // 最后一页可以重新开始
    navigation.resetToHome();
  }
});
