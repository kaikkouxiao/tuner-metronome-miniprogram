# 琴类调音节拍器（改写"本地生活"案例）

微信小程序随堂练习：
- `pages/index`：改写"本地生活" → 调音器首页（搜索栏 / swiper 轮播 / 九宫格 / 调弦方案列表）
- `pages/record`：新增表单页「调音记录」（picker / radio / slider / switch / textarea + form 提交），自定义顶部导航栏
- `app.json`：底部 tabBar 管理两个页面

## 运行
1. 微信开发者工具导入本目录（AppID 选"测试号"）。
2. `images/` 下的 7 张图片需要单独放入：或运行 `python tools/gen_images.py` 一键生成。
