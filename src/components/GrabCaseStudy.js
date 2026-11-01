import { ProjectExplorer } from "./ProjectExplorer.js";
import { CaseStudyFooter } from "./CaseStudyFooter.js";

import poster1 from "../assets/grab-poster-1.png";
import poster2 from "../assets/grab-poster-2.png";
import comms1 from "../assets/grab-comms-1.png";
import comms2 from "../assets/grab-comms-2.png";
import comms3 from "../assets/grab-comms-3.png";
import comms4 from "../assets/grab-comms-4.png";
import card1 from "../assets/grab-card-1.png";
import card2 from "../assets/grab-card-2.png";
import card3 from "../assets/grab-card-3.png";
import card4 from "../assets/grab-card-4.png";

import card5 from "../assets/grab-card-5.png";

function HeaderCard(front, back, label) {
  return `<div class="grab-header-card" tabindex="0" role="img" aria-label="${label}; hover or focus to see reverse">
    <div class="grab-cover-card">
      <img class="grab-cover-face" src="${front}" alt="" />
      <img class="grab-cover-face grab-cover-back" src="${back}" alt="" />
    </div>
  </div>`;
}

export function GrabCaseStudy() {
  return `
    <article class="bocil-case grab-case">
      <section class="bocil-hero bocil-shell" aria-labelledby="grab-title">
        <div class="bocil-hero-media grab-hero-media">
          <div class="grab-header-cards">
            ${HeaderCard(card3, card5, "GrabMerchant restaurant card")}
            ${HeaderCard(card1, card2, "GrabMerchant delivery card")}
            ${HeaderCard(card4, card5, "GrabMerchant food card")}
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
                  <img src="${poster1}" alt="Agent Reference Merchant program poster explaining registration, training, referrals, and incentives" loading="lazy" />
                  <img src="${poster2}" alt="Four steps to start selling on GrabMerchant onboarding poster" loading="lazy" />
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
                  <img src="${comms1}" alt="UMKM GoesDigital competition promotional graphic in story format" loading="lazy" />
                  <img src="${comms2}" alt="UMKM GoesDigital competition promotional graphic in feed format" loading="lazy" />
                  <div class="grab-comms-messages">
                    <img src="${comms3}" alt="GrabMerchant welcome message inviting merchants to complete their menu and operating hours" loading="lazy" />
                    <img src="${comms4}" alt="GrabMerchant registration reminder asking merchants to answer a call from Grab" loading="lazy" />
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
                  <img src="${card1}" alt="GrabMerchant e-money card featuring a merchant handing an order to a delivery driver" loading="lazy" />
                  <img src="${card2}" alt="GrabMerchant e-money card reverse with branded storefront pattern" loading="lazy" />
                  <img src="${card3}" alt="GrabMerchant e-money card featuring a restaurant serving a customer" loading="lazy" />
                  <img src="${card4}" alt="GrabMerchant e-money card featuring a merchant presenting a meal" loading="lazy" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

    </article>
    ${ProjectExplorer("grab")}
    ${CaseStudyFooter()}`;
}
