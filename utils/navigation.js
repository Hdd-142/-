/**
 * 页面导航工具函数
 * 功能：封装公共的页面切换方法，统一管理转场动画和进度条更新
 */

// 所有页面路径列表（按顺序）
const PAGES = [
  'pages/index/index',           // 0: 封面
  'pages/greeting1/greeting1',   // 1: 问候第一句
  'pages/greeting2/greeting2',   // 2: 问候第二句
  'pages/relaxIntro/relaxIntro', // 3: 放松开场引导
  'pages/shoulderPreview/shoulderPreview', // 4: 肩颈放松预告
  'pages/shoulderVideo/shoulderVideo',     // 5: 肩颈舒缓视频页
  'pages/shoulderComplete/shoulderComplete', // 6: 肩颈完成鼓励
  'pages/waistPreview/waistPreview', // 7: 腰部放松预告
  'pages/waistVideo/waistVideo',     // 8: 腰部舒缓视频页
  'pages/waistComplete/waistComplete' // 9: 腰部完成鼓励
];

// 总页数
const TOTAL_PAGES = PAGES.length;

/**
 * 获取当前页面索引
 * @returns {number} 当前页面索引
 */
function getCurrentIndex() {
  const pages = getCurrentPages();
  if (pages.length === 0) return 0;

  const currentPage = pages[pages.length - 1];
  const route = currentPage.route || currentPage.__route__;

  const index = PAGES.findIndex(p => route.endsWith(p));
  return index >= 0 ? index : 0;
}

/**
 * 跳转到下一页
 * @param {boolean} withAnimation - 是否使用动画效果，默认true
 */
function goToNextPage(withAnimation = true) {
  const currentIndex = getCurrentIndex();

  if (currentIndex < TOTAL_PAGES - 1) {
    const nextPage = PAGES[currentIndex + 1];
    wx.navigateTo({
      url: `/${nextPage}`,
      fail: () => {
        // 如果navigateTo失败，尝试redirectTo
        wx.redirectTo({
          url: `/${nextPage}`
        });
      }
    });
  } else {
    // 已经是最后一页，可以显示提示或重置
    console.log('已经是最后一页');
  }
}

/**
 * 返回上一页
 * @param {boolean} withAnimation - 是否使用动画效果，默认true
 */
function goToPrevPage(withAnimation = true) {
  wx.navigateBack({
    delta: 1,
    fail: () => {
      // 如果没有上一页，可以返回首页
      wx.redirectTo({
        url: `/${PAGES[0]}`
      });
    }
  });
}

/**
 * 跳转到指定页面
 * @param {number} index - 目标页面索引
 */
function goToPage(index) {
  if (index >= 0 && index < TOTAL_PAGES) {
    const targetPage = PAGES[index];
    wx.redirectTo({
      url: `/${targetPage}`
    });
  }
}

/**
 * 重置到首页
 */
function resetToHome() {
  wx.reLaunch({
    url: `/${PAGES[0]}`
  });
}

/**
 * 获取总页数
 * @returns {number} 总页数
 */
function getTotalPages() {
  return TOTAL_PAGES;
}

/**
 * 获取当前页面进度信息
 * @returns {Object} 包含当前索引和总页数的对象
 */
function getProgressInfo() {
  return {
    currentIndex: getCurrentIndex(),
    totalPages: TOTAL_PAGES
  };
}

/**
 * 触发页面转场动画
 * 调用时机：页面onLoad时
 * @param {Object} pageInstance - 页面实例(this)
 * @param {string} animationType - 动画类型：'in' 进入动画，'out' 离开动画
 */
function triggerPageAnimation(pageInstance, animationType = 'in') {
  if (animationType === 'in') {
    pageInstance.setData({ animationClass: 'page-fade-in' });
  } else {
    pageInstance.setData({ animationClass: 'page-fade-out' });
  }
}

// 导出工具函数
module.exports = {
  PAGES,
  TOTAL_PAGES,
  getCurrentIndex,
  goToNextPage,
  goToPrevPage,
  goToPage,
  resetToHome,
  getTotalPages,
  getProgressInfo,
  triggerPageAnimation
};
