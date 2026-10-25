(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))l(h);new MutationObserver(h=>{for(const v of h)if(v.type==="childList")for(const B of v.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&l(B)}).observe(document,{childList:!0,subtree:!0});function u(h){const v={};return h.integrity&&(v.integrity=h.integrity),h.referrerPolicy&&(v.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?v.credentials="include":h.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function l(h){if(h.ep)return;h.ep=!0;const v=u(h);fetch(h.href,v)}})();function ue(){return`
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
    </header>`}const x=[{id:"adapenyu",number:"01",title:"AdaPenyu",summary:"A sea turtle identification app that helps conservators recognise individuals and track their lives over time.",tags:["Product Design","UI/UX","Research"],tone:"ocean"},{id:"typelab",number:"02",title:"TypeLab",summary:"A typography playground for building type systems and exploring them in real layouts.",tags:["Product Design","Typography","UI/UX"],tone:"neutral"},{id:"higher-hopes",number:"03",title:"High Hopes",summary:"A 2D climbing game about a monkey escaping a forest fire.",tags:["Illustration","Game Art","UI/UX"],tone:"brown"},{id:"bocil",number:"04",title:"Bocil",summary:"A macOS companion app for an interactive robot designed to make working alone feel less lonely.",tags:["Product Design","UI/UX","IoT"],tone:"sky"},{id:"brewtime",number:"05",title:"BrewTime",summary:"A step-based coffee timer that guides brewers through every stage of their recipe.",tags:["UI/UX","Interaction Design","iOS"],tone:"sage"},{id:"grab",number:"06",title:"Grab Works",summary:"A collection of visual designs for Grab Indonesia, spanning campaigns, merchandise, and branding.",tags:["Visual Design","Branding","Marketing"],tone:"grab"},{id:"sustainopia",number:"07",title:"Sustainopia",summary:"An architectural project exploring how sustainable design can shape a more connected way of living.",tags:["Architecture","Urban Design","2D Design","3D Modelling"],tone:"moss"}],me="/assets/high-hopes-homepage-left-BMaBYnxb.png",ve="/assets/high-hopes-homepage-right-PdWiy8Tq.png";function be(){return`
    <div class="placeholder-ui" aria-hidden="true">
      <div class="placeholder-window">
        <div class="window-bar"><i></i><i></i><i></i></div>
        <div class="window-body">
          <div class="ui-copy"><b></b><b></b><b></b></div>
          <div class="ui-image"></div>
        </div>
      </div>
    </div>`}const ne="/assets/typelab-compose-B5ylhK3u.png",re="/assets/bocil-home-screen-Drny_6mM.mp4",ye="/assets/sustainopia-cover-BNoD2a8C.png",C="/assets/brewtime-timer-BdLNZY1J.png",fe="/assets/brewtime-home-timer-CFYkQiFd.mp4",le="/assets/brewtime-recipe-bottom-reference-BGoThO9W.png";function ce(c){return c.id==="higher-hopes"?`<div class="high-hopes-home-cover"><img class="high-hopes-cover-default" src="${me}" alt="High Hopes monkey at the foot of a cliff during a forest fire" /><img class="high-hopes-cover-hover" src="${ve}" alt="" aria-hidden="true" /></div>`:c.id==="brewtime"?`<div class="brewtime-cover"><div class="brewtime-cover-timer"><video autoplay muted loop playsinline preload="metadata" poster="${C}" aria-label="BrewTime guided brewing timer demonstration"><source src="${fe}" type="video/mp4" /></video></div><div class="brewtime-cover-recipe"><img src="${le}" alt="BrewTime recipe steps and editing controls" /></div></div>`:c.id==="sustainopia"?`<img class="project-cover-photo" src="${ye}" alt="Sustainopia architectural rendering of landscaped circular public spaces" />`:c.id==="bocil"?`<video class="project-cover-image" autoplay muted loop playsinline preload="metadata" aria-label="Bocil macOS app demonstration"><source src="${re}" type="video/mp4" /></video>`:c.id==="typelab"?`<img class="project-cover-image" src="${ne}" alt="TypeLab Compose interface with typography controls and a layout canvas" />`:be()}function we(c,d){const u=["bocil","typelab","brewtime","sustainopia","higher-hopes"].includes(c.id)?`#/work/${c.id}`:"#/work";return`
    <article class="project-card reveal" data-project="${c.id}" style="--delay:${d*70}ms">
      <a href="${u}" aria-label="View ${c.title} project">
        <div class="project-visual tone-${c.tone}">
          ${ce(c)}
        </div>
        <div class="project-info">
          <div class="project-title-row">
            <h3>${c.title}</h3>
            <div class="project-chips">${c.tags.map(l=>`<span>${l}</span>`).join("")}</div>
          </div>
          <p>${c.summary}</p>
        </div>
      </a>
    </article>`}function ke(){return`
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="work-intro reveal">
        <h1 id="work-title">I'm a multidisciplinary designer exploring the intersection of design, technology, and art.</h1>
        <p class="work-lead">With roots in architecture, my work spans product design,<br />interaction design, visual design, and illustration.</p>
      </div>
      <div class="project-grid">
        ${x.map(we).join("")}
      </div>
    </section>`}const $e="/assets/high-hopes-controls-CLn26D1d.mp4",Se="/assets/high-hopes-control-poster-UdTlb_Lk.png",Z="/assets/high-hopes-character-hand-BJVudU66.png",ee="/assets/high-hopes-character-hold-oegoJus5.png",xe="/assets/high-hopes-character-headStraight-BsDYcu9X.png",Be="/assets/high-hopes-character-headRight-NKbeTAlz.png",Te="/assets/high-hopes-character-headLeft-THQ6TuR9.png",Ce="/assets/high-hopes-character-handsUp-CTks02de.png",ie="/assets/high-hopes-character-arm-ByqoSsDR.png",Le="/assets/high-hopes-character-jump-CY8A15ZE.png",Ae="/assets/high-hopes-character-right-D4izFGt_.png",Ie="/assets/high-hopes-character-sit-C4qUvTsn.png",Pe="/assets/high-hopes-monkey-reference-BQI4xMtd.png",te="/assets/high-hopes-header-left-S0S1xR5d.png",Ee="/assets/high-hopes-header-middle-CIynMj9Z.png",ze="/assets/high-hopes-header-right-DpROh7FD.png",De="/assets/high-hopes-moss-top-D_c17ovh.png",Me="/assets/high-hopes-moss-bottom-BfzMj-i3.png",qe="/assets/high-hopes-tribute-D8a1G7PO.png",He="/assets/high-hopes-opening-story-CmNuFK_O.png",Fe="/assets/high-hopes-end-story-Bng7T_0N.png",Re="/assets/high-hopes-env-tree-tS1TJv_2.png",je="/assets/high-hopes-env-branch1-DxlfxKWM.png",Oe="/assets/high-hopes-env-branch2-BtqraLFS.png",Ue="/assets/high-hopes-env-branch3-CCOzyVuR.png",Ge="/assets/high-hopes-env-leaves1-nWXf9u9s.png",Ve="/assets/high-hopes-env-leaves2-BWlPZsGm.png",Ye="/assets/high-hopes-env-leaves3-CFJYYn_X.png",We="/assets/high-hopes-env-leaves4-55rQaOjU.png",Ne="/assets/high-hopes-env-rope1--3upIkCj.png",Xe="/assets/high-hopes-env-rope2-B9AdsMRl.png",_e="/assets/high-hopes-env-rope3-BoC2RPRV.png",Ke="/assets/high-hopes-env-ropestone-DL5r0c43.png",Je="/assets/high-hopes-env-crack1-BeYEo9-6.png",Qe="/assets/high-hopes-env-crack2-CkBEhxxL.png",Ze="/assets/high-hopes-env-crack3-VBr3VQFS.png",ei="/assets/high-hopes-helicopter-sky-Buc93Xtg.png",ii="/assets/high-hopes-fire-scene-CAOBBFV2.png",se="/assets/high-hopes-fire-ClJqeZw_.webp",ae="/assets/high-hopes-fire-background-DKgTnc0q.png",V="/assets/high-hopes-helicopter-CNhFGs8a.gif",ti="/assets/high-hopes-cliff1-Y1TVFThG.png",si="/assets/high-hopes-cliff2-DrbCC9wr.png",ai="/assets/high-hopes-cliff3-DcT0s5Hu.png",oi="/assets/high-hopes-ground-Csy35h5a.png",ni="/assets/high-hopes-stone1-BPYvk5l8.png",ri="/assets/high-hopes-stone2-yPjt3c05.png",li="/assets/high-hopes-stone3-ZCSvx2Pj.png",ci="/assets/high-hopes-grass1-SYiW-Azg.png",di="/assets/high-hopes-grass2-Bt9k3yjs.png",pi="/assets/high-hopes-grass3-BUP4k9KB.png",hi="/assets/high-hopes-grass4-DF5Keef3.png",gi="/assets/high-hopes-grass5-Bo_t8ckK.png",ui="/assets/high-hopes-scene-1-DEtzidTy.webp",mi="/assets/high-hopes-scene-2-0mXuk4cg.webp",vi="/assets/high-hopes-scene-3-CUYCWvWQ.webp";function L(){return`
    <footer class="bocil-footer">
      <p>Thanks for spending a moment here!</p>
      <p>© ${new Date().getFullYear()} Gabriella Dina Widieaster</p>
      <div class="bocil-footer-socials">
        <a href="https://www.linkedin.com/in/gabrielladinaw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 3.8a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.4 7.4h3.8V22H1.4V7.4ZM8 7.4h3.6v2h.1c.5-1 1.7-2.3 3.8-2.3 4 0 4.8 2.6 4.8 6V22h-3.8v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V22H8V7.4Z"/></svg></a>
        <a href="mailto:gabrielladina123@gmail.com" aria-label="Email Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
      </div>
    </footer>`}function D(c){const d=x.findIndex(l=>l.id===c);return`<section class="project-explorer bocil-shell" aria-label="Explore more projects">
    <h2>Keep exploring.<br /><span>See what else I’ve been working on.</span></h2>
    <div class="project-explorer-grid">
      ${[x[(d-1+x.length)%x.length],x[(d+1)%x.length]].map((l,h)=>`<a class="project-card" data-project="${l.id}" href="${["bocil","typelab","brewtime","sustainopia","higher-hopes"].includes(l.id)?`#/work/${l.id}`:"#/work"}" aria-label="Explore ${l.title}">
        <div class="project-visual tone-${l.tone}">${ce(l)}</div>
        <p>${h===0?"previous,":"next,"}<br /><strong>${l.title}</strong></p>
      </a>`).join("")}
    </div>
  </section>`}function bi(){return`
    <article class="bocil-case high-hopes-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media high-hopes-hero"><div class="bocil-image high-hopes-header-image"><img src="${te}" data-header-head-cycle data-head-left="${te}" data-head-middle="${Ee}" data-head-right="${ze}" alt="High Hopes game home screen with the monkey looking around" /></div></div>
        <div class="bocil-overview">
          <h1>High Hopes</h1>
          <p class="bocil-deck">A 2D climbing game about a monkey escaping a forest fire.</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>High Hopes was a game project where I took the lead on the visual experience, from shaping the art direction to designing the characters, environments, and gameplay assets, with additional work on the UI and storytelling.</p>
              <div class="bocil-briefs">
                <div><h2>Goal</h2><p>To create an engaging 2D game inspired by the theme &quot;Compact&quot;, combining simple mechanics with cohesive visual design.</p></div>
                <div><h2>Outcome</h2><p>Delivered a playable 2D climbing game in 10 days, featuring original characters, modular environments, animations, and UI.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Game Artist</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Timeline</dt><dd>10 days</dd></div>
              <div><dt>Team</dt><dd>1 PM, 1 Developer, 1 UI/UX Designer &amp; 1 Game Artist</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section class="bocil-dark high-hopes-art">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Art<br /><span>Direction</span></h2>
          <p>I developed a simple 2D illustration style with bold shapes, limited colour tones, and clear silhouettes to keep the game visually expressive while maintaining readability during gameplay.</p>
        </div>
      </section>
      <section class="high-hopes-character">
        <figure class="high-hopes-reference high-hopes-reference--corner"><img src="${Pe}" alt="Bornean orangutan hanging from a rope, the reference for the game character" /><svg class="hh-reference-arrow" viewBox="0 0 90 125" fill="none" aria-hidden="true"><path d="M25 112C80 110 106 38 30 13M30 13L47 6M30 13L39 29" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg><figcaption>Character<br />Reference</figcaption></figure>
        <div class="bocil-shell high-hopes-character-grid">
          <div class="high-hopes-character-copy">
            <h2>Character<br /><span>Design</span></h2>
            <p>I designed the monkey inspired by the Bornean orangutan, a species endemic to Borneo. I emphasised its long arms and simplified body shape to make its movements easy to follow, while separating its body parts to support in-game animation.</p>
          </div>
          <div class="high-hopes-character-media hh-character-sheet">
            <div class="hh-character-parts">
              <div class="hh-character-heads"><div><img src="${Te}" alt="Head facing left" loading="lazy" /><img src="${xe}" alt="Head facing forward" loading="lazy" /><img src="${Be}" alt="Head facing right" loading="lazy" /></div></div>
              <div class="hh-character-hands"><div><img src="${Z}" alt="Open hand" loading="lazy" /><img src="${ee}" alt="Gripping hand" loading="lazy" /><img src="${Z}" alt="Mirrored open hand" loading="lazy" class="hh-character-flipped" /><img src="${ee}" alt="Mirrored gripping hand" loading="lazy" class="hh-character-flipped" /></div></div>
              <div class="hh-character-arms"><div><img src="${ie}" alt="Arm segments" loading="lazy" /><img src="${ie}" alt="Mirrored arm segments" loading="lazy" class="hh-character-flipped" /></div></div>
            </div>
            <div class="hh-character-poses"><img src="${Ce}" alt="Monkey with both hands raised" loading="lazy" /><img src="${Ae}" alt="Monkey reaching right" loading="lazy" /><img src="${Le}" alt="Monkey jumping" loading="lazy" /><img src="${Ie}" alt="Monkey sitting" loading="lazy" /></div>
          </div>
        </div>
      </section>
      <section class="bocil-dark high-hopes-story">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Visual<br /><span>Storytelling</span></h2>
          <p>I developed the visual concepts and assets for the game’s storytelling sequences, from the opening narrative to the ending scene and final tribute, helping shape the game’s identity and bring its story to life.</p>
        </div>
        <div class="bocil-shell high-hopes-story-grid">
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${He}" alt="Opening story: the monkey escapes a forest fire to find help" loading="lazy" /></figure>
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${Fe}" alt="Ending story: the monkey finds a rescuer while reflecting on the loss of its home" loading="lazy" /></figure>
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${qe}" alt="A tribute to Kalimantan, its forests, wildlife and those who lost their home" loading="lazy" /></figure>
        </div>
      </section>
      <section class="high-hopes-environment">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Environment<br /><span>&amp; game assets</span></h2>
          <p>I created modular environments and gameplay assets that could be layered and repeated throughout the climb while keeping each part of the journey visually distinct.</p>
        </div>
        <div class="bocil-shell high-hopes-asset-sections">
          <section class="high-hopes-asset-group" aria-labelledby="terrain-title">
            <h3 class="typelab-system-label" id="terrain-title">01/Terrain &amp; Backgrounds</h3>
            <div class="high-hopes-asset-surface"><div class="bocil-shell">
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan>
              <div class="high-hopes-scene-track">
                <img src="${ui}" alt="High Hopes forest-fire climbing environment with cliff platforms and the monkey character" />
              </div>
            </div>
            <div class="hh-terrain-board hh-terrain-board--compact" aria-label="Cliffs, climbing stones, moss, ground and vegetation artwork">
              <img src="${ai}" alt="Cliff summit" loading="lazy" style="left:2.2%;top:6%;width:13%;height:51%;" />
              <img src="${si}" alt="Middle cliff" loading="lazy" style="left:18.8%;top:10%;width:12%;height:47%;" />
              <img src="${ti}" alt="Lower cliff" loading="lazy" style="left:35.4%;top:15%;width:14.5%;height:42%;" />
              <img src="${ni}" alt="Large climbing stone" loading="lazy" style="left:54.5%;top:11%;width:12%;height:16%;" />
              <img src="${ri}" alt="Medium climbing stone" loading="lazy" style="left:72%;top:11%;width:9%;height:14%;" />
              <img src="${li}" alt="Small climbing stone" loading="lazy" style="left:86%;top:11%;width:7%;height:13%;" />
              <img src="${De}" alt="Moss variations, first row" loading="lazy" style="left:55.5%;top:37%;width:18%;height:13%;" />
              <img src="${Me}" alt="Moss variations, second row" loading="lazy" style="left:75.5%;top:37%;width:21%;height:13%;" />
              <img src="${oi}" alt="Ground" loading="lazy" style="left:54.5%;top:57%;width:40.5%;height:9%;" />
              <img src="${ci}" alt="Tall vegetation" loading="lazy" style="left:2.2%;top:61%;width:12.5%;height:32%;" />
              <img src="${pi}" alt="Broad leaf vegetation" loading="lazy" style="left:18.8%;top:65%;width:12%;height:28%;" />
              <img src="${gi}" alt="Low vegetation" loading="lazy" style="left:32.3%;top:75%;width:27.3%;height:18%;" />
              <img src="${di}" alt="Small bush" loading="lazy" style="left:64.5%;top:81%;width:12.5%;height:12%;" />
              <img src="${hi}" alt="Small foliage cluster" loading="lazy" style="left:81.3%;top:77%;width:15.8%;height:16%;" />
            </div>
            </div></div>
          </section>
          <section class="high-hopes-asset-group" aria-labelledby="environment-title">
            <h3 class="typelab-system-label" id="environment-title">02/Environmental Assets</h3>
            <div class="high-hopes-asset-surface"><div class="bocil-shell">
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan>
              <div class="high-hopes-scene-track">
                <img src="${mi}" alt="High Hopes second climbing environment with ropes, cliff platforms and monkey characters" />
              </div>
            </div>
            <div class="hh-environment-board" aria-label="Tree, branches, foliage, ropes and cracking stone assets">
              <img src="${Re}" alt="tree1 game asset" loading="lazy" style="left:2%;top:3%;width:12%;height:97%;" />
              <img src="${je}" alt="Branch1 game asset" loading="lazy" style="left:13%;top:6%;width:6%;height:8%;" />
              <img src="${Oe}" alt="Branch2 game asset" loading="lazy" style="left:13%;top:17%;width:5%;height:13%;" />
              <img src="${Ue}" alt="Branch3 game asset" loading="lazy" style="left:13%;top:26%;width:19%;height:19%;" />
              <img src="${Ge}" alt="Leaves1 game asset" loading="lazy" style="left:16%;top:53%;width:9%;height:16%;" />
              <img src="${Ve}" alt="Leaves2 game asset" loading="lazy" style="left:16%;top:76%;width:8%;height:16%;" />
              <img src="${Ye}" alt="Leaves3 game asset" loading="lazy" style="left:26%;top:76%;width:10%;height:17%;" />
              <img src="${We}" alt="Leaves4 game asset" loading="lazy" style="left:27%;top:57%;width:7%;height:9%;" />
              <img src="${Ne}" alt="Rope1 game asset" loading="lazy" style="left:32%;top:8%;width:33%;height:26%;" />
              <img src="${Xe}" alt="Rope2 game asset" loading="lazy" style="left:37%;top:40%;width:26%;height:19%;" />
              <img src="${_e}" alt="Rope3 game asset" loading="lazy" style="left:44%;top:66%;width:3%;height:29%;" />
              <img src="${Ke}" alt="RopeStone game asset" loading="lazy" style="left:54%;top:70%;width:7%;height:8%;" />
              <img src="${Je}" alt="StoneCrack1 game asset" loading="lazy" style="left:68%;top:5%;width:30%;height:20%;" />
              <img src="${Qe}" alt="StoneCrack2 game asset" loading="lazy" style="left:70%;top:38%;width:22%;height:17%;" />
              <img src="${Ze}" alt="StoneCrack3 game asset" loading="lazy" style="left:71%;top:68%;width:19%;height:15%;" />
            </div>
            </div></div>
          </section>
          <section class="high-hopes-asset-group" aria-labelledby="additional-title">
            <h3 class="typelab-system-label" id="additional-title">03/Additional Environment Assets</h3>
            <div class="high-hopes-asset-surface"><div class="bocil-shell">
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan>
              <div class="high-hopes-scene-track">
                <img src="${vi}" alt="High Hopes third climbing environment with the cliff summit, rope platforms and monkey character" />
                <div class="high-hopes-scene-fire" aria-hidden="true"><img class="high-hopes-scene-fire-background" src="${ae}" alt="" /><img class="high-hopes-scene-fire-animation" src="${se}" alt="" /></div>
                <div class="high-hopes-helicopter-slot" data-helicopter-slot><img src="${V}" alt="Animated rescue helicopter flying above the cliff" /></div>
                <div class="high-hopes-helicopter-slot high-hopes-helicopter-slot--small"><img src="${V}" alt="Smaller animated rescue helicopter in the distance" /></div>
              </div>
            </div>
            <div class="high-hopes-animation-grid">
              <div><div class="high-hopes-animation high-hopes-fire-stage">
                <img class="high-hopes-fire-scene" src="${ii}" alt="" aria-hidden="true" />
                <img class="high-hopes-fire-background" src="${ae}" alt="" aria-hidden="true" />
                <img class="high-hopes-fire-frames" src="${se}" alt="Animated fire using thirteen hand-drawn frames" />
              </div></div>
              <div><div class="high-hopes-animation high-hopes-helicopter-stage" style="background-image: url('${ei}')">
                <img src="${V}" alt="Animated helicopter against the sky from the third game scene" />
              </div></div>
            </div>
            </div></div>
          </section>
        </div>
      </section>
      <section class="bocil-dark high-hopes-final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final art<br /><span>&amp; gameplay</span></h2>
          <p>Here’s how the characters, environments, animations, and interface came together in the final game.</p>
        </div>
        <div class="high-hopes-final-stage" aria-label="High Hopes game controls demonstration">
          <div class="high-hopes-gameplay high-hopes-control-player">
            <video poster="${Se}" autoplay muted loop playsinline preload="auto" data-controls-video src="${$e}" aria-label="High Hopes game controls demonstration"></video>
          </div>
        </div>
      </section>
    </article>
    ${D("higher-hopes")}
    ${L()}`}const yi="/assets/bocil-header-DluoAKXD.png",fi="/assets/bocil-history-BdtmNIuU.mp4",wi="/assets/bocil-solution-robot-CKRyj0qD.mp4",ki="/assets/bocil-homepage-BpmftuHf.png",$i="/assets/bocil-notification-D4vzl0MM.png",Si="/assets/bocil-calendar-C1sdgfqM.mp4",xi="/assets/bocil-focus-blurry-DOryg3wu.png",Bi="/assets/bocil-timer-D1rEnOip.png";function Ti(){return`
    <article class="bocil-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media"><div class="bocil-image"><img src="${ki}" alt="Bocil macOS application home screen" /></div></div>
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
        <img src="${yi}" alt="Bocil robot prototypes beside the macOS companion app" />
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
          <video autoplay muted loop playsinline preload="auto" aria-label="Bocil physical robot companions demonstration"><source src="${wi}" type="video/mp4" /></video>
        </div>
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
            <h2>Feature #1<br /><span>Productivity</span></h2>
            <p>Bocil turns conversations into actions, letting users create or update calendar events simply by talking. Upcoming events are synced to the desktop app with reminders when it’s time.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row" data-grain-media>
          <figure class="bocil-notification-panel"><div class="bocil-image"><img src="${$i}" alt="Bocil calendar reminders in Notification Center" /></div></figure>
          <figure class="bocil-calendar-panel"><div class="bocil-image"><video autoplay muted loop playsinline preload="auto" aria-label="Bocil calendar and productivity demonstration"><source src="${Si}" type="video/mp4" /></video></div></figure>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Focus</span></h2>
          <p>Bocam (Bocil Camera) turns Bocil into a focus companion, letting users set their own focus timer while Bocil keeps them on track. If users reach for their phone, Bocil notices and responds to bring their attention back.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row bocil-focus-media" data-grain-media>
          <figure><div class="bocil-image"><img src="${Bi}" alt="Bocil focus timer interface" /></div></figure>
          <figure><div class="bocil-image"><img src="${xi}" alt="Bocam focus session interface with visual focus feedback" /></div></figure>
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
              <source src="${fi}" type="video/mp4" />
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
            <video autoplay muted loop playsinline preload="auto" aria-label="Bocil macOS home screen demonstration"><source src="${re}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </article>
    ${D("bocil")}
    ${L()}`}const oe="/assets/brewtime-list-BqYdrzOP.png",Ci="/assets/brewtime-edit-BnEzW-M7.png",Li="/assets/brewtime-timer-Bodybwni.mp4",Ai="/assets/brewtime-custom-recipe-kQXP5dBu.mp4",Ii="/assets/brewtime-prototype-DbxP79uu.png",Pi="/assets/brewtime-recipe-menu-BDC5Tnzv.png";function Ei(){return`
    <article class="bocil-case brewtime-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media brewtime-hero-media">
          <div class="brewtime-screens">
            <img src="${oe}" alt="BrewTime recipe list with V60 selected" />
            <img src="${C}" alt="BrewTime V60 timer guiding the Bloom brewing step" />
            <img src="${Ci}" alt="BrewTime recipe editor with ingredients and brewing steps" />
          </div>
        </div>
        <div class="bocil-overview">
          <h1>BrewTime</h1>
          <p class="bocil-deck">An iOS app for creating coffee recipes and guiding each step of the brewing process.</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>BrewTime is an iOS app for creating coffee recipes and guiding each brewing step with built-in timers. In this project, I focused on learning SwiftUI and exploring timer-based interactions.</p>
              <div class="bocil-briefs">
                <div><h2>Goal</h2><p>How might we turn a multi-step coffee recipe into a simple guided timer experience?</p></div>
                <div><h2>Outcome</h2><p>A working iOS prototype that guides users through each step of their coffee recipe.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Role</dt><dd>Product designer<br />&amp; developer</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Timeline</dt><dd>14 days</dd></div>
              <div><dt>Team</dt><dd>2 Developers</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section class="bocil-dark bocil-insights">
        <div class="bocil-shell bocil-insights-grid">
          <div>
            <h2>Concept, design<br /><span>&amp; coded prototype<br />in 2 weeks</span></h2>
            <p>With a small team, we kept the process quick and hands-on, moving between understanding the brewing flow, designing the experience, and building it directly in SwiftUI.</p>
          </div>
          <ol class="bocil-insight-list">
            <li><span>01</span><div><h3>Week 1: Brewing flow,<br />concept &amp; interface design</h3><p>My partner and I explored the coffee brewing process, mapped out the user flow, and designed the interface around recipe creation and step-by-step brewing.</p></div></li>
            <li><span>02</span><div><h3>Week 2: SwiftUI development,<br />timer logic &amp; iteration</h3><p>I focused on learning SwiftUI through hands-on coding, particularly building timer logic, managing brewing steps, and translating our designs into functional interactions.</p></div></li>
          </ol>
        </div>
      </section>
      <section class="brewtime-guided">
        <div class="bocil-shell brewtime-guided-grid">
          <div class="brewtime-guided-copy">
            <h2>Feature #1<br /><span>Guided Timer</span></h2>
            <p>The timer was the main interaction I wanted to explore. Each brewing step has its own duration and automatically moves into the next, so users can focus on brewing instead of managing the timing themselves.</p>
          </div>
          <div class="brewtime-timer-panel">
            <video data-playback-rate="0.75" autoplay muted loop playsinline preload="metadata" poster="${C}" aria-label="BrewTime guided timer demonstration"><source src="${Li}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
      <section class="brewtime-guided brewtime-custom">
        <div class="bocil-shell brewtime-guided-grid">
          <div class="brewtime-guided-copy">
            <h2>Feature #2<br /><span>Custom Recipes</span></h2>
            <p>Not every coffee follows the same recipe, so we wanted users to have room to adjust their own. They can customize the brewing method, measurements, and steps, then save the recipe for the next brew.</p>
          </div>
          <div class="brewtime-timer-panel">
            <video data-playback-rate="0.75" autoplay muted loop playsinline preload="metadata" poster="${C}" aria-label="BrewTime custom recipe creation and editing demonstration"><source src="${Ai}" type="video/mp4" /></video>
            <div class="brewtime-recipe-menu"><img src="${Pi}" alt="BrewTime menu with Edit Recipe and Add Recipe options" /></div>
          </div>
        </div>
      </section>
      <section class="bocil-feature brewtime-prototype">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>I focused on developing the timer in SwiftUI, exploring how to handle multiple timed steps, manage state changes, and create smooth transitions throughout the brewing process.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${Ii}" alt="BrewTime timer prototype in Xcode showing SwiftUI code and the V60 timer preview" /></div>
        </div>
      </section>
      <section class="bocil-feature brewtime-final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design<br /><span>&amp; coded prototype</span></h2>
          <p>The final prototype brings the recipe setup and guided timer together into a working iOS brewing experience.</p>
        </div>
        <div class="brewtime-final-showcase" aria-label="BrewTime final recipe list, guided timer, and recipe editor">
          <img class="brewtime-final-list" src="${oe}" alt="BrewTime recipe selection" />
          <img class="brewtime-final-timer" src="${C}" alt="BrewTime guided brewing timer" />
          <div class="brewtime-final-edit"><img src="${le}" alt="BrewTime recipe steps 3 and 4, Add Step, total brew time, and Delete Recipe" /></div>
        </div>
      </section>
    </article>
    ${D("brewtime")}
    ${L()}`}const zi="/assets/typelab-prototype-coding-B8oBNLBW.png",Di="/assets/typelab-final-mockup-composited-DTaKMWwd.png",Mi="/assets/typelab-system-preview-ssFIE1uV.png",qi="/assets/typelab-system-compare-BIkm5fJj.png",Hi="/assets/typelab-compose-guidelines-jE7D_rcj.png",Fi="/assets/typelab-compose-style-B1TuQ9_k.png",Ri="/assets/typelab-canvas-clean-CmtsmiEn.mp4",ji="/assets/typelab-system-clean-BgYkVVjA.mp4";function Oi(){return`
    <article class="bocil-case typelab-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media typelab-hero-media"><div class="bocil-image"><img src="${ne}" alt="TypeLab Compose interface with typography controls and a layout canvas" /></div></div>
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
            <figure class="typelab-system-screenshot"><img src="${Mi}" alt="TypeLab System Preview showing type hierarchy, scale, font pairing, and style controls" /></figure>
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
            <figure class="typelab-system-screenshot"><img src="${qi}" alt="TypeLab Compare showing SF Pro and Courier New side by side with controls for each text role" /></figure>
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
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab System Setup demonstration"><source src="${ji}" type="video/mp4" /></video>
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
            <div class="typelab-compose-guidelines"><img src="${Hi}" alt="TypeLab layout guidelines menu with column, margin, and gutter controls" /></div>
            <img class="typelab-compose-style" src="${Fi}" alt="TypeLab style menu with typography and alignment controls" />
          </figure>
          <figure class="typelab-compose-video">
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab Compose canvas demonstration"><source src="${Ri}" type="video/mp4" /></video>
          </figure>
        </div>
      </section>

      <section class="bocil-dark bocil-feature bocil-feature--personal">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>Coding TypeLab was a big part of the exploration for me. I built the app in SwiftUI, which pushed me to translate the typography rules I had been learning into actual behaviours and controls that worked in a real product.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${zi}" alt="TypeLab SwiftUI prototype in Xcode with an iPad preview of the typography system" /></div>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design and<br /><span>coded prototype</span></h2>
          <p>The final prototype brings System Setup and Compose together, letting users build a type system and immediately experiment with it on a flexible canvas.</p>
        </div>
        <div class="bocil-final-showcase typelab-final-showcase">
          <div class="bocil-image typelab-final-image"><img src="${Di}" alt="TypeLab Compose interface on a graphite iPad beside an Apple Pencil on a gray concrete tabletop" /></div>
        </div>
      </section>
    </article>
    ${D("typelab")}
    ${L()}`}const Ui="/assets/sustainopia-communal-B8VwNRr5.png",Gi="/assets/sustainopia-picnic-Bi48C5Gs.png",Vi="/assets/sustainopia-pet-qXH5_Nxe.png",Yi="/assets/sustainopia-birdeye-U55hHNZT.png",Wi="/assets/sustainopia-title-BlCZlE2X.png",Ni="/assets/sustainopia-hero-C8-UpBDy.png",Xi="/assets/sustainopia-header-top-view-BrwGWYkG.png",_i="/assets/sustainopia-site-plan-B7mkyY08.png",Ki="/assets/sustainopia-challenge-1-C2Ya16jg.png",Ji="/assets/sustainopia-challenge-2-BqfA-xFQ.png",Qi="/assets/sustainopia-challenge-3-CxKvQr-v.png",Zi="/assets/sustainopia-challenge-4-TEDcQ9KV.png",et="/assets/sustainopia-concept-1-D_uDiaHC.png",it="/assets/sustainopia-concept-2-BzYtPmpp.png",tt="/assets/sustainopia-concept-3-Cp9MD3E_.png",st="/assets/sustainopia-strategy-1-8-h7c8K5.png",at="/assets/sustainopia-strategy-2-D3lZ0c54.png",ot="/assets/sustainopia-strategy-3-B2JWUg7T.png",nt="/assets/sustainopia-strategy-4-CSua5LLa.png",rt="/assets/sustainopia-strategy-5-DxwkmFJ4.png",lt="/assets/sustainopia-strategy-6-BlFbpiGN.png",ct="/assets/sustainopia-final-site-plan-CKm_sCBG.png",dt="/assets/sustainopia-drawing-1-CNRsQfWQ.png",pt="/assets/sustainopia-drawing-2-uN5p68iD.png",ht="/assets/sustainopia-drawing-3-B6hoFR86.png",gt="/assets/sustainopia-drawing-4-CM7vSdPH.png";function ut(){const c=[[dt,"01 — Rainwater Harvesting + Pond Area Details"],[pt,"02 — Vegetation and Animals Mapping"],[ht,"03 — Section 1: Cross Section"],[gt,"04 — Section 2: Longitudinal Section"]];return`
    <article class="bocil-case sustainopia-case">
      <section class="bocil-hero bocil-shell">
        <figure class="bocil-hero-media sustainopia-hero-media">
          <img src="${Xi}" alt="Top view of Sustainopia’s circular public spaces, gardens, and green paths" fetchpriority="high" />
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
            <img src="${_i}" alt="Exploded site analysis showing road access, edge vegetation, and commercial and residential buildings around the site" loading="lazy" />
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
            ${[[Ki,"Limited green<br />space","Buildings and roads with very little greenery"],[Ji,"Unprocessed water<br />causes mosquito","Standing water providing a breeding ground for mosquitoes"],[Qi,"Lack of<br />Social Spaces","People isolated in separate outdoor spaces"],[Zi,"Limited<br />Pet-Friendly Areas","A pet owner facing restrictions on pets in public spaces"]].map(([d,u,l],h)=>`
              <li>
                <div class="sustainopia-challenge-art"><img src="${d}" alt="${l}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(h+1).padStart(2,"0")}</span><h3>${u}</h3></div>
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
            ${[[et,"Sustainable<br />nature","A green habitat with trees, a pond, birds, and urban wildlife"],[it,"Sense of<br />Community","People and pets sharing an inclusive communal space"],[tt,"Physical<br />well being","People exercising in three connected circular spaces"]].map(([d,u,l],h)=>`
              <li>
                <div class="sustainopia-concept-art"><img src="${d}" alt="${l}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(h+1).padStart(2,"0")}</span><h3>${u}</h3></div>
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
            ${[[st,"Natural Mosquito-<br />Repellent Plants","Planting around outdoor spaces to naturally repel mosquitoes"],[at,"Communal<br />Area","Shaded communal seating and tables for people to gather"],[ot,"Jogging<br />Track","A tree-lined jogging route connecting outdoor activities"],[nt,"Rainwater<br />Harvesting","Sculptural rainwater collectors connected to underground storage"],[rt,"Pet Friendly<br />Area","An outdoor area with play equipment for pets and their owners"],[lt,"Fitness<br />Ground","Outdoor fitness equipment and exercise areas among trees"]].map(([d,u,l])=>`
              <li>
                <div class="sustainopia-strategy-art"><img src="${d}" alt="${l}" loading="lazy" /></div>
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
            <figure class="sustainopia-plan-image"><img src="${ct}" alt="Sustainopia final site plan with numbered locations for entrances, communal spaces, rainwater harvesting, pet areas, paths, and fitness facilities" loading="lazy" /></figure>
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
            ${[!1,!0].map(d=>`
              <div class="sustainopia-drawings-group"${d?' aria-hidden="true"':""}>
                ${c.map(([u,l])=>`<button class="sustainopia-zoom-trigger" type="button" data-zoom-src="${u}" data-zoom-label="${l}" aria-label="Enlarge ${l}"${d?' tabindex="-1"':""}><img src="${u}" alt="${d?"":l}" loading="eager" draggable="false" /></button>`).join("")}
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
            ${[!1,!0].map(d=>`<div class="sustainopia-render-group"${d?' aria-hidden="true"':""}>
              ${[[Ui,"Communal area"],[Gi,"Picnic &amp; fitness area"],[Vi,"Pet park area"],[Yi,"Bird-eye view perspective"]].map(([u,l])=>`<figure>
                <button type="button" class="sustainopia-zoom-trigger" data-zoom-src="${u}" data-zoom-label="${l}" aria-label="Enlarge ${l}"${d?' tabindex="-1"':""}><img src="${u}" alt="${l}" draggable="false" /></button>
                <figcaption>${l}</figcaption>
              </figure>`).join("")}
            </div>`).join("")}
          </div>
        </div>
        <figure class="sustainopia-ending">
          <img class="sustainopia-ending-photo" src="${Ni}" alt="Sustainopia park aerial rendering" loading="lazy" />
          <img class="sustainopia-ending-title" src="${Wi}" alt="Sustainopia" loading="lazy" />
        </figure>
      </section>
      ${L()}
      <dialog class="sustainopia-lightbox" aria-label="Enlarged project image">
        <button type="button" class="sustainopia-lightbox-close" aria-label="Close enlarged image"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></button>
        <div class="sustainopia-lightbox-scroll"><img alt="" /></div>
        <p class="sustainopia-lightbox-caption"></p>
      </dialog>
    </article>`}function mt(){return`
    <section class="playground shell" id="playground" aria-label="Playground"></section>`}function vt(){return`
    <section class="about shell" id="about" aria-labelledby="about-title">
      <h2 class="reveal" id="about-title">Hi I'm Gabs</h2>
    </section>`}let w;function bt(c="home"){w?.abort(),w=new AbortController,document.querySelectorAll("video[data-playback-rate]").forEach(e=>{const i=Number(e.dataset.playbackRate);Number.isFinite(i)&&i>0&&(e.defaultPlaybackRate=i,e.playbackRate=i)}),document.querySelectorAll("video[data-controls-video]").forEach(e=>{e.muted=!0,e.defaultMuted=!0;const i=()=>e.play().catch(()=>{});e.addEventListener("canplay",i,{signal:w.signal});const r=new IntersectionObserver(o=>{o.some(n=>n.isIntersecting)&&i()},{threshold:.1});r.observe(e),w.signal.addEventListener("abort",()=>r.disconnect(),{once:!0}),i()}),document.querySelectorAll("[data-header-head-cycle]").forEach(e=>{const i=w.signal,r={left:e.dataset.headRight,middle:e.dataset.headMiddle,right:e.dataset.headLeft};let o="middle";const n=a=>{o===a&&e.getAttribute("src")===r[a]||(o=a,e.src=r[a])};n("middle"),Object.values(r).forEach(a=>{const s=new Image;s.src=a,s.decode().catch(()=>{})}),window.addEventListener("pointermove",a=>{if(a.pointerType==="touch")return;const s=e.getBoundingClientRect();if(s.bottom<0||s.top>window.innerHeight)return;const t=s.left+s.width*.433,p=s.width*.055;n(a.clientX<t-p?"left":a.clientX>t+p?"right":"middle")},{passive:!0,signal:i}),document.documentElement.addEventListener("pointerleave",()=>n("middle"),{signal:i}),window.addEventListener("blur",()=>n("middle"),{signal:i})});const d=document.querySelector("[data-header]"),u=document.querySelector(".menu-button"),l=document.querySelector(".main-nav");u?.addEventListener("click",()=>{const e=d.classList.toggle("menu-open");u.setAttribute("aria-expanded",String(e)),u.querySelector(".menu-glyph").textContent=e?"−":"+"});const h=[...l?.querySelectorAll("a")??[]],v=e=>{h.forEach(i=>{const r=i===e;i.classList.toggle("is-active",r),r?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")})},B=["bocil","typelab","brewtime","sustainopia","higher-hopes"].includes(c)?"work":c;v(h.find(e=>e.dataset.route===B)),h.forEach(e=>e.addEventListener("click",()=>{v(e),d.classList.remove("menu-open"),u.setAttribute("aria-expanded","false"),u.querySelector(".menu-glyph").textContent="+"}));const Y=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),Y.unobserve(i.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>Y.observe(e));const W=document.querySelector("[data-year]");W&&(W.textContent=new Date().getFullYear());const y=document.querySelector("[data-loop-gallery]"),k=[...document.querySelectorAll("[data-loop-panel]")];let A=0,M=0,q;const H=()=>{A+=(M-A)*.12,k.forEach((e,i)=>{const r=((i-A)%k.length+k.length)%k.length;e.style.setProperty("--slot",r.toFixed(3)),e.style.zIndex=String(Math.round((k.length-r)*10))}),Math.abs(M-A)>.001&&(q=requestAnimationFrame(H))},I=e=>{M+=e,cancelAnimationFrame(q),q=requestAnimationFrame(H)};if(y){const e=y.querySelector("[data-gallery-title]"),i=y.querySelector("[data-gallery-chips]"),r=t=>{e&&(e.textContent=t.dataset.projectTitle),i&&(i.innerHTML=t.dataset.projectTags.split("|").map(p=>`<span>${p}</span>`).join(""),i.classList.add("is-visible"))},o=()=>{e&&(e.textContent=e.dataset.defaultTitle),i&&(i.classList.remove("is-visible"),i.innerHTML="")};let n=null;const a=t=>{n!==t&&(n?.classList.remove("is-hovered"),n=t,n?.classList.add("is-hovered"),n?r(n):o())};y.addEventListener("pointermove",t=>{const p=k.map(g=>({panel:g,rect:g.getBoundingClientRect()})).filter(({rect:g})=>t.clientX>=g.left&&t.clientX<=g.right&&t.clientY>=g.top&&t.clientY<=g.bottom).sort((g,S)=>t.clientY-g.rect.top-(t.clientY-S.rect.top));a(p[0]?.panel??null)}),y.addEventListener("pointerleave",()=>a(null)),k.forEach(t=>{t.addEventListener("focus",()=>a(t)),t.addEventListener("blur",()=>a(null))}),y.addEventListener("wheel",t=>{t.preventDefault(),a(null),I(t.deltaY*.0032)},{passive:!1});let s=0;y.addEventListener("touchstart",t=>{a(null),s=t.touches[0].clientY},{passive:!0}),y.addEventListener("touchmove",t=>{const p=t.touches[0].clientY;I((s-p)*.012),s=p},{passive:!0}),y.addEventListener("keydown",t=>{["ArrowDown","ArrowRight"].includes(t.key)&&I(.8),["ArrowUp","ArrowLeft"].includes(t.key)&&I(-.8)}),H()}const P=document.querySelector("[data-keychain-scene]"),$=document.querySelector("[data-keychain-object]");if(P&&$){const e=[...$.querySelectorAll("[data-keychain-card]")];let i=null;const r=o=>{if(i===o)return;i=o;const n=o?Number(o.dataset.cardIndex):null;e.forEach((a,s)=>{if(a.classList.toggle("is-active",a===o),!o){["--live-angle","--live-shift","--live-y","--live-z"].forEach(p=>a.style.removeProperty(p)),a.style.zIndex="";return}const t=s-n;a.style.setProperty("--live-angle",`${t*11}deg`),a.style.setProperty("--live-shift",`${t*9}px`),a.style.setProperty("--live-y",a===o?"-10px":`${Math.abs(t)*3}px`),a.style.setProperty("--live-z",a===o?"85px":`${-Math.abs(t)*12}px`),a.style.zIndex=a===o?"45":String(20-Math.abs(t))})};P.addEventListener("pointermove",o=>{const n=P.getBoundingClientRect(),a=(o.clientX-n.left)/n.width-.5,s=(o.clientY-n.top)/n.height-.5;$.style.setProperty("--key-rx",`${s*-7}deg`),$.style.setProperty("--key-ry",`${a*9}deg`);const t=document.elementFromPoint(o.clientX,o.clientY)?.closest("[data-keychain-card]");t&&$.contains(t)&&r(t)}),P.addEventListener("pointerleave",()=>{$.style.setProperty("--key-rx","0deg"),$.style.setProperty("--key-ry","0deg"),r(null)}),e.forEach(o=>{o.addEventListener("focus",()=>r(o)),o.addEventListener("blur",()=>r(null))})}const F=document.querySelector("[data-paper-deck]"),R=[...document.querySelectorAll("[data-paper-sheet]")];let j;const N=()=>{const e=window.innerHeight,i=F?.getBoundingClientRect(),r=Math.max(1,(F?.offsetHeight??e)-e),o=Math.max(0,Math.min(1,-(i?.top??0)/r)),n=Math.max(e*.95,760);R.forEach((a,s)=>{const t=s===0?1:Math.max(0,Math.min(1,o*(R.length-1)-(s-1))),p=1-Math.pow(1-t,3),g=s%2?1:-1;a.style.setProperty("--paper-y",`${(1-p)*n}px`),a.style.setProperty("--paper-turn",`${(1-p)*g*1.1}deg`),a.style.zIndex=String(s+2)}),j=void 0},X=()=>{j||(j=requestAnimationFrame(N))};F&&R.length&&(N(),window.addEventListener("scroll",X,{passive:!0}),window.addEventListener("resize",X,{passive:!0})),window.__pencilTrailAbort?.abort();const E=document.querySelector("[data-pencil-trail]"),pe=window.matchMedia("(hover: hover) and (pointer: fine)").matches,_=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(E&&pe&&!_){const e=E.getContext("2d"),i=[],r=new AbortController;window.__pencilTrailAbort=r;let o;const n=()=>{const s=Math.min(window.devicePixelRatio||1,2);E.width=Math.round(window.innerWidth*s),E.height=Math.round(window.innerHeight*s),e.setTransform(s,0,0,s,0,0)},a=()=>{e.clearRect(0,0,window.innerWidth,window.innerHeight),e.lineCap="round",e.lineJoin="round";for(let s=1;s<i.length;s+=1){const t=i[s-1],p=i[s],g=Math.min(t.life,p.life);e.strokeStyle=`rgba(255,255,255,${g*.7})`,e.lineWidth=.72+g*.38,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(p.x,p.y),e.stroke(),e.strokeStyle=`rgba(255,255,255,${g*.22})`,e.lineWidth=.45,e.beginPath(),e.moveTo(t.x+t.offset,t.y-t.offset),e.lineTo(p.x+p.offset,p.y-p.offset),e.stroke()}for(i.forEach(s=>{s.life-=.035});i[0]?.life<=0;)i.shift();i.length?o=requestAnimationFrame(a):o=void 0};document.addEventListener("pointermove",s=>{const t=i.at(-1);t&&Math.hypot(s.clientX-t.x,s.clientY-t.y)<2.5||(i.push({x:s.clientX,y:s.clientY,life:1,offset:(Math.random()-.5)*1.5}),i.length>42&&i.shift(),o||(o=requestAnimationFrame(a)))},{passive:!0,signal:r.signal}),window.addEventListener("resize",n,{passive:!0,signal:r.signal}),n()}const K=d.querySelector(".brand"),J=document.querySelector(".bocil-case .bocil-hero"),O=document.querySelector(".typelab-compose-media"),U=document.querySelector(".texture"),G=()=>{d.classList.toggle("is-scrolled",window.scrollY>30);const e=!!(J&&J.getBoundingClientRect().bottom<=d.getBoundingClientRect().bottom);if(K.classList.toggle("is-project-back",e),K.setAttribute("aria-label",e?"Back to Work":"Go to work"),O&&U){const i=O.getBoundingClientRect(),r=O.querySelector(".typelab-compose-style"),o=Math.min(i.top,r?.getBoundingClientRect().top??i.top),n=a=>Math.max(0,Math.min(window.innerHeight,a));U.style.setProperty("--compose-texture-top",`${n(o)}px`),U.style.setProperty("--compose-texture-bottom",`${n(i.bottom)}px`)}};window.addEventListener("scroll",G,{passive:!0,signal:w.signal}),window.addEventListener("resize",G,{passive:!0,signal:w.signal}),G();const he=[...document.querySelectorAll(".sustainopia-drawings-track, .sustainopia-render-track")],f=w.signal;he.forEach(e=>{const i=e.parentElement,r=e.classList.contains("sustainopia-drawings-track")?150:120;let o=0,n,a,s=!1,t=!1;const p=()=>{t||(s=!0)},g=()=>{s=!1,t=!1};i.addEventListener("pointerenter",p,{signal:f}),i.addEventListener("pointerleave",g,{signal:f}),i.addEventListener("pointermove",()=>{t=!1,s=!0},{signal:f}),i.addEventListener("keydown",b=>{b.key==="Tab"&&(s=!0)},{signal:f}),i.addEventListener("focusout",b=>{i.contains(b.relatedTarget)||g()},{signal:f}),i.addEventListener("galleryresume",()=>{s=!1,t=!0,i.scrollLeft=0},{signal:f});const S=b=>{const z=n===void 0?0:Math.min((b-n)/1e3,.05);if(n=b,!s&&!document.body.classList.contains("sustainopia-modal-open")){const T=e.firstElementChild.getBoundingClientRect().width;T>0&&(o=(o+z*r)%T),e.style.setProperty("--gallery-offset",`${-o}px`)}a=requestAnimationFrame(S)};a=requestAnimationFrame(S),f.addEventListener("abort",()=>cancelAnimationFrame(a),{once:!0})}),document.querySelectorAll("[data-scene-pan]").forEach(e=>{const i=e.querySelector(".high-hopes-scene-track"),r=i.firstElementChild,o=120;let n,a=-1,s=1,t,p,g=0;const S=()=>{g=Math.max(0,r.getBoundingClientRect().height-e.getBoundingClientRect().height-.5)},b=new ResizeObserver(S);b.observe(e),b.observe(r);const z=T=>{const Q=t===void 0?0:Math.min((T-t)/1e3,.05);if(t=T,r.complete&&r.naturalHeight>0){if(n===void 0?(n=g,s=1):n=Math.min(n,g),!document.hidden&&!_&&g>0){const ge=Math.max(0,Q-s);s=Math.max(0,s-Q),n+=a*ge*o,n<=0&&(n=0,a=1),n>=g&&a===1&&(n=g,a=-1,s=1)}i.style.transform=`translate3d(0, ${-n}px, 0)`}p=requestAnimationFrame(z)};r.decode().then(()=>{f.aborted||(S(),p=requestAnimationFrame(z))}).catch(()=>{}),f.addEventListener("abort",()=>{cancelAnimationFrame(p),b.disconnect()},{once:!0})});const m=document.querySelector(".sustainopia-lightbox");if(m){let e;document.querySelectorAll(".sustainopia-zoom-trigger").forEach(i=>{i.addEventListener("click",()=>{e=i,m.classList.toggle("is-render",!!i.closest(".sustainopia-render-window"));const r=m.querySelector("img");r.src=i.dataset.zoomSrc,r.alt=i.dataset.zoomLabel,m.querySelector(".sustainopia-lightbox-caption").textContent=i.dataset.zoomLabel,m.querySelector(".sustainopia-lightbox-scroll").scrollTo(0,0),m.classList.remove("is-zoomed"),m.showModal(),document.body.classList.add("sustainopia-modal-open")})}),m.querySelector(".sustainopia-lightbox-close").addEventListener("click",()=>m.close()),m.addEventListener("click",i=>{i.target===m&&m.close()}),m.querySelector("img").addEventListener("click",()=>m.classList.toggle("is-zoomed")),m.addEventListener("close",()=>{document.body.classList.remove("sustainopia-modal-open");const i=e?.closest(".sustainopia-drawings-window, .sustainopia-render-window"),r=()=>{const o=document.activeElement;(i?.contains(o)||o===i)&&o.blur()};r(),requestAnimationFrame(r),i?.dispatchEvent(new Event("galleryresume"))})}}const yt={work:()=>ke(),bocil:()=>Ti(),"higher-hopes":()=>bi(),typelab:()=>Oi(),brewtime:()=>Ei(),sustainopia:()=>ut(),playground:()=>mt(),about:()=>vt()};function ft(){return{"#/work/higher-hopes":"higher-hopes","#/work/high-hopes":"higher-hopes","#/work/bocil":"bocil","#/work/typelab":"typelab","#/work/brewtime":"brewtime","#/work/sustainopia":"sustainopia","#/playground":"playground","#/about":"about"}[location.hash]||"work"}function de(){const c=ft(),d=c==="work"||c==="about";document.querySelector("#app").innerHTML=`
    ${ue()}
    <main class="page page-${c}">${yt[c]()}</main>
    ${d?'<canvas class="pencil-trail" aria-hidden="true" data-pencil-trail></canvas>':""}
    <div class="texture" aria-hidden="true"></div>`,document.body.dataset.route=c,window.scrollTo(0,0),bt(c)}window.addEventListener("hashchange",de);de();
