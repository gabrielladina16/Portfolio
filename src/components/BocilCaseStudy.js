import { ProjectExplorer } from "./ProjectExplorer.js";
import { CaseStudyFooter } from "./CaseStudyFooter.js";
import headerPhoto from "../assets/bocil-header.png";
import homeScreenVideo from "../assets/bocil-home-screen.mp4";
import historyVideo from "../assets/bocil-history.mp4";
import solutionRobotVideo from "../assets/bocil-solution-robot.mp4";
import homepageImage from "../assets/bocil-homepage.png";
import notificationImage from "../assets/bocil-notification.png";
import calendarVideo from "../assets/bocil-calendar.mp4";
import focusBlurryImage from "../assets/bocil-focus-blurry.png";
import timerImage from "../assets/bocil-timer.png";

export function BocilCaseStudy() {
  return `
    <article class="bocil-case">
      <section class="bocil-hero bocil-shell">
        <div class="bocil-hero-media"><div class="bocil-image"><img src="${homepageImage}" alt="Bocil macOS application home screen" /></div></div>
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
        <img src="${headerPhoto}" alt="Bocil robot prototypes beside the macOS companion app" />
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
          <video autoplay muted loop playsinline preload="auto" aria-label="Bocil physical robot companions demonstration"><source src="${solutionRobotVideo}" type="video/mp4" /></video>
        </div>
      </section>

      <section class="bocil-dark bocil-feature">
        <div class="bocil-feature-intro bocil-shell">
            <h2>Feature #1<br /><span>Productivity</span></h2>
            <p>Bocil turns conversations into actions, letting users create or update calendar events simply by talking. Upcoming events are synced to the desktop app with reminders when it’s time.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row" data-grain-media>
          <figure class="bocil-notification-panel"><div class="bocil-image"><img src="${notificationImage}" alt="Bocil calendar reminders in Notification Center" /></div></figure>
          <figure class="bocil-calendar-panel"><div class="bocil-image"><video autoplay muted loop playsinline preload="auto" aria-label="Bocil calendar and productivity demonstration"><source src="${calendarVideo}" type="video/mp4" /></video></div></figure>
        </div>
      </section>

      <section class="bocil-feature bocil-feature--focus">
        <div class="bocil-feature-intro bocil-shell">
          <h2>Feature #2<br /><span>Focus</span></h2>
          <p>Bocam (Bocil Camera) turns Bocil into a focus companion, letting users set their own focus timer while Bocil keeps them on track. If users reach for their phone, Bocil notices and responds to bring their attention back.</p>
        </div>
        <div class="bocil-feature-media bocil-media-row bocil-focus-media" data-grain-media>
          <figure><div class="bocil-image"><img src="${timerImage}" alt="Bocil focus timer interface" /></div></figure>
          <figure><div class="bocil-image"><img src="${focusBlurryImage}" alt="Bocam focus session interface with visual focus feedback" /></div></figure>
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
              <source src="${historyVideo}" type="video/mp4" />
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
            <video autoplay muted loop playsinline preload="auto" aria-label="Bocil macOS home screen demonstration"><source src="${homeScreenVideo}" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </article>
    ${ProjectExplorer("bocil")}
    ${CaseStudyFooter()}`;
}
