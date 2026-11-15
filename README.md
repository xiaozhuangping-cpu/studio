# XF 全栈工坊 · 个人接单站

纯静态站点（HTML + CSS + JS，无构建步骤），深色电影感风格，按"能力章节"展示：
企业官网 / 管理系统 / App / 小程序 / 浏览器插件 / n8n 自动化 / AI 应用集成。

## 改成你自己的内容

几乎所有内容都在 `assets/data.js`：

- `SITE`：品牌名、标语、数据（经验年数、项目数…）、微信号、邮箱、GitHub
- `CHAPTERS`：每类项目的介绍、技术栈、交付内容、参考价、周期、**案例列表**
- `PROCESS` / `FAQ`：合作流程和常见问题

> ⚠️ 里面的案例和数字目前是**示例占位**，上线前请换成你的真实项目和真实数据。

微信二维码：把图片放到 `assets/wechat-qr.png`，然后在 `data.js` 里填 `wechatQr: "assets/wechat-qr.png"`。

## 本地预览

```bash
python3 -m http.server 4173
```

打开 http://localhost:4173

## 部署（任选其一）

- **Vercel / Netlify / Cloudflare Pages**：直接导入此目录，无需构建命令，输出目录填 `.`
- **GitHub Pages**：推到仓库，Settings → Pages 选 main 分支根目录
- **国内访问**：建议放到阿里云 OSS / 腾讯云 COS 静态托管 + 已备案域名，速度更好

## 结构

```
index.html          页面骨架 + SEO meta
assets/data.js      所有可改内容
assets/scenes.js    每章右侧的代码绘制场景（浏览器/后台/手机/插件/n8n/AI 对话）
assets/main.js      渲染、案例弹窗、需求单生成、底部时间轴
assets/style.css    样式与响应式
```
