/* 每个章节右侧的"场景"——全部用代码画，不依赖图片 */
(function () {
  const bars = (n, cls = "") =>
    Array.from({ length: n }, (_, i) => `<i class="${cls}" style="--h:${30 + ((i * 37) % 60)}%"></i>`).join("");
  const lines = (n) => Array.from({ length: n }, (_, i) => `<i style="--w:${55 + ((i * 23) % 40)}%"></i>`).join("");

  const browser = (inner, url = "yourbrand.com") => `
    <div class="mock-browser">
      <div class="mb-bar"><span class="dots"><b></b><b></b><b></b></span><span class="mb-url">${url}</span></div>
      <div class="mb-body">${inner}</div>
    </div>`;

  const phone = (inner, extra = "") => `
    <div class="mock-phone ${extra}"><div class="mp-notch"></div><div class="mp-screen">${inner}</div></div>`;

  const S = {};

  S.web = () =>
    browser(`
      <div class="w-nav"><b></b><span><i></i><i></i><i></i><i class="cta"></i></span></div>
      <div class="w-hero">
        <div><div class="w-h1"></div><div class="w-h1 s"></div><div class="lines">${lines(3)}</div><span class="w-btn"></span></div>
        <div class="w-img"><div class="w-sun"></div><div class="w-hill"></div></div>
      </div>
      <div class="w-cards"><i></i><i></i><i></i></div>`);

  S.admin = () =>
    browser(`
      <div class="a-wrap">
        <aside class="a-side"><b></b>${"<i></i>".repeat(6)}</aside>
        <div class="a-main">
          <div class="a-kpis"><i><em>¥ 1.28M</em></i><i><em>3,420</em></i><i><em>+18%</em></i></div>
          <div class="a-chart">${bars(14)}</div>
          <div class="a-table">${"<i><b></b><b></b><b></b><span></span></i>".repeat(4)}</div>
        </div>
      </div>`, "admin.yourcompany.com");

  S.app = () =>
    `<div class="phones">
      ${phone(`<div class="p-head"><div class="p-av"></div><div class="lines">${lines(2)}</div></div>
        <div class="p-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/><circle class="v" cx="50" cy="50" r="40"/></svg><em>78%</em></div>
        <div class="p-list">${"<i><b></b><span></span></i>".repeat(3)}</div>
        <div class="p-tab"><i class="on"></i><i></i><i></i><i></i></div>`, "tilt-l")}
      ${phone(`<div class="p-img"></div><div class="lines pad">${lines(3)}</div>
        <div class="p-grid">${"<i></i>".repeat(4)}</div><div class="p-buy">立即预约</div>`, "tilt-r")}
    </div>`;

  S.mp = () =>
    phone(`
      <div class="m-top"><span>美好生活</span><span class="m-capsule"><b></b><b></b></span></div>
      <div class="m-banner"><em>新人专享 ¥20</em></div>
      <div class="m-icons">${["预约", "商城", "会员", "积分", "拼团", "优惠", "门店", "客服"].map((t) => `<i><b></b>${t}</i>`).join("")}</div>
      <div class="m-goods">${"<i><b></b><span></span><em>¥ 99</em></i>".repeat(2)}</div>
      <div class="p-tab"><i class="on g"></i><i></i><i></i><i></i></div>`, "single");

  S.ext = () =>
    browser(`
      <div class="e-page"><div class="lines">${lines(8)}</div><div class="e-hl">商品价格 ¥129 · 月销 2.3万</div></div>
      <div class="e-pop">
        <div class="e-pop-h"><b></b>选品助手<span class="e-on"></span></div>
        <div class="e-row"><span>已采集</span><em>248</em></div>
        <div class="e-row"><span>平均价格</span><em>¥ 86.4</em></div>
        <div class="e-spark">${bars(16, "s")}</div>
        <div class="e-btns"><i>导出 Excel</i><i class="on">AI 分析</i></div>
      </div>
      <span class="e-icon"></span>`, "shop.example.com/item/9527");

  S.n8n = () => {
    const nodes = [
      { x: 30, y: 120, t: "Webhook", s: "表单提交", c: "#e0a458" },
      { x: 190, y: 120, t: "AI 分类", s: "Claude", c: "#c07ad8" },
      { x: 350, y: 50, t: "CRM", s: "新建客户", c: "#6aa8e0" },
      { x: 350, y: 190, t: "IF", s: "高意向?", c: "#7ac08a" },
      { x: 510, y: 190, t: "企业微信", s: "通知销售", c: "#5ec4b0" },
    ];
    const edges = [[0, 1], [1, 2], [1, 3], [3, 4]];
    const W = 120, H = 54;
    const path = ([a, b]) => {
      const A = nodes[a], B = nodes[b];
      const x1 = A.x + W, y1 = A.y + H / 2, x2 = B.x, y2 = B.y + H / 2, m = (x1 + x2) / 2;
      return `<path d="M${x1},${y1} C${m},${y1} ${m},${y2} ${x2},${y2}"/>`;
    };
    return `<div class="mock-canvas">
      <div class="nc-bar"><b></b> 线索自动分配 <span class="nc-run">● 运行中 · 今日 214 次</span></div>
      <svg viewBox="0 0 660 280" class="n8n">
        <g class="edges">${edges.map(path).join("")}</g>
        <g class="flow">${edges.map(path).join("")}</g>
        ${nodes.map((n) => `<g transform="translate(${n.x},${n.y})">
            <rect width="${W}" height="${H}" rx="10"/>
            <rect width="6" height="${H}" rx="3" fill="${n.c}" class="tag"/>
            <text x="18" y="23" class="t">${n.t}</text><text x="18" y="41" class="s">${n.s}</text>
            <circle cx="${W}" cy="${H / 2}" r="4" fill="${n.c}"/></g>`).join("")}
      </svg></div>`;
  };

  S.ai = () =>
    `<div class="mock-chat">
      <div class="c-h"><b></b>企业知识库助手<span>已接入 1,284 份文档</span></div>
      <div class="c-msg u">年假怎么算？入职 3 年有几天？</div>
      <div class="c-msg a">根据《员工手册 v3.2》第 4.1 条：入职满 1 年不满 10 年，年假为 <b>5 天</b>；另有司龄假每满 1 年 +1 天，你目前可休 <b>7 天</b>。<span class="c-cite">📄 员工手册 v3.2 · P12</span></div>
      <div class="c-msg u">帮我提个 3 天的年假申请</div>
      <div class="c-msg a typing"><i></i><i></i><i></i></div>
      <div class="c-input"><span>输入问题…</span><b>发送</b></div>
    </div>`;

  /* 案例卡片缩略图：用案例颜色 + 类型画一个小场景 */
  const thumb = (type, color) => {
    const t = {
      web: `<div class="t-web"><i></i><b></b><b class="s"></b><span></span></div>`,
      admin: `<div class="t-admin"><aside></aside><div>${bars(8)}</div></div>`,
      app: `<div class="t-phone"><b></b><i></i><i></i></div>`,
      mp: `<div class="t-phone mp"><b></b><span>${"<i></i>".repeat(4)}</span></div>`,
      ext: `<div class="t-ext"><div></div><aside><i></i><i></i><i></i></aside></div>`,
      n8n: `<div class="t-n8n"><i></i><em></em><i></i><em></em><i></i></div>`,
      ai: `<div class="t-ai"><i></i><i class="r"></i><i></i></div>`,
    }[type];
    return `<div class="thumb" style="--c:${color}">${t}</div>`;
  };

  window.SCENES = S;
  window.THUMB = thumb;
})();
