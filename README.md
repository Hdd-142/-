# 瑶瑶的放松小狗 - 微信小程序

专为女生设计的舒缓放松引导小程序，用可爱的线条小狗形象，温柔引导用户完成肩颈和腰部放松动作。

## 📁 项目结构

```
item/
├── app.json              # 全局配置文件
├── app.wxss              # 全局样式
├── sitemap.json          # SEO 配置
├── project.config.json   # 开发者工具配置
│
├── components/          # 公共组件
│   └── starBackground/  # 星星背景组件
│       ├── starBackground.wxml
│       ├── starBackground.wxss
│       ├── starBackground.js
│       └── starBackground.json
│
├── utils/               # 工具函数
│   ├── navigation.js    # 页面导航工具
│   └── progress.js      # 进度条工具
│
├── pages/               # 页面文件
│   ├── index/           # 第1页 - 封面
│   ├── greeting1/      # 第2页 - 问候第一句
│   ├── greeting2/       # 第3页 - 问候第二句
│   ├── relaxIntro/      # 第4页 - 放松开场引导
│   ├── shoulderPreview/ # 第5页 - 肩颈放松预告
│   ├── shoulderVideo/   # 第6页 - 肩颈舒缓视频页
│   ├── shoulderComplete/# 第7页 - 肩颈完成鼓励
│   ├── waistPreview/    # 第8页 - 腰部放松预告
│   ├── waistVideo/      # 第9页 - 腰部舒缓视频页
│   └── waistComplete/   # 第10页 - 腰部完成鼓励
│
├── image/               # 图片资源目录
│   ├── dog_laile.gif    # 来了表情
│   ├── dog_wangwang.gif # 汪汪表情
│   ├── dog_lingluan.gif # 凌乱表情
│   ├── dog_zhuan.gif    # 转圈圈动图
│   ├── dog_qidai.gif    # 期待表情
│   ├── dog_heihei.gif   # 嘿嘿表情
│   ├── dog_lalala.gif   # 啦啦啦表情
│   └── dog_huaha.gif    # 送你花花表情
│
└── video/               # 视频资源目录
    ├── jianjing.mp4     # 肩颈舒缓视频
    └── yaobu.mp4        # 腰部舒缓视频
```

## 🚀 使用方法

### 1. 安装依赖
```bash
# 在微信开发者工具中打开项目目录
```

### 2. 添加资源文件

#### 图片资源
将以下 GIF 图片文件放入 `D:\用户\Desktop\item\image\` 目录：
- `dog_laile.gif` - 来了表情
- `dog_wangwang.gif` - 汪汪不厌烦表情
- `dog_lingluan.gif` - 凌乱表情
- `dog_zhuan.gif` - 转圈圈动图
- `dog_qidai.gif` - 期待表情
- `dog_heihei.gif` - 嘿嘿表情
- `dog_lalala.gif` - 啦啦啦表情
- `dog_huaha.gif` - 送你花花表情

#### 视频资源
将以下 MP4 视频文件放入 `D:\用户\Desktop\item\video\` 目录：
- `jianjing.mp4` - 肩颈舒缓视频
- `yaobu.mp4` - 腰部舒缓视频

### 3. 更新图片路径
在各个页面的 JS 文件中更新 `dogImageSrc` 为实际图片路径：
```javascript
dogImageSrc: '/image/dog_laile.gif'
```

### 4. 导入项目
1. 打开微信开发者工具
2. 选择「导入项目」
3. 项目目录选择 `D:\用户\Desktop\item\`
4. AppID 输入你的小程序 AppID（或使用测试号）

## 📱 功能特性

### 页面交互
- ✅ 点击屏幕空白区域进入下一页
- ✅ 左滑进入下一页
- ✅ 右滑返回上一页
- ✅ 顶部圆点进度条显示当前进度

### 视频播放器
- ✅ 支持播放/暂停
- ✅ 进度条拖动
- ✅ 双击全屏
- ✅ 横屏自动适配
- ✅ 手势控制

### 视觉效果
- ✅ 温暖鹅黄色背景 (#FFF8DC)
- ✅ 随机散落的白色半透明星星
- ✅ 星星浮动和呼吸动画
- ✅ 页面淡入淡出转场动画

## 🎨 自定义修改

### 修改小狗表情图片
编辑各页面 JS 文件中的 `dogImageSrc` 字段：
```javascript
// pages/index/index.js
dogImageSrc: '/image/你的图片文件名.gif'
```

### 修改文字内容
编辑各页面 WXML 文件中的文字：
```xml
<text class="main-text">你的自定义文字</text>
```

### 修改页面顺序
编辑 `utils/navigation.js` 中的 `PAGES` 数组：
```javascript
const PAGES = [
  'pages/index/index',
  // 添加或删除页面路径
];
```

### 修改星星数量和样式
编辑 `components/starBackground/starBackground.js` 中的 `generateStars` 方法：
```javascript
const starCount = 25; // 修改星星数量
const stars.push({
  x: Math.random() * 100,  // 位置
  size: Math.floor(Math.random() * 9) + 6,  // 大小
  delay: Math.random() * 5,  // 动画延迟
  duration: Math.random() * 3 + 3  // 动画时长
});
```

## 📝 注意事项

1. **微信开发者工具配置**：确保开启「不校验合法域名」选项（开发阶段）
2. **视频格式**：微信小程序支持的视频格式包括 MP4、AVC、H.264
3. **图片大小**：GIF 动图建议控制在 1MB 以内以提升加载速度
4. **真机测试**：部分动画效果需要在真机上测试才能完全展示

## 🔗 相关链接

### 视频来源
- 肩颈舒缓视频：https://www.bilibili.com/video/BV1vu411e7fC/
- 腰部舒缓视频：https://www.bilibili.com/video/BV1pV4y1C7eu/

## 📄 License

MIT License
