/**
 * 第5页 - 肩颈放松预告页面逻辑
 */
const navigation = require('../../utils/navigation.js');

Page({
  data: {
    animationClass: '',
    progressDots: [],
    currentIndex: 4,
    dogImageSrc: '/image/期待.gif'
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
      deltaX < 0 ? navigation.goToNextPage() : navigation.goToPrevPage();
    }
  },

  onPageTap() {
    navigation.goToNextPage();
  }
});
