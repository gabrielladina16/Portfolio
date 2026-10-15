(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const y of l)if(y.type==="childList")for(const w of y.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function m(l){const y={};return l.integrity&&(y.integrity=l.integrity),l.referrerPolicy&&(y.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?y.credentials="include":l.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function u(l){if(l.ep)return;l.ep=!0;const y=m(l);fetch(l.href,y)}})();function K(){return`
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
    </header>`}const f=[{id:"adapenyu",number:"01",title:"AdaPenyu",summary:"A sea turtle identification app that helps conservators recognise individuals and track their lives over time.",tags:["Product Design","UI/UX","Research"],tone:"ocean"},{id:"bocil",number:"02",title:"Bocil",summary:"A macOS companion app for an interactive robot designed to make working alone feel less lonely.",tags:["Product Design","UI/UX","IoT"],tone:"sky"},{id:"typelab",number:"03",title:"TypeLab",summary:"A typography playground for building type systems and exploring them in real layouts.",tags:["Product Design","Typography","UI/UX"],tone:"neutral"},{id:"brewtime",number:"04",title:"BrewTime",summary:"A step-based coffee timer that guides brewers through every stage of their recipe.",tags:["UI/UX","Interaction Design","iOS"],tone:"sage"},{id:"babi-spots",number:"05",title:"Babi Spots",summary:"A personal app for discovering, saving, and reviewing pork spots around Bali.",tags:["UI/UX","iOS","Personal Project"],tone:"berry"},{id:"sustainopia",number:"06",title:"Sustainopia",summary:"An architectural project exploring how sustainable design can shape a more connected way of living.",tags:["Architecture","Urban Design","3D Modelling"],tone:"moss"},{id:"higher-hopes",number:"07",title:"Higher Hopes",summary:"A 2D climbing game where players guide a monkey up a challenging cliff, navigating obstacles along the way.",tags:["Illustration","Game Art","UI/UX"],tone:"brown"}];function Z(){return`
    <div class="placeholder-ui" aria-hidden="true">
      <div class="placeholder-window">
        <div class="window-bar"><i></i><i></i><i></i></div>
        <div class="window-body">
          <div class="ui-copy"><b></b><b></b><b></b></div>
          <div class="ui-image"></div>
        </div>
      </div>
    </div>`}const U="/assets/typelab-compose-B5ylhK3u.png",Y="/assets/bocil-home-screen-Drny_6mM.mp4",J="/assets/sustainopia-cover-BNoD2a8C.png";function W(n){return n.id==="sustainopia"?`<img class="project-cover-photo" src="${J}" alt="Sustainopia architectural rendering of landscaped circular public spaces" />`:n.id==="bocil"?`<video class="project-cover-image" autoplay muted loop playsinline preload="metadata" aria-label="Bocil macOS app demonstration"><source src="${Y}" type="video/mp4" /></video>`:n.id==="typelab"?`<img class="project-cover-image" src="${U}" alt="TypeLab Compose interface with typography controls and a layout canvas" />`:Z()}function Q(n,p){const m=["bocil","typelab"].includes(n.id)?`#/work/${n.id}`:"#/work";return`
    <article class="project-card reveal" data-project="${n.id}" style="--delay:${p*70}ms">
      <a href="${m}" aria-label="View ${n.title} project">
        <div class="project-visual tone-${n.tone}">
          ${W(n)}
        </div>
        <div class="project-info">
          <div class="project-title-row">
            <h3>${n.title}</h3>
            <div class="project-chips">${n.tags.map(u=>`<span>${u}</span>`).join("")}</div>
          </div>
          <p>${n.summary}</p>
        </div>
      </a>
    </article>`}function ee(){return`
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="work-intro reveal">
        <h1 id="work-title">I'm a multidisciplinary designer exploring the intersection of design, technology, and art.</h1>
        <p class="work-lead">With roots in architecture, my work spans product design,<br />interaction design, visual design, and illustration.</p>
      </div>
      <div class="project-grid">
        ${f.map(Q).join("")}
      </div>
    </section>`}function V(n){const p=f.findIndex(u=>u.id===n);return`<section class="project-explorer bocil-shell" aria-label="Explore more projects">
    <h2>Keep exploring.<br /><span>See what else I’ve been working on.</span></h2>
    <div class="project-explorer-grid">
      ${[f[(p-1+f.length)%f.length],f[(p+1)%f.length]].map((u,l)=>`<a class="project-card" data-project="${u.id}" href="${["bocil","typelab"].includes(u.id)?`#/work/${u.id}`:"#/work"}" aria-label="Explore ${u.title}">
        <div class="project-visual tone-${u.tone}">${W(u)}</div>
        <p>${l===0?"previous,":"next,"}<br /><strong>${u.title}</strong></p>
      </a>`).join("")}
    </div>
  </section>`}function G(){return`
    <footer class="bocil-footer">
      <p>Thanks for spending a moment here!</p>
      <p>© ${new Date().getFullYear()} Gabriella Dina Widieaster</p>
      <div class="bocil-footer-socials">
        <a href="https://www.linkedin.com/in/gabrielladinaw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 3.8a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.4 7.4h3.8V22H1.4V7.4ZM8 7.4h3.6v2h.1c.5-1 1.7-2.3 3.8-2.3 4 0 4.8 2.6 4.8 6V22h-3.8v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V22H8V7.4Z"/></svg></a>
        <a href="mailto:gabrielladina123@gmail.com" aria-label="Email Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
      </div>
    </footer>`}const te="/assets/bocil-header-DluoAKXD.png",ie="/assets/bocil-history-BdtmNIuU.mp4",ae="/assets/bocil-solution-robot-CKRyj0qD.mp4",oe="/assets/bocil-homepage-BpmftuHf.png",se="/assets/bocil-notification-D4vzl0MM.png",ne="/assets/bocil-calendar-C1sdgfqM.mp4",le="/assets/bocil-focus-blurry-DOryg3wu.png",re="/assets/bocil-timer-D1rEnOip.png";function ce(){return`
    <article class="bocil-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media"><div class="bocil-image"><img src="${oe}" alt="Bocil macOS application home screen" /></div></div>
        <div class="bocil-overview">
          <h1>Bocil</h1>
          <p class="bocil-deck"><span>An AI-powered desktop companion that helps</span> <span>people stay focused, productive, and accompanied</span> <span>through an interactive physical robot.</span></p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>For a 14-day challenge at the Apple Developer Academy, we built Bocil, a physical AI companion supported by a macOS app, exploring AI interaction beyond the screen through IoT.</p>
              <div class="bocil-briefs">
                <div><h2>Problem</h2><p>How might we create a physical AI companion that helps people stay focused and productive while making everyday assistance feel more natural?</p></div>
                <div><h2>Outcome</h2><p>We designed and built a working IoT prototype with a supporting macOS app.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Role</dt><dd>Product designer &amp; developer</dd></div>
              <div><dt>Timeline</dt><dd>14 days</dd></div>
              <div><dt>Team</dt><dd>1 designer, 1 Project Manager,<br />&amp; 3 developers</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <figure class="bocil-research-photo">
        <img src="${te}" alt="Bocil robot prototypes beside the macOS companion app" />
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
          <video autoplay muted loop playsinline preload="auto" aria-label="Bocil physical robot companions demonstration"><source src="${ae}" type="video/mp4" /></video>
        </div>
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
            <h2>Feature #1<br /><span>Productivity</span></h2>
            <p>Bocil turns conversations into actions, letting users create or update calendar events simply by talking. Upcoming events are synced to the desktop app with reminders when it’s time.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row" data-grain-media>
          <figure class="bocil-notification-panel"><div class="bocil-image"><img src="${se}" alt="Bocil calendar reminders in Notification Center" /></div></figure>
          <figure class="bocil-calendar-panel"><div class="bocil-image"><video autoplay muted loop playsinline preload="auto" aria-label="Bocil calendar and productivity demonstration"><source src="${ne}" type="video/mp4" /></video></div></figure>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Focus</span></h2>
          <p>Bocam (Bocil Camera) turns Bocil into a focus companion, letting users set their own focus timer while Bocil keeps them on track. If users reach for their phone, Bocil notices and responds to bring their attention back.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row bocil-focus-media" data-grain-media>
          <figure><div class="bocil-image"><img src="${re}" alt="Bocil focus timer interface" /></div></figure>
          <figure><div class="bocil-image"><img src="${le}" alt="Bocam focus session interface with visual focus feedback" /></div></figure>
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
              <source src="${ie}" type="video/mp4" />
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
            <video autoplay muted loop playsinline preload="auto" aria-label="Bocil macOS home screen demonstration"><source src="${Y}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </article>
    ${V("bocil")}
    ${G()}`}const de="/assets/typelab-prototype-coding-B8oBNLBW.png",pe="/assets/typelab-final-mockup-composited-DTaKMWwd.png",ue="/assets/typelab-system-preview-ssFIE1uV.png",he="/assets/typelab-system-compare-BIkm5fJj.png",ye="/assets/typelab-compose-guidelines-jE7D_rcj.png",me="/assets/typelab-compose-style-B1TuQ9_k.png",ge="/assets/typelab-canvas-clean-CmtsmiEn.mp4",be="/assets/typelab-system-clean-BgYkVVjA.mp4";function ve(){return`
    <article class="bocil-case typelab-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media typelab-hero-media"><div class="bocil-image"><img src="${U}" alt="TypeLab Compose interface with typography controls and a layout canvas" /></div></div>
        <div class="bocil-overview">
          <h1>TypeLab</h1>
          <p class="bocil-deck">A typography playground for building type systems<br />and exploring them in real layouts.</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>TypeLab was developed as part of an individual challenge at the Apple Developer Academy, where we were encouraged to explore our interests in depth. I chose typography to deepen my understanding of type systems and explore how these principles could be translated into a functional SwiftUI app.</p>
              <div class="bocil-briefs">
                <div><h2>Goal</h2><p>How might I turn typography principles into an interactive system that can be explored, adjusted, and applied in real time?</p></div>
                <div><h2>Outcome</h2><p>I designed and coded an iPad app for building type systems and experimenting with them through composition.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Year</dt><dd>2026</dd></div>
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
        <div class="typelab-system-diagrams">
          <h3 class="typelab-system-label bocil-shell">01/System Preview</h3>
          <div class="typelab-system-panel">
          <div class="typelab-system-diagram">
            <div class="typelab-system-callout typelab-system-callout--left">
              <div class="typelab-system-callout-copy"><h3>Type Hierarchy</h3>
              <p>Inspired by Apple’s semantic text styles and typography scale principles, I introduced predefined roles to help users build a consistent hierarchy without styling every text element from scratch.</p></div>
            </div>
            <figure class="typelab-system-screenshot"><img src="${ue}" alt="TypeLab System Preview showing type hierarchy, scale, font pairing, and style controls" /></figure>
            <div class="typelab-system-callouts">
              <div class="typelab-system-callout typelab-system-callout--right typelab-system-callout--scale"><h3>Body &amp; Scale</h3><p>One base body size determines the scale for other text styles.</p></div>
              <div class="typelab-system-callout typelab-system-callout--right typelab-system-callout--typefaces"><h3>Two Typefaces</h3><p>Limiting font choices encourages consistent, intentional pairing.</p></div>
              <div class="typelab-system-callout typelab-system-callout--right typelab-system-callout--refinement"><h3>Style Refinement</h3><p>Adjust weight, leading, and tracking while maintaining consistency.</p></div>
            </div>
          </div>
          </div>
          <h3 class="typelab-system-label bocil-shell">02/System Compare</h3>
          <div class="typelab-system-panel">
          <div class="typelab-system-diagram typelab-system-diagram--compare">
            <div class="typelab-system-callout typelab-system-callout--left">
              <div class="typelab-system-callout-copy"><h3>Typeface Comparison</h3>
              <p>Compare two typefaces side by side to evaluate hierarchy, readability, and visual consistency.</p></div>
            </div>
            <figure class="typelab-system-screenshot"><img src="${he}" alt="TypeLab Compare showing SF Pro and Courier New side by side with controls for each text role" /></figure>
            <div class="typelab-system-callouts"><div class="typelab-system-callout typelab-system-callout--right typelab-system-callout--roles">
              <h3>Role-Based Font Controls</h3>
              <p>Assign typefaces and adjust weights for each text role, allowing flexible and intentional font pairing.</p>
            </div></div>
          </div>
          </div>
        </div>
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #1<br /><span>System Setup</span></h2>
          <p>Choose up to two typefaces, assign their roles, and shape the hierarchy through scale, weight, spacing, and other type controls. Changes stay connected across the system, making it easier to experiment without losing consistency.</p>
        </div>
        <div class="bocil-history-media bocil-shell typelab-system-media">
          <div class="bocil-image">
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab System Setup demonstration"><source src="${be}" type="video/mp4" /></video>
          </div>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Compose</span></h2>
          <p>Bring the type system into a flexible canvas where text roles can be arranged, resized, and composed freely. Grids and alignment guides add structure while leaving room to experiment.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row bocil-focus-media typelab-media-row typelab-compose-media" data-ratio="40-60">
          <figure class="typelab-compose-cards">
            <div class="typelab-compose-guidelines"><img src="${ye}" alt="TypeLab layout guidelines menu with column, margin, and gutter controls" /></div>
            <img class="typelab-compose-style" src="${me}" alt="TypeLab style menu with typography and alignment controls" />
          </figure>
          <figure class="typelab-compose-video">
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab Compose canvas demonstration"><source src="${ge}" type="video/mp4" /></video>
          </figure>
        </div>
      </section>

      <section class="bocil-dark bocil-feature bocil-feature--personal">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>Coding TypeLab was a big part of the exploration for me. I built the app in SwiftUI, which pushed me to translate the typography rules I had been learning into actual behaviours and controls that worked in a real product.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${de}" alt="TypeLab SwiftUI prototype in Xcode with an iPad preview of the typography system" /></div>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design and<br /><span>coded prototype</span></h2>
          <p>The final prototype brings System Setup and Compose together, letting users build a type system and immediately experiment with it on a flexible canvas.</p>
        </div>
        <div class="bocil-final-showcase typelab-final-showcase">
          <div class="bocil-image typelab-final-image"><img src="${pe}" alt="TypeLab Compose interface on a graphite iPad beside an Apple Pencil on a gray concrete tabletop" /></div>
        </div>
      </section>
    </article>
    ${V("typelab")}
    ${G()}`}function fe(){return`
    <section class="playground shell" id="playground" aria-label="Playground"></section>`}function we(){return`
    <section class="about shell" id="about" aria-labelledby="about-title">
      <h2 class="reveal" id="about-title">Hi I'm Gabs</h2>
    </section>`}let P;function ke(n="home"){P?.abort(),P=new AbortController;const p=document.querySelector("[data-header]"),m=document.querySelector(".menu-button"),u=document.querySelector(".main-nav");m?.addEventListener("click",()=>{const e=p.classList.toggle("menu-open");m.setAttribute("aria-expanded",String(e)),m.querySelector(".menu-glyph").textContent=e?"−":"+"});const l=[...u?.querySelectorAll("a")??[]],y=e=>{l.forEach(i=>{const c=i===e;i.classList.toggle("is-active",c),c?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")})},w=["bocil","typelab"].includes(n)?"work":n;y(l.find(e=>e.dataset.route===w)),l.forEach(e=>e.addEventListener("click",()=>{y(e),p.classList.remove("menu-open"),m.setAttribute("aria-expanded","false"),m.querySelector(".menu-glyph").textContent="+"}));const q=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),q.unobserve(i.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>q.observe(e));const j=document.querySelector("[data-year]");j&&(j.textContent=new Date().getFullYear());const g=document.querySelector("[data-loop-gallery]"),b=[...document.querySelectorAll("[data-loop-panel]")];let k=0,$=0,A;const L=()=>{k+=($-k)*.12,b.forEach((e,i)=>{const c=((i-k)%b.length+b.length)%b.length;e.style.setProperty("--slot",c.toFixed(3)),e.style.zIndex=String(Math.round((b.length-c)*10))}),Math.abs($-k)>.001&&(A=requestAnimationFrame(L))},x=e=>{$+=e,cancelAnimationFrame(A),A=requestAnimationFrame(L)};if(g){const e=g.querySelector("[data-gallery-title]"),i=g.querySelector("[data-gallery-chips]"),c=t=>{e&&(e.textContent=t.dataset.projectTitle),i&&(i.innerHTML=t.dataset.projectTags.split("|").map(d=>`<span>${d}</span>`).join(""),i.classList.add("is-visible"))},o=()=>{e&&(e.textContent=e.dataset.defaultTitle),i&&(i.classList.remove("is-visible"),i.innerHTML="")};let r=null;const a=t=>{r!==t&&(r?.classList.remove("is-hovered"),r=t,r?.classList.add("is-hovered"),r?c(r):o())};g.addEventListener("pointermove",t=>{const d=b.map(h=>({panel:h,rect:h.getBoundingClientRect()})).filter(({rect:h})=>t.clientX>=h.left&&t.clientX<=h.right&&t.clientY>=h.top&&t.clientY<=h.bottom).sort((h,_)=>t.clientY-h.rect.top-(t.clientY-_.rect.top));a(d[0]?.panel??null)}),g.addEventListener("pointerleave",()=>a(null)),b.forEach(t=>{t.addEventListener("focus",()=>a(t)),t.addEventListener("blur",()=>a(null))}),g.addEventListener("wheel",t=>{t.preventDefault(),a(null),x(t.deltaY*.0032)},{passive:!1});let s=0;g.addEventListener("touchstart",t=>{a(null),s=t.touches[0].clientY},{passive:!0}),g.addEventListener("touchmove",t=>{const d=t.touches[0].clientY;x((s-d)*.012),s=d},{passive:!0}),g.addEventListener("keydown",t=>{["ArrowDown","ArrowRight"].includes(t.key)&&x(.8),["ArrowUp","ArrowLeft"].includes(t.key)&&x(-.8)}),L()}const S=document.querySelector("[data-keychain-scene]"),v=document.querySelector("[data-keychain-object]");if(S&&v){const e=[...v.querySelectorAll("[data-keychain-card]")];let i=null;const c=o=>{if(i===o)return;i=o;const r=o?Number(o.dataset.cardIndex):null;e.forEach((a,s)=>{if(a.classList.toggle("is-active",a===o),!o){["--live-angle","--live-shift","--live-y","--live-z"].forEach(d=>a.style.removeProperty(d)),a.style.zIndex="";return}const t=s-r;a.style.setProperty("--live-angle",`${t*11}deg`),a.style.setProperty("--live-shift",`${t*9}px`),a.style.setProperty("--live-y",a===o?"-10px":`${Math.abs(t)*3}px`),a.style.setProperty("--live-z",a===o?"85px":`${-Math.abs(t)*12}px`),a.style.zIndex=a===o?"45":String(20-Math.abs(t))})};S.addEventListener("pointermove",o=>{const r=S.getBoundingClientRect(),a=(o.clientX-r.left)/r.width-.5,s=(o.clientY-r.top)/r.height-.5;v.style.setProperty("--key-rx",`${s*-7}deg`),v.style.setProperty("--key-ry",`${a*9}deg`);const t=document.elementFromPoint(o.clientX,o.clientY)?.closest("[data-keychain-card]");t&&v.contains(t)&&c(t)}),S.addEventListener("pointerleave",()=>{v.style.setProperty("--key-rx","0deg"),v.style.setProperty("--key-ry","0deg"),c(null)}),e.forEach(o=>{o.addEventListener("focus",()=>c(o)),o.addEventListener("blur",()=>c(null))})}const T=document.querySelector("[data-paper-deck]"),B=[...document.querySelectorAll("[data-paper-sheet]")];let C;const F=()=>{const e=window.innerHeight,i=T?.getBoundingClientRect(),c=Math.max(1,(T?.offsetHeight??e)-e),o=Math.max(0,Math.min(1,-(i?.top??0)/c)),r=Math.max(e*.95,760);B.forEach((a,s)=>{const t=s===0?1:Math.max(0,Math.min(1,o*(B.length-1)-(s-1))),d=1-Math.pow(1-t,3),h=s%2?1:-1;a.style.setProperty("--paper-y",`${(1-d)*r}px`),a.style.setProperty("--paper-turn",`${(1-d)*h*1.1}deg`),a.style.zIndex=String(s+2)}),C=void 0},O=()=>{C||(C=requestAnimationFrame(F))};T&&B.length&&(F(),window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0})),window.__pencilTrailAbort?.abort();const I=document.querySelector("[data-pencil-trail]"),X=window.matchMedia("(hover: hover) and (pointer: fine)").matches,N=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(I&&X&&!N){const e=I.getContext("2d"),i=[],c=new AbortController;window.__pencilTrailAbort=c;let o;const r=()=>{const s=Math.min(window.devicePixelRatio||1,2);I.width=Math.round(window.innerWidth*s),I.height=Math.round(window.innerHeight*s),e.setTransform(s,0,0,s,0,0)},a=()=>{e.clearRect(0,0,window.innerWidth,window.innerHeight),e.lineCap="round",e.lineJoin="round";for(let s=1;s<i.length;s+=1){const t=i[s-1],d=i[s],h=Math.min(t.life,d.life);e.strokeStyle=`rgba(255,255,255,${h*.7})`,e.lineWidth=.72+h*.38,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(d.x,d.y),e.stroke(),e.strokeStyle=`rgba(255,255,255,${h*.22})`,e.lineWidth=.45,e.beginPath(),e.moveTo(t.x+t.offset,t.y-t.offset),e.lineTo(d.x+d.offset,d.y-d.offset),e.stroke()}for(i.forEach(s=>{s.life-=.035});i[0]?.life<=0;)i.shift();i.length?o=requestAnimationFrame(a):o=void 0};document.addEventListener("pointermove",s=>{const t=i.at(-1);t&&Math.hypot(s.clientX-t.x,s.clientY-t.y)<2.5||(i.push({x:s.clientX,y:s.clientY,life:1,offset:(Math.random()-.5)*1.5}),i.length>42&&i.shift(),o||(o=requestAnimationFrame(a)))},{passive:!0,signal:c.signal}),window.addEventListener("resize",r,{passive:!0,signal:c.signal}),r()}const H=p.querySelector(".brand"),R=document.querySelector(".bocil-case .bocil-hero"),M=document.querySelector(".typelab-compose-media"),E=document.querySelector(".texture"),D=()=>{p.classList.toggle("is-scrolled",window.scrollY>30);const e=!!(R&&R.getBoundingClientRect().bottom<=p.getBoundingClientRect().bottom);if(H.classList.toggle("is-project-back",e),H.setAttribute("aria-label",e?"Back to Work":"Go to work"),M&&E){const i=M.getBoundingClientRect(),c=M.querySelector(".typelab-compose-style"),o=Math.min(i.top,c?.getBoundingClientRect().top??i.top),r=a=>Math.max(0,Math.min(window.innerHeight,a));E.style.setProperty("--compose-texture-top",`${r(o)}px`),E.style.setProperty("--compose-texture-bottom",`${r(i.bottom)}px`)}};window.addEventListener("scroll",D,{passive:!0,signal:P.signal}),window.addEventListener("resize",D,{passive:!0,signal:P.signal}),D()}const xe={work:()=>ee(),bocil:()=>ce(),typelab:()=>ve(),playground:()=>fe(),about:()=>we()};function Se(){return{"#/work/bocil":"bocil","#/work/typelab":"typelab","#/playground":"playground","#/about":"about"}[location.hash]||"work"}function z(){const n=Se(),p=n==="work"||n==="about";document.querySelector("#app").innerHTML=`
    ${K()}
    <main class="page page-${n}">${xe[n]()}</main>
    ${p?'<canvas class="pencil-trail" aria-hidden="true" data-pencil-trail></canvas>':""}
    <div class="texture" aria-hidden="true"></div>`,document.body.dataset.route=n,window.scrollTo(0,0),ke(n)}window.addEventListener("hashchange",z);z();
