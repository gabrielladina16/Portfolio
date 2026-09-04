(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();const d=`
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,h=`
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 3v13m-5-5 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;function v(){return`
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="Back to top">
        <span class="brand-mark">YN</span>
        <span class="brand-name">Your Name</span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-nav">
        <span>Menu</span><span class="menu-glyph">+</span>
      </button>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="mailto:hello@example.com">Let's talk ${d}</a>
      </nav>
    </header>`}function b(){return`
    <section class="hero shell" id="top" aria-labelledby="hero-title">
      <div class="hero-main reveal">
        <p class="eyebrow"><span class="status-dot"></span> Available for select projects</p>
        <h1 id="hero-title">I turn messy ideas<br />into <em>clear</em> experiences.</h1>
      </div>
      <div class="hero-aside reveal">
        <p>Independent designer and developer crafting thoughtful digital products, identities, and stories.</p>
        <a class="text-link" href="#work">Explore selected work ${h}</a>
      </div>
    </section>`}const f=[{id:"atlas",number:"01",title:"Atlas Health",summary:"Making everyday care feel easier to understand and act on.",role:"Product design",year:"2025",tone:"coral",label:"Case study"},{id:"northstar",number:"02",title:"Northstar",summary:"A calmer workspace for teams navigating complex decisions.",role:"Strategy · UX/UI",year:"2024",tone:"blue",label:"Selected work"},{id:"morrow",number:"03",title:"Morrow Studio",summary:"A new digital home for a studio built around bold ideas.",role:"Art direction · Web",year:"2024",tone:"lime",label:"Case study"},{id:"commons",number:"04",title:"The Commons",summary:"Helping creative communities find their people and place.",role:"Research · Product",year:"2023",tone:"violet",label:"Archive"}];function g(a,i){return`
    <article class="project-card reveal" data-project="${a.id}" style="--delay:${i*70}ms">
      <a href="#contact" aria-label="View ${a.title} project">
        <div class="project-visual tone-${a.tone}">
          <div class="placeholder-ui" aria-hidden="true">
            <span class="placeholder-tag">Image placeholder</span>
            <div class="placeholder-window">
              <div class="window-bar"><i></i><i></i><i></i></div>
              <div class="window-body">
                <div class="ui-copy"><b></b><b></b><b></b></div>
                <div class="ui-image"></div>
              </div>
            </div>
          </div>
          <span class="project-label">${a.label}</span>
          <span class="card-arrow">${d}</span>
        </div>
        <div class="project-info">
          <div>
            <span class="project-number">${a.number}</span>
            <h3>${a.title}</h3>
          </div>
          <p>${a.summary}</p>
          <div class="project-meta"><span>${a.role}</span><span>${a.year}</span></div>
        </div>
      </a>
    </article>`}function y(){return`
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="section-heading reveal">
        <p class="section-index">01 / Selected work</p>
        <h2 id="work-title">A few things I’ve<br />helped bring to life.</h2>
      </div>
      <div class="project-grid">
        ${f.map(g).join("")}
      </div>
    </section>`}function w(){return`
    <section class="about shell" id="about" aria-labelledby="about-title">
      <p class="section-index reveal">02 / A little about me</p>
      <div class="about-grid">
        <h2 class="reveal" id="about-title">Curious by nature.<br /><em>Intentional</em> by design.</h2>
        <div class="about-copy reveal">
          <p>I’m a multidisciplinary designer who likes untangling difficult problems and turning them into simple, human experiences.</p>
          <p>My work sits between strategy, visual systems, interaction, and code. I care about the tiny details—but only when they support the bigger idea.</p>
          <a class="text-link" href="mailto:hello@example.com">More about me ${d}</a>
        </div>
        <div class="about-photo tone-sand reveal" role="img" aria-label="Portrait image placeholder">
          <span>Portrait<br />placeholder</span>
        </div>
      </div>
    </section>`}function k(){return`
    <footer class="footer" id="contact">
      <div class="shell footer-inner reveal">
        <p class="section-index">03 / Say hello</p>
        <h2>Have something in mind?<br /><em>Let’s make it real.</em></h2>
        <a class="email-link" href="mailto:hello@example.com">hello@example.com ${d}</a>
        <div class="footer-bottom">
          <p>© <span data-year></span> Your Name</p>
          <div><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#top">Back to top ↑</a></div>
        </div>
      </div>
    </footer>`}function x(){const a=document.querySelector("[data-header]"),i=document.querySelector(".menu-button"),u=document.querySelector(".main-nav");i?.addEventListener("click",()=>{const t=a.classList.toggle("menu-open");i.setAttribute("aria-expanded",String(t)),i.querySelector(".menu-glyph").textContent=t?"−":"+"});const s=[...u?.querySelectorAll("a")??[]],e=t=>{s.forEach(o=>{const l=o===t;o.classList.toggle("is-active",l),l?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current")})};e(s[0]),s.forEach(t=>t.addEventListener("click",()=>{e(t),a.classList.remove("menu-open"),i.setAttribute("aria-expanded","false"),i.querySelector(".menu-glyph").textContent="+"}));const r=s.filter(t=>t.hash&&document.querySelector(t.hash)),n=new IntersectionObserver(t=>{const o=t.filter(c=>c.isIntersecting).sort((c,m)=>m.intersectionRatio-c.intersectionRatio)[0];if(!o)return;const l=r.find(c=>c.hash===`#${o.target.id}`);l&&e(l)},{rootMargin:"-25% 0px -55%",threshold:[0,.15,.4]});r.forEach(t=>n.observe(document.querySelector(t.hash)));const p=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),p.unobserve(o.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(t=>p.observe(t)),document.querySelector("[data-year]").textContent=new Date().getFullYear(),window.addEventListener("scroll",()=>{a.classList.toggle("is-scrolled",window.scrollY>30)},{passive:!0})}document.querySelector("#app").innerHTML=`
  ${v()}
  <main>${b()}${y()}${w()}</main>
  ${k()}
  <div class="texture" aria-hidden="true"></div>
`;x();
