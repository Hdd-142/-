/**
 * 第2页 - 问候第一句页面逻辑
 */
const navigation = require('../../utils/navigation.js');

Page({
  data: {
    animationClass: '',
    progressDots: [],
    currentIndex: 1,
    dogImageSrc: '/image/汪汪.gif'
  },

  onLoad() {
    navigation.triggerPageAnimation(this, 'in');
    this.updateProgress();
    this.initTouchEvents();
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

  initTouchEvents() {
    this.touchStartX = 0;
    this.touchStartY = 0;
  },

  onTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  },

  onTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        navigation.goToNextPage();
      } else {
        navigation.goToPrevPage();
      }
    }
  },

  onPageTap() {
    navigation.goToNextPage();
  }
});
