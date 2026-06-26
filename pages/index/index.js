/**
 * 第1页 - 封面页面逻辑
 * 功能：显示欢迎小狗表情和主标题
 */

const navigation = require('../../utils/navigation.js');

Page({
  data: {
    // 页面动画类名
    animationClass: '',
    // 进度点数据
    progressDots: [],
    currentIndex: 0,
    // 小狗表情图片路径
    dogImageSrc: '/image/来了.gif'
  },

  onLoad() {
    // 触发进入动画
    navigation.triggerPageAnimation(this, 'in');
    // 更新进度条
    this.updateProgress();
    // 初始化触摸事件
    this.initTouchEvents();
  },

  onShow() {
    // 每次显示时更新进度
    this.updateProgress();
  },

  /**
   * 更新进度条
   */
  updateProgress() {
    const currentIndex = navigation.getCurrentIndex();
    const progressUtil = require('../../utils/progress.js');
    this.setData({
      progressDots: progressUtil.generateProgressDots(currentIndex),
      currentIndex
    });
  },

  /**
   * 初始化触摸事件
   * 支持：点击空白区域、左滑进入下一页、右滑返回上一页
   */
  initTouchEvents() {
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.isVideoPlaying = false;
  },

  /**
   * 触摸开始
   */
  onTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  },

  /**
   * 触摸结束 - 判断滑动方向
   */
  onTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - this.touchStartX;
    const deltaY = touchEndY - this.touchStartY;

    // 判断为水平滑动且滑动距离超过50rpx
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        // 左滑 - 下一页
        navigation.goToNextPage();
      } else {
        // 右滑 - 上一页
        navigation.goToPrevPage();
      }
    }
  },

  /**
   * 点击页面空白区域 - 进入下一页
   */
  onPageTap(e) {
    // 如果点击的不是核心内容区域，则进入下一页
    navigation.goToNextPage();
  }
});
