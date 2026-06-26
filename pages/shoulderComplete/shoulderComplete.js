/**
 * 第7页 - 肩颈完成鼓励页面逻辑
 */
const navigation = require('../../utils/navigation.js');

Page({
  data: {
    animationClass: '',
    progressDots: [],
    currentIndex: 6,
    dogImageSrc: '/image/嘿嘿.gif'
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
