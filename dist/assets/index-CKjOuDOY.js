(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))v(r);new MutationObserver(r=>{for(const h of r)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&v(f)}).observe(document,{childList:!0,subtree:!0});function g(r){const h={};return r.integrity&&(h.integrity=r.integrity),r.referrerPolicy&&(h.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?h.credentials="include":r.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function v(r){if(r.ep)return;r.ep=!0;const h=g(r);fetch(r.href,h)}})();function V(){return`
    <header class="site-header" data-header>
      <a class="brand" href="#/work" aria-label="Go to work">
        <span class="brand-mark" aria-hidden="true">
          <span class="brand-initials">GD</span>
          <svg class="brand-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
        </span>
        <span class="brand-name">Gabriella Dina Widieaster</span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-nav">
        <span>Menu</span><span class="menu-glyph">+</span>
      </button>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <a href="#/work" data-route="work">Work</a>
        <a href="#/playground" data-route="playground">Playground</a>
        <a href="#/about" data-route="about">About</a>
      </nav>
    </header>`}const X=[{id:"adapenyu",number:"01",title:"AdaPenyu",summary:"A sea turtle identification app that helps conservators recognise individuals and track their lives over time.",tags:["Product Design","UI/UX","Research"],tone:"ocean"},{id:"bocil",number:"02",title:"Bocil",summary:"A macOS companion app for an interactive robot designed to make working alone feel less lonely.",tags:["Product Design","UI/UX","IoT"],tone:"sky"},{id:"typelab",number:"03",title:"TypeLab",summary:"A typography playground for building type systems and exploring them in real layouts.",tags:["Product Design","Typography","iPadOS"],tone:"neutral"},{id:"brewtime",number:"04",title:"BrewTime",summary:"A step-based coffee timer that guides brewers through every stage of their recipe.",tags:["UI/UX","Interaction Design","iOS"],tone:"sage"},{id:"babi-spots",number:"05",title:"Babi Spots",summary:"A personal app for discovering, saving, and reviewing pork spots around Bali.",tags:["UI/UX","iOS","Personal Project"],tone:"berry"},{id:"sustainopia",number:"06",title:"Sustainopia",summary:"An architectural project exploring how sustainable design can shape a more connected way of living.",tags:["Architecture","Sustainability","Urban Design"],tone:"moss"}];function N(){return`
    <div class="placeholder-ui" aria-hidden="true">
      <div class="placeholder-window">
        <div class="window-bar"><i></i><i></i><i></i></div>
        <div class="window-body">
          <div class="ui-copy"><b></b><b></b><b></b></div>
          <div class="ui-image"></div>
        </div>
      </div>
    </div>`}const H="/assets/typelab-compose-B5ylhK3u.png",R="/assets/bocil-home-screen-Drny_6mM.mp4";function K(n,c){const g=["bocil","typelab"].includes(n.id)?`#/work/${n.id}`:"#/work";return`
    <article class="project-card reveal" data-project="${n.id}" style="--delay:${c*70}ms">
      <a href="${g}" aria-label="View ${n.title} project">
        <div class="project-visual tone-${n.tone}">
          ${n.id==="bocil"?`<video class="project-cover-image" autoplay muted loop playsinline preload="metadata" aria-label="Bocil macOS app demonstration"><source src="${R}" type="video/mp4" /></video>`:n.id==="typelab"?`<img class="project-cover-image" src="${H}" alt="TypeLab Compose interface with typography controls and a layout canvas" />`:N()}
        </div>
        <div class="project-info">
          <div class="project-title-row">
            <h3>${n.title}</h3>
            <div class="project-chips">${n.tags.map(v=>`<span>${v}</span>`).join("")}</div>
          </div>
          <p>${n.summary}</p>
        </div>
      </a>
    </article>`}function _(){return`
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="work-intro reveal">
        <h1 id="work-title">I'm a multidisciplinary designer exploring the intersection of design, technology, and art.</h1>
        <p class="work-lead">With roots in architecture, my work spans product design,<br />interaction design, visual design, and illustration.</p>
      </div>
      <div class="project-grid">
        ${X.map(K).join("")}
      </div>
    </section>`}function U(){return`
    <footer class="bocil-footer">
      <p>Thanks for spending a moment here!</p>
      <p>© ${new Date().getFullYear()} Gabriella Dina Widieaster</p>
      <div class="bocil-footer-socials">
        <a href="https://www.linkedin.com/in/gabrielladinaw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 3.8a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.4 7.4h3.8V22H1.4V7.4ZM8 7.4h3.6v2h.1c.5-1 1.7-2.3 3.8-2.3 4 0 4.8 2.6 4.8 6V22h-3.8v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V22H8V7.4Z"/></svg></a>
        <a href="mailto:gabrielladina123@gmail.com" aria-label="Email Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
      </div>
    </footer>`}const Z="/assets/bocil-header-DluoAKXD.png",J="/assets/bocil-history-BdtmNIuU.mp4",Q="/assets/bocil-solution-robot-CKRyj0qD.mp4",ee="/assets/bocil-homepage-BpmftuHf.png",ie="/assets/bocil-notification-D4vzl0MM.png",te="/assets/bocil-calendar-C1sdgfqM.mp4",ae="/assets/bocil-focus-blurry-DOryg3wu.png",oe="/assets/bocil-timer-D1rEnOip.png";function se(){return`
    <article class="bocil-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media"><div class="bocil-image"><img src="${ee}" alt="Bocil macOS application home screen" /></div></div>
        <div class="bocil-overview">
          <h1>Bocil</h1>
          <p class="bocil-deck"><span>An AI-powered desktop companion that helps</span> <span>people stay focused, productive, and accompanied</span> <span>through an interactive physical robot.</span></p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>For a 14-day challenge at the Apple Developer Academy, we built Bocil, a physical AI companion supported by a macOS app, exploring AI interaction beyond the screen through IoT.</p>
              <div class="bocil-briefs">
                <div><h2>Problem</h2><p>How might we create a physical AI companion that helps people stay focused and productive while making everyday assistance feel more natural?</p></div>
                <div><h2>Outcome</h2><p>We designed and built a working IoT prototype with a supporting macOS app in 14 days.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Product designer &amp; developer</dd></div>
              <div><dt>Timeline</dt><dd>14 days</dd></div>
              <div><dt>Team</dt><dd>1 designer, 1 Project Manager, &amp; 3 developers</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <figure class="bocil-research-photo">
        <img src="${Z}" alt="Bocil robot prototypes beside the macOS companion app" />
      </figure>

      <section class="bocil-dark bocil-insights">
        <div class="bocil-shell bocil-insights-grid">
          <div>
            <h2>User research<br />&amp; insights</h2>
            <p>With limited time, we focused our research on how working alone affects focus, motivation, and the need for presence, exploring where a physical companion could add value beyond the screen.</p>
          </div>
          <ol class="bocil-insight-list">
            <li><span>01</span><div><h3>Working Alone</h3><p>Research linked loneliness with lower motivation and work performance, while one study found 54% of 64,988 students reported feeling lonely.</p></div></li>
            <li><span>02</span><div><h3>Presence &amp; Benchmarking</h3><p>Our research highlighted presence as a key gap, leading us to explore physical companionship alongside AI and productivity support.</p></div></li>
            <li><span>03</span><div><h3>Designing the Interaction</h3><p>Contextual interactions and visual feedback made Bocil more engaging, while clear roles kept the desktop simple and the robot focused on physical interaction.</p></div></li>
          </ol>
        </div>
      </section>

      <section class="bocil-solution">
        <div class="bocil-section-intro bocil-shell">
          <h2>The solution:<br /><span>AI assistance<br />beyond the screen</span></h2>
          <div><p>Our research led us to explore AI beyond the screen, combining focus support and a sense of presence in one physical companion.</p><p>With the IoT experience at the centre, we kept the macOS app simple and supportive, allowing Bocil to remain the main interaction point while keeping the overall experience personal and cohesive.</p></div>
        </div>
        <div class="bocil-solution-video">
          <video autoplay muted loop playsinline preload="auto" aria-label="Bocil physical robot companions demonstration"><source src="${Q}" type="video/mp4" /></video>
        </div>
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
            <h2>Feature #1<br /><span>Productivity</span></h2>
            <p>Bocil turns conversations into actions, letting users create or update calendar events simply by talking. Upcoming events are synced to the desktop app with reminders when it’s time.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row" data-grain-media>
          <figure class="bocil-notification-panel"><div class="bocil-image"><img src="${ie}" alt="Bocil calendar reminders in Notification Center" /></div></figure>
          <figure class="bocil-calendar-panel"><div class="bocil-image"><video autoplay muted loop playsinline preload="auto" aria-label="Bocil calendar and productivity demonstration"><source src="${te}" type="video/mp4" /></video></div></figure>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Focus</span></h2>
          <p>Bocam (Bocil Camera) turns Bocil into a focus companion, letting users set their own focus timer while Bocil keeps them on track. If users reach for their phone, Bocil notices and responds to bring their attention back.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row bocil-focus-media" data-grain-media>
          <figure><div class="bocil-image"><img src="${oe}" alt="Bocil focus timer interface" /></div></figure>
          <figure><div class="bocil-image"><img src="${ae}" alt="Bocam focus session interface with visual focus feedback" /></div></figure>
        </div>
      </section>
      <section class="bocil-dark bocil-feature bocil-feature--personal">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #3<br /><span>Personal AI</span></h2>
          <p>Bocil works as a conversational AI companion, with past conversations saved on the desktop whenever users want to revisit them. Its language and communication style can also be personalised through settings.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image">
            <video autoplay muted loop playsinline preload="auto" aria-label="Bocil conversation history and personal AI demonstration">
              <source src="${J}" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section class="bocil-feature bocil-feature--final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final Product<br /><span>Bringing the<br />companion to life</span></h2>
          <p>In 14 days, we brought Bocil to life as a working prototype, combining a physical companion, conversational interactions, and a supporting macOS app.</p>
        </div>
        <div class="bocil-final-showcase">
          <div class="bocil-image">
            <video autoplay muted loop playsinline preload="auto" aria-label="Bocil macOS home screen demonstration"><source src="${R}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </article>
    ${U()}`}const ne="/assets/typelab-prototype-coding-B8oBNLBW.png";function M(n,c,g=!1){return`<div class="bocil-feature-media bocil-media-row typelab-media-row${g?" bocil-focus-media":""}" data-ratio="${n}">
    <figure role="img" aria-label="${c}, first image placeholder"></figure>
    <figure role="img" aria-label="${c}, second image placeholder"></figure>
  </div>`}function re(){return`
    <article class="bocil-case typelab-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media typelab-hero-media"><div class="bocil-image"><img src="${H}" alt="TypeLab Compose interface with typography controls and a layout canvas" /></div></div>
        <div class="bocil-overview">
          <h1>TypeLab</h1>
          <p class="bocil-deck">A typography playground for building type systems and exploring them in real layouts.</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>TypeLab started as a personal exploration of typography across iOS and graphic design. I used the project to deepen my understanding of type systems while challenging myself to translate those decisions into a working SwiftUI experience.</p>
              <div class="bocil-briefs">
                <div><h2>Goal</h2><p>How might I turn typography principles into an interactive system that can be explored, adjusted, and applied in real time?</p></div>
                <div><h2>Outcome</h2><p>I designed and coded an iPad app for building type systems and experimenting with them through composition.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Product designer &amp; developer</dd></div>
              <div><dt>Timeline</dt><dd>10 days</dd></div>
              <div><dt>Team</dt><dd>Solo Project</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="bocil-dark bocil-insights">
        <div class="bocil-shell bocil-insights-grid">
          <div>
            <h2>Typography<br /><span class="typelab-exploration">exploration</span></h2>
            <p>I explored how hierarchy, scale, spacing, and type roles work together to create a consistent typography system and how these principles translate into digital interfaces.</p>
          </div>
          <ol class="bocil-insight-list">
            <li><span>01</span><div><h3>Hierarchy and Roles</h3><p>It started with understanding how size, weight, spacing, and contrast help organise information and guide the reader’s attention.</p></div></li>
            <li><span>02</span><div><h3>Type Systems and Scale</h3><p>From there, I looked at how type scales and predefined roles bring consistency to different layouts without needing too many styles.</p></div></li>
            <li><span>03</span><div><h3>Typography on iOS</h3><p>Finally, I explored Apple’s text styles and Dynamic Type to see how these principles translate into real interfaces while supporting accessibility.</p></div></li>
          </ol>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Defining<br /><span>the system</span></h2>
          <p>I translated these principles into a simple system of type roles, scales, and controls, giving users enough structure to stay consistent while still leaving room to experiment.</p>
        </div>
        ${M("50-50","Defining the system",!0)}
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #1<br /><span>System Setup</span></h2>
          <p>Choose up to two typefaces, assign their roles, and shape the hierarchy through scale, weight, spacing, and other type controls. Changes stay connected across the system, making it easier to experiment without losing consistency.</p>
        </div>
        ${M("30-70","System Setup")}
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Compose</span></h2>
          <p>Bring the type system into a flexible canvas where text roles can be arranged, resized, and composed freely. Grids and alignment guides add structure while leaving room to experiment.</p>
        </div>
        ${M("50-50","Compose",!0)}
      </section>

      <section class="bocil-dark bocil-feature bocil-feature--personal">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>Coding TypeLab was a big part of the exploration for me. I built the app in SwiftUI, which pushed me to translate the typography rules I had been learning into actual behaviours and controls that worked in a real product.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${ne}" alt="TypeLab SwiftUI prototype in Xcode with an iPad preview of the typography system" /></div>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design and<br /><span>coded prototype</span></h2>
          <p>The final prototype brings System Setup and Compose together, letting users build a type system and immediately experiment with it on a flexible canvas.</p>
        </div>
        <div class="bocil-final-showcase typelab-final-showcase">
          <div class="bocil-image typelab-final-placeholder" role="img" aria-label="TypeLab final design and coded prototype image placeholder"></div>
        </div>
      </section>
    </article>
    ${U()}`}function le(){return`
    <section class="playground shell" id="playground" aria-labelledby="playground-title">
      <div class="section-heading reveal">
        <p class="section-index">02 / Playground</p>
        <h2 id="playground-title">Small ideas with<br />room to <em>play.</em></h2>
      </div>
      <div class="experiment-grid">
        ${[["A–01","Type in motion","Kinetic typography"],["A–02","Soft systems","Generative forms"],["A–03","Daily fragments","Visual archive"]].map(([c,g,v],r)=>`
          <article class="experiment experiment-${r+1} reveal" style="--delay:${r*70}ms">
            <span>${c}</span>
            <div class="experiment-art" aria-label="Artwork placeholder"><i></i><i></i><i></i></div>
            <div><h3>${g}</h3><p>${v}</p></div>
          </article>`).join("")}
      </div>
    </section>`}const ce=`
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;function de(){return`
    <section class="about shell" id="about" aria-labelledby="about-title">
      <p class="section-index reveal">02 / A little about me</p>
      <div class="about-grid">
        <h2 class="reveal" id="about-title">Curious by nature.<br /><em>Intentional</em> by design.</h2>
        <div class="about-copy reveal">
          <p>I’m a multidisciplinary designer who likes untangling difficult problems and turning them into simple, human experiences.</p>
          <p>My work sits between strategy, visual systems, interaction, and code. I care about the tiny details—but only when they support the bigger idea.</p>
          <a class="text-link" href="mailto:hello@example.com">More about me ${ce}</a>
        </div>
        <div class="about-photo tone-sand reveal" role="img" aria-label="Portrait image placeholder">
          <span>Portrait<br />placeholder</span>
        </div>
      </div>
    </section>`}let P;function pe(n="home"){P?.abort(),P=new AbortController;const c=document.querySelector("[data-header]"),g=document.querySelector(".menu-button"),v=document.querySelector(".main-nav");g?.addEventListener("click",()=>{const e=c.classList.toggle("menu-open");g.setAttribute("aria-expanded",String(e)),g.querySelector(".menu-glyph").textContent=e?"−":"+"});const r=[...v?.querySelectorAll("a")??[]],h=e=>{r.forEach(t=>{const d=t===e;t.classList.toggle("is-active",d),d?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})},f=["bocil","typelab"].includes(n)?"work":n;h(r.find(e=>e.dataset.route===f)),r.forEach(e=>e.addEventListener("click",()=>{h(e),c.classList.remove("menu-open"),g.setAttribute("aria-expanded","false"),g.querySelector(".menu-glyph").textContent="+"}));const E=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),E.unobserve(t.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>E.observe(e));const D=document.querySelector("[data-year]");D&&(D.textContent=new Date().getFullYear());const m=document.querySelector("[data-loop-gallery]"),y=[...document.querySelectorAll("[data-loop-panel]")];let w=0,A=0,I;const $=()=>{w+=(A-w)*.12,y.forEach((e,t)=>{const d=((t-w)%y.length+y.length)%y.length;e.style.setProperty("--slot",d.toFixed(3)),e.style.zIndex=String(Math.round((y.length-d)*10))}),Math.abs(A-w)>.001&&(I=requestAnimationFrame($))},k=e=>{A+=e,cancelAnimationFrame(I),I=requestAnimationFrame($)};if(m){const e=m.querySelector("[data-gallery-title]"),t=m.querySelector("[data-gallery-chips]"),d=i=>{e&&(e.textContent=i.dataset.projectTitle),t&&(t.innerHTML=i.dataset.projectTags.split("|").map(l=>`<span>${l}</span>`).join(""),t.classList.add("is-visible"))},s=()=>{e&&(e.textContent=e.dataset.defaultTitle),t&&(t.classList.remove("is-visible"),t.innerHTML="")};let p=null;const o=i=>{p!==i&&(p?.classList.remove("is-hovered"),p=i,p?.classList.add("is-hovered"),p?d(p):s())};m.addEventListener("pointermove",i=>{const l=y.map(u=>({panel:u,rect:u.getBoundingClientRect()})).filter(({rect:u})=>i.clientX>=u.left&&i.clientX<=u.right&&i.clientY>=u.top&&i.clientY<=u.bottom).sort((u,G)=>i.clientY-u.rect.top-(i.clientY-G.rect.top));o(l[0]?.panel??null)}),m.addEventListener("pointerleave",()=>o(null)),y.forEach(i=>{i.addEventListener("focus",()=>o(i)),i.addEventListener("blur",()=>o(null))}),m.addEventListener("wheel",i=>{i.preventDefault(),o(null),k(i.deltaY*.0032)},{passive:!1});let a=0;m.addEventListener("touchstart",i=>{o(null),a=i.touches[0].clientY},{passive:!0}),m.addEventListener("touchmove",i=>{const l=i.touches[0].clientY;k((a-l)*.012),a=l},{passive:!0}),m.addEventListener("keydown",i=>{["ArrowDown","ArrowRight"].includes(i.key)&&k(.8),["ArrowUp","ArrowLeft"].includes(i.key)&&k(-.8)}),$()}const x=document.querySelector("[data-keychain-scene]"),b=document.querySelector("[data-keychain-object]");if(x&&b){const e=[...b.querySelectorAll("[data-keychain-card]")];let t=null;const d=s=>{if(t===s)return;t=s;const p=s?Number(s.dataset.cardIndex):null;e.forEach((o,a)=>{if(o.classList.toggle("is-active",o===s),!s){["--live-angle","--live-shift","--live-y","--live-z"].forEach(l=>o.style.removeProperty(l)),o.style.zIndex="";return}const i=a-p;o.style.setProperty("--live-angle",`${i*11}deg`),o.style.setProperty("--live-shift",`${i*9}px`),o.style.setProperty("--live-y",o===s?"-10px":`${Math.abs(i)*3}px`),o.style.setProperty("--live-z",o===s?"85px":`${-Math.abs(i)*12}px`),o.style.zIndex=o===s?"45":String(20-Math.abs(i))})};x.addEventListener("pointermove",s=>{const p=x.getBoundingClientRect(),o=(s.clientX-p.left)/p.width-.5,a=(s.clientY-p.top)/p.height-.5;b.style.setProperty("--key-rx",`${a*-7}deg`),b.style.setProperty("--key-ry",`${o*9}deg`);const i=document.elementFromPoint(s.clientX,s.clientY)?.closest("[data-keychain-card]");i&&b.contains(i)&&d(i)}),x.addEventListener("pointerleave",()=>{b.style.setProperty("--key-rx","0deg"),b.style.setProperty("--key-ry","0deg"),d(null)}),e.forEach(s=>{s.addEventListener("focus",()=>d(s)),s.addEventListener("blur",()=>d(null))})}const L=document.querySelector("[data-paper-deck]"),B=[...document.querySelectorAll("[data-paper-sheet]")];let T;const q=()=>{const e=window.innerHeight,t=L?.getBoundingClientRect(),d=Math.max(1,(L?.offsetHeight??e)-e),s=Math.max(0,Math.min(1,-(t?.top??0)/d)),p=Math.max(e*.95,760);B.forEach((o,a)=>{const i=a===0?1:Math.max(0,Math.min(1,s*(B.length-1)-(a-1))),l=1-Math.pow(1-i,3),u=a%2?1:-1;o.style.setProperty("--paper-y",`${(1-l)*p}px`),o.style.setProperty("--paper-turn",`${(1-l)*u*1.1}deg`),o.style.zIndex=String(a+2)}),T=void 0},O=()=>{T||(T=requestAnimationFrame(q))};L&&B.length&&(q(),window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0})),window.__pencilTrailAbort?.abort();const S=document.querySelector("[data-pencil-trail]"),Y=window.matchMedia("(hover: hover) and (pointer: fine)").matches,z=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(S&&Y&&!z){const e=S.getContext("2d"),t=[],d=new AbortController;window.__pencilTrailAbort=d;let s;const p=()=>{const a=Math.min(window.devicePixelRatio||1,2);S.width=Math.round(window.innerWidth*a),S.height=Math.round(window.innerHeight*a),e.setTransform(a,0,0,a,0,0)},o=()=>{e.clearRect(0,0,window.innerWidth,window.innerHeight),e.lineCap="round",e.lineJoin="round";for(let a=1;a<t.length;a+=1){const i=t[a-1],l=t[a],u=Math.min(i.life,l.life);e.strokeStyle=`rgba(255,255,255,${u*.7})`,e.lineWidth=.72+u*.38,e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(l.x,l.y),e.stroke(),e.strokeStyle=`rgba(255,255,255,${u*.22})`,e.lineWidth=.45,e.beginPath(),e.moveTo(i.x+i.offset,i.y-i.offset),e.lineTo(l.x+l.offset,l.y-l.offset),e.stroke()}for(t.forEach(a=>{a.life-=.035});t[0]?.life<=0;)t.shift();t.length?s=requestAnimationFrame(o):s=void 0};document.addEventListener("pointermove",a=>{const i=t.at(-1);i&&Math.hypot(a.clientX-i.x,a.clientY-i.y)<2.5||(t.push({x:a.clientX,y:a.clientY,life:1,offset:(Math.random()-.5)*1.5}),t.length>42&&t.shift(),s||(s=requestAnimationFrame(o)))},{passive:!0,signal:d.signal}),window.addEventListener("resize",p,{passive:!0,signal:d.signal}),p()}const F=c.querySelector(".brand"),j=document.querySelector(".bocil-case .bocil-hero"),C=()=>{c.classList.toggle("is-scrolled",window.scrollY>30);const e=!!(j&&j.getBoundingClientRect().bottom<=c.getBoundingClientRect().bottom);F.classList.toggle("is-project-back",e),F.setAttribute("aria-label",e?"Back to Work":"Go to work")};window.addEventListener("scroll",C,{passive:!0,signal:P.signal}),window.addEventListener("resize",C,{passive:!0,signal:P.signal}),C()}const ue={work:()=>_(),bocil:()=>se(),typelab:()=>re(),playground:()=>le(),about:()=>de()};function he(){return{"#/work/bocil":"bocil","#/work/typelab":"typelab","#/playground":"playground","#/about":"about"}[location.hash]||"work"}function W(){const n=he(),c=n==="work"||n==="about";document.querySelector("#app").innerHTML=`
    ${V()}
    <main class="page page-${n}">${ue[n]()}</main>
    ${c?'<canvas class="pencil-trail" aria-hidden="true" data-pencil-trail></canvas>':""}
    <div class="texture" aria-hidden="true"></div>`,document.body.dataset.route=n,window.scrollTo(0,0),pe(n)}window.addEventListener("hashchange",W);W();
