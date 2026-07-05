/* Delade hjälpfunktioner + sidspecifik rendering.
   Vilken sida som renderas avgörs av vilka element som finns i DOM:en. */

const CATEGORIES = ["Riksdag", "Val", "Debatt", "EU"];

function formatDate(isoDate) {
  const months = [
    "januari", "februari", "mars", "april", "maj", "juni",
    "juli", "augusti", "september", "oktober", "november", "december"
  ];
  const d = new Date(isoDate + "T00:00:00");
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function sortByDateDesc(articles) {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

function createCard(article) {
  const card = document.createElement("article");
  card.className = "news-card";
  card.innerHTML = `
    <div class="card-accent"></div>
    <div class="card-body">
      <div class="card-meta">
        <span class="badge">${article.category}</span>
        <time datetime="${article.date}">${formatDate(article.date)}</time>
      </div>
      <h3><a href="artikel.html?id=${article.id}">${article.title}</a></h3>
      <p class="preview">${article.preview}</p>
      <a class="card-link" href="artikel.html?id=${article.id}">Läs mer &rarr;</a>
    </div>`;
  return card;
}

function renderGrid(container, articles) {
  container.innerHTML = "";
  if (articles.length === 0) {
    container.innerHTML = '<p class="empty-state">Inga nyheter i den här kategorin ännu.</p>';
    return;
  }
  articles.forEach(a => container.appendChild(createCard(a)));
}

/* ---------- Mobilmeny ---------- */

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
}

/* ---------- Startsida: senaste 6 ---------- */

function initHome() {
  const grid = document.getElementById("latest-grid");
  if (!grid) return;
  renderGrid(grid, sortByDateDesc(NEWS_DATA).slice(0, 6));
}

/* ---------- Nyhetsflöde med kategorifilter ---------- */

function initFeed() {
  const grid = document.getElementById("feed-grid");
  const filterBar = document.getElementById("filter-bar");
  if (!grid || !filterBar) return;

  const params = new URLSearchParams(window.location.search);
  let current = params.get("kategori");
  if (!CATEGORIES.includes(current)) current = "Alla";

  function applyFilter(category) {
    current = category;
    const all = sortByDateDesc(NEWS_DATA);
    renderGrid(grid, category === "Alla" ? all : all.filter(a => a.category === category));
    filterBar.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === category);
    });
    const url = new URL(window.location);
    if (category === "Alla") url.searchParams.delete("kategori");
    else url.searchParams.set("kategori", category);
    history.replaceState(null, "", url);
  }

  ["Alla", ...CATEGORIES].forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.category = cat;
    btn.textContent = cat;
    btn.addEventListener("click", () => applyFilter(cat));
    filterBar.appendChild(btn);
  });

  applyFilter(current);
}

/* ---------- Artikelsida ---------- */

function initArticle() {
  const wrap = document.getElementById("article-wrap");
  if (!wrap) return;

  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const article = NEWS_DATA.find(a => a.id === id);

  if (!article) {
    wrap.innerHTML = `
      <p class="breadcrumb"><a href="index.html">Hem</a> / Artikel</p>
      <h1>Artikeln hittades inte</h1>
      <p class="empty-state">Länken kan vara felaktig eller så har artikeln tagits bort.
      <br><a href="nyheter.html">Till nyhetsflödet &rarr;</a></p>`;
    return;
  }

  document.title = `${article.title} – Enkelt och Direkt`;

  wrap.innerHTML = `
    <p class="breadcrumb">
      <a href="index.html">Hem</a> /
      <a href="nyheter.html?kategori=${article.category}">${article.category}</a>
    </p>
    <h1>${article.title}</h1>
    <div class="article-meta">
      <span class="badge">${article.category}</span>
      <time datetime="${article.date}">Publicerad ${formatDate(article.date)}</time>
    </div>
    <div class="article-body">
      ${article.body.map(p => `<p>${p}</p>`).join("")}
    </div>
    <div class="article-source"><strong>Källa:</strong> ${article.source}</div>`;

  // Relaterade nyheter: samma kategori först, därefter senaste övriga
  const relatedGrid = document.getElementById("related-grid");
  if (relatedGrid) {
    const others = sortByDateDesc(NEWS_DATA).filter(a => a.id !== article.id);
    const sameCategory = others.filter(a => a.category === article.category);
    const rest = others.filter(a => a.category !== article.category);
    renderGrid(relatedGrid, [...sameCategory, ...rest].slice(0, 3));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHome();
  initFeed();
  initArticle();
});
