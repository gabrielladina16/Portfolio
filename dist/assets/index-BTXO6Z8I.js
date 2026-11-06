(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const w of p.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&l(w)}).observe(document,{childList:!0,subtree:!0});function t(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerPolicy&&(p.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?p.credentials="include":r.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(r){if(r.ep)return;r.ep=!0;const p=t(r);fetch(r.href,p)}})();function Be(){return`
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
        <a href="#/about" data-route="about">About</a>
      </nav>
    </header>`}const Se=[{id:"adapenyu",archived:!0,number:"01",title:"AdaPenyu",summary:"A sea turtle identification app that helps conservators recognise individuals and track their lives over time.",tags:["Product Design","UI/UX","Research"],tone:"ocean"},{id:"typelab",number:"02",title:"TypeLab",summary:"A typography playground for building type systems and exploring them in real layouts.",tags:["Product Design","Typography","UI/UX"],tone:"neutral"},{id:"higher-hopes",number:"03",title:"High Hopes",summary:"A 2D climbing game about a monkey escaping a forest fire.",tags:["Illustration","Game Art","UI/UX"],tone:"brown"},{id:"bocil",number:"04",title:"Bocil",summary:"A macOS companion app for an interactive robot designed to make working alone feel less lonely.",tags:["Product Design","UI/UX","IoT"],tone:"sky"},{id:"brewtime",number:"05",title:"BrewTime",summary:"A step-based coffee timer that guides brewers through every stage of their recipe.",tags:["UI/UX","Interaction Design","iOS"],tone:"sage"},{id:"grab",number:"06",title:"Grab Works",summary:"A collection of visual designs for Grab Indonesia, spanning campaigns, merchandise, and branding.",tags:["Visual Design","Branding","Marketing"],tone:"grab"},{id:"sustainopia",number:"07",title:"Sustainopia",summary:"An architectural project exploring how sustainable design can shape a more connected way of living.",tags:["Architecture","Urban Design","2D Design","3D Modelling"],tone:"moss"}],ee=Se.filter(o=>!o.archived),xe="/assets/high-hopes-homepage-left-BMaBYnxb.png",Ce="/assets/high-hopes-homepage-right-PdWiy8Tq.png";function Ae(){return`
    <div class="placeholder-ui" aria-hidden="true">
      <div class="placeholder-window">
        <div class="window-bar"><i></i><i></i><i></i></div>
        <div class="window-body">
          <div class="ui-copy"><b></b><b></b><b></b></div>
          <div class="ui-image"></div>
        </div>
      </div>
    </div>`}const ye="/assets/typelab-compose-B5ylhK3u.png",we="/assets/typelab-canvas-clean-CmtsmiEn.mp4",Te="/assets/typelab-canvas-clean-ClltznX_.jpg",fe="/assets/bocil-home-screen-Drny_6mM.mp4",Ee="/assets/bocil-home-screen-DGEQ0Pqi.jpg",De="/assets/sustainopia-cover-BNoD2a8C.png",Q="/assets/brewtime-timer-BdLNZY1J.png",Le="/assets/brewtime-home-timer-CFYkQiFd.mp4",_e="/assets/brewtime-recipe-bottom-reference-BGoThO9W.png",oe="/assets/grab-card-1-DZK0YQ_q.png",ne="/assets/grab-card-2-CHE_D2iS.png";function ke(o,n=!1){if(o.id==="grab")return`<div class="grab-cover"><div class="grab-cover-card"><img class="grab-cover-face grab-cover-front" src="${oe}" alt="GrabMerchant e-money card featuring a merchant handing an order to a delivery driver" /><img class="grab-cover-face grab-cover-back" src="${ne}" alt="" aria-hidden="true" /></div></div>`;if(o.id==="higher-hopes")return`<div class="high-hopes-home-cover"><img class="high-hopes-cover-default" src="${xe}" alt="High Hopes monkey at the foot of a cliff during a forest fire" /><img class="high-hopes-cover-hover" src="${Ce}" alt="" aria-hidden="true" /></div>`;if(o.id==="brewtime")return`<div class="brewtime-cover"><div class="brewtime-cover-timer"><video autoplay muted loop playsinline preload="metadata" poster="${Q}" aria-label="BrewTime guided brewing timer demonstration"><source src="${Le}" type="video/mp4" /></video></div><div class="brewtime-cover-recipe"><img src="${_e}" alt="BrewTime recipe steps and editing controls" /></div></div>`;if(o.id==="sustainopia"){const l=`<img class="project-cover-photo" src="${De}" alt="Sustainopia architectural rendering of landscaped circular public spaces" />`;return n?`<div class="project-photo-preview">${l}</div>`:l}const t=o.id==="bocil"?`<video class="project-cover-image" width="2218" height="1392" poster="${Ee}" autoplay muted loop playsinline preload="metadata" aria-label="Bocil macOS app demonstration"><source src="${fe}" type="video/mp4" /></video>`:o.id==="typelab"?n?`<video class="project-cover-image" poster="${Te}" autoplay muted loop playsinline preload="metadata" aria-label="TypeLab Compose canvas demonstration"><source src="${we}" type="video/mp4" /></video>`:`<img class="project-cover-image" src="${ye}" alt="TypeLab Compose interface with typography controls and a layout canvas" />`:Ae();return n&&["bocil","typelab"].includes(o.id)?`<div class="project-cover-image project-app-preview" ${o.id==="bocil"?"data-bocil-preview-motion":""}>${t.replace('class="project-cover-image"','class="project-app-media"')}</div>${o.id==="bocil"?'<canvas class="bocil-motion-frame" aria-hidden="true"></canvas>':""}`:t}function Pe(o,n){const t=["bocil","typelab","brewtime","sustainopia","higher-hopes","grab"].includes(o.id)?`#/work/${o.id}`:"#/work";return`
    <article class="project-card reveal" data-project="${o.id}" style="--delay:${n*70}ms">
      <a href="${t}" aria-label="View ${o.title} project">
        <div class="project-visual tone-${o.tone}">
          ${ke(o,!0)}
        </div>
        <div class="project-info">
          <div class="project-title-row">
            <h3>${o.title}</h3>
            <div class="project-chips">${o.tags.map(l=>`<span>${l}</span>`).join("")}</div>
          </div>
          <p>${o.summary}</p>
        </div>
      </a>
    </article>`}function U(){return`
    <footer class="bocil-footer">
      <p>Thanks for spending a moment here!</p>
      <p>© ${new Date().getFullYear()} Gabriella Dina Widieaster</p>
      <div class="bocil-footer-socials">
        <a href="https://www.linkedin.com/in/gabrielladinaw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 3.8a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.4 7.4h3.8V22H1.4V7.4ZM8 7.4h3.6v2h.1c.5-1 1.7-2.3 3.8-2.3 4 0 4.8 2.6 4.8 6V22h-3.8v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V22H8V7.4Z"/></svg></a>
        <a href="mailto:gabrielladina123@gmail.com" aria-label="Email Gabriella Dina Widieaster"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
      </div>
    </footer>`}function je(){return`
    <section class="work shell" id="work" aria-labelledby="work-title">
      <div class="work-intro reveal">
        <h1 id="work-title">I'm a multidisciplinary designer exploring the intersection of design, technology, and art.</h1>
        <p class="work-lead">With roots in architecture, my work spans product design,<br />interaction design, visual design, and illustration.</p>
      </div>
      <div class="project-grid">
        ${ee.map(Pe).join("")}
      </div>
    </section>
    ${U()}`}const Ie="/assets/high-hopes-controls-CLn26D1d.mp4",Me="/assets/high-hopes-control-poster-UdTlb_Lk.png",re="/assets/high-hopes-character-hand-BJVudU66.png",le="/assets/high-hopes-character-hold-oegoJus5.png",ze="/assets/high-hopes-character-headStraight-BsDYcu9X.png",qe="/assets/high-hopes-character-headRight-NKbeTAlz.png",Re="/assets/high-hopes-character-headLeft-THQ6TuR9.png",He="/assets/high-hopes-character-handsUp-CTks02de.png",ce="/assets/high-hopes-character-arm-ByqoSsDR.png",Ge="/assets/high-hopes-character-jump-CY8A15ZE.png",Fe="/assets/high-hopes-character-right-D4izFGt_.png",Oe="/assets/high-hopes-character-sit-C4qUvTsn.png",We="/assets/high-hopes-monkey-reference-BQI4xMtd.png",pe="/assets/high-hopes-header-left-S0S1xR5d.png",Ye="/assets/high-hopes-header-middle-CIynMj9Z.png",Ue="/assets/high-hopes-header-right-DpROh7FD.png",Ve="/assets/high-hopes-moss-top-D_c17ovh.png",Ne="/assets/high-hopes-moss-bottom-BfzMj-i3.png",Ke="/assets/high-hopes-tribute-D8a1G7PO.png",Xe="/assets/high-hopes-opening-story-CmNuFK_O.png",Qe="/assets/high-hopes-end-story-Bng7T_0N.png",Je="/assets/high-hopes-env-tree-tS1TJv_2.png",Ze="/assets/high-hopes-env-branch1-DxlfxKWM.png",et="/assets/high-hopes-env-branch2-BtqraLFS.png",tt="/assets/high-hopes-env-branch3-CCOzyVuR.png",st="/assets/high-hopes-env-leaves1-nWXf9u9s.png",it="/assets/high-hopes-env-leaves2-BWlPZsGm.png",at="/assets/high-hopes-env-leaves3-CFJYYn_X.png",ot="/assets/high-hopes-env-leaves4-55rQaOjU.png",nt="/assets/high-hopes-env-rope1--3upIkCj.png",rt="/assets/high-hopes-env-rope2-B9AdsMRl.png",lt="/assets/high-hopes-env-rope3-BoC2RPRV.png",ct="/assets/high-hopes-env-ropestone-DL5r0c43.png",pt="/assets/high-hopes-env-crack1-BeYEo9-6.png",ht="/assets/high-hopes-env-crack2-CkBEhxxL.png",dt="/assets/high-hopes-env-crack3-VBr3VQFS.png",gt="/assets/high-hopes-helicopter-sky-Buc93Xtg.png",ut="/assets/high-hopes-fire-scene-CAOBBFV2.png",he="/assets/high-hopes-fire-ClJqeZw_.webp",de="/assets/high-hopes-fire-background-DKgTnc0q.png",ie="/assets/high-hopes-helicopter-CNhFGs8a.gif",bt="/assets/high-hopes-cliff1-Y1TVFThG.png",mt="/assets/high-hopes-cliff2-DrbCC9wr.png",vt="/assets/high-hopes-cliff3-DcT0s5Hu.png",yt="/assets/high-hopes-ground-Csy35h5a.png",wt="/assets/high-hopes-stone1-BPYvk5l8.png",ft="/assets/high-hopes-stone2-yPjt3c05.png",_t="/assets/high-hopes-stone3-ZCSvx2Pj.png",kt="/assets/high-hopes-grass1-SYiW-Azg.png",$t="/assets/high-hopes-grass2-Bt9k3yjs.png",Bt="/assets/high-hopes-grass3-BUP4k9KB.png",St="/assets/high-hopes-grass4-DF5Keef3.png",xt="/assets/high-hopes-grass5-Bo_t8ckK.png",Ct="/assets/high-hopes-scene-1-DEtzidTy.webp",At="/assets/high-hopes-scene-2-0mXuk4cg.webp",Tt="/assets/high-hopes-scene-3-CUYCWvWQ.webp";function J(o){const n=ee.findIndex(l=>l.id===o);return`<section class="project-explorer bocil-shell" aria-label="Explore more projects">
    <h2>Keep exploring.<br /><span>See what else I’ve been working on.</span></h2>
    <div class="project-explorer-grid">
      ${(n<0?[]:[{project:ee[n-1],direction:"previous"},{project:ee[n+1],direction:"next"}].filter(({project:l})=>l)).map(({project:l,direction:r})=>`<a class="project-card" data-project="${l.id}" href="${["bocil","typelab","brewtime","sustainopia","higher-hopes","grab"].includes(l.id)?`#/work/${l.id}`:"#/work"}" aria-label="Explore ${l.title}">
        <div class="project-visual tone-${l.tone}">${ke(l)}</div>
        <p>${r},<br /><strong>${l.title}</strong></p>
      </a>`).join("")}
    </div>
  </section>`}function Et(){return`
    <article class="bocil-case high-hopes-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media high-hopes-hero"><div class="bocil-image high-hopes-header-image"><img src="${pe}" data-header-head-cycle data-head-left="${pe}" data-head-middle="${Ye}" data-head-right="${Ue}" alt="High Hopes game home screen with the monkey looking around" /></div></div>
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
        <figure class="high-hopes-reference high-hopes-reference--corner"><img src="${We}" alt="Bornean orangutan hanging from a rope, the reference for the game character" /><svg class="hh-reference-arrow" viewBox="0 0 90 125" fill="none" aria-hidden="true"><path d="M25 112C80 110 106 38 30 13M30 13L47 6M30 13L39 29" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg><figcaption>Character<br />Reference</figcaption></figure>
        <div class="bocil-shell high-hopes-character-grid">
          <div class="high-hopes-character-copy">
            <h2>Character<br /><span>Design</span></h2>
            <p>I designed the monkey inspired by the Bornean orangutan, a species endemic to Borneo. I emphasised its long arms and simplified body shape to make its movements easy to follow, while separating its body parts to support in-game animation.</p>
          </div>
          <div class="high-hopes-character-media hh-character-sheet">
            <div class="hh-character-parts">
              <div class="hh-character-heads"><div><img src="${Re}" alt="Head facing left" loading="lazy" /><img src="${ze}" alt="Head facing forward" loading="lazy" /><img src="${qe}" alt="Head facing right" loading="lazy" /></div></div>
              <div class="hh-character-hands"><div><img src="${re}" alt="Open hand" loading="lazy" /><img src="${le}" alt="Gripping hand" loading="lazy" /><img src="${re}" alt="Mirrored open hand" loading="lazy" class="hh-character-flipped" /><img src="${le}" alt="Mirrored gripping hand" loading="lazy" class="hh-character-flipped" /></div></div>
              <div class="hh-character-arms"><div><img src="${ce}" alt="Arm segments" loading="lazy" /><img src="${ce}" alt="Mirrored arm segments" loading="lazy" class="hh-character-flipped" /></div></div>
            </div>
            <div class="hh-character-poses"><img src="${He}" alt="Monkey with both hands raised" loading="lazy" /><img src="${Fe}" alt="Monkey reaching right" loading="lazy" /><img src="${Ge}" alt="Monkey jumping" loading="lazy" /><img src="${Oe}" alt="Monkey sitting" loading="lazy" /></div>
          </div>
        </div>
      </section>
      <section class="bocil-dark high-hopes-story">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Visual<br /><span>Storytelling</span></h2>
          <p>I developed the visual concepts and assets for the game’s storytelling sequences, from the opening narrative to the ending scene and final tribute, helping shape the game’s identity and bring its story to life.</p>
        </div>
        <div class="bocil-shell high-hopes-story-grid">
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${Xe}" alt="Opening story: the monkey escapes a forest fire to find help" loading="lazy" /></figure>
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${Qe}" alt="Ending story: the monkey finds a rescuer while reflecting on the loss of its home" loading="lazy" /></figure>
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${Ke}" alt="A tribute to Kalimantan, its forests, wildlife and those who lost their home" loading="lazy" /></figure>
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
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan role="region" aria-label="Climbing scene, automatically panning up and down.">
              <div class="high-hopes-scene-track" style="--scene-duration: 10s">
                <img width="2200" height="2207" src="${Ct}" alt="High Hopes forest-fire climbing environment with cliff platforms and the monkey character" />
              </div>
            </div>
            <div class="hh-terrain-board hh-terrain-board--compact" aria-label="Cliffs, climbing stones, moss, ground and vegetation artwork">
              <img src="${vt}" alt="Cliff summit" loading="lazy" style="left:2.2%;top:6%;width:13%;height:51%;" />
              <img src="${mt}" alt="Middle cliff" loading="lazy" style="left:18.8%;top:10%;width:12%;height:47%;" />
              <img src="${bt}" alt="Lower cliff" loading="lazy" style="left:35.4%;top:15%;width:14.5%;height:42%;" />
              <img src="${wt}" alt="Large climbing stone" loading="lazy" style="left:54.5%;top:11%;width:12%;height:16%;" />
              <img src="${ft}" alt="Medium climbing stone" loading="lazy" style="left:72%;top:11%;width:9%;height:14%;" />
              <img src="${_t}" alt="Small climbing stone" loading="lazy" style="left:86%;top:11%;width:7%;height:13%;" />
              <img src="${Ve}" alt="Moss variations, first row" loading="lazy" style="left:55.5%;top:37%;width:18%;height:13%;" />
              <img src="${Ne}" alt="Moss variations, second row" loading="lazy" style="left:75.5%;top:37%;width:21%;height:13%;" />
              <img src="${yt}" alt="Ground" loading="lazy" style="left:54.5%;top:57%;width:40.5%;height:9%;" />
              <img src="${kt}" alt="Tall vegetation" loading="lazy" style="left:2.2%;top:61%;width:12.5%;height:32%;" />
              <img src="${Bt}" alt="Broad leaf vegetation" loading="lazy" style="left:18.8%;top:65%;width:12%;height:28%;" />
              <img src="${xt}" alt="Low vegetation" loading="lazy" style="left:32.3%;top:75%;width:27.3%;height:18%;" />
              <img src="${$t}" alt="Small bush" loading="lazy" style="left:64.5%;top:81%;width:12.5%;height:12%;" />
              <img src="${St}" alt="Small foliage cluster" loading="lazy" style="left:81.3%;top:77%;width:15.8%;height:16%;" />
            </div>
            </div></div>
          </section>
          <section class="high-hopes-asset-group" aria-labelledby="environment-title">
            <h3 class="typelab-system-label" id="environment-title">02/Environmental Assets</h3>
            <div class="high-hopes-asset-surface"><div class="bocil-shell">
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan role="region" aria-label="Climbing scene, automatically panning up and down.">
              <div class="high-hopes-scene-track" style="--scene-duration: 18s">
                <img width="2200" height="3632" src="${At}" alt="High Hopes second climbing environment with ropes, cliff platforms and monkey characters" />
              </div>
            </div>
            <div class="hh-environment-board" aria-label="Tree, branches, foliage, ropes and cracking stone assets">
              <img src="${Je}" alt="tree1 game asset" loading="lazy" style="left:2%;top:3%;width:12%;height:97%;" />
              <img src="${Ze}" alt="Branch1 game asset" loading="lazy" style="left:13%;top:6%;width:6%;height:8%;" />
              <img src="${et}" alt="Branch2 game asset" loading="lazy" style="left:13%;top:17%;width:5%;height:13%;" />
              <img src="${tt}" alt="Branch3 game asset" loading="lazy" style="left:13%;top:26%;width:19%;height:19%;" />
              <img src="${st}" alt="Leaves1 game asset" loading="lazy" style="left:16%;top:53%;width:9%;height:16%;" />
              <img src="${it}" alt="Leaves2 game asset" loading="lazy" style="left:16%;top:76%;width:8%;height:16%;" />
              <img src="${at}" alt="Leaves3 game asset" loading="lazy" style="left:26%;top:76%;width:10%;height:17%;" />
              <img src="${ot}" alt="Leaves4 game asset" loading="lazy" style="left:27%;top:57%;width:7%;height:9%;" />
              <img src="${nt}" alt="Rope1 game asset" loading="lazy" style="left:32%;top:8%;width:33%;height:26%;" />
              <img src="${rt}" alt="Rope2 game asset" loading="lazy" style="left:37%;top:40%;width:26%;height:19%;" />
              <img src="${lt}" alt="Rope3 game asset" loading="lazy" style="left:44%;top:66%;width:3%;height:29%;" />
              <img src="${ct}" alt="RopeStone game asset" loading="lazy" style="left:54%;top:70%;width:7%;height:8%;" />
              <img src="${pt}" alt="StoneCrack1 game asset" loading="lazy" style="left:68%;top:5%;width:30%;height:20%;" />
              <img src="${ht}" alt="StoneCrack2 game asset" loading="lazy" style="left:70%;top:38%;width:22%;height:17%;" />
              <img src="${dt}" alt="StoneCrack3 game asset" loading="lazy" style="left:71%;top:68%;width:19%;height:15%;" />
            </div>
            </div></div>
          </section>
          <section class="high-hopes-asset-group" aria-labelledby="additional-title">
            <h3 class="typelab-system-label" id="additional-title">03/Additional Environment Assets</h3>
            <div class="high-hopes-asset-surface"><div class="bocil-shell">
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan role="region" aria-label="Climbing scene, automatically panning up and down.">
              <div class="high-hopes-scene-track" style="--scene-duration: 12s">
                <img width="2200" height="2582" src="${Tt}" alt="High Hopes third climbing environment with the cliff summit, rope platforms and monkey character" />
                <div class="high-hopes-scene-fire" aria-hidden="true"><img class="high-hopes-scene-fire-background" src="${de}" alt="" /><img class="high-hopes-scene-fire-animation" src="${he}" alt="" /></div>
                <div class="high-hopes-helicopter-slot" data-helicopter-slot><img src="${ie}" alt="Animated rescue helicopter flying above the cliff" /></div>
                <div class="high-hopes-helicopter-slot high-hopes-helicopter-slot--small"><img src="${ie}" alt="Smaller animated rescue helicopter in the distance" /></div>
              </div>
            </div>
            <div class="high-hopes-animation-grid">
              <div><div class="high-hopes-animation high-hopes-fire-stage">
                <img class="high-hopes-fire-scene" src="${ut}" alt="" aria-hidden="true" />
                <img class="high-hopes-fire-background" src="${de}" alt="" aria-hidden="true" />
                <img class="high-hopes-fire-frames" src="${he}" alt="Animated fire using thirteen hand-drawn frames" />
              </div></div>
              <div><div class="high-hopes-animation high-hopes-helicopter-stage" style="background-image: url('${gt}')">
                <img src="${ie}" alt="Animated helicopter against the sky from the third game scene" />
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
            <video poster="${Me}" autoplay muted loop playsinline preload="auto" data-controls-video src="${Ie}" aria-label="High Hopes game controls demonstration"></video>
          </div>
        </div>
      </section>
    </article>
    ${J("higher-hopes")}
    ${U()}`}const Dt="/assets/bocil-header-DluoAKXD.png",Lt="/assets/bocil-history-BdtmNIuU.mp4",Pt="/assets/bocil-solution-robot-CKRyj0qD.mp4",jt="/assets/bocil-homepage-BpmftuHf.png",It="/assets/bocil-notification-D4vzl0MM.png",Mt="/assets/bocil-calendar-C1sdgfqM.mp4",zt="/assets/bocil-focus-blurry-DOryg3wu.png",qt="/assets/bocil-timer-D1rEnOip.png";function Rt(){return`
    <article class="bocil-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media"><div class="bocil-image"><img src="${jt}" alt="Bocil macOS application home screen" /></div></div>
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
        <img src="${Dt}" alt="Bocil robot prototypes beside the macOS companion app" />
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
          <video autoplay muted loop playsinline preload="auto" aria-label="Bocil physical robot companions demonstration"><source src="${Pt}" type="video/mp4" /></video>
        </div>
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
            <h2>Feature #1<br /><span>Productivity</span></h2>
            <p>Bocil turns conversations into actions, letting users create or update calendar events simply by talking. Upcoming events are synced to the desktop app with reminders when it’s time.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row" data-grain-media>
          <figure class="bocil-notification-panel"><div class="bocil-image"><img src="${It}" alt="Bocil calendar reminders in Notification Center" /></div></figure>
          <figure class="bocil-calendar-panel"><div class="bocil-image"><video autoplay muted loop playsinline preload="auto" aria-label="Bocil calendar and productivity demonstration"><source src="${Mt}" type="video/mp4" /></video></div></figure>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Focus</span></h2>
          <p>Bocam (Bocil Camera) turns Bocil into a focus companion, letting users set their own focus timer while Bocil keeps them on track. If users reach for their phone, Bocil notices and responds to bring their attention back.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row bocil-focus-media" data-grain-media>
          <figure><div class="bocil-image"><img src="${qt}" alt="Bocil focus timer interface" /></div></figure>
          <figure><div class="bocil-image"><img src="${zt}" alt="Bocam focus session interface with visual focus feedback" /></div></figure>
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
              <source src="${Lt}" type="video/mp4" />
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
            <video autoplay muted loop playsinline preload="auto" aria-label="Bocil macOS home screen demonstration"><source src="${fe}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </article>
    ${J("bocil")}
    ${U()}`}const Ht="/assets/grab-poster-1-BJPzq6wr.png",Gt="/assets/grab-poster-2-NfOcc-OH.png",Ft="/assets/grab-comms-1-DQ2Ak-J4.png",Ot="/assets/grab-comms-2-Ci5olkYB.png",Wt="/assets/grab-comms-3-JRb2oaFG.png",Yt="/assets/grab-comms-4-Ci9lNdHD.png",ge="/assets/grab-card-3-BfOkbL94.png",ue="/assets/grab-card-4-BH3NsDgJ.png",be="/assets/grab-card-5-C6ELJf2V.png";function ae(o,n,t){return`<div class="grab-header-card" tabindex="0" role="img" aria-label="${t}; hover or focus to see reverse">
    <div class="grab-cover-card">
      <img class="grab-cover-face" src="${o}" alt="" />
      <img class="grab-cover-face grab-cover-back" src="${n}" alt="" />
    </div>
  </div>`}function Ut(){return`
    <article class="bocil-case grab-case">
      <section class="bocil-hero bocil-shell" aria-labelledby="grab-title">
        <div class="bocil-hero-media grab-hero-media">
          <div class="grab-header-cards">
            ${ae(ge,be,"GrabMerchant restaurant card")}
            ${ae(oe,ne,"GrabMerchant delivery card")}
            ${ae(ue,be,"GrabMerchant food card")}
          </div>
        </div>
        <div class="bocil-overview">
          <h1 id="grab-title">Grab Creative Works</h1>
          <p class="bocil-deck">A collection of visual designs created for merchant campaigns, communications, and marketing initiatives at Grab.</p>
          <div class="bocil-overview-grid">
            <div class="bocil-context">
              <p>During my time at Grab, I contributed to various creative projects supporting merchant engagement and marketing initiatives. My work involved combining existing brand assets, typography, and visual elements to create campaign materials, promotional graphics, and digital communications while maintaining Grab's visual identity.</p>
              <div class="bocil-briefs">
                <div><h2>Scope of Work</h2><p>Marketing collateral, campaign visuals, merchant communications, and presentation design.</p></div>
                <div><h2>My Contributions</h2><p>Adapted brand assets, developed visual compositions, and designed layouts across different campaign formats.</p></div>
              </div>
            </div>
            <dl class="bocil-meta">
              <div><dt>Year</dt><dd>2024–2026</dd></div>
              <div><dt>Role</dt><dd>Visual Design Contributor</dd></div>
              <div><dt>Company</dt><dd>Grab Indonesia</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="bocil-dark bocil-feature grab-work" aria-labelledby="grab-work-title">
        <div class="bocil-feature-intro bocil-shell">
          <h2 id="grab-work-title">Selected<br /><span>Works</span></h2>
          <p>A selection of visual designs I worked on, ranging from merchant-facing campaigns and promotional materials to branded graphics and digital communications.</p>
        </div>
        <div class="grab-work-groups">
          <section class="grab-work-group" aria-labelledby="grab-posters-title">
            <h3 id="grab-posters-title" class="typelab-system-label bocil-shell">01/Campaign Posters</h3>
            <div class="grab-work-surface">
              <div class="grab-work-layout bocil-shell">
                <p>I designed these posters to help merchants understand the steps to becoming a GrabMerchant partner through clear layouts and visuals.</p>
                <div class="grab-posters">
                  <img src="${Ht}" alt="Agent Reference Merchant program poster explaining registration, training, referrals, and incentives" loading="lazy" />
                  <img src="${Gt}" alt="Four steps to start selling on GrabMerchant onboarding poster" loading="lazy" />
                </div>
              </div>
            </div>
          </section>
          <section class="grab-work-group" aria-labelledby="grab-comms-title">
            <h3 id="grab-comms-title" class="typelab-system-label bocil-shell">02/Communication Assets</h3>
            <div class="grab-work-surface">
              <div class="grab-work-layout bocil-shell">
                <p>Visual materials designed for merchant campaigns, promotional announcements, and direct communications through social media and messaging platforms.</p>
                <div class="grab-comms">
                  <img src="${Ft}" alt="UMKM GoesDigital competition promotional graphic in story format" loading="lazy" />
                  <img src="${Ot}" alt="UMKM GoesDigital competition promotional graphic in feed format" loading="lazy" />
                  <div class="grab-comms-messages">
                    <img src="${Wt}" alt="GrabMerchant welcome message inviting merchants to complete their menu and operating hours" loading="lazy" />
                    <img src="${Yt}" alt="GrabMerchant registration reminder asking merchants to answer a call from Grab" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="grab-work-group" aria-labelledby="grab-cards-title">
            <h3 id="grab-cards-title" class="typelab-system-label bocil-shell">03/E-money Merchandise</h3>
            <div class="grab-work-surface">
              <div class="grab-work-layout bocil-shell">
                <p>Designed e-money cards as part of GrabMerchant merchandise for events and promotional activities.</p>
                <div class="grab-cards">
                  <img src="${oe}" alt="GrabMerchant e-money card featuring a merchant handing an order to a delivery driver" loading="lazy" />
                  <img src="${ne}" alt="GrabMerchant e-money card reverse with branded storefront pattern" loading="lazy" />
                  <img src="${ge}" alt="GrabMerchant e-money card featuring a restaurant serving a customer" loading="lazy" />
                  <img src="${ue}" alt="GrabMerchant e-money card featuring a merchant presenting a meal" loading="lazy" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

    </article>
    ${J("grab")}
    ${U()}`}const me="/assets/brewtime-list-BqYdrzOP.png",Vt="/assets/brewtime-edit-BnEzW-M7.png",Nt="/assets/brewtime-timer-Bodybwni.mp4",Kt="/assets/brewtime-custom-recipe-kQXP5dBu.mp4",Xt="/assets/brewtime-prototype-DbxP79uu.png",Qt="/assets/brewtime-recipe-menu-BDC5Tnzv.png";function Jt(){return`
    <article class="bocil-case brewtime-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media brewtime-hero-media">
          <div class="brewtime-screens">
            <img src="${me}" alt="BrewTime recipe list with V60 selected" />
            <img src="${Q}" alt="BrewTime V60 timer guiding the Bloom brewing step" />
            <img src="${Vt}" alt="BrewTime recipe editor with ingredients and brewing steps" />
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
            <video data-playback-rate="0.75" autoplay muted loop playsinline preload="metadata" poster="${Q}" aria-label="BrewTime guided timer demonstration"><source src="${Nt}" type="video/mp4" /></video>
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
            <video data-playback-rate="0.75" autoplay muted loop playsinline preload="metadata" poster="${Q}" aria-label="BrewTime custom recipe creation and editing demonstration"><source src="${Kt}" type="video/mp4" /></video>
            <div class="brewtime-recipe-menu"><img src="${Qt}" alt="BrewTime menu with Edit Recipe and Add Recipe options" /></div>
          </div>
        </div>
      </section>
      <section class="bocil-feature brewtime-prototype">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>I focused on developing the timer in SwiftUI, exploring how to handle multiple timed steps, manage state changes, and create smooth transitions throughout the brewing process.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${Xt}" alt="BrewTime timer prototype in Xcode showing SwiftUI code and the V60 timer preview" /></div>
        </div>
      </section>
      <section class="bocil-feature brewtime-final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design<br /><span>&amp; coded prototype</span></h2>
          <p>The final prototype brings the recipe setup and guided timer together into a working iOS brewing experience.</p>
        </div>
        <div class="brewtime-final-showcase" aria-label="BrewTime final recipe list, guided timer, and recipe editor">
          <img class="brewtime-final-list" src="${me}" alt="BrewTime recipe selection" />
          <img class="brewtime-final-timer" src="${Q}" alt="BrewTime guided brewing timer" />
          <div class="brewtime-final-edit"><img src="${_e}" alt="BrewTime recipe steps 3 and 4, Add Step, total brew time, and Delete Recipe" /></div>
        </div>
      </section>
    </article>
    ${J("brewtime")}
    ${U()}`}const Zt="/assets/typelab-prototype-coding-B8oBNLBW.png",es="/assets/typelab-final-mockup-composited-DTaKMWwd.png",ts="/assets/typelab-system-preview-ssFIE1uV.png",ss="/assets/typelab-system-compare-BIkm5fJj.png",is="/assets/typelab-compose-guidelines-jE7D_rcj.png",as="/assets/typelab-compose-style-B1TuQ9_k.png",os="/assets/typelab-system-clean-BgYkVVjA.mp4";function ns(){return`
    <article class="bocil-case typelab-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media typelab-hero-media"><div class="bocil-image"><img src="${ye}" alt="TypeLab Compose interface with typography controls and a layout canvas" /></div></div>
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
          <div class="typelab-system-diagram" data-media-group>
            <div class="typelab-system-callout typelab-system-callout--left">
              <div class="typelab-system-callout-copy"><h3>Type Hierarchy</h3>
              <p>Inspired by Apple’s semantic text styles and typography scale principles, I introduced predefined roles to help users build a consistent hierarchy without styling every text element from scratch.</p></div>
            </div>
            <figure class="typelab-system-screenshot"><img src="${ts}" alt="TypeLab System Preview showing type hierarchy, scale, font pairing, and style controls" /></figure>
            <div class="typelab-system-callouts">
              <div class="typelab-system-callout typelab-system-callout--right typelab-system-callout--scale"><h3>Body &amp; Scale</h3><p>One base body size determines the scale for other text styles.</p></div>
              <div class="typelab-system-callout typelab-system-callout--right typelab-system-callout--typefaces"><h3>Two Typefaces</h3><p>Limiting font choices encourages consistent, intentional pairing.</p></div>
              <div class="typelab-system-callout typelab-system-callout--right typelab-system-callout--refinement"><h3>Style Refinement</h3><p>Adjust weight, leading, and tracking while maintaining consistency.</p></div>
            </div>
          </div>
          </div>
          <h3 class="typelab-system-label bocil-shell">02/System Compare</h3>
          <div class="typelab-system-panel">
          <div class="typelab-system-diagram typelab-system-diagram--compare" data-media-group>
            <div class="typelab-system-callout typelab-system-callout--left">
              <div class="typelab-system-callout-copy"><h3>Typeface Comparison</h3>
              <p>Compare two typefaces side by side to evaluate hierarchy, readability, and visual consistency.</p></div>
            </div>
            <figure class="typelab-system-screenshot"><img src="${ss}" alt="TypeLab Compare showing SF Pro and Courier New side by side with controls for each text role" /></figure>
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
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab System Setup demonstration"><source src="${os}" type="video/mp4" /></video>
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
            <div class="typelab-compose-guidelines"><img src="${is}" alt="TypeLab layout guidelines menu with column, margin, and gutter controls" /></div>
            <img class="typelab-compose-style" src="${as}" alt="TypeLab style menu with typography and alignment controls" />
          </figure>
          <figure class="typelab-compose-video">
            <video autoplay muted loop playsinline preload="metadata" aria-label="TypeLab Compose canvas demonstration"><source src="${we}" type="video/mp4" /></video>
          </figure>
        </div>
      </section>

      <section class="bocil-dark bocil-feature bocil-feature--personal">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Building<br /><span>the prototype</span></h2>
          <p>Coding TypeLab was a big part of the exploration for me. I built the app in SwiftUI, which pushed me to translate the typography rules I had been learning into actual behaviours and controls that worked in a real product.</p>
        </div>
        <div class="bocil-history-media bocil-shell">
          <div class="bocil-image"><img src="${Zt}" alt="TypeLab SwiftUI prototype in Xcode with an iPad preview of the typography system" /></div>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--final">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Final design and<br /><span>coded prototype</span></h2>
          <p>The final prototype brings System Setup and Compose together, letting users build a type system and immediately experiment with it on a flexible canvas.</p>
        </div>
        <div class="bocil-final-showcase typelab-final-showcase">
          <div class="bocil-image typelab-final-image"><img src="${es}" alt="TypeLab Compose interface on a graphite iPad beside an Apple Pencil on a gray concrete tabletop" /></div>
        </div>
      </section>
    </article>
    ${J("typelab")}
    ${U()}`}const rs="/assets/sustainopia-communal-B8VwNRr5.png",ls="/assets/sustainopia-picnic-Bi48C5Gs.png",cs="/assets/sustainopia-pet-qXH5_Nxe.png",ps="/assets/sustainopia-birdeye-U55hHNZT.png",hs="/assets/sustainopia-title-BlCZlE2X.png",ds="/assets/sustainopia-hero-C8-UpBDy.png",gs="/assets/sustainopia-header-top-view-BrwGWYkG.png",us="/assets/sustainopia-site-plan-B7mkyY08.png",bs="/assets/sustainopia-challenge-1-C2Ya16jg.png",ms="/assets/sustainopia-challenge-2-BqfA-xFQ.png",vs="/assets/sustainopia-challenge-3-CxKvQr-v.png",ys="/assets/sustainopia-challenge-4-TEDcQ9KV.png",ws="/assets/sustainopia-concept-1-D_uDiaHC.png",fs="/assets/sustainopia-concept-2-BzYtPmpp.png",_s="/assets/sustainopia-concept-3-Cp9MD3E_.png",ks="/assets/sustainopia-strategy-1-8-h7c8K5.png",$s="/assets/sustainopia-strategy-2-D3lZ0c54.png",Bs="/assets/sustainopia-strategy-3-B2JWUg7T.png",Ss="/assets/sustainopia-strategy-4-CSua5LLa.png",xs="/assets/sustainopia-strategy-5-DxwkmFJ4.png",Cs="/assets/sustainopia-strategy-6-BlFbpiGN.png",As="/assets/sustainopia-final-site-plan-CKm_sCBG.png",Ts="/assets/sustainopia-drawing-1-CNRsQfWQ.png",Es="/assets/sustainopia-drawing-2-uN5p68iD.png",Ds="/assets/sustainopia-drawing-3-B6hoFR86.png",Ls="/assets/sustainopia-drawing-4-CM7vSdPH.png";function Ps(){const o=[[Ts,"01 — Rainwater Harvesting + Pond Area Details"],[Es,"02 — Vegetation and Animals Mapping"],[Ds,"03 — Section 1: Cross Section"],[Ls,"04 — Section 2: Longitudinal Section"]];return`
    <article class="bocil-case sustainopia-case">
      <section class="bocil-hero bocil-shell">
        <figure class="bocil-hero-media sustainopia-hero-media">
          <img src="${gs}" alt="Top view of Sustainopia’s circular public spaces, gardens, and green paths" fetchpriority="high" />
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
            <img src="${us}" alt="Exploded site analysis showing road access, edge vegetation, and commercial and residential buildings around the site" loading="lazy" />
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
            ${[[bs,"Limited green<br />space","Buildings and roads with very little greenery"],[ms,"Unprocessed water<br />causes mosquito","Standing water providing a breeding ground for mosquitoes"],[vs,"Lack of<br />Social Spaces","People isolated in separate outdoor spaces"],[ys,"Limited<br />Pet-Friendly Areas","A pet owner facing restrictions on pets in public spaces"]].map(([n,t,l],r)=>`
              <li>
                <div class="sustainopia-challenge-art"><img src="${n}" alt="${l}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(r+1).padStart(2,"0")}</span><h3>${t}</h3></div>
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
            ${[[ws,"Sustainable<br />nature","A green habitat with trees, a pond, birds, and urban wildlife"],[fs,"Sense of<br />Community","People and pets sharing an inclusive communal space"],[_s,"Physical<br />well being","People exercising in three connected circular spaces"]].map(([n,t,l],r)=>`
              <li>
                <div class="sustainopia-concept-art"><img src="${n}" alt="${l}" loading="lazy" /></div>
                <div class="sustainopia-challenge-caption"><span>${String(r+1).padStart(2,"0")}</span><h3>${t}</h3></div>
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
            ${[[ks,"Natural Mosquito-<br />Repellent Plants","Planting around outdoor spaces to naturally repel mosquitoes"],[$s,"Communal<br />Area","Shaded communal seating and tables for people to gather"],[Bs,"Jogging<br />Track","A tree-lined jogging route connecting outdoor activities"],[Ss,"Rainwater<br />Harvesting","Sculptural rainwater collectors connected to underground storage"],[xs,"Pet Friendly<br />Area","An outdoor area with play equipment for pets and their owners"],[Cs,"Fitness<br />Ground","Outdoor fitness equipment and exercise areas among trees"]].map(([n,t,l])=>`
              <li>
                <div class="sustainopia-strategy-art"><img src="${n}" alt="${l}" loading="lazy" /></div>
                <h3>${t}</h3>
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
            <figure class="sustainopia-plan-image"><img src="${As}" alt="Sustainopia final site plan with numbered locations for entrances, communal spaces, rainwater harvesting, pet areas, paths, and fitness facilities" loading="lazy" /></figure>
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
            ${[!1,!0].map(n=>`
              <div class="sustainopia-drawings-group"${n?' aria-hidden="true"':""}>
                ${o.map(([t,l])=>`<button class="sustainopia-zoom-trigger" type="button" data-zoom-src="${t}" data-zoom-label="${l}" aria-label="Enlarge ${l}"${n?' tabindex="-1"':""}><img src="${t}" alt="${n?"":l}" loading="eager" draggable="false" /></button>`).join("")}
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
            ${[!1,!0].map(n=>`<div class="sustainopia-render-group"${n?' aria-hidden="true"':""}>
              ${[[rs,"Communal area"],[ls,"Picnic &amp; fitness area"],[cs,"Pet park area"],[ps,"Bird-eye view perspective"]].map(([t,l])=>`<figure>
                <button type="button" class="sustainopia-zoom-trigger" data-zoom-src="${t}" data-zoom-label="${l}" aria-label="Enlarge ${l}"${n?' tabindex="-1"':""}><img src="${t}" alt="${l}" draggable="false" /></button>
                <figcaption>${l}</figcaption>
              </figure>`).join("")}
            </div>`).join("")}
          </div>
        </div>
        <figure class="sustainopia-ending">
          <img class="sustainopia-ending-photo" src="${ds}" alt="Sustainopia park aerial rendering" loading="lazy" />
          <img class="sustainopia-ending-title" src="${hs}" alt="Sustainopia" loading="lazy" />
        </figure>
      </section>
      ${U()}
      <dialog class="sustainopia-lightbox" aria-label="Enlarged project image">
        <button type="button" class="sustainopia-lightbox-close" aria-label="Close enlarged image"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></button>
        <div class="sustainopia-lightbox-scroll"><img alt="" /></div>
        <p class="sustainopia-lightbox-caption"></p>
      </dialog>
    </article>`}const js="/assets/about-gabriella-DPTDeAYo.jpeg";function Is(){return`
    <article class="about-page" id="about" aria-labelledby="about-title">
      <section class="about-introduction about-shell">
        <div class="about-intro-grid reveal">
          <div class="about-portrait"><img src="${js}" alt="Gabriella outdoors in Bali" width="1078" height="1438" fetchpriority="high" /></div>
          <div class="about-intro-copy">
            <h1 id="about-title">Hi there!<br /><span class="about-name-line">I’m <span class="about-name" tabindex="0" aria-label="Gabriella, or Gabby">Gabriella</span><span class="about-nickname" aria-hidden="true">or Gabby</span></span></h1>
            <p>I’m a multidisciplinary designer focused on digital products and how people experience them. I enjoy breaking down problems, shaping flows, and fine-tuning interactions to feel intuitive. Visual exploration is part of that process, bringing function and personality together in the things I make.</p>
          </div>
        </div>
        <div class="about-interests-grid reveal">
          <div>
            <h2>What I’m up to</h2>
            <p>Currently building and exploring design and code at the <strong>Apple Developer Academy</strong> in Bali. Previously, I supported merchant onboarding and designed communication materials at Grab Indonesia. My journey began in architecture at Universitas Indonesia, where I learned to consider how people experience the things we design.</p>
          </div>
          <div>
            <h2>Away from the screen</h2>
            <p>You’ll usually find me drawing, painting, running, surfing, or trying any sport that keeps me moving. I also love travelling, photography, café hopping, and spending the occasional evening lost in a game.</p>
          </div>
        </div>
      </section>

      <section class="about-segment" aria-labelledby="about-work-title">
        <div class="about-shell">
          <h2 class="about-section-title reveal" id="about-work-title">Work<br /><span>Experiences</span></h2>
          <div class="about-timeline">
            <div class="about-entry reveal">
              <p class="about-date">2026 - Now</p>
              <div><h3>Apple Developer Academy Bali</h3><p class="about-role">Product Designer</p><p>Designed and developed apps through hands-on projects, collaborating across research, UI/UX design, and coding to address real-world problems.</p></div>
            </div>
            <div class="about-entry reveal">
              <p class="about-date">2024 - 2026</p>
              <div><h3>Grab Indonesia</h3><p class="about-role">Onboarding Excellence Coordinator</p><p>Managed merchant onboarding and growth initiatives through data verification and performance analysis, while designing communication materials for merchant campaigns.</p></div>
            </div>
            <div class="about-entry reveal">
              <p class="about-date">2024</p>
              <div><h3>PT Adhi Persada Gedung</h3><p class="about-role">Quantity Surveyor Intern</p><p>Assisted with quantity calculations and cost estimation for construction work.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-segment" aria-labelledby="about-achievements-title">
        <div class="about-shell">
          <h2 class="about-section-title reveal" id="about-achievements-title">Achievements</h2>
          <div class="about-timeline">
            <div class="about-entry reveal">
              <p class="about-date">2023</p>
              <div><h3>1st Winner of Hijau Jakartaku Student Design Competition: Urban Eco Park</h3><p>Designed an urban eco park that brings sustainability into public space.</p></div>
            </div>
            <div class="about-entry reveal">
              <p class="about-date">2022</p>
              <div><h3>Top 10 Screen 6.0 Architecture Sketch Competition: Heritage</h3><p>Explored architectural heritage through hand-drawn sketches.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-segment about-education" aria-labelledby="about-education-title">
        <div class="about-shell">
          <h2 class="about-section-title reveal" id="about-education-title">Education</h2>
          <div class="about-timeline">
            <div class="about-entry reveal">
              <p class="about-date">2020–2024</p>
              <div><h3>Universitas Indonesia</h3><p class="about-role">Bachelor of Architecture</p></div>
            </div>
          </div>
        </div>
      </section>
    </article>
    ${U()}`}const X=[[0,1,0,0],[.35,1,0,0],[1.05,1.7,-.55,.36],[4.35,1.7,-.55,.36],[5.2,1.7,.22,.36],[7.05,1.7,.22,.36],[8.15,1,0,0],[8.67,1,0,0]];function Ms(o){const n=X.findIndex(w=>w[0]>o);if(n===0||n===-1)return X[n===0?0:X.length-1].slice(1);const t=X[n-1],l=X[n],r=(o-t[0])/(l[0]-t[0]),p=r*r*(3-2*r);return t.slice(1).map((w,S)=>w+(l[S+1]-w)*p)}function zs(o){const n=document.querySelector("[data-bocil-preview-motion]"),t=n?.querySelector("video");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const l=n.closest(".project-visual"),r=l.querySelector(".bocil-motion-frame"),p=r?.getContext("2d");let w,S;const A=D=>{const[T,Y,q]=Ms(D);n.style.setProperty("--bocil-camera-zoom",T.toFixed(5)),n.style.setProperty("--bocil-camera-x",`${(Y*100).toFixed(4)}%`),n.style.setProperty("--bocil-camera-y",`${(q*100).toFixed(4)}%`);const E=l.clientWidth,_=l.clientHeight,j=window.devicePixelRatio||1,R=`${D}:${E}:${_}:${j}`;if(p&&E&&_&&t.readyState>=2&&t.videoWidth&&S!==R){const L=Math.ceil(E*j),H=Math.ceil(_*j);(r.width!==L||r.height!==H)&&(r.width=L,r.height=H);const O=E*.8,G=O*t.videoHeight/t.videoWidth,e=O*T,s=G*T,c=E/2+Y*O-e/2,d=_/2+q*G-s/2,u=10*T;try{p.setTransform(L/E,0,0,H/_,0,0),p.clearRect(0,0,E,_),p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.save(),p.beginPath(),p.moveTo(c+u,d),p.arcTo(c+e,d,c+e,d+s,u),p.arcTo(c+e,d+s,c,d+s,u),p.arcTo(c,d+s,c,d,u),p.arcTo(c,d,c+e,d,u),p.closePath(),p.clip(),p.drawImage(t,c,d,e,s),p.restore(),l.classList.add("has-motion-frame"),S=R}catch{p.restore(),l.classList.remove("has-motion-frame")}}},$=()=>{w=void 0,!o.aborted&&(A(t.currentTime),!t.paused&&!t.ended&&(w=requestAnimationFrame($)))},C=()=>A(t.currentTime),F=()=>{!w&&!o.aborted&&(w=requestAnimationFrame($))};t.addEventListener("seeked",C,{signal:o}),t.addEventListener("loadeddata",C,{signal:o}),t.addEventListener("playing",F,{signal:o}),window.addEventListener("resize",C,{passive:!0,signal:o}),F(),o.addEventListener("abort",()=>{cancelAnimationFrame(w)},{once:!0}),C()}let K;function qs(o="home"){K?.abort(),K=new AbortController,zs(K.signal),document.querySelectorAll("video[data-playback-rate]").forEach(a=>{const i=Number(a.dataset.playbackRate);Number.isFinite(i)&&i>0&&(a.defaultPlaybackRate=i,a.playbackRate=i)}),document.querySelectorAll("[data-header-head-cycle]").forEach(a=>{const i=K.signal,m={left:a.dataset.headRight,middle:a.dataset.headMiddle,right:a.dataset.headLeft};let b="middle";const y=g=>{b===g&&a.getAttribute("src")===m[g]||(b=g,a.src=m[g])};y("middle"),Object.values(m).forEach(g=>{const v=new Image;v.src=g,v.decode().catch(()=>{})}),window.addEventListener("pointermove",g=>{if(g.pointerType==="touch")return;const v=a.getBoundingClientRect();if(v.bottom<0||v.top>window.innerHeight)return;const h=v.left+v.width*.433,f=v.width*.055;y(g.clientX<h-f?"left":g.clientX>h+f?"right":"middle")},{passive:!0,signal:i}),document.documentElement.addEventListener("pointerleave",()=>y("middle"),{signal:i}),window.addEventListener("blur",()=>y("middle"),{signal:i})});const n=document.querySelector("[data-header]"),t=document.querySelector(".menu-button"),l=document.querySelector(".main-nav");t?.addEventListener("click",()=>{const a=n.classList.toggle("menu-open");t.setAttribute("aria-expanded",String(a)),t.querySelector(".menu-glyph").textContent=a?"−":"+"});const r=[...l?.querySelectorAll("a")??[]],p=a=>{r.forEach(i=>{const m=i===a;i.classList.toggle("is-active",m),m?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")})},w=["bocil","typelab","brewtime","sustainopia","higher-hopes","grab"].includes(o)?"work":o;p(r.find(a=>a.dataset.route===w)),r.forEach(a=>a.addEventListener("click",()=>{p(a),n.classList.remove("menu-open"),t.setAttribute("aria-expanded","false"),t.querySelector(".menu-glyph").textContent="+"}));const S=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),S.unobserve(i.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(a=>S.observe(a));const A=document.querySelector("[data-year]");A&&(A.textContent=new Date().getFullYear());const $=document.querySelector("[data-loop-gallery]"),C=[...document.querySelectorAll("[data-loop-panel]")];let F=0,D=0,T;const Y=()=>{F+=(D-F)*.12,C.forEach((a,i)=>{const m=((i-F)%C.length+C.length)%C.length;a.style.setProperty("--slot",m.toFixed(3)),a.style.zIndex=String(Math.round((C.length-m)*10))}),Math.abs(D-F)>.001&&(T=requestAnimationFrame(Y))},q=a=>{D+=a,cancelAnimationFrame(T),T=requestAnimationFrame(Y)};if($){const a=$.querySelector("[data-gallery-title]"),i=$.querySelector("[data-gallery-chips]"),m=h=>{a&&(a.textContent=h.dataset.projectTitle),i&&(i.innerHTML=h.dataset.projectTags.split("|").map(f=>`<span>${f}</span>`).join(""),i.classList.add("is-visible"))},b=()=>{a&&(a.textContent=a.dataset.defaultTitle),i&&(i.classList.remove("is-visible"),i.innerHTML="")};let y=null;const g=h=>{y!==h&&(y?.classList.remove("is-hovered"),y=h,y?.classList.add("is-hovered"),y?m(y):b())};$.addEventListener("pointermove",h=>{const f=C.map(k=>({panel:k,rect:k.getBoundingClientRect()})).filter(({rect:k})=>h.clientX>=k.left&&h.clientX<=k.right&&h.clientY>=k.top&&h.clientY<=k.bottom).sort((k,z)=>h.clientY-k.rect.top-(h.clientY-z.rect.top));g(f[0]?.panel??null)}),$.addEventListener("pointerleave",()=>g(null)),C.forEach(h=>{h.addEventListener("focus",()=>g(h)),h.addEventListener("blur",()=>g(null))}),$.addEventListener("wheel",h=>{h.preventDefault(),g(null),q(h.deltaY*.0032)},{passive:!1});let v=0;$.addEventListener("touchstart",h=>{g(null),v=h.touches[0].clientY},{passive:!0}),$.addEventListener("touchmove",h=>{const f=h.touches[0].clientY;q((v-f)*.012),v=f},{passive:!0}),$.addEventListener("keydown",h=>{["ArrowDown","ArrowRight"].includes(h.key)&&q(.8),["ArrowUp","ArrowLeft"].includes(h.key)&&q(-.8)}),Y()}const E=document.querySelector("[data-keychain-scene]"),_=document.querySelector("[data-keychain-object]");if(E&&_){const a=[..._.querySelectorAll("[data-keychain-card]")];let i=null;const m=b=>{if(i===b)return;i=b;const y=b?Number(b.dataset.cardIndex):null;a.forEach((g,v)=>{if(g.classList.toggle("is-active",g===b),!b){["--live-angle","--live-shift","--live-y","--live-z"].forEach(f=>g.style.removeProperty(f)),g.style.zIndex="";return}const h=v-y;g.style.setProperty("--live-angle",`${h*11}deg`),g.style.setProperty("--live-shift",`${h*9}px`),g.style.setProperty("--live-y",g===b?"-10px":`${Math.abs(h)*3}px`),g.style.setProperty("--live-z",g===b?"85px":`${-Math.abs(h)*12}px`),g.style.zIndex=g===b?"45":String(20-Math.abs(h))})};E.addEventListener("pointermove",b=>{const y=E.getBoundingClientRect(),g=(b.clientX-y.left)/y.width-.5,v=(b.clientY-y.top)/y.height-.5;_.style.setProperty("--key-rx",`${v*-7}deg`),_.style.setProperty("--key-ry",`${g*9}deg`);const h=document.elementFromPoint(b.clientX,b.clientY)?.closest("[data-keychain-card]");h&&_.contains(h)&&m(h)}),E.addEventListener("pointerleave",()=>{_.style.setProperty("--key-rx","0deg"),_.style.setProperty("--key-ry","0deg"),m(null)}),a.forEach(b=>{b.addEventListener("focus",()=>m(b)),b.addEventListener("blur",()=>m(null))})}const j=document.querySelector("[data-paper-deck]"),R=[...document.querySelectorAll("[data-paper-sheet]")];let L;const H=()=>{const a=window.innerHeight,i=j?.getBoundingClientRect(),m=Math.max(1,(j?.offsetHeight??a)-a),b=Math.max(0,Math.min(1,-(i?.top??0)/m)),y=Math.max(a*.95,760);R.forEach((g,v)=>{const h=v===0?1:Math.max(0,Math.min(1,b*(R.length-1)-(v-1))),f=1-Math.pow(1-h,3),k=v%2?1:-1;g.style.setProperty("--paper-y",`${(1-f)*y}px`),g.style.setProperty("--paper-turn",`${(1-f)*k*1.1}deg`),g.style.zIndex=String(v+2)}),L=void 0},O=()=>{L||(L=requestAnimationFrame(H))};j&&R.length&&(H(),window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0})),window.__pencilTrailAbort?.abort();const G=document.querySelector("[data-pencil-trail]"),e=window.matchMedia("(hover: hover) and (pointer: fine)").matches,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(G&&e&&!s){const a=G.getContext("2d"),i=[],m=new AbortController;window.__pencilTrailAbort=m;let b;const y=()=>{const f=Math.min(window.devicePixelRatio||1,2);G.width=Math.round(window.innerWidth*f),G.height=Math.round(window.innerHeight*f),a.setTransform(f,0,0,f,0,0)},g=480,v=f=>{for(a.clearRect(0,0,window.innerWidth,window.innerHeight),a.lineCap="round",a.lineJoin="round";i.length&&f-i[0].born>=g;)i.shift();for(let k=1;k<i.length;k+=1){const z=i[k-1],B=i[k],W=i[k+1],N=k===1?z:{x:(z.x+B.x)/2,y:(z.y+B.y)/2},Z=W?{x:(B.x+W.x)/2,y:(B.y+W.y)/2}:B,se=Math.max(0,1-(f-z.born)/g);a.strokeStyle=`rgba(255,255,255,${se*.7})`,a.lineWidth=.72+se*.38,a.beginPath(),a.moveTo(N.x,N.y),a.quadraticCurveTo(B.x,B.y,Z.x,Z.y),a.stroke(),a.strokeStyle=`rgba(255,255,255,${se*.22})`,a.lineWidth=.45,a.beginPath(),a.moveTo(N.x+.5,N.y-.5),a.quadraticCurveTo(B.x+.5,B.y-.5,Z.x+.5,Z.y-.5),a.stroke()}i.length?b=requestAnimationFrame(v):b=void 0};document.addEventListener("pointermove",f=>{if(f.pointerType==="touch")return;const k=f.getCoalescedEvents?.(),z=performance.now();for(const B of k?.length?k:[f]){const W=i.at(-1);W&&Math.hypot(B.clientX-W.x,B.clientY-W.y)<.5||i.push({x:B.clientX,y:B.clientY,born:z})}i.length>512&&i.splice(0,i.length-512),i.length&&!b&&(b=requestAnimationFrame(v))},{passive:!0,signal:m.signal});const h=()=>{cancelAnimationFrame(b),b=void 0,i.length=0,a.clearRect(0,0,window.innerWidth,window.innerHeight)};m.signal.addEventListener("abort",h,{once:!0}),document.documentElement.addEventListener("pointerleave",h,{signal:m.signal}),window.addEventListener("blur",h,{signal:m.signal}),window.addEventListener("resize",y,{passive:!0,signal:m.signal}),y()}const c=n.querySelector(".brand"),d=document.querySelector(".bocil-case .bocil-hero"),u=document.querySelector(".typelab-compose-media"),P=document.querySelector(".texture"),I=()=>{n.classList.toggle("is-scrolled",window.scrollY>30);const a=!!(d&&d.getBoundingClientRect().bottom<=n.getBoundingClientRect().bottom);if(c.classList.toggle("is-project-back",a),c.setAttribute("aria-label",a?"Back to Work":"Go to work"),u&&P){const i=u.getBoundingClientRect(),m=u.querySelector(".typelab-compose-style"),b=Math.min(i.top,m?.getBoundingClientRect().top??i.top),y=g=>Math.max(0,Math.min(window.innerHeight,g));P.style.setProperty("--compose-texture-top",`${y(b)}px`),P.style.setProperty("--compose-texture-bottom",`${y(i.bottom)}px`)}};window.addEventListener("scroll",I,{passive:!0,signal:K.signal}),window.addEventListener("resize",I,{passive:!0,signal:K.signal}),I();const V=[...document.querySelectorAll(".sustainopia-drawings-track, .sustainopia-render-track")],M=K.signal;V.forEach(a=>{const i=a.parentElement,m=a.classList.contains("sustainopia-drawings-track")?150:120;let b=0,y,g,v=!1,h=!1;const f=()=>{h||(v=!0)},k=()=>{v=!1,h=!1};i.addEventListener("pointerenter",f,{signal:M}),i.addEventListener("pointerleave",k,{signal:M}),i.addEventListener("pointermove",()=>{h=!1,v=!0},{signal:M}),i.addEventListener("keydown",B=>{B.key==="Tab"&&(v=!0)},{signal:M}),i.addEventListener("focusout",B=>{i.contains(B.relatedTarget)||k()},{signal:M}),i.addEventListener("galleryresume",()=>{v=!1,h=!0,i.scrollLeft=0},{signal:M});const z=B=>{const W=y===void 0?0:Math.min((B-y)/1e3,.05);if(y=B,!v&&!document.body.classList.contains("sustainopia-modal-open")){const N=a.firstElementChild.getBoundingClientRect().width;N>0&&(b=(b+W*m)%N),a.style.setProperty("--gallery-offset",`${-b}px`)}g=requestAnimationFrame(z)};g=requestAnimationFrame(z),M.addEventListener("abort",()=>cancelAnimationFrame(g),{once:!0})});const x=document.querySelector(".sustainopia-lightbox");if(x){let a;document.querySelectorAll(".sustainopia-zoom-trigger").forEach(i=>{i.addEventListener("click",()=>{a=i,x.classList.toggle("is-render",!!i.closest(".sustainopia-render-window"));const m=x.querySelector("img");m.src=i.dataset.zoomSrc,m.alt=i.dataset.zoomLabel,x.querySelector(".sustainopia-lightbox-caption").textContent=i.dataset.zoomLabel,x.querySelector(".sustainopia-lightbox-scroll").scrollTo(0,0),x.classList.remove("is-zoomed"),x.showModal(),document.body.classList.add("sustainopia-modal-open")})}),x.querySelector(".sustainopia-lightbox-close").addEventListener("click",()=>x.close()),x.addEventListener("click",i=>{i.target===x&&x.close()}),x.querySelector("img").addEventListener("click",()=>x.classList.toggle("is-zoomed")),x.addEventListener("close",()=>{document.body.classList.remove("sustainopia-modal-open");const i=a?.closest(".sustainopia-drawings-window, .sustainopia-render-window"),m=()=>{const b=document.activeElement;(i?.contains(b)||b===i)&&b.blur()};m(),requestAnimationFrame(m),i?.dispatchEvent(new Event("galleryresume"))})}}const Rs="/assets/about-gabriella-DPTDeAYo.jpeg",Hs="/assets/bocil-beach-night-DjQg919q.jpg",Gs="/assets/bocil-calendar-C1sdgfqM.mp4",Fs="/assets/bocil-focus-blurry-DOryg3wu.png",Os="/assets/bocil-header-DluoAKXD.png",Ws="/assets/bocil-history-BdtmNIuU.mp4",Ys="/assets/bocil-home-screen-Drny_6mM.mp4",Us="/assets/bocil-homepage-BpmftuHf.png",Vs="/assets/bocil-notification-D4vzl0MM.png",Ns="/assets/bocil-solution-robot-CKRyj0qD.mp4",Ks="/assets/bocil-timer-D1rEnOip.png",Xs="/assets/brewtime-custom-recipe-kQXP5dBu.mp4",Qs="/assets/brewtime-edit-BnEzW-M7.png",Js="/assets/brewtime-final-background-KwLpDzi5.png",Zs="/assets/brewtime-final-wallpaper-DS0R5krL.jpg",ei="/assets/brewtime-home-timer-CFYkQiFd.mp4",ti="/assets/brewtime-list-BqYdrzOP.png",si="/assets/brewtime-prototype-DbxP79uu.png",ii="/assets/brewtime-recipe-bottom-reference-BGoThO9W.png",ai="/assets/brewtime-recipe-menu-BDC5Tnzv.png",oi="/assets/brewtime-timer-Bodybwni.mp4",ni="/assets/brewtime-timer-BdLNZY1J.png",ri="/assets/grab-card-1-DZK0YQ_q.png",li="/assets/grab-card-2-CHE_D2iS.png",ci="/assets/grab-card-3-BfOkbL94.png",pi="/assets/grab-card-4-BH3NsDgJ.png",hi="/assets/grab-card-5-C6ELJf2V.png",di="/assets/grab-comms-1-DQ2Ak-J4.png",gi="/assets/grab-comms-2-Ci5olkYB.png",ui="/assets/grab-comms-3-JRb2oaFG.png",bi="/assets/grab-comms-4-Ci9lNdHD.png",mi="/assets/grab-poster-1-BJPzq6wr.png",vi="/assets/grab-poster-2-NfOcc-OH.png",yi="/assets/grabmerchant-app-icon-jEvE1AIE.png",wi="/assets/high-hopes-character-arm-ByqoSsDR.png",fi="/assets/high-hopes-character-hand-BJVudU66.png",_i="/assets/high-hopes-character-handsUp-CTks02de.png",ki="/assets/high-hopes-character-headLeft-THQ6TuR9.png",$i="/assets/high-hopes-character-headRight-NKbeTAlz.png",Bi="/assets/high-hopes-character-headStraight-BsDYcu9X.png",Si="/assets/high-hopes-character-hold-oegoJus5.png",xi="/assets/high-hopes-character-jump-CY8A15ZE.png",Ci="/assets/high-hopes-character-right-D4izFGt_.png",Ai="/assets/high-hopes-character-sit-C4qUvTsn.png",Ti="/assets/high-hopes-cliff1-Y1TVFThG.png",Ei="/assets/high-hopes-cliff2-DrbCC9wr.png",Di="/assets/high-hopes-cliff3-DcT0s5Hu.png",Li="/assets/high-hopes-control-poster-UdTlb_Lk.png",Pi="/assets/high-hopes-controls-CLn26D1d.mp4",ji="/assets/high-hopes-cover-hover-DKkNKrxw.png",Ii="/assets/high-hopes-end-story-Bng7T_0N.png",Mi="/assets/high-hopes-env-branch1-DxlfxKWM.png",zi="/assets/high-hopes-env-branch2-BtqraLFS.png",qi="/assets/high-hopes-env-branch3-CCOzyVuR.png",Ri="/assets/high-hopes-env-crack1-BeYEo9-6.png",Hi="/assets/high-hopes-env-crack2-CkBEhxxL.png",Gi="/assets/high-hopes-env-crack3-VBr3VQFS.png",Fi="/assets/high-hopes-env-leaves1-nWXf9u9s.png",Oi="/assets/high-hopes-env-leaves2-BWlPZsGm.png",Wi="/assets/high-hopes-env-leaves3-CFJYYn_X.png",Yi="/assets/high-hopes-env-leaves4-55rQaOjU.png",Ui="/assets/high-hopes-env-rope1--3upIkCj.png",Vi="/assets/high-hopes-env-rope2-B9AdsMRl.png",Ni="/assets/high-hopes-env-rope3-BoC2RPRV.png",Ki="/assets/high-hopes-env-ropestone-DL5r0c43.png",Xi="/assets/high-hopes-env-tree-tS1TJv_2.png",Qi="/assets/high-hopes-final-forest-CzHurWv7.png",Ji="/assets/high-hopes-fire-background-DKgTnc0q.png",Zi="/assets/high-hopes-fire-scene-CAOBBFV2.png",ea="/assets/high-hopes-fire-ClJqeZw_.webp",ta="/assets/high-hopes-grass1-SYiW-Azg.png",sa="/assets/high-hopes-grass2-Bt9k3yjs.png",ia="/assets/high-hopes-grass3-BUP4k9KB.png",aa="/assets/high-hopes-grass4-DF5Keef3.png",oa="/assets/high-hopes-grass5-Bo_t8ckK.png",na="/assets/high-hopes-ground-Csy35h5a.png",ra="/assets/high-hopes-header-left-S0S1xR5d.png",la="/assets/high-hopes-header-middle-CIynMj9Z.png",ca="/assets/high-hopes-header-right-DpROh7FD.png",pa="/assets/high-hopes-helicopter-sky-Buc93Xtg.png",ha="/assets/high-hopes-helicopter-CNhFGs8a.gif",da="/assets/high-hopes-home-screen-X5OKEApP.png",ga="/assets/high-hopes-homepage-left-BMaBYnxb.png",ua="/assets/high-hopes-homepage-right-PdWiy8Tq.png",ba="/assets/high-hopes-monkey-reference-BQI4xMtd.png",ma="/assets/high-hopes-moss-bottom-BfzMj-i3.png",va="/assets/high-hopes-moss-top-D_c17ovh.png",ya="/assets/high-hopes-moss-NLpuzvkE.png",wa="/assets/high-hopes-opening-story-CmNuFK_O.png",fa="/assets/high-hopes-scene-1-BdsD9ZWU.png",_a="/assets/high-hopes-scene-1-DEtzidTy.webp",ka="/assets/high-hopes-scene-2-B-1PBxh5.png",$a="/assets/high-hopes-scene-2-0mXuk4cg.webp",Ba="/assets/high-hopes-scene-3-DjE2Rro9.png",Sa="/assets/high-hopes-scene-3-CUYCWvWQ.webp",xa="/assets/high-hopes-sky1-Cvq9Gmko.png",Ca="/assets/high-hopes-sky2-W0SCk3mY.png",Aa="/assets/high-hopes-stone1-BPYvk5l8.png",Ta="/assets/high-hopes-stone2-yPjt3c05.png",Ea="/assets/high-hopes-stone3-ZCSvx2Pj.png",Da="/assets/high-hopes-tribute-D8a1G7PO.png",La="/assets/high-hopes-wood-texture-DxupXKXK.jpg",Pa="/assets/bocil-calendar-7Zn9sGDT.jpg",ja="/assets/bocil-history-C1kwyaDY.jpg",Ia="/assets/bocil-home-screen-DGEQ0Pqi.jpg",Ma="/assets/bocil-solution-robot-Cue7tVoS.jpg",za="/assets/brewtime-custom-recipe-7cuEkAOw.jpg",qa="/assets/brewtime-home-timer-DcwOlNVX.jpg",Ra="/assets/brewtime-timer-Ckh-OQko.jpg",Ha="/assets/high-hopes-controls-sCrD4RaM.jpg",Ga="/assets/typelab-canvas-clean-ClltznX_.jpg",Fa="/assets/typelab-system-clean-CjqvAsQw.jpg",Oa="/assets/brewtime-final-wallpaper-DxlsjQ-r.webp",Wa="/assets/brewtime-recipe-bottom-reference-BXzhpRgG.webp",Ya="/assets/grab-card-1-Dvnrhpn0.webp",Ua="/assets/grab-card-2-BMw0WNAt.webp",Va="/assets/high-hopes-homepage-left-BNXgPujM.webp",Na="/assets/high-hopes-homepage-right-fcBi0nrE.webp",Ka="/assets/sustainopia-cover-BScOqfuZ.webp",Xa="/assets/sustainopia-birdeye-U55hHNZT.png",Qa="/assets/sustainopia-challenge-1-C2Ya16jg.png",Ja="/assets/sustainopia-challenge-2-BqfA-xFQ.png",Za="/assets/sustainopia-challenge-3-CxKvQr-v.png",eo="/assets/sustainopia-challenge-4-TEDcQ9KV.png",to="/assets/sustainopia-communal-B8VwNRr5.png",so="/assets/sustainopia-concept-1-D_uDiaHC.png",io="/assets/sustainopia-concept-2-BzYtPmpp.png",ao="/assets/sustainopia-concept-3-Cp9MD3E_.png",oo="/assets/sustainopia-cover-BNoD2a8C.png",no="/assets/sustainopia-drawing-1-CNRsQfWQ.png",ro="/assets/sustainopia-drawing-2-uN5p68iD.png",lo="/assets/sustainopia-drawing-3-B6hoFR86.png",co="/assets/sustainopia-drawing-4-CM7vSdPH.png",po="/assets/sustainopia-final-site-plan-CKm_sCBG.png",ho="/assets/sustainopia-header-top-view-BrwGWYkG.png",go="/assets/sustainopia-hero-C8-UpBDy.png",uo="/assets/sustainopia-pet-qXH5_Nxe.png",bo="/assets/sustainopia-picnic-Bi48C5Gs.png",mo="/assets/sustainopia-site-plan-B7mkyY08.png",vo="/assets/sustainopia-strategy-1-8-h7c8K5.png",yo="/assets/sustainopia-strategy-2-D3lZ0c54.png",wo="/assets/sustainopia-strategy-3-B2JWUg7T.png",fo="/assets/sustainopia-strategy-4-CSua5LLa.png",_o="/assets/sustainopia-strategy-5-DxwkmFJ4.png",ko="/assets/sustainopia-strategy-6-BlFbpiGN.png",$o="/assets/sustainopia-title-BlCZlE2X.png",Bo="/assets/textureee-B0DDRNVG.png",So="/assets/torn-paper-BWaTL-dw.png",xo="/assets/typelab-canvas-clean-CmtsmiEn.mp4",Co="/assets/typelab-compose-guidelines-jE7D_rcj.png",Ao="/assets/typelab-compose-style-B1TuQ9_k.png",To="/assets/typelab-compose-B5ylhK3u.png",Eo="/assets/typelab-final-mockup-composited-DTaKMWwd.png",Do="/assets/typelab-final-mockup-expanded-Lxcvmurg.png",Lo="/assets/typelab-final-screen-original-DruC6snx.png",Po="/assets/typelab-prototype-coding-B8oBNLBW.png",jo="/assets/typelab-system-clean-BgYkVVjA.mp4",Io="/assets/typelab-system-compare-BIkm5fJj.png",Mo="/assets/typelab-system-preview-ssFIE1uV.png",zo={"bocil-calendar.mp4":{width:2218,height:1392,poster:"posters/bocil-calendar.jpg"},"bocil-history.mp4":{width:2218,height:1384,poster:"posters/bocil-history.jpg"},"bocil-home-screen.mp4":{width:2218,height:1392,poster:"posters/bocil-home-screen.jpg"},"bocil-solution-robot.mp4":{width:1920,height:1080,poster:"posters/bocil-solution-robot.jpg"},"brewtime-custom-recipe.mp4":{width:1440,height:2698,poster:"posters/brewtime-custom-recipe.jpg"},"brewtime-home-timer.mp4":{width:1440,height:2698,poster:"posters/brewtime-home-timer.jpg"},"brewtime-timer.mp4":{width:1440,height:2698,poster:"posters/brewtime-timer.jpg"},"high-hopes-controls.mp4":{width:3120,height:1440,poster:"posters/high-hopes-controls.jpg"},"typelab-canvas-clean.mp4":{width:1920,height:1392,poster:"posters/typelab-canvas-clean.jpg"},"typelab-system-clean.mp4":{width:1920,height:1392,poster:"posters/typelab-system-clean.jpg"},"bocil-beach-night.jpg":{width:2400,height:1350},"bocil-focus-blurry.png":{width:1952,height:1224},"bocil-header.png":{width:3024,height:1608},"bocil-homepage.png":{width:1274,height:758},"bocil-notification.png":{width:1140,height:1130},"bocil-timer.png":{width:646,height:762},"brewtime-edit.png":{width:1206,height:2622},"brewtime-final-background.png":{width:3392,height:3392},"brewtime-final-wallpaper.jpg":{width:6016,height:6016},"brewtime-list.png":{width:1206,height:2622},"brewtime-prototype.png":{width:1922,height:1248},"brewtime-recipe-bottom-reference.png":{width:640,height:976},"brewtime-recipe-menu.png":{width:1550,height:936},"brewtime-timer.png":{width:1206,height:2622},"grab-card-1.png":{width:2022,height:1276},"grab-card-2.png":{width:2022,height:1276},"grab-card-3.png":{width:2022,height:1276},"grab-card-4.png":{width:2022,height:1276},"grab-card-5.png":{width:2022,height:1276},"grab-comms-1.png":{width:2160,height:3840},"grab-comms-2.png":{width:2160,height:2700},"grab-comms-3.png":{width:1578,height:888},"grab-comms-4.png":{width:1592,height:896},"grab-poster-1.png":{width:2160,height:3840},"grab-poster-2.png":{width:2181,height:2698},"grabmerchant-app-icon.png":{width:512,height:512},"high-hopes-character-arm.png":{width:348,height:827},"high-hopes-character-hand.png":{width:163,height:174},"high-hopes-character-handsUp.png":{width:724,height:1209},"high-hopes-character-headLeft.png":{width:321,height:270},"high-hopes-character-headRight.png":{width:321,height:270},"high-hopes-character-headStraight.png":{width:322,height:269},"high-hopes-character-hold.png":{width:152,height:153},"high-hopes-character-jump.png":{width:647,height:825},"high-hopes-character-right.png":{width:1059,height:1033},"high-hopes-character-sit.png":{width:474,height:828},"high-hopes-cliff1.png":{width:879,height:1260},"high-hopes-cliff2.png":{width:730,height:1417},"high-hopes-cliff3.png":{width:765,height:1524},"high-hopes-control-poster.png":{width:3120,height:1440},"high-hopes-cover-hover.png":{width:4194,height:5714},"high-hopes-end-story.png":{width:1748,height:804},"high-hopes-env-branch1.png":{width:304,height:210},"high-hopes-env-branch2.png":{width:250,height:314},"high-hopes-env-branch3.png":{width:1069,height:501},"high-hopes-env-crack1.png":{width:1673,height:443},"high-hopes-env-crack2.png":{width:1176,height:438},"high-hopes-env-crack3.png":{width:999,height:328},"high-hopes-env-leaves1.png":{width:459,height:398},"high-hopes-env-leaves2.png":{width:406,height:399},"high-hopes-env-leaves3.png":{width:498,height:454},"high-hopes-env-leaves4.png":{width:381,height:201},"high-hopes-env-rope1.png":{width:1847,height:676},"high-hopes-env-rope2.png":{width:1301,height:479},"high-hopes-env-rope3.png":{width:109,height:790},"high-hopes-env-ropestone.png":{width:356,height:157},"high-hopes-env-tree.png":{width:656,height:2621},"high-hopes-final-forest.png":{width:2645,height:1653},"high-hopes-fire-background.png":{width:2796,height:1290},"high-hopes-fire-scene.png":{width:4194,height:5714},"high-hopes-fire.webp":{width:1400,height:646},"high-hopes-grass1.png":{width:1037,height:1382},"high-hopes-grass2.png":{width:1014,height:398},"high-hopes-grass3.png":{width:1025,height:1208},"high-hopes-grass4.png":{width:1048,height:507},"high-hopes-grass5.png":{width:1811,height:594},"high-hopes-ground.png":{width:3002,height:352},"high-hopes-header-left.png":{width:1748,height:804},"high-hopes-header-middle.png":{width:1748,height:804},"high-hopes-header-right.png":{width:1748,height:804},"high-hopes-helicopter-sky.png":{width:4194,height:1378},"high-hopes-helicopter.gif":{width:720,height:604},"high-hopes-home-screen.png":{width:1748,height:804},"high-hopes-homepage-left.png":{width:4458,height:3134},"high-hopes-homepage-right.png":{width:4458,height:3134},"high-hopes-monkey-reference.png":{width:612,height:612},"high-hopes-moss-bottom.png":{width:1422,height:381},"high-hopes-moss-top.png":{width:1182,height:414},"high-hopes-moss.png":{width:1422,height:839},"high-hopes-opening-story.png":{width:1748,height:804},"high-hopes-scene-1.png":{width:6014,height:6032},"high-hopes-scene-1.webp":{width:2200,height:2207},"high-hopes-scene-2.png":{width:4194,height:6923},"high-hopes-scene-2.webp":{width:2200,height:3632},"high-hopes-scene-3.png":{width:4194,height:4923},"high-hopes-scene-3.webp":{width:2200,height:2582},"high-hopes-sky1.png":{width:1294,height:2340},"high-hopes-sky2.png":{width:1304,height:1777},"high-hopes-stone1.png":{width:738,height:459},"high-hopes-stone2.png":{width:540,height:386},"high-hopes-stone3.png":{width:348,height:300},"high-hopes-tribute.png":{width:1748,height:804},"high-hopes-wood-texture.jpg":{width:1200,height:2400},"posters/bocil-calendar.jpg":{width:1280,height:804},"posters/bocil-history.jpg":{width:1280,height:798},"posters/bocil-home-screen.jpg":{width:1280,height:804},"posters/bocil-solution-robot.jpg":{width:1280,height:720},"posters/brewtime-custom-recipe.jpg":{width:1280,height:2398},"posters/brewtime-home-timer.jpg":{width:1280,height:2398},"posters/brewtime-timer.jpg":{width:1280,height:2398},"posters/high-hopes-controls.jpg":{width:1280,height:590},"posters/typelab-canvas-clean.jpg":{width:1280,height:928},"posters/typelab-system-clean.jpg":{width:1280,height:928},"sustainopia-birdeye.png":{width:2708,height:1588},"sustainopia-challenge-1.png":{width:1004,height:704},"sustainopia-challenge-2.png":{width:1016,height:866},"sustainopia-challenge-3.png":{width:1052,height:942},"sustainopia-challenge-4.png":{width:1123,height:1093},"sustainopia-communal.png":{width:2858,height:1608},"sustainopia-concept-1.png":{width:1030,height:954},"sustainopia-concept-2.png":{width:1024,height:952},"sustainopia-concept-3.png":{width:1008,height:948},"sustainopia-cover.png":{width:1512,height:849},"sustainopia-drawing-1.png":{width:1854,height:1268},"sustainopia-drawing-2.png":{width:1812,height:1268},"sustainopia-drawing-3.png":{width:3536,height:1268},"sustainopia-drawing-4.png":{width:5004,height:1268},"sustainopia-final-site-plan.png":{width:2138,height:1449},"sustainopia-header-top-view.png":{width:3484,height:1960},"sustainopia-hero.png":{width:7017,height:3794},"sustainopia-pet.png":{width:2858,height:1608},"sustainopia-picnic.png":{width:2858,height:1608},"sustainopia-site-plan.png":{width:942,height:1432},"sustainopia-strategy-1.png":{width:1140,height:948},"sustainopia-strategy-2.png":{width:1120,height:966},"sustainopia-strategy-3.png":{width:1066,height:918},"sustainopia-strategy-4.png":{width:1068,height:1194},"sustainopia-strategy-5.png":{width:1064,height:898},"sustainopia-strategy-6.png":{width:1076,height:1024},"sustainopia-title.png":{width:3086,height:629},"textureee.png":{width:1440,height:1024},"torn-paper.png":{width:736,height:736},"typelab-compose-guidelines.png":{width:964,height:1632},"typelab-compose-style.png":{width:859,height:1832},"typelab-compose.png":{width:1616,height:1182},"typelab-final-mockup-composited.png":{width:3344,height:1882},"typelab-final-mockup-expanded.png":{width:1672,height:941},"typelab-final-screen-original.png":{width:2752,height:2064},"typelab-prototype-coding.png":{width:1936,height:1214},"typelab-system-compare.png":{width:2752,height:2064},"typelab-system-preview.png":{width:2752,height:2064},"previews/high-hopes-homepage-left.webp":{width:1280,height:900},"previews/high-hopes-homepage-right.webp":{width:1280,height:900},"previews/sustainopia-cover.webp":{width:1280,height:719},"previews/grab-card-1.webp":{width:1280,height:808},"previews/grab-card-2.webp":{width:1280,height:808},"previews/brewtime-recipe-bottom-reference.webp":{width:640,height:976},"previews/brewtime-final-wallpaper.webp":{width:1280,height:1280}},qo={"high-hopes-homepage-left.png":"previews/high-hopes-homepage-left.webp","high-hopes-homepage-right.png":"previews/high-hopes-homepage-right.webp","sustainopia-cover.png":"previews/sustainopia-cover.webp","grab-card-1.png":"previews/grab-card-1.webp","grab-card-2.png":"previews/grab-card-2.webp","brewtime-recipe-bottom-reference.png":"previews/brewtime-recipe-bottom-reference.webp","brewtime-final-wallpaper.jpg":"previews/brewtime-final-wallpaper.webp"};function Ro(o,n=3,t=1){const l=[];let r=0,p=0;const w=()=>{if(!o.aborted)for(l.sort((S,A)=>A.priority()-S.priority());r<n;){const S=l.findIndex($=>!$.video||p<t);if(S<0)break;const A=l.splice(S,1)[0];r+=1,A.video&&(p+=1),Promise.resolve().then(()=>o.aborted?void 0:A.run()).catch(()=>{}).finally(()=>{r-=1,A.video&&(p-=1),w()})}};return o.addEventListener("abort",()=>{l.length=0},{once:!0}),(S,{video:A=!1,priority:$=()=>0}={})=>{o.aborted||(l.push({run:S,video:A,priority:$}),w())}}const Ho=Object.assign({"../assets/about-gabriella.jpeg":Rs,"../assets/bocil-beach-night.jpg":Hs,"../assets/bocil-calendar.mp4":Gs,"../assets/bocil-focus-blurry.png":Fs,"../assets/bocil-header.png":Os,"../assets/bocil-history.mp4":Ws,"../assets/bocil-home-screen.mp4":Ys,"../assets/bocil-homepage.png":Us,"../assets/bocil-notification.png":Vs,"../assets/bocil-solution-robot.mp4":Ns,"../assets/bocil-timer.png":Ks,"../assets/brewtime-custom-recipe.mp4":Xs,"../assets/brewtime-edit.png":Qs,"../assets/brewtime-final-background.png":Js,"../assets/brewtime-final-wallpaper.jpg":Zs,"../assets/brewtime-home-timer.mp4":ei,"../assets/brewtime-list.png":ti,"../assets/brewtime-prototype.png":si,"../assets/brewtime-recipe-bottom-reference.png":ii,"../assets/brewtime-recipe-menu.png":ai,"../assets/brewtime-timer.mp4":oi,"../assets/brewtime-timer.png":ni,"../assets/grab-card-1.png":ri,"../assets/grab-card-2.png":li,"../assets/grab-card-3.png":ci,"../assets/grab-card-4.png":pi,"../assets/grab-card-5.png":hi,"../assets/grab-comms-1.png":di,"../assets/grab-comms-2.png":gi,"../assets/grab-comms-3.png":ui,"../assets/grab-comms-4.png":bi,"../assets/grab-poster-1.png":mi,"../assets/grab-poster-2.png":vi,"../assets/grabmerchant-app-icon.png":yi,"../assets/high-hopes-character-arm.png":wi,"../assets/high-hopes-character-hand.png":fi,"../assets/high-hopes-character-handsUp.png":_i,"../assets/high-hopes-character-headLeft.png":ki,"../assets/high-hopes-character-headRight.png":$i,"../assets/high-hopes-character-headStraight.png":Bi,"../assets/high-hopes-character-hold.png":Si,"../assets/high-hopes-character-jump.png":xi,"../assets/high-hopes-character-right.png":Ci,"../assets/high-hopes-character-sit.png":Ai,"../assets/high-hopes-cliff1.png":Ti,"../assets/high-hopes-cliff2.png":Ei,"../assets/high-hopes-cliff3.png":Di,"../assets/high-hopes-control-poster.png":Li,"../assets/high-hopes-controls.mp4":Pi,"../assets/high-hopes-cover-hover.png":ji,"../assets/high-hopes-end-story.png":Ii,"../assets/high-hopes-env-branch1.png":Mi,"../assets/high-hopes-env-branch2.png":zi,"../assets/high-hopes-env-branch3.png":qi,"../assets/high-hopes-env-crack1.png":Ri,"../assets/high-hopes-env-crack2.png":Hi,"../assets/high-hopes-env-crack3.png":Gi,"../assets/high-hopes-env-leaves1.png":Fi,"../assets/high-hopes-env-leaves2.png":Oi,"../assets/high-hopes-env-leaves3.png":Wi,"../assets/high-hopes-env-leaves4.png":Yi,"../assets/high-hopes-env-rope1.png":Ui,"../assets/high-hopes-env-rope2.png":Vi,"../assets/high-hopes-env-rope3.png":Ni,"../assets/high-hopes-env-ropestone.png":Ki,"../assets/high-hopes-env-tree.png":Xi,"../assets/high-hopes-final-forest.png":Qi,"../assets/high-hopes-fire-background.png":Ji,"../assets/high-hopes-fire-scene.png":Zi,"../assets/high-hopes-fire.webp":ea,"../assets/high-hopes-grass1.png":ta,"../assets/high-hopes-grass2.png":sa,"../assets/high-hopes-grass3.png":ia,"../assets/high-hopes-grass4.png":aa,"../assets/high-hopes-grass5.png":oa,"../assets/high-hopes-ground.png":na,"../assets/high-hopes-header-left.png":ra,"../assets/high-hopes-header-middle.png":la,"../assets/high-hopes-header-right.png":ca,"../assets/high-hopes-helicopter-sky.png":pa,"../assets/high-hopes-helicopter.gif":ha,"../assets/high-hopes-home-screen.png":da,"../assets/high-hopes-homepage-left.png":ga,"../assets/high-hopes-homepage-right.png":ua,"../assets/high-hopes-monkey-reference.png":ba,"../assets/high-hopes-moss-bottom.png":ma,"../assets/high-hopes-moss-top.png":va,"../assets/high-hopes-moss.png":ya,"../assets/high-hopes-opening-story.png":wa,"../assets/high-hopes-scene-1.png":fa,"../assets/high-hopes-scene-1.webp":_a,"../assets/high-hopes-scene-2.png":ka,"../assets/high-hopes-scene-2.webp":$a,"../assets/high-hopes-scene-3.png":Ba,"../assets/high-hopes-scene-3.webp":Sa,"../assets/high-hopes-sky1.png":xa,"../assets/high-hopes-sky2.png":Ca,"../assets/high-hopes-stone1.png":Aa,"../assets/high-hopes-stone2.png":Ta,"../assets/high-hopes-stone3.png":Ea,"../assets/high-hopes-tribute.png":Da,"../assets/high-hopes-wood-texture.jpg":La,"../assets/posters/bocil-calendar.jpg":Pa,"../assets/posters/bocil-history.jpg":ja,"../assets/posters/bocil-home-screen.jpg":Ia,"../assets/posters/bocil-solution-robot.jpg":Ma,"../assets/posters/brewtime-custom-recipe.jpg":za,"../assets/posters/brewtime-home-timer.jpg":qa,"../assets/posters/brewtime-timer.jpg":Ra,"../assets/posters/high-hopes-controls.jpg":Ha,"../assets/posters/typelab-canvas-clean.jpg":Ga,"../assets/posters/typelab-system-clean.jpg":Fa,"../assets/previews/brewtime-final-wallpaper.webp":Oa,"../assets/previews/brewtime-recipe-bottom-reference.webp":Wa,"../assets/previews/grab-card-1.webp":Ya,"../assets/previews/grab-card-2.webp":Ua,"../assets/previews/high-hopes-homepage-left.webp":Va,"../assets/previews/high-hopes-homepage-right.webp":Na,"../assets/previews/sustainopia-cover.webp":Ka,"../assets/sustainopia-birdeye.png":Xa,"../assets/sustainopia-challenge-1.png":Qa,"../assets/sustainopia-challenge-2.png":Ja,"../assets/sustainopia-challenge-3.png":Za,"../assets/sustainopia-challenge-4.png":eo,"../assets/sustainopia-communal.png":to,"../assets/sustainopia-concept-1.png":so,"../assets/sustainopia-concept-2.png":io,"../assets/sustainopia-concept-3.png":ao,"../assets/sustainopia-cover.png":oo,"../assets/sustainopia-drawing-1.png":no,"../assets/sustainopia-drawing-2.png":ro,"../assets/sustainopia-drawing-3.png":lo,"../assets/sustainopia-drawing-4.png":co,"../assets/sustainopia-final-site-plan.png":po,"../assets/sustainopia-header-top-view.png":ho,"../assets/sustainopia-hero.png":go,"../assets/sustainopia-pet.png":uo,"../assets/sustainopia-picnic.png":bo,"../assets/sustainopia-site-plan.png":mo,"../assets/sustainopia-strategy-1.png":vo,"../assets/sustainopia-strategy-2.png":yo,"../assets/sustainopia-strategy-3.png":wo,"../assets/sustainopia-strategy-4.png":fo,"../assets/sustainopia-strategy-5.png":_o,"../assets/sustainopia-strategy-6.png":ko,"../assets/sustainopia-title.png":$o,"../assets/textureee.png":Bo,"../assets/torn-paper.png":So,"../assets/typelab-canvas-clean.mp4":xo,"../assets/typelab-compose-guidelines.png":Co,"../assets/typelab-compose-style.png":Ao,"../assets/typelab-compose.png":To,"../assets/typelab-final-mockup-composited.png":Eo,"../assets/typelab-final-mockup-expanded.png":Do,"../assets/typelab-final-screen-original.png":Lo,"../assets/typelab-prototype-coding.png":Po,"../assets/typelab-system-clean.mp4":jo,"../assets/typelab-system-compare.png":Io,"../assets/typelab-system-preview.png":Mo}),te=new Map(Object.entries(Ho).map(([o,n])=>[o.replace("../assets/",""),n])),Go=new Map([...te].map(([o,n])=>[n,zo[o]])),Fo=new Map(Object.entries(qo).map(([o,n])=>[te.get(o),te.get(n)]));let ve;function Oo(o){const n=document.createElement("template");return n.innerHTML=o,n.content.querySelectorAll("img[src], video").forEach(t=>{const l=t.tagName==="VIDEO";let r=t.getAttribute("src")||t.querySelector("source[src]")?.getAttribute("src");if(!r)return;!l&&t.closest(".page-work .project-visual")&&(r=Fo.get(r)||r);const p=Go.get(r);if(p&&!t.hasAttribute("width")&&!t.hasAttribute("height")&&(t.setAttribute("width",p.width),t.setAttribute("height",p.height)),p&&t.style.setProperty("--media-aspect-ratio",`${p.width} / ${p.height}`),t.dataset.mediaState="loading",t.dataset.mediaSrc=r,t.setAttribute("aria-busy","true"),t.removeAttribute("src"),l){t.dataset.mediaAutoplay=String(t.autoplay),t.removeAttribute("autoplay"),t.preload="none";const w=p?.poster&&te.get(p.poster)||t.getAttribute("poster");w&&(t.dataset.mediaPoster=w),t.removeAttribute("poster"),t.querySelectorAll("source").forEach(S=>S.remove())}else t.decoding="async",t.loading="eager"}),n.content.querySelectorAll("[data-media-group]").forEach(t=>{t.dataset.mediaGroupState="loading",t.setAttribute("aria-busy","true")}),n.content}function Wo(o){ve?.();const n=new AbortController,{signal:t}=n,l=Ro(t),r=new Map,p=new Map,w=new Set,S=new Set,A=(e,s)=>{const c=setTimeout(()=>{S.delete(c),t.aborted||e()},s);return S.add(c),c},$=e=>{const s=e.getBoundingClientRect();return!document.hidden&&s.width>0&&s.height>0&&s.bottom>0&&s.top<window.innerHeight&&s.right>0&&s.left<window.innerWidth},C=e=>{const s=e.getBoundingClientRect(),c=Math.abs(s.top+s.height/2-window.innerHeight/2);return($(e)?100:0)+(e.fetchPriority==="high"?20:0)-c/1e3},F=e=>{const s=e.closest("[data-media-group]");if(!s)return;const c=[...s.querySelectorAll("[data-media-state]")].map(d=>d.dataset.mediaState);s.dataset.mediaGroupState=c.includes("error")?"error":c.includes("loading")?"loading":"ready",s.dataset.mediaGroupState==="loading"?s.setAttribute("aria-busy","true"):s.removeAttribute("aria-busy")},D=(e,s)=>{e.dataset.mediaState=s,s==="loading"?e.setAttribute("aria-busy","true"):e.removeAttribute("aria-busy"),F(e)},T=e=>{p.get(e)?.remove(),p.delete(e)},Y=(e,s,c)=>{T(e);const d=e.closest("[data-media-group]")||e.parentElement;e.closest("[data-media-group]")&&d.querySelectorAll(":scope > .media-retry").forEach(P=>P.remove()),getComputedStyle(d).position==="static"&&(d.style.position="relative");const u=document.createElement("button");u.type="button",u.className="media-retry",u.textContent=s,u.setAttribute("aria-label",`${s}: ${e.getAttribute("alt")||e.getAttribute("aria-label")||"preview"}`),u.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation(),T(e),c()},{signal:t}),d.append(u),p.set(e,u)},q=(e,s="auto")=>new Promise((c,d)=>{const u=new Image;u.decoding="async",u.fetchPriority=s;let P=!1;const I=x=>{P||(P=!0,clearTimeout(M),w.delete(V),u.onload=u.onerror=null,x?(u.removeAttribute("src"),d(x)):c())},V=()=>I(new Error("cancelled")),M=setTimeout(()=>I(new Error("timeout")),2e4);w.add(V),u.onload=async()=>{try{await u.decode()}catch{}I(u.naturalWidth?null:new Error("empty image"))},u.onerror=()=>I(new Error("image unavailable")),u.src=e}),E=e=>{if(t.aborted)return;const s=r.get(e);if(!s.failed){if(s.failed=!0,D(e,e.dataset.mediaPosterReady?"poster":"error"),s.video){T(e),s.started=!1;const c=s.loadRetries||0;c<3&&(s.loadRetries=c+1,A(()=>{s.failed=!1,s.near&&L(e)},1500*2**c));return}Y(e,"Try again",()=>{const c=e.closest("[data-media-group]");r.forEach((d,u)=>{!d.failed||(c?u.closest("[data-media-group]")!==c:u!==e)||(T(u),d.failed=!1,d.video?(d.started=!1,L(u)):(d.queued=!1,j(u)))})})}},_=()=>{const e=[...r].filter(([c,d])=>d.video&&d.started&&!d.failed&&$(c)&&c.readyState>=2&&c.dataset.mediaAutoplay==="true");e.sort(([c],[d])=>C(d)-C(c));const s=new Set(e.map(([c])=>c));r.forEach((c,d)=>{if(!(!c.video||!c.started))if(s.has(d)){if(!d.paused||c.playPending)return;d.muted=!0,d.defaultMuted=!0,d.playsInline=!0,c.playPending=!0,d.play().catch(()=>{if(!t.aborted&&d.paused&&$(d)){const u=c.playRetries||0;u<3&&(c.playRetries=u+1,A(_,500*2**u))}}).finally(()=>{c.playPending=!1})}else d.pause()})},j=e=>{const s=r.get(e);s.queued||t.aborted||(s.queued=!0,D(e,"loading"),l(async()=>{try{if(await q(e.dataset.mediaSrc,e.fetchPriority),t.aborted)return;e.src=e.dataset.mediaSrc,D(e,"ready"),T(e)}catch{E(e)}},{priority:()=>C(e)}))},R=e=>{const s=r.get(e);s.posterQueued||!e.dataset.mediaPoster||(s.posterQueued=!0,l(async()=>{try{if(await q(e.dataset.mediaPoster,$(e)?"high":"low"),t.aborted)return;e.poster=e.dataset.mediaPoster,e.dataset.mediaPosterReady="true",e.dataset.mediaState!=="ready"&&!s.failed&&D(e,"poster")}catch{}finally{s.posterComplete=!0,!t.aborted&&s.near&&L(e)}},{priority:()=>C(e)+10}))},L=e=>{const s=r.get(e);if(!(s.started||t.aborted||s.failed)){if(e.dataset.mediaPoster&&!s.posterComplete){R(e);return}s.started=!0,l(()=>new Promise(c=>{if(!s.near){s.started=!1,c();return}let d=!1;const u=x=>{d||(d=!0,clearTimeout(M),w.delete(V),e.removeEventListener("loadeddata",P),e.removeEventListener("error",I),t.aborted||(x?(s.failed=!1,s.loadRetries=0,D(e,"ready"),T(e),_()):(e.pause(),e.removeAttribute("src"),e.load(),E(e))),c())},P=()=>u(!0),I=()=>u(!1),V=()=>u(!1),M=setTimeout(()=>u(!1),25e3);w.add(V),e.addEventListener("loadeddata",P),e.addEventListener("error",I),e.preload="auto",e.autoplay=!0,e.controls=!1,e.src=e.dataset.mediaSrc,e.load()}),{video:!0,priority:()=>C(e)-5})}},H=new IntersectionObserver(e=>{e.forEach(({target:s,isIntersecting:c})=>{c&&(H.unobserve(s),r.get(s).video?R(s):j(s))})},{rootMargin:"400px 0px"}),O=new IntersectionObserver(e=>{e.forEach(({target:s,isIntersecting:c})=>{r.get(s).near=c,c&&L(s)}),_()},{rootMargin:"100px 0px"}),G=new IntersectionObserver(_,{threshold:[0,.25,.5,.75,1]});o.querySelectorAll("[data-media-state]").forEach(e=>{const s=e.tagName==="VIDEO";r.set(e,{video:s,queued:!1,started:!1,failed:!1,near:!1}),s&&(e.muted=!0,e.defaultMuted=!0,e.addEventListener("canplay",_,{signal:t}),e.addEventListener("error",()=>{e.getAttribute("src")&&!r.get(e).failed&&E(e)},{signal:t}),e.addEventListener("waiting",()=>{e.dataset.mediaPosterReady&&e.readyState<2&&D(e,"poster")},{signal:t}),e.addEventListener("playing",()=>{r.get(e).playRetries=0,D(e,"ready"),T(e)},{signal:t}),O.observe(e),G.observe(e)),H.observe(e),$(e)&&(s?(r.get(e).near=!0,R(e),e.dataset.mediaPoster||L(e)):j(e))}),document.addEventListener("visibilitychange",_,{signal:t}),document.addEventListener("pointerdown",_,{passive:!0,signal:t}),document.addEventListener("keydown",_,{signal:t}),window.addEventListener("pageshow",_,{signal:t}),window.addEventListener("online",()=>{r.forEach((e,s)=>{e.video&&(e.playRetries=0,e.loadRetries=0,e.failed&&(e.failed=!1,e.started=!1),e.near&&L(s))}),_()},{signal:t}),ve=()=>{n.abort(),S.forEach(clearTimeout),H.disconnect(),O.disconnect(),G.disconnect(),w.forEach(e=>e()),p.forEach(e=>e.remove()),r.forEach((e,s)=>{e.video&&(s.pause(),s.removeAttribute("src"),s.load())})}}const Yo={work:()=>je(),bocil:()=>Rt(),grab:()=>Ut(),"higher-hopes":()=>Et(),typelab:()=>ns(),brewtime:()=>Jt(),sustainopia:()=>Ps(),about:()=>Is()};function Uo(){return{"#/work/higher-hopes":"higher-hopes","#/work/high-hopes":"higher-hopes","#/work/bocil":"bocil","#/work/grab":"grab","#/work/typelab":"typelab","#/work/brewtime":"brewtime","#/work/sustainopia":"sustainopia","#/about":"about"}[location.hash]||"work"}function $e(){const o=Uo(),n=o==="work"||o==="about";document.querySelector("#app").replaceChildren(Oo(`
    ${Be()}
    <main class="page page-${o}">${Yo[o]()}</main>
    ${n?'<canvas class="pencil-trail" aria-hidden="true" data-pencil-trail></canvas>':""}
    <div class="texture" aria-hidden="true"></div>`)),document.body.dataset.route=o,window.scrollTo(0,0),Wo(document.querySelector("main")),qs(o)}window.addEventListener("hashchange",$e);$e();
