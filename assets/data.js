/* =========================================================
 * 站点内容配置 —— 改这一个文件就能换成你自己的内容
 * 案例区展示的是"典型方案"（能做什么、解决什么问题），
 * 有了真实项目后可以在 name / solve 里换成真实客户与成果
 * ========================================================= */
window.SITE = {
  brand: "XF",
  brandSub: "全栈工坊",
  role: "独立全栈开发 · 自动化工程师",
  headline: ["把你的想法", "做成能上线的产品"],
  intro: "官网、管理系统、App、小程序、浏览器插件、n8n 自动化工作流、AI 应用。<br>一个人从需求到上线全包，沟通不转手，源码全交付。",
  stats: [
    { num: "7", label: "类项目都能接" },
    { num: "全栈", label: "前端 · 后端 · 移动端" },
    { num: "100%", label: "源码交付" },
    { num: "24h", label: "内回复需求" },
  ],
  contact: {
    wechat: "",                       // 微信号（可选，留空则只显示二维码）
    wechatQr: "assets/wechat-qr.jpg",
    email: "",                        // 邮箱（可选，留空则隐藏邮箱和"发邮件"按钮）
    github: "",                       // GitHub（可选）
    city: "远程协作 · 全国可接",
    hours: "工作日 / 周末均可沟通",
  },
};

/* 能力章节：每一章 = 一种可接的项目类型 */
window.CHAPTERS = [
  {
    id: "web",
    title: "企业官网",
    en: "Websites & Landing Pages",
    desc: "品牌官网、产品落地页、多语言外贸站。打开快、上得了搜索、后台能自己改内容。",
    scene: "web",
    hue: 32,
    stack: ["Vue 3", "Nuxt", "Next.js", "Tailwind", "SEO", "Headless CMS"],
    deliver: ["响应式设计，手机电脑都好看", "SEO 基础 + 站点地图 + 搜索引擎收录", "可视化后台，文章产品自己发", "部署上线 + 域名 HTTPS 一条龙"],
    price: "¥3,000 起",
    period: "7–15 天",
    cases: [
      { name: "企业品牌官网", tag: "形象展示 · 新闻动态", solve: "让客户搜得到、看得懂、找得到联系方式", color: "#3b6e5a" },
      { name: "产品落地页", tag: "转化页 · 留资表单", solve: "一页讲清卖点，访客直接留下联系方式", color: "#5a4b8a" },
      { name: "多语言外贸站", tag: "中英多语 · 询盘", solve: "海外客户直接询盘，谷歌可收录", color: "#8a4b3b" },
      { name: "个人 / 工作室作品集", tag: "动效 · 作品展示", solve: "把作品体面地展示出来，方便接单", color: "#7a6a3a" },
    ],
  },
  {
    id: "admin",
    title: "管理系统",
    en: "Admin & Business Systems",
    desc: "ERP、CRM、订单库存、数据看板、权限审批。把 Excel 和微信群里的流程搬进系统。",
    scene: "admin",
    hue: 210,
    stack: ["Vue 3", "Element Plus", "Spring Boot", "MyBatis", "MySQL", "Redis"],
    deliver: ["RBAC 角色权限 / 数据权限", "报表看板 + Excel 导入导出", "流程审批、消息通知对接", "私有化部署，数据在你自己服务器"],
    price: "¥15,000 起",
    period: "3–8 周",
    cases: [
      { name: "主数据管理平台 MDM", tag: "数据治理 · 多源同步", solve: "多个业务系统的客户/物料/组织数据统一口径、自动同步", color: "#2f5b8a" },
      { name: "订单库存 ERP", tag: "订单 · 库存 · 财务", solve: "告别 Excel 对账，库存与订单实时一致", color: "#3a6d7a" },
      { name: "会员 CRM 系统", tag: "会员 · 营销 · 积分", solve: "客户资料集中管理，跟进记录不丢失", color: "#5a3b7a" },
      { name: "数据可视化大屏", tag: "大屏 · 实时数据", solve: "关键经营指标一屏看全，老板随时掌握", color: "#6a5a2f" },
    ],
  },
  {
    id: "app",
    title: "移动 App",
    en: "iOS & Android Apps",
    desc: "一套代码同时上 iOS 和安卓。从原型、UI 到上架应用商店，帮你走完审核。",
    scene: "app",
    hue: 280,
    stack: ["uni-app", "Flutter", "React Native", "推送", "支付", "地图定位"],
    deliver: ["iOS + Android 双端", "微信/支付宝/Apple 支付接入", "消息推送、登录、分享", "协助上架 App Store / 各安卓商店"],
    price: "¥20,000 起",
    period: "4–10 周",
    cases: [
      { name: "预约服务类 App", tag: "双端 · 派单", solve: "用户下单、师傅接单、平台抽佣，全流程线上化", color: "#3b5a7a" },
      { name: "会员订阅类 App", tag: "内容 · 订阅制", solve: "内容付费与会员体系，持续产生收入", color: "#7a3b5a" },
      { name: "企业内部作业 App", tag: "离线 · 拍照 · 定位", solve: "外勤巡检、拍照上报，替代纸质单据", color: "#4a6a3b" },
    ],
  },
  {
    id: "mp",
    title: "微信小程序",
    en: "WeChat Mini Programs",
    desc: "商城、预约、点餐、会员、工具类。用户扫码即用，结合公众号和企业微信做私域。",
    scene: "mp",
    hue: 140,
    stack: ["原生小程序", "uni-app", "Taro", "云开发", "微信支付", "企业微信"],
    deliver: ["微信登录、手机号授权", "微信支付 / 分账", "订阅消息、客服、分享裂变", "协助注册认证与提审上线"],
    price: "¥8,000 起",
    period: "2–6 周",
    cases: [
      { name: "商城 / 团购小程序", tag: "商城 · 分销", solve: "微信里直接开店，老客复购、分享裂变", color: "#2f7a4b" },
      { name: "门店预约小程序", tag: "预约 · 会员卡", solve: "在线选时间、付定金，减少爽约", color: "#7a4b6a" },
      { name: "活动报名小程序", tag: "表单 · 核销", solve: "报名、缴费、签到核销一条龙", color: "#4b6a7a" },
      { name: "扫码点餐小程序", tag: "点餐 · 打印机", solve: "顾客扫码自助下单，后厨自动出单", color: "#8a6a2f" },
    ],
  },
  {
    id: "ext",
    title: "浏览器插件",
    en: "Chrome / Edge Extensions",
    desc: "数据采集、网页增强、电商运营助手、AI 侧边栏。把每天重复点的那些事交给插件。",
    scene: "ext",
    hue: 15,
    stack: ["Manifest V3", "TypeScript", "Vite", "Content Script", "Side Panel", "LLM API"],
    deliver: ["Chrome / Edge 兼容", "页面数据抓取与导出", "接入 AI 做总结、翻译、回复", "协助上架 Chrome 应用商店"],
    price: "¥5,000 起",
    period: "1–4 周",
    cases: [
      { name: "电商数据采集助手", tag: "采集 · 导出 Excel", solve: "一键抓取商品/店铺数据，省掉手工复制", color: "#8a4b2f" },
      { name: "AI 网页助手侧边栏", tag: "Side Panel · LLM", solve: "网页内容一键总结、翻译、改写", color: "#3b4b8a" },
      { name: "客服快捷回复插件", tag: "话术库 · 快捷键", solve: "团队共用话术库，回复又快又统一", color: "#5a7a3b" },
    ],
  },
  {
    id: "n8n",
    title: "n8n 自动化工作流",
    en: "Automation & Workflows",
    desc: "表单进来自动建客户、订单自动同步、日报自动生成、AI 自动回复。让系统之间自己说话。",
    scene: "n8n",
    hue: 345,
    stack: ["n8n", "Webhook", "飞书 / 钉钉", "企业微信", "多维表格", "OpenAI / Claude"],
    deliver: ["n8n 私有化部署与维护", "打通飞书、钉钉、企微、表格、CRM", "AI 节点：分类、提取、自动回复", "失败告警 + 运行日志"],
    price: "¥2,000 起 / 条",
    period: "3–10 天",
    cases: [
      { name: "线索自动分配流", tag: "表单 → CRM → 企微", solve: "新线索秒级推送到对应销售，不再漏单", color: "#8a2f4b" },
      { name: "AI 邮件 / 工单分拣", tag: "邮箱 → LLM → 工单", solve: "AI 自动分类并起草回复，人工只需确认", color: "#4b2f8a" },
      { name: "经营日报机器人", tag: "数据库 → 飞书群", solve: "每天定时把关键数据推到群里", color: "#2f6a8a" },
      { name: "跨系统数据同步", tag: "电商 ↔ ERP", solve: "订单、库存在系统间自动同步，零人工录单", color: "#6a8a2f" },
    ],
  },
  {
    id: "ai",
    title: "AI 应用集成",
    en: "AI Agents & Integrations",
    desc: "知识库问答、AI 客服、文档自动处理、给现有系统加上 AI 能力。不讲概念，只做能用的。",
    scene: "ai",
    hue: 50,
    stack: ["Claude / GPT", "RAG", "向量数据库", "MCP", "Agent", "Function Calling"],
    deliver: ["企业知识库问答（可私有部署）", "AI 客服接入网站 / 微信 / 企微", "合同、发票、简历等文档自动提取", "现有系统加 AI 助手"],
    price: "¥8,000 起",
    period: "2–6 周",
    cases: [
      { name: "企业知识库助手", tag: "RAG · 企微机器人", solve: "制度、产品资料随问随答，并标注出处", color: "#7a6a2f" },
      { name: "文档信息自动提取", tag: "OCR · 结构化", solve: "发票、合同关键字段自动录入系统", color: "#2f5a6a" },
      { name: "网站 AI 售前客服", tag: "多轮对话 · 留资", solve: "7×24 小时回答咨询并收集客户联系方式", color: "#6a2f5a" },
    ],
  },
];

window.PROCESS = [
  { t: "沟通需求", d: "微信聊清楚要做什么，免费出初步方案和报价" },
  { t: "原型确认", d: "画出页面原型，你点头了再动手，不做无用功" },
  { t: "分阶段开发", d: "每周演示进度，可随时提修改意见" },
  { t: "测试验收", d: "按验收清单逐条过，你验收满意才算完成" },
  { t: "部署上线", d: "服务器、域名、备案、上架全程协助" },
  { t: "售后维护", d: "上线后免费维护 1–3 个月，bug 免费修" },
];

window.FAQ = [
  { q: "源码归谁？", a: "项目结清后，全部源代码、设计稿、部署文档都归你，可以自行二次开发。" },
  { q: "怎么付款？", a: "通常 3:4:3 分阶段——启动付 30%，中期演示付 40%，验收上线付 30%。小项目可以 5:5。" },
  { q: "能签合同吗？", a: "可以签正式开发合同，需求、工期、验收标准都写进合同。" },
  { q: "预算有限怎么办？", a: "可以先做 MVP 核心功能上线验证，后续再迭代。我会帮你砍掉不必要的需求。" },
  { q: "上线后出问题怎么办？", a: "免费维护期内 bug 免费修；之后可以按月签维护，或按次收费。" },
  { q: "只做一部分可以吗？", a: "可以。只要前端、只要后端、接手别人烂尾的项目、只做一条自动化流程都接。" },
];
