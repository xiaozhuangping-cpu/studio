(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const S = window.SITE, CH = window.CHAPTERS;
  const pad = (n) => String(n).padStart(2, "0");
  const total = CH.length;
  const totalCases = CH.reduce((a, c) => a + c.cases.length, 0);

  /* ---------- 首屏 ---------- */
  $("#brand").textContent = S.brand;
  $("#brandSub").textContent = S.brandSub;
  $("#roleLine").textContent = S.role;
  $("#chCount").textContent = `${total} 类项目 · ${totalCases} 个典型方案`;
  $("#headline").innerHTML = `${S.headline[0]}<br><em>${S.headline[1]}</em>`;
  $("#intro").innerHTML = S.intro;
  $("#stats").innerHTML = S.stats.map((s) => `<div><dt>${s.num}</dt><dd>${s.label}</dd></div>`).join("");
  $("#tocMeta").textContent = `${total} 类 · ${totalCases} 方案`;
  $("#toc").innerHTML = CH.map(
    (c, i) => `<li><a href="#ch-${c.id}"><span class="n">${pad(i + 1)}</span><span class="t">${c.title}</span><span class="c">${c.cases.length}</span></a></li>`
  ).join("");

  /* ---------- 章节 ---------- */
  $("#chapters").innerHTML = CH.map((c, i) => `
    <section class="chapter" id="ch-${c.id}" style="--hue:${c.hue}" data-i="${i}">
      <div class="ch-inner">
        <div class="ch-left">
          <p class="eyebrow">能力 <b>${pad(i + 1)} / ${pad(total)}</b><span class="rule"></span>${c.cases.length} 个典型方案</p>
          <h2><span class="num">${pad(i + 1)}</span> ${c.title}</h2>
          <p class="en">${c.en}</p>
          <p class="ch-desc">${c.desc}</p>
          <ul class="stack">${c.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
          <div class="cases">
            ${c.cases.map((k, j) => `
              <button class="case" data-ch="${i}" data-k="${j}">
                ${window.THUMB(c.scene, k.color)}
                <span class="case-name">${k.name}</span>
                <span class="case-tag">${k.tag}</span>
              </button>`).join("")}
          </div>
          <div class="offer">
            <div><span>参考价</span><b>${c.price}</b></div>
            <div><span>周期</span><b>${c.period}</b></div>
            <a href="#contact" data-type="${c.title}" class="offer-cta">咨询这类项目 →</a>
          </div>
        </div>
        <div class="ch-scene scene-${c.scene}">${window.SCENES[c.scene]()}</div>
      </div>
    </section>`).join("");

  /* ---------- 案例弹窗 ---------- */
  const modal = $("#modal");
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".case");
    if (!b) return;
    const c = CH[b.dataset.ch], k = c.cases[b.dataset.k];
    $("#modalBody").innerHTML = `
      ${window.THUMB(c.scene, k.color).replace('class="thumb"', 'class="thumb big"')}
      <p class="eyebrow">${c.title}<span class="rule"></span>典型方案</p>
      <h3>${k.name}</h3>
      <p class="m-tag">${k.tag}</p>
      <div class="m-result"><span>解决</span><b>${k.solve}</b></div>
      <h4>交付内容</h4>
      <ul class="m-deliver">${c.deliver.map((d) => `<li>${d}</li>`).join("")}</ul>
      <p class="m-stack">${c.stack.join(" · ")}</p>
      <a class="btn btn-primary" href="#contact" data-type="${c.title}" onclick="document.getElementById('modal').close()">我也想做一个类似的 →</a>`;
    modal.showModal();
  });
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

  /* ---------- 流程 / FAQ ---------- */
  $("#processList").innerHTML = window.PROCESS.map((p, i) => `<li><span class="n">${pad(i + 1)}</span><b>${p.t}</b><p>${p.d}</p></li>`).join("");
  $("#faqList").innerHTML = window.FAQ.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");

  /* ---------- 联系 ---------- */
  const ct = S.contact;
  $("#qr").innerHTML = ct.wechatQr
    ? `<img src="${ct.wechatQr}" alt="微信二维码"><span>扫码加微信</span>`
    : `<div class="qr-ph">微信二维码<br><small>放到 assets/ 并在 data.js 填路径</small></div><span>扫码加微信</span>`;
  const rows = [
    ct.wechat && `<li><span>微信</span><b>${ct.wechat}</b><button type="button" data-copy="${ct.wechat}">复制</button></li>`,
    !ct.wechat && `<li><span>微信</span><b>扫左侧二维码添加</b></li>`,
    ct.email && `<li><span>邮箱</span><a href="mailto:${ct.email}">${ct.email}</a></li>`,
    ct.github && `<li><span>GitHub</span><a href="${ct.github}" target="_blank" rel="noopener">${ct.github.replace("https://", "")}</a></li>`,
    ct.city && `<li><span>地区</span><b>${ct.city}</b></li>`,
    ct.hours && `<li><span>时间</span><b>${ct.hours}</b></li>`,
  ];
  $("#contactList").innerHTML = rows.filter(Boolean).join("");

  const chips = $("#typeChips");
  chips.innerHTML = [...CH.map((c) => c.title), "其他"].map((t) => `<button type="button" class="chip">${t}</button>`).join("");
  chips.addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) b.classList.toggle("on"); });
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-type]");
    if (!a) return;
    chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c.textContent === a.dataset.type));
  });

  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); return true; }
    catch { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select();
      const ok = document.execCommand("copy"); t.remove(); return ok; }
  };
  document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]");
    if (b && (await copy(b.dataset.copy))) { b.textContent = "已复制"; setTimeout(() => (b.textContent = "复制"), 1500); }
  });

  const form = $("#brief");
  const briefText = () => {
    const f = new FormData(form);
    const types = [...chips.querySelectorAll(".on")].map((c) => c.textContent).join("、") || "未选";
    return `【项目需求单】\n类型：${types}\n预算：${f.get("budget")}\n工期：${f.get("period")}\n描述：${f.get("desc") || "（未填写）"}\n联系人：${f.get("who") || "（未填写）"}`;
  };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ok = await copy(briefText());
    $("#briefTip").textContent = ok ? `✓ 已复制！${ct.wechat ? "加微信 " + ct.wechat : "扫码加微信"}，粘贴发送即可` : "复制失败，请手动截图发送";
  });
  if (!ct.email) $("#mailBtn").remove();
  else $("#mailBtn").addEventListener("click", (e) => {
    e.preventDefault();
    location.href = `mailto:${ct.email}?subject=${encodeURIComponent("项目咨询")}&body=${encodeURIComponent(briefText())}`;
  });

  $("#footText").textContent = `© ${new Date().getFullYear()} ${S.brand} ${S.brandSub} · ${S.role}`;

  /* ---------- 底部时间轴 + 入场动画 ---------- */
  const tl = $("#timeline");
  tl.insertAdjacentHTML("beforeend", CH.map((c, i) =>
    `<a class="tl-tick" href="#ch-${c.id}" style="left:${(i / (total - 1)) * 100}%" title="${c.title}"><span>${pad(i + 1)}</span></a>`).join(""));
  const ticks = [...tl.querySelectorAll(".tl-tick")];
  const fill = $("#tlFill");
  const secs = [...document.querySelectorAll(".chapter")];

  const onScroll = () => {
    const mid = innerHeight * 0.5;
    let cur = -1;
    secs.forEach((s, i) => { if (s.getBoundingClientRect().top < mid) cur = i; });
    const last = secs[secs.length - 1].getBoundingClientRect();
    const inRange = secs[0].getBoundingClientRect().top < mid && last.bottom > mid;
    tl.classList.toggle("show", inRange);
    ticks.forEach((t, i) => t.classList.toggle("on", i === cur));
    fill.style.width = cur < 0 ? "0" : `${(cur / (total - 1)) * 100}%`;
    document.body.classList.toggle("scrolled", scrollY > 40);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
  document.querySelectorAll(".chapter, .block").forEach((el) => io.observe(el));
})();

/* 内容是 JS 渲染的，带 #锚点 打开时需要渲染后再跳转 */
if (location.hash) {
  const t = document.querySelector(location.hash);
  if (t) addEventListener("load", () => setTimeout(() => t.scrollIntoView({ behavior: "instant" }), 50));
}
