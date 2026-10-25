import controlsVideo from "../assets/high-hopes-controls.mp4";
import controlPoster from "../assets/high-hopes-control-poster.png";
import characterhand from "../assets/high-hopes-character-hand.png";
import characterhold from "../assets/high-hopes-character-hold.png";
import characterheadStraight from "../assets/high-hopes-character-headStraight.png";
import characterheadRight from "../assets/high-hopes-character-headRight.png";
import characterheadLeft from "../assets/high-hopes-character-headLeft.png";
import characterhandsUp from "../assets/high-hopes-character-handsUp.png";
import characterarm from "../assets/high-hopes-character-arm.png";
import characterjump from "../assets/high-hopes-character-jump.png";
import characterright from "../assets/high-hopes-character-right.png";
import charactersit from "../assets/high-hopes-character-sit.png";
import monkeyReference from "../assets/high-hopes-monkey-reference.png";
import headerLeft from "../assets/high-hopes-header-left.png";
import headerMiddle from "../assets/high-hopes-header-middle.png";
import headerRight from "../assets/high-hopes-header-right.png";
import mossTop from "../assets/high-hopes-moss-top.png";
import mossBottom from "../assets/high-hopes-moss-bottom.png";
import tributeStory from "../assets/high-hopes-tribute.png";
import openingStory from "../assets/high-hopes-opening-story.png";
import endStory from "../assets/high-hopes-end-story.png";
import envtree from "../assets/high-hopes-env-tree.png";
import envbranch1 from "../assets/high-hopes-env-branch1.png";
import envbranch2 from "../assets/high-hopes-env-branch2.png";
import envbranch3 from "../assets/high-hopes-env-branch3.png";
import envleaves1 from "../assets/high-hopes-env-leaves1.png";
import envleaves2 from "../assets/high-hopes-env-leaves2.png";
import envleaves3 from "../assets/high-hopes-env-leaves3.png";
import envleaves4 from "../assets/high-hopes-env-leaves4.png";
import envrope1 from "../assets/high-hopes-env-rope1.png";
import envrope2 from "../assets/high-hopes-env-rope2.png";
import envrope3 from "../assets/high-hopes-env-rope3.png";
import envropestone from "../assets/high-hopes-env-ropestone.png";
import envcrack1 from "../assets/high-hopes-env-crack1.png";
import envcrack2 from "../assets/high-hopes-env-crack2.png";
import envcrack3 from "../assets/high-hopes-env-crack3.png";
import helicopterSky from "../assets/high-hopes-helicopter-sky.png";
import fireScene from "../assets/high-hopes-fire-scene.png";
import fireAnimation from "../assets/high-hopes-fire.webp";
import fireBackground from "../assets/high-hopes-fire-background.png";
import helicopterAnimation from "../assets/high-hopes-helicopter.gif";
import terraincliff1 from "../assets/high-hopes-cliff1.png";
import terraincliff2 from "../assets/high-hopes-cliff2.png";
import terraincliff3 from "../assets/high-hopes-cliff3.png";
import terrainground from "../assets/high-hopes-ground.png";
import terrainstone1 from "../assets/high-hopes-stone1.png";
import terrainstone2 from "../assets/high-hopes-stone2.png";
import terrainstone3 from "../assets/high-hopes-stone3.png";
import terraingrass1 from "../assets/high-hopes-grass1.png";
import terraingrass2 from "../assets/high-hopes-grass2.png";
import terraingrass3 from "../assets/high-hopes-grass3.png";
import terraingrass4 from "../assets/high-hopes-grass4.png";
import terraingrass5 from "../assets/high-hopes-grass5.png";
import sceneOne from "../assets/high-hopes-scene-1.webp";
import sceneTwo from "../assets/high-hopes-scene-2.webp";
import sceneThree from "../assets/high-hopes-scene-3.webp";
import { CaseStudyFooter } from "./CaseStudyFooter.js";
import { ProjectExplorer } from "./ProjectExplorer.js";

// Media slots are provisional; replace with assets at their natural proportions.
const placeholder = (label, name) => `<div class="high-hopes-placeholder high-hopes-${name}" role="img" aria-label="${label} placeholder"><span>${label}</span></div>`;

export function HighHopesCaseStudy() {
  return `
    <article class="bocil-case high-hopes-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media high-hopes-hero"><div class="bocil-image high-hopes-header-image"><img src="${headerLeft}" data-header-head-cycle data-head-left="${headerLeft}" data-head-middle="${headerMiddle}" data-head-right="${headerRight}" alt="High Hopes game home screen with the monkey looking around" /></div></div>
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
        <figure class="high-hopes-reference high-hopes-reference--corner"><img src="${monkeyReference}" alt="Bornean orangutan hanging from a rope, the reference for the game character" /><svg class="hh-reference-arrow" viewBox="0 0 90 125" fill="none" aria-hidden="true"><path d="M25 112C80 110 106 38 30 13M30 13L47 6M30 13L39 29" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg><figcaption>Character<br />Reference</figcaption></figure>
        <div class="bocil-shell high-hopes-character-grid">
          <div class="high-hopes-character-copy">
            <h2>Character<br /><span>Design</span></h2>
            <p>I designed the monkey inspired by the Bornean orangutan, a species endemic to Borneo. I emphasised its long arms and simplified body shape to make its movements easy to follow, while separating its body parts to support in-game animation.</p>
          </div>
          <div class="high-hopes-character-media hh-character-sheet">
            <div class="hh-character-parts">
              <div class="hh-character-heads"><div><img src="${characterheadLeft}" alt="Head facing left" loading="lazy" /><img src="${characterheadStraight}" alt="Head facing forward" loading="lazy" /><img src="${characterheadRight}" alt="Head facing right" loading="lazy" /></div></div>
              <div class="hh-character-hands"><div><img src="${characterhand}" alt="Open hand" loading="lazy" /><img src="${characterhold}" alt="Gripping hand" loading="lazy" /><img src="${characterhand}" alt="Mirrored open hand" loading="lazy" class="hh-character-flipped" /><img src="${characterhold}" alt="Mirrored gripping hand" loading="lazy" class="hh-character-flipped" /></div></div>
              <div class="hh-character-arms"><div><img src="${characterarm}" alt="Arm segments" loading="lazy" /><img src="${characterarm}" alt="Mirrored arm segments" loading="lazy" class="hh-character-flipped" /></div></div>
            </div>
            <div class="hh-character-poses"><img src="${characterhandsUp}" alt="Monkey with both hands raised" loading="lazy" /><img src="${characterright}" alt="Monkey reaching right" loading="lazy" /><img src="${characterjump}" alt="Monkey jumping" loading="lazy" /><img src="${charactersit}" alt="Monkey sitting" loading="lazy" /></div>
          </div>
        </div>
      </section>
      <section class="bocil-dark high-hopes-story">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Visual<br /><span>Storytelling</span></h2>
          <p>I developed the visual concepts and assets for the game’s storytelling sequences, from the opening narrative to the ending scene and final tribute, helping shape the game’s identity and bring its story to life.</p>
        </div>
        <div class="bocil-shell high-hopes-story-grid">
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${openingStory}" alt="Opening story: the monkey escapes a forest fire to find help" loading="lazy" /></figure>
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${endStory}" alt="Ending story: the monkey finds a rescuer while reflecting on the loss of its home" loading="lazy" /></figure>
          <figure class="high-hopes-story-frame high-hopes-story-art"><img src="${tributeStory}" alt="A tribute to Kalimantan, its forests, wildlife and those who lost their home" loading="lazy" /></figure>
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
              <div class="high-hopes-scene-track">
                <img src="${sceneOne}" alt="High Hopes forest-fire climbing environment with cliff platforms and the monkey character" />
              </div>
            </div>
            <div class="hh-terrain-board hh-terrain-board--compact" aria-label="Cliffs, climbing stones, moss, ground and vegetation artwork">
              <img src="${terraincliff3}" alt="Cliff summit" loading="lazy" style="left:2.2%;top:6%;width:13%;height:51%;" />
              <img src="${terraincliff2}" alt="Middle cliff" loading="lazy" style="left:18.8%;top:10%;width:12%;height:47%;" />
              <img src="${terraincliff1}" alt="Lower cliff" loading="lazy" style="left:35.4%;top:15%;width:14.5%;height:42%;" />
              <img src="${terrainstone1}" alt="Large climbing stone" loading="lazy" style="left:54.5%;top:11%;width:12%;height:16%;" />
              <img src="${terrainstone2}" alt="Medium climbing stone" loading="lazy" style="left:72%;top:11%;width:9%;height:14%;" />
              <img src="${terrainstone3}" alt="Small climbing stone" loading="lazy" style="left:86%;top:11%;width:7%;height:13%;" />
              <img src="${mossTop}" alt="Moss variations, first row" loading="lazy" style="left:55.5%;top:37%;width:18%;height:13%;" />
              <img src="${mossBottom}" alt="Moss variations, second row" loading="lazy" style="left:75.5%;top:37%;width:21%;height:13%;" />
              <img src="${terrainground}" alt="Ground" loading="lazy" style="left:54.5%;top:57%;width:40.5%;height:9%;" />
              <img src="${terraingrass1}" alt="Tall vegetation" loading="lazy" style="left:2.2%;top:61%;width:12.5%;height:32%;" />
              <img src="${terraingrass3}" alt="Broad leaf vegetation" loading="lazy" style="left:18.8%;top:65%;width:12%;height:28%;" />
              <img src="${terraingrass5}" alt="Low vegetation" loading="lazy" style="left:32.3%;top:75%;width:27.3%;height:18%;" />
              <img src="${terraingrass2}" alt="Small bush" loading="lazy" style="left:64.5%;top:81%;width:12.5%;height:12%;" />
              <img src="${terraingrass4}" alt="Small foliage cluster" loading="lazy" style="left:81.3%;top:77%;width:15.8%;height:16%;" />
            </div>
            </div></div>
          </section>
          <section class="high-hopes-asset-group" aria-labelledby="environment-title">
            <h3 class="typelab-system-label" id="environment-title">02/Environmental Assets</h3>
            <div class="high-hopes-asset-surface"><div class="bocil-shell">
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan role="region" aria-label="Climbing scene, automatically panning up and down.">
              <div class="high-hopes-scene-track">
                <img src="${sceneTwo}" alt="High Hopes second climbing environment with ropes, cliff platforms and monkey characters" />
              </div>
            </div>
            <div class="hh-environment-board" aria-label="Tree, branches, foliage, ropes and cracking stone assets">
              <img src="${envtree}" alt="tree1 game asset" loading="lazy" style="left:2%;top:3%;width:12%;height:97%;" />
              <img src="${envbranch1}" alt="Branch1 game asset" loading="lazy" style="left:13%;top:6%;width:6%;height:8%;" />
              <img src="${envbranch2}" alt="Branch2 game asset" loading="lazy" style="left:13%;top:17%;width:5%;height:13%;" />
              <img src="${envbranch3}" alt="Branch3 game asset" loading="lazy" style="left:13%;top:26%;width:19%;height:19%;" />
              <img src="${envleaves1}" alt="Leaves1 game asset" loading="lazy" style="left:16%;top:53%;width:9%;height:16%;" />
              <img src="${envleaves2}" alt="Leaves2 game asset" loading="lazy" style="left:16%;top:76%;width:8%;height:16%;" />
              <img src="${envleaves3}" alt="Leaves3 game asset" loading="lazy" style="left:26%;top:76%;width:10%;height:17%;" />
              <img src="${envleaves4}" alt="Leaves4 game asset" loading="lazy" style="left:27%;top:57%;width:7%;height:9%;" />
              <img src="${envrope1}" alt="Rope1 game asset" loading="lazy" style="left:32%;top:8%;width:33%;height:26%;" />
              <img src="${envrope2}" alt="Rope2 game asset" loading="lazy" style="left:37%;top:40%;width:26%;height:19%;" />
              <img src="${envrope3}" alt="Rope3 game asset" loading="lazy" style="left:44%;top:66%;width:3%;height:29%;" />
              <img src="${envropestone}" alt="RopeStone game asset" loading="lazy" style="left:54%;top:70%;width:7%;height:8%;" />
              <img src="${envcrack1}" alt="StoneCrack1 game asset" loading="lazy" style="left:68%;top:5%;width:30%;height:20%;" />
              <img src="${envcrack2}" alt="StoneCrack2 game asset" loading="lazy" style="left:70%;top:38%;width:22%;height:17%;" />
              <img src="${envcrack3}" alt="StoneCrack3 game asset" loading="lazy" style="left:71%;top:68%;width:19%;height:15%;" />
            </div>
            </div></div>
          </section>
          <section class="high-hopes-asset-group" aria-labelledby="additional-title">
            <h3 class="typelab-system-label" id="additional-title">03/Additional Environment Assets</h3>
            <div class="high-hopes-asset-surface"><div class="bocil-shell">
            <div class="high-hopes-scene high-hopes-scene-window" data-scene-pan role="region" aria-label="Climbing scene, automatically panning up and down.">
              <div class="high-hopes-scene-track">
                <img src="${sceneThree}" alt="High Hopes third climbing environment with the cliff summit, rope platforms and monkey character" />
                <div class="high-hopes-scene-fire" aria-hidden="true"><img class="high-hopes-scene-fire-background" src="${fireBackground}" alt="" /><img class="high-hopes-scene-fire-animation" src="${fireAnimation}" alt="" /></div>
                <div class="high-hopes-helicopter-slot" data-helicopter-slot><img src="${helicopterAnimation}" alt="Animated rescue helicopter flying above the cliff" /></div>
                <div class="high-hopes-helicopter-slot high-hopes-helicopter-slot--small"><img src="${helicopterAnimation}" alt="Smaller animated rescue helicopter in the distance" /></div>
              </div>
            </div>
            <div class="high-hopes-animation-grid">
              <div><div class="high-hopes-animation high-hopes-fire-stage">
                <img class="high-hopes-fire-scene" src="${fireScene}" alt="" aria-hidden="true" />
                <img class="high-hopes-fire-background" src="${fireBackground}" alt="" aria-hidden="true" />
                <img class="high-hopes-fire-frames" src="${fireAnimation}" alt="Animated fire using thirteen hand-drawn frames" />
              </div></div>
              <div><div class="high-hopes-animation high-hopes-helicopter-stage" style="background-image: url('${helicopterSky}')">
                <img src="${helicopterAnimation}" alt="Animated helicopter against the sky from the third game scene" />
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
            <video poster="${controlPoster}" autoplay muted loop playsinline preload="auto" data-controls-video src="${controlsVideo}" aria-label="High Hopes game controls demonstration"></video>
          </div>
        </div>
      </section>
    </article>
    ${ProjectExplorer("higher-hopes")}
    ${CaseStudyFooter()}`;
}
