(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const y of d)if(y.type==="childList")for(const S of y.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&n(S)}).observe(document,{childList:!0,subtree:!0});function u(d){const y={};return d.integrity&&(y.integrity=d.integrity),d.referrerPolicy&&(y.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?y.credentials="include":d.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function n(d){if(d.ep)return;d.ep=!0;const y=u(d);fetch(d.href,y)}})();function te(){return`
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
    </header>`}const k=[{id:"adapenyu",number:"01",title:"AdaPenyu",summary:"A sea turtle identification app that helps conservators recognise individuals and track their lives over time.",tags:["Product Design","UI/UX","Research"],tone:"ocean"},{id:"bocil",number:"02",title:"Bocil",summary:"A macOS companion app for an interactive robot designed to make working alone feel less lonely.",tags:["Product Design","UI/UX","IoT"],tone:"sky"},{id:"typelab",number:"03",title:"TypeLab",summary:"A typography playground for building type systems and exploring them in real layouts.",tags:["Product Design","Typography","UI/UX"],tone:"neutral"},{id:"brewtime",number:"04",title:"BrewTime",summary:"A step-based coffee timer that guides brewers through every stage of their recipe.",tags:["UI/UX","Interaction Design","iOS"],tone:"sage"},{id:"babi-spots",number:"05",title:"Babi Spots",summary:"A personal app for discovering, saving, and reviewing pork spots around Bali.",tags:["UI/UX","iOS","Personal Project"],tone:"berry"},{id:"sustainopia",number:"06",title:"Sustainopia",summary:"An architectural project exploring how sustainable design can shape a more connected way of living.",tags:["Architecture","Urban Design","3D Modelling"],tone:"moss"},{id:"higher-hopes",number:"07",title:"Higher Hopes",summary:"A 2D climbing game where players guide a monkey up a challenging cliff, navigating obstacles along the way.",tags:["Illustration","Game Art","UI/UX"],tone:"brown"}];function se(){return`
    <div class="placeholder-ui" aria-hidden="true">
      <div class="placeholder-window">
        <div class="window-bar"><i></i><i></i><i></i></div>
        <div class="window-body">
          <div class="ui-copy"><b></b><b></b><b></b></div>
          <div class="ui-image"></div>
        </div>
      </div>
    </div>`}const X="/assets/typelab-compose-B5ylhK3u.png",_="/assets/bocil-home-screen-Drny_6mM.mp4",oe="/assets/sustainopia-cover-BNoD2a8C.png";function K(r){return r.id==="sustainopia"?`<img class="project-cover-photo" src="${oe}" alt="Sustainopia architectural rendering of landscaped circular public spaces" />`:r.id==="bocil"?`<video class="project-cover-image" autoplay muted loop playsinline preload="metadata" aria-label="Bocil macOS app demonstration"><source src="${_}" type="video/mp4" /></video>`:r.id==="typelab"?`<img class="project-cover-image" src="${X}" alt="TypeLab Compose interface with typography controls and a layout canvas" />`:se()}function ne(r,l){const u=["bocil","typelab","sustainopia"].includes(r.id)?`#/work/${r.id}`:"#/work";return`
    <article class="project-card reveal" data-project="${r.id}" style="--delay:${l*70}ms">
      <a href="${u}" aria-label="View ${r.title} project">
        <div class="project-visual tone-${r.tone}">
          ${K(r)}
        </div>
        <div class="project-info">
          <div class="project-title-row">
            <h3>${r.title}</h3>
            <div class="project-chips">${r.tags.map(n=>`<span>${n}</span>`).join("")}</div>
          </div>
          <p>${r.summary}</p>
        </div>
      </a>
    </article>`}function le(){return`
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="work-intro reveal">
        <h1 id="work-title">I'm a multidisciplinary designer exploring the intersection of design, technology, and art.</h1>
        <p class="work-lead">With roots in architecture, my work spans product design,<br />interaction design, visual design, and illustration.</p>
      </div>
      <div class="project-grid">
        ${k.map(ne).join("")}
      </div>
    </section>`}function J(r){const l=k.findIndex(n=>n.id===r);return`<section class="project-explorer bocil-shell" aria-label="Explore more projects">
    <h2>Keep exploring.<br /><span>See what else I’ve been working on.</span></h2>
    <div class="project-explorer-grid">
      ${[k[(l-1+k.length)%k.length],k[(l+1)%k.length]].map((n,d)=>`<a class="project-card" data-project="${n.id}" href="${["bocil","typelab","sustainopia"].includes(n.id)?`#/work/${n.id}`:"#/work"}" aria-label="Explore ${n.title}">
        <div class="project-visual tone-${n.tone}">${K(n)}</div>
        <p>${d===0?"previous,":"next,"}<br /><strong>${n.title}</strong></p>
      </a>`).join("")}
    </div>
  </section>`}function z(){return`
    <footer class="bocil-footer">
      <p>Thanks for spending a moment here!</p>
      <p>© ${new Date().getFullYear()} Gabriella Dina Widieaster</p>
      <div class="bocil-footer-socials">
        <a href="https://www.linkedin.com/in/gabrielladinaw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 3.8a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.4 7.4h3.8V22H1.4V7.4ZM8 7.4h3.6v2h.1c.5-1 1.7-2.3 3.8-2.3 4 0 4.8 2.6 4.8 6V22h-3.8v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V22H8V7.4Z"/></svg></a>
        <a href="mailto:gabrielladina123@gmail.com" aria-label="Email Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
      </div>
    </footer>`}const re="/assets/bocil-header-DluoAKXD.png",ce="/assets/bocil-history-BdtmNIuU.mp4",de="/assets/bocil-solution-robot-CKRyj0qD.mp4",pe="/assets/bocil-homepage-BpmftuHf.png",ue="/assets/bocil-notification-D4vzl0MM.png",ge="/assets/bocil-calendar-C1sdgfqM.mp4",he="/assets/bocil-focus-blurry-DOryg3wu.png",me="/assets/bocil-timer-D1rEnOip.png";function ye(){return`
    <article class="bocil-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media"><div class="bocil-image"><img src="${pe}" alt="Bocil macOS application home screen" /></div></div>
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
        <img src="${re}" alt="Bocil robot prototypes beside the macOS companion app" />
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
          <video autoplay muted loop playsinline preload="auto" aria-label="Bocil physical robot companions demonstration"><source src="${de}" type="video/mp4" /></video>
        </div>
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
            <h2>Feature #1<br /><span>Productivity</span></h2>
            <p>Bocil turns conversations into actions, letting users create or update calendar events simply by talking. Upcoming events are synced to the desktop app with reminders when it’s time.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row" data-grain-media>
          <figure class="bocil-notification-panel"><div class="bocil-image"><img src="${ue}" alt="Bocil calendar reminders in Notification Center" /></div></figure>
          <figure class="bocil-calendar-panel"><div class="bocil-image"><video autoplay muted loop playsinline preload="auto" aria-label="Bocil calendar and productivity demonstration"><source src="${ge}" type="video/mp4" /></video></div></figure>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Focus</span></h2>
          <p>Bocam (Bocil Camera) turns Bocil into a focus companion, letting users set their own focus timer while Bocil keeps them on track. If users reach for their phone, Bocil notices and responds to bring their attention back.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row bocil-focus-media" data-grain-media>
          <figure><div class="bocil-image"><img src="${me}" alt="Bocil focus timer interface" /></div></figure>
          <figure><div class="bocil-image"><img src="${he}" alt="Bocam focus session interface with visual focus feedback" /></div></figure>
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
              <source src="${ce}" type="video/mp4" />
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
            <video autoplay muted loop playsinline preload="auto" aria-label="Bocil macOS home screen demonstration"><source src="${_}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </article>
    ${J("bocil")}
    ${z()}`}const be="/assets/typelab-prototype-coding-B8oBNLBW.png",ve="/assets/typelab-final-mockup-composited-DTaKMWwd.png",fe="/assets/typelab-system-preview-ssFIE1uV.png",we="/assets/typelab-system-compare-BIkm5fJj.png",ke="/assets/typelab-compose-guidelines-jE7D_rcj.png",xe="/assets/typelab-compose-style-B1TuQ9_k.png",Se="/assets/typelab-canvas-clean-CmtsmiEn.mp4",$e="/assets/typelab-system-clean-BgYkVVjA.mp4";function Le(){return`
    <article class="bocil-case typelab-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media typelab-hero-media"><div class="bocil-image"><img src="${X}" alt="TypeLab Compose interface with typography controls and a layout canvas" /></div></div>
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
            <figure class="typelab-system-screenshot"><img src="${fe}" alt="TypeLab System Preview showing type hierarchy, scale, font pairing, and style controls" /></figure>
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
            <figure class="typelab-system-screenshot"><img src="${we}" alt="TypeLab Compare showing SF Pro and Courier New side by side with controls for each text role" /></figure>
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
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab System Setup demonstration"><source src="${$e}" type="video/mp4" /></video>
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
            <div class="typelab-compose-guidelines"><img src="${ke}" alt="TypeLab layout guidelines menu with column, margin, and gutter controls" /></div>
            <img class="typelab-compose-style" src="${xe}" alt="TypeLab style menu with typography and alignment controls" />
          </figure>
          <figure class="typelab-compose-video">
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab Compose canvas demonstration"><source src="${Se}" type="video/mp4" /></video>
          </figure>
        </div>
      </section>

      <section class="bocil-dark bocil-feature bocil-feature--personal">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>Coding TypeLab was a big part of the exploration for me. I built the app in SwiftUI, which pushed me to translate the typography rules I had been learning into actual behaviours and controls that worked in a real product.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${be}" alt="TypeLab SwiftUI prototype in Xcode with an iPad preview of the typography system" /></div>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design and<br /><span>coded prototype</span></h2>
          <p>The final prototype brings System Setup and Compose together, letting users build a type system and immediately experiment with it on a flexible canvas.</p>
        </div>
        <div class="bocil-final-showcase typelab-final-showcase">
          <div class="bocil-image typelab-final-image"><img src="${ve}" alt="TypeLab Compose interface on a graphite iPad beside an Apple Pencil on a gray concrete tabletop" /></div>
        </div>
      </section>
    </article>
    ${J("typelab")}
    ${z()}`}const Pe="/assets/sustainopia-communal-B8VwNRr5.png",Ae="/assets/sustainopia-picnic-Bi48C5Gs.png",Ce="/assets/sustainopia-pet-qXH5_Nxe.png",Te="/assets/sustainopia-birdeye-U55hHNZT.png",Ie="/assets/sustainopia-title-BlCZlE2X.png",Be="/assets/sustainopia-hero-C8-UpBDy.png",Ee="/assets/sustainopia-header-top-view-BrwGWYkG.png",De="/assets/sustainopia-site-plan-B7mkyY08.png",Me="/assets/sustainopia-challenge-1-C2Ya16jg.png",qe="/assets/sustainopia-challenge-2-BqfA-xFQ.png",je="/assets/sustainopia-challenge-3-CxKvQr-v.png",Fe="/assets/sustainopia-challenge-4-TEDcQ9KV.png",He="/assets/sustainopia-concept-1-D_uDiaHC.png",ze="/assets/sustainopia-concept-2-BzYtPmpp.png",Oe="/assets/sustainopia-concept-3-Cp9MD3E_.png",Re="/assets/sustainopia-strategy-1-8-h7c8K5.png",Ue="/assets/sustainopia-strategy-2-D3lZ0c54.png",Ge="/assets/sustainopia-strategy-3-B2JWUg7T.png",Ye="/assets/sustainopia-strategy-4-CSua5LLa.png",We="/assets/sustainopia-strategy-5-DxwkmFJ4.png",Ve="/assets/sustainopia-strategy-6-BlFbpiGN.png",Ne="/assets/sustainopia-final-site-plan-CKm_sCBG.png",Xe="/assets/sustainopia-drawing-1-CNRsQfWQ.png",_e="/assets/sustainopia-drawing-2-uN5p68iD.png",Ke="/assets/sustainopia-drawing-3-B6hoFR86.png",Je="/assets/sustainopia-drawing-4-CM7vSdPH.png";function Qe(){const r=[[Xe,"01 — Rainwater Harvesting + Pond Area Details"],[_e,"02 — Vegetation and Animals Mapping"],[Ke,"03 — Section 1: Cross Section"],[Je,"04 — Section 2: Longitudinal Section"]];return`
    <article class="bocil-case sustainopia-case">
      <section class="bocil-hero bocil-shell">
        <figure class="bocil-hero-media sustainopia-hero-media">
          <img src="${Ee}" alt="Top view of Sustainopia’s circular public spaces, gardens, and green paths" fetchpriority="high" />
        </figure>
        <div class="bocil-overview">
          <h1>Sustainopia</h1>
          <p class="bocil-deck">An urban eco-park that brings nature, community,<br class="sustainopia-deck-break" /> and wellbeing together through sustainable design</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>Sustainopia is an urban ecopark proposal awarded 1st place in the Hijau Jakartaku Student Design Competition 2023. Designed for Pondok Indah, Jakarta, it explores how sustainable landscape design can create healthier environments and stronger community connections.</p>
              <div class="bocil-briefs">
                <div><h2>Issue</h2><p>How might we transform an urban space into a sustainable park that supports both environmental and community needs?</p></div>
                <div><h2>Outcome</h2><p>1st Place, Hijau Jakartaku Student Design Competition 2023</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Architectural Designer</dd></div>
              <div><dt>Year</dt><dd>2023</dd></div>
              <div><dt>Timeline</dt><dd>14 days</dd></div>
              <div><dt>Team</dt><dd>2 Designers</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="bocil-dark sustainopia-analysis" aria-labelledby="sustainopia-analysis-title">
        <div class="bocil-shell sustainopia-analysis-grid">
          <div class="sustainopia-analysis-intro">
            <h2 id="sustainopia-analysis-title">User and Site<br /><span>Analysis</span></h2>
            <p>Located in a densely populated area of Pondok Indah, South Jakarta, the 2,294 m² site was envisioned as an urban green space for people of all ages, pets, and urban wildlife. The design aims to encourage community interaction, outdoor activities, and biodiversity within the city.</p>
          </div>
          <figure class="sustainopia-site-plan">
            <img src="${De}" alt="Exploded site analysis showing road access, edge vegetation, and commercial and residential buildings around the site" loading="lazy" />
          </figure>
          <ol class="sustainopia-analysis-points">
            <li><span>01</span><div><h3>Accessibility</h3><p>Connected to residential areas and main roads, with multiple access points.</p></div></li>
            <li><span>02</span><div><h3>Vegetation</h3><p>Limited greenery is mainly found along the site edges.</p></div></li>
            <li><span>03</span><div><h3>Landmarks</h3><p>Located within a residential area near commercial facilities.</p></div></li>
          </ol>
        </div>
      </section>
      <section class="sustainopia-challenges" aria-labelledby="sustainopia-challenges-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-challenges-intro">
          <h2 id="sustainopia-challenges-title">Urban<br /><span>Challenges</span></h2>
          <p>The project addresses key environmental and social issues in Pondok Indah, shaping our approach to a more sustainable and inclusive urban space.</p>
        </div>
        <div class="sustainopia-challenges-band">
          <ol class="bocil-shell sustainopia-challenges-grid">
            ${[[Me,"Limited green<br />space","Buildings and roads with very little greenery"],[qe,"Unprocessed water<br />causes mosquito","Standing water providing a breeding ground for mosquitoes"],[je,"Lack of<br />Social Spaces","People isolated in separate outdoor spaces"],[Fe,"Limited<br />Pet-Friendly Areas","A pet owner facing restrictions on pets in public spaces"]].map(([l,u,n],d)=>`
              <li>
                <div class="sustainopia-challenge-art"><img src="${l}" alt="${n}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(d+1).padStart(2,"0")}</span><h3>${u}</h3></div>
              </li>`).join("")}
          </ol>
        </div>
      </section>
      <section class="sustainopia-concept" aria-labelledby="sustainopia-concept-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-concept-title">Design Concept:<br /><span>Nature, Community,<br />and Wellbeing</span></h2>
          <p>I wanted to create a space where nature, community, and wellbeing coexist, exploring how sustainable design could address environmental challenges while encouraging human interaction.</p>
        </div>
        <div class="sustainopia-challenges-band sustainopia-concept-band">
          <ol class="bocil-shell sustainopia-concept-grid">
            ${[[He,"Sustainable<br />nature","A green habitat with trees, a pond, birds, and urban wildlife"],[ze,"Sense of<br />Community","People and pets sharing an inclusive communal space"],[Oe,"Physical<br />well being","People exercising in three connected circular spaces"]].map(([l,u,n],d)=>`
              <li>
                <div class="sustainopia-concept-art"><img src="${l}" alt="${n}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(d+1).padStart(2,"0")}</span><h3>${u}</h3></div>
              </li>`).join("")}
          </ol>
        </div>
      </section>
      <section class="sustainopia-strategies" aria-labelledby="sustainopia-strategies-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-strategies-title">Design<br /><span>Strategies</span></h2>
          <p>The concept was translated into practical design strategies, integrating sustainable landscape solutions with spaces for community interaction and outdoor activities.</p>
        </div>
        <div class="sustainopia-challenges-band sustainopia-strategies-band">
          <ul class="bocil-shell sustainopia-strategies-grid">
            ${[[Re,"Natural Mosquito-<br />Repellent Plants","Planting around outdoor spaces to naturally repel mosquitoes"],[Ue,"Communal<br />Area","Shaded communal seating and tables for people to gather"],[Ge,"Jogging<br />Track","A tree-lined jogging route connecting outdoor activities"],[Ye,"Rainwater<br />Harvesting","Sculptural rainwater collectors connected to underground storage"],[We,"Pet Friendly<br />Area","An outdoor area with play equipment for pets and their owners"],[Ve,"Fitness<br />Ground","Outdoor fitness equipment and exercise areas among trees"]].map(([l,u,n])=>`
              <li>
                <div class="sustainopia-strategy-art"><img src="${l}" alt="${n}" loading="lazy" /></div>
                <h3>${u}</h3>
              </li>`).join("")}
          </ul>
        </div>
      </section>
      <section class="bocil-dark sustainopia-final-plan" aria-labelledby="sustainopia-plan-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-plan-intro">
          <h2 id="sustainopia-plan-title">Site Plan</h2>
          <p>The final proposal brings together sustainable landscape strategies and inclusive public spaces, creating an urban park designed to support both ecological health and community wellbeing.</p>
        </div>
        <div class="sustainopia-plan-band">
          <div class="sustainopia-plan-layout">
            <figure class="sustainopia-plan-image"><img src="${Ne}" alt="Sustainopia final site plan with numbered locations for entrances, communal spaces, rainwater harvesting, pet areas, paths, and fitness facilities" loading="lazy" /></figure>
            <aside class="sustainopia-plan-legend" aria-labelledby="sustainopia-legend-title">
              <h3 id="sustainopia-legend-title">SITE LEGEND</h3>
              <ol>
                <li>Main Entrance</li>
                <li>Communal Area</li>
                <li>Rainwater-harvesting Area</li>
                <li>Pet Park Area</li>
                <li>Pet-friendly Seating Area</li>
                <li>Fitness Ground</li>
                <li>Pedestrian Walkway</li>
                <li>Jogging Track</li>
                <li>Bicycle Parking &amp; Bench</li>
                <li>Picnic Ground</li>
                <li>Service Area</li>
                <li>Service Entrance/Exit</li>
              </ol>
            </aside>
          </div>
        </div>
      </section>
      <section class="sustainopia-drawings" aria-labelledby="sustainopia-drawings-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-drawings-title">Technical and<br /><span>Architectural<br />Drawings</span></h2>
          <p>The drawings detail the park’s spatial layout and rainwater harvesting system, showing how technical solutions support both sustainability and everyday use.</p>
        </div>
        <div class="sustainopia-drawings-window" tabindex="0" role="region" aria-label="Architectural drawings, scrolling automatically. Hover an image or focus this gallery to pause.">
          <div class="sustainopia-drawings-track">
            ${[!1,!0].map(l=>`
              <div class="sustainopia-drawings-group"${l?' aria-hidden="true"':""}>
                ${r.map(([u,n])=>`<button class="sustainopia-zoom-trigger" type="button" data-zoom-src="${u}" data-zoom-label="${n}" aria-label="Enlarge ${n}"${l?' tabindex="-1"':""}><img src="${u}" alt="${l?"":n}" loading="eager" draggable="false" /></button>`).join("")}
              </div>`).join("")}
          </div>
        </div>
      </section>
      <section class="bocil-dark sustainopia-final" aria-labelledby="sustainopia-final-title">
        <div class="bocil-feature-intro bocil-shell sustainopia-concept-intro">
          <h2 id="sustainopia-final-title">Final<br /><span>Design</span></h2>
          <p>The final renderings showcase how Sustainopia brings nature, community, and wellbeing together through its landscape design and shared spaces.</p>
        </div>
        <div class="sustainopia-render-window" tabindex="0" role="region" aria-label="Final renderings. Hover to pause; click an image to enlarge.">
          <div class="sustainopia-render-track">
            ${[!1,!0].map(l=>`<div class="sustainopia-render-group"${l?' aria-hidden="true"':""}>
              ${[[Pe,"Communal area"],[Ae,"Picnic &amp; fitness area"],[Ce,"Pet park area"],[Te,"Bird-eye view perspective"]].map(([u,n])=>`<figure>
                <button type="button" class="sustainopia-zoom-trigger" data-zoom-src="${u}" data-zoom-label="${n}" aria-label="Enlarge ${n}"${l?' tabindex="-1"':""}><img src="${u}" alt="${n}" draggable="false" /></button>
                <figcaption>${n}</figcaption>
              </figure>`).join("")}
            </div>`).join("")}
          </div>
        </div>
        <figure class="sustainopia-ending">
          <img class="sustainopia-ending-photo" src="${Be}" alt="Sustainopia park aerial rendering" loading="lazy" />
          <img class="sustainopia-ending-title" src="${Ie}" alt="Sustainopia" loading="lazy" />
        </figure>
      </section>
      ${z()}
      <dialog class="sustainopia-lightbox" aria-label="Enlarged project image">
        <button type="button" class="sustainopia-lightbox-close" aria-label="Close enlarged image"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></button>
        <div class="sustainopia-lightbox-scroll"><img alt="" /></div>
        <p class="sustainopia-lightbox-caption"></p>
      </dialog>
    </article>`}function Ze(){return`
    <section class="playground shell" id="playground" aria-label="Playground"></section>`}function ea(){return`
    <section class="about shell" id="about" aria-labelledby="about-title">
      <h2 class="reveal" id="about-title">Hi I'm Gabs</h2>
    </section>`}let $;function aa(r="home"){$?.abort(),$=new AbortController;const l=document.querySelector("[data-header]"),u=document.querySelector(".menu-button"),n=document.querySelector(".main-nav");u?.addEventListener("click",()=>{const a=l.classList.toggle("menu-open");u.setAttribute("aria-expanded",String(a)),u.querySelector(".menu-glyph").textContent=a?"−":"+"});const d=[...n?.querySelectorAll("a")??[]],y=a=>{d.forEach(e=>{const c=e===a;e.classList.toggle("is-active",c),c?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})},S=["bocil","typelab","sustainopia"].includes(r)?"work":r;y(d.find(a=>a.dataset.route===S)),d.forEach(a=>a.addEventListener("click",()=>{y(a),l.classList.remove("menu-open"),u.setAttribute("aria-expanded","false"),u.querySelector(".menu-glyph").textContent="+"}));const O=new IntersectionObserver(a=>{a.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),O.unobserve(e.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(a=>O.observe(a));const R=document.querySelector("[data-year]");R&&(R.textContent=new Date().getFullYear());const b=document.querySelector("[data-loop-gallery]"),v=[...document.querySelectorAll("[data-loop-panel]")];let L=0,I=0,B;const E=()=>{L+=(I-L)*.12,v.forEach((a,e)=>{const c=((e-L)%v.length+v.length)%v.length;a.style.setProperty("--slot",c.toFixed(3)),a.style.zIndex=String(Math.round((v.length-c)*10))}),Math.abs(I-L)>.001&&(B=requestAnimationFrame(E))},P=a=>{I+=a,cancelAnimationFrame(B),B=requestAnimationFrame(E)};if(b){const a=b.querySelector("[data-gallery-title]"),e=b.querySelector("[data-gallery-chips]"),c=i=>{a&&(a.textContent=i.dataset.projectTitle),e&&(e.innerHTML=i.dataset.projectTags.split("|").map(g=>`<span>${g}</span>`).join(""),e.classList.add("is-visible"))},t=()=>{a&&(a.textContent=a.dataset.defaultTitle),e&&(e.classList.remove("is-visible"),e.innerHTML="")};let p=null;const o=i=>{p!==i&&(p?.classList.remove("is-hovered"),p=i,p?.classList.add("is-hovered"),p?c(p):t())};b.addEventListener("pointermove",i=>{const g=v.map(h=>({panel:h,rect:h.getBoundingClientRect()})).filter(({rect:h})=>i.clientX>=h.left&&i.clientX<=h.right&&i.clientY>=h.top&&i.clientY<=h.bottom).sort((h,T)=>i.clientY-h.rect.top-(i.clientY-T.rect.top));o(g[0]?.panel??null)}),b.addEventListener("pointerleave",()=>o(null)),v.forEach(i=>{i.addEventListener("focus",()=>o(i)),i.addEventListener("blur",()=>o(null))}),b.addEventListener("wheel",i=>{i.preventDefault(),o(null),P(i.deltaY*.0032)},{passive:!1});let s=0;b.addEventListener("touchstart",i=>{o(null),s=i.touches[0].clientY},{passive:!0}),b.addEventListener("touchmove",i=>{const g=i.touches[0].clientY;P((s-g)*.012),s=g},{passive:!0}),b.addEventListener("keydown",i=>{["ArrowDown","ArrowRight"].includes(i.key)&&P(.8),["ArrowUp","ArrowLeft"].includes(i.key)&&P(-.8)}),E()}const A=document.querySelector("[data-keychain-scene]"),f=document.querySelector("[data-keychain-object]");if(A&&f){const a=[...f.querySelectorAll("[data-keychain-card]")];let e=null;const c=t=>{if(e===t)return;e=t;const p=t?Number(t.dataset.cardIndex):null;a.forEach((o,s)=>{if(o.classList.toggle("is-active",o===t),!t){["--live-angle","--live-shift","--live-y","--live-z"].forEach(g=>o.style.removeProperty(g)),o.style.zIndex="";return}const i=s-p;o.style.setProperty("--live-angle",`${i*11}deg`),o.style.setProperty("--live-shift",`${i*9}px`),o.style.setProperty("--live-y",o===t?"-10px":`${Math.abs(i)*3}px`),o.style.setProperty("--live-z",o===t?"85px":`${-Math.abs(i)*12}px`),o.style.zIndex=o===t?"45":String(20-Math.abs(i))})};A.addEventListener("pointermove",t=>{const p=A.getBoundingClientRect(),o=(t.clientX-p.left)/p.width-.5,s=(t.clientY-p.top)/p.height-.5;f.style.setProperty("--key-rx",`${s*-7}deg`),f.style.setProperty("--key-ry",`${o*9}deg`);const i=document.elementFromPoint(t.clientX,t.clientY)?.closest("[data-keychain-card]");i&&f.contains(i)&&c(i)}),A.addEventListener("pointerleave",()=>{f.style.setProperty("--key-rx","0deg"),f.style.setProperty("--key-ry","0deg"),c(null)}),a.forEach(t=>{t.addEventListener("focus",()=>c(t)),t.addEventListener("blur",()=>c(null))})}const D=document.querySelector("[data-paper-deck]"),M=[...document.querySelectorAll("[data-paper-sheet]")];let q;const U=()=>{const a=window.innerHeight,e=D?.getBoundingClientRect(),c=Math.max(1,(D?.offsetHeight??a)-a),t=Math.max(0,Math.min(1,-(e?.top??0)/c)),p=Math.max(a*.95,760);M.forEach((o,s)=>{const i=s===0?1:Math.max(0,Math.min(1,t*(M.length-1)-(s-1))),g=1-Math.pow(1-i,3),h=s%2?1:-1;o.style.setProperty("--paper-y",`${(1-g)*p}px`),o.style.setProperty("--paper-turn",`${(1-g)*h*1.1}deg`),o.style.zIndex=String(s+2)}),q=void 0},G=()=>{q||(q=requestAnimationFrame(U))};D&&M.length&&(U(),window.addEventListener("scroll",G,{passive:!0}),window.addEventListener("resize",G,{passive:!0})),window.__pencilTrailAbort?.abort();const C=document.querySelector("[data-pencil-trail]"),Z=window.matchMedia("(hover: hover) and (pointer: fine)").matches,ee=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(C&&Z&&!ee){const a=C.getContext("2d"),e=[],c=new AbortController;window.__pencilTrailAbort=c;let t;const p=()=>{const s=Math.min(window.devicePixelRatio||1,2);C.width=Math.round(window.innerWidth*s),C.height=Math.round(window.innerHeight*s),a.setTransform(s,0,0,s,0,0)},o=()=>{a.clearRect(0,0,window.innerWidth,window.innerHeight),a.lineCap="round",a.lineJoin="round";for(let s=1;s<e.length;s+=1){const i=e[s-1],g=e[s],h=Math.min(i.life,g.life);a.strokeStyle=`rgba(255,255,255,${h*.7})`,a.lineWidth=.72+h*.38,a.beginPath(),a.moveTo(i.x,i.y),a.lineTo(g.x,g.y),a.stroke(),a.strokeStyle=`rgba(255,255,255,${h*.22})`,a.lineWidth=.45,a.beginPath(),a.moveTo(i.x+i.offset,i.y-i.offset),a.lineTo(g.x+g.offset,g.y-g.offset),a.stroke()}for(e.forEach(s=>{s.life-=.035});e[0]?.life<=0;)e.shift();e.length?t=requestAnimationFrame(o):t=void 0};document.addEventListener("pointermove",s=>{const i=e.at(-1);i&&Math.hypot(s.clientX-i.x,s.clientY-i.y)<2.5||(e.push({x:s.clientX,y:s.clientY,life:1,offset:(Math.random()-.5)*1.5}),e.length>42&&e.shift(),t||(t=requestAnimationFrame(o)))},{passive:!0,signal:c.signal}),window.addEventListener("resize",p,{passive:!0,signal:c.signal}),p()}const Y=l.querySelector(".brand"),W=document.querySelector(".bocil-case .bocil-hero"),j=document.querySelector(".typelab-compose-media"),F=document.querySelector(".texture"),H=()=>{l.classList.toggle("is-scrolled",window.scrollY>30);const a=!!(W&&W.getBoundingClientRect().bottom<=l.getBoundingClientRect().bottom);if(Y.classList.toggle("is-project-back",a),Y.setAttribute("aria-label",a?"Back to Work":"Go to work"),j&&F){const e=j.getBoundingClientRect(),c=j.querySelector(".typelab-compose-style"),t=Math.min(e.top,c?.getBoundingClientRect().top??e.top),p=o=>Math.max(0,Math.min(window.innerHeight,o));F.style.setProperty("--compose-texture-top",`${p(t)}px`),F.style.setProperty("--compose-texture-bottom",`${p(e.bottom)}px`)}};window.addEventListener("scroll",H,{passive:!0,signal:$.signal}),window.addEventListener("resize",H,{passive:!0,signal:$.signal}),H();const ae=[...document.querySelectorAll(".sustainopia-drawings-track, .sustainopia-render-track")],w=$.signal;ae.forEach(a=>{const e=a.parentElement,c=a.classList.contains("sustainopia-drawings-track")?150:120;let t=0,p,o,s=!1,i=!1;const g=window.matchMedia("(prefers-reduced-motion: reduce)"),h=()=>{i||(s=!0)},T=()=>{s=!1,i=!1};e.addEventListener("pointerenter",h,{signal:w}),e.addEventListener("pointerleave",T,{signal:w}),e.addEventListener("pointermove",()=>{i=!1,s=!0},{signal:w}),e.addEventListener("keydown",x=>{x.key==="Tab"&&(s=!0)},{signal:w}),e.addEventListener("focusout",x=>{e.contains(x.relatedTarget)||T()},{signal:w}),e.addEventListener("galleryresume",()=>{s=!1,i=!0,e.scrollLeft=0},{signal:w});const V=x=>{const ie=p===void 0?0:Math.min((x-p)/1e3,.05);if(p=x,!s&&!document.body.classList.contains("sustainopia-modal-open")&&!g.matches){const N=a.firstElementChild.getBoundingClientRect().width;N>0&&(t=(t+ie*c)%N),a.style.setProperty("--gallery-offset",`${-t}px`)}o=requestAnimationFrame(V)};o=requestAnimationFrame(V),w.addEventListener("abort",()=>cancelAnimationFrame(o),{once:!0})});const m=document.querySelector(".sustainopia-lightbox");if(m){let a;document.querySelectorAll(".sustainopia-zoom-trigger").forEach(e=>{e.addEventListener("click",()=>{a=e,m.classList.toggle("is-render",!!e.closest(".sustainopia-render-window"));const c=m.querySelector("img");c.src=e.dataset.zoomSrc,c.alt=e.dataset.zoomLabel,m.querySelector(".sustainopia-lightbox-caption").textContent=e.dataset.zoomLabel,m.querySelector(".sustainopia-lightbox-scroll").scrollTo(0,0),m.classList.remove("is-zoomed"),m.showModal(),document.body.classList.add("sustainopia-modal-open")})}),m.querySelector(".sustainopia-lightbox-close").addEventListener("click",()=>m.close()),m.addEventListener("click",e=>{e.target===m&&m.close()}),m.querySelector("img").addEventListener("click",()=>m.classList.toggle("is-zoomed")),m.addEventListener("close",()=>{document.body.classList.remove("sustainopia-modal-open");const e=a?.closest(".sustainopia-drawings-window, .sustainopia-render-window"),c=()=>{const t=document.activeElement;(e?.contains(t)||t===e)&&t.blur()};c(),requestAnimationFrame(c),e?.dispatchEvent(new Event("galleryresume"))})}}const ia={work:()=>le(),bocil:()=>ye(),typelab:()=>Le(),sustainopia:()=>Qe(),playground:()=>Ze(),about:()=>ea()};function ta(){return{"#/work/bocil":"bocil","#/work/typelab":"typelab","#/work/sustainopia":"sustainopia","#/playground":"playground","#/about":"about"}[location.hash]||"work"}function Q(){const r=ta(),l=r==="work"||r==="about";document.querySelector("#app").innerHTML=`
    ${te()}
    <main class="page page-${r}">${ia[r]()}</main>
    ${l?'<canvas class="pencil-trail" aria-hidden="true" data-pencil-trail></canvas>':""}
    <div class="texture" aria-hidden="true"></div>`,document.body.dataset.route=r,window.scrollTo(0,0),aa(r)}window.addEventListener("hashchange",Q);Q();
