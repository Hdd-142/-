/**
 * 进度条工具函数
 * 功能：管理和计算页面进度显示
 */

// 总页数（与navigation.js保持一致）
const TOTAL_PAGES = 10;

/**
 * 生成进度点数组
 * 用于渲染页面顶部的圆点进度条
 * @param {number} currentIndex - 当前页面索引（0-based）
 * @param {number} totalPages - 总页数
 * @returns {Array} 进度点数组，每个元素包含索引和是否激活状态
 */
function generateProgressDots(currentIndex, totalPages = TOTAL_PAGES) {
  const dots = [];
  for (let i = 0; i < totalPages; i++) {
    dots.push({
      index: i,
      active: i === currentIndex
    });
  }
  return dots;
}

/**
 * 获取当前进度百分比
 * @param {number} currentIndex - 当前页面索引（0-based）
 * @param {number} totalPages - 总页数
 * @returns {number} 进度百分比（0-100）
 */
function getProgressPercent(currentIndex, totalPages = TOTAL_PAGES) {
  if (totalPages <= 1) return 100;
  return Math.round((currentIndex / (totalPages - 1)) * 100);
}

/**
 * 获取简化版进度点（每3页显示一个点）
 * 用于页面较多时减少视觉干扰
 * @param {number} currentIndex - 当前页面索引（0-based）
 * @param {number} totalPages - 总页数
 * @returns {Array} 简化版进度点数组
 */
function generateSimplifiedDots(currentIndex, totalPages = TOTAL_PAGES) {
  const dotInterval = 3; // 每3页一个点
  const dots = [];

  for (let i = 0; i < totalPages; i += dotInterval) {
    dots.push({
      index: i,
      active: currentIndex >= i && currentIndex < i + dotInterval
    });
  }

  // 如果最后一组不足3页，确保显示最后一个点
  const lastDotIndex = dots[dots.length - 1].index;
  if (lastDotIndex + dotInterval < totalPages - 1) {
    dots[dots.length - 1].active = currentIndex === totalPages - 1;
    dots.push({
      index: totalPages - 1,
      active: currentIndex === totalPages - 1
    });
  }

  return dots;
}

module.exports = {
  generateProgressDots,
  getProgressPercent,
  generateSimplifiedDots,
  TOTAL_PAGES
};
