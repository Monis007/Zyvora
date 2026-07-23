import React, { useEffect, useState } from 'react';

export default function App() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <nav>
        <div className="wrap">
          <div className="logo">Zyvora</div>
          <div className="navlinks">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
          </div>
          <a className="btn btn-primary" href="#contact">Start the conversation</a>
        </div>
      </nav>

      <header className="hero">
        <div className="aurora">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
        </div>
        <div className="wrap hero-inner">
          <span className="eyebrow">Zyvora — Digital Growth Studio</span>
          <h1>Make your business <em>impossible</em> to miss.</h1>
          <p className="lede">Zyvora builds and runs the websites, apps, ads, and search presence that turn local businesses into digital-first ones — one team, every channel, no jargon.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">Start the conversation</a>
            <a className="btn btn-ghost" href="#services">See what we do</a>
          </div>
          <div className="hero-strip">Websites · Apps · AI Automation · Meta &amp; Google Ads · SEO</div>
        </div>
        <div className="wrap signal-line">
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none">
            <path d="M0,30 L120,30 L145,10 L170,50 L195,30 L340,30 L365,15 L390,45 L415,30 L560,30 L585,8 L610,52 L635,30 L780,30 L805,18 L830,42 L855,30 L1000,30"/>
          </svg>
        </div>
      </header>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Services</span>
            <h2>Everywhere your customers already are.</h2>
          </div>
          <div className="services">

            <div className="service-row">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/><circle cx="9" cy="6.5" r="0.6" fill="currentColor" stroke="none"/></svg></div>
              <div className="service-text">
                <h3>Website creation</h3>
                <p>Fast, mobile-ready sites built to turn visitors into enquiries — not just look good.</p>
              </div>
            </div>

            <div className="service-row">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><line x1="10.5" y1="18" x2="13.5" y2="18"/></svg></div>
              <div className="service-text">
                <h3>App creation</h3>
                <p>MVP to full-featured apps for businesses that need more than a website can give them.</p>
              </div>
            </div>

            <div className="service-row">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="17" r="2"/><circle cx="19" cy="17" r="2"/><line x1="12" y1="7" x2="6.3" y2="15.3"/><line x1="12" y1="7" x2="17.7" y2="15.3"/></svg></div>
              <div className="service-text">
                <h3>AI automation</h3>
                <p>Auto-replies, lead follow-ups, and booking workflows that work while you don't.</p>
              </div>
            </div>

            <div className="service-row">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 10v4a1 1 0 0 0 1 1h2l7 4V5L7 9H5a1 1 0 0 0-1 1z"/><path d="M17 9a4 4 0 0 1 0 6"/></svg></div>
              <div className="service-text">
                <h3>Meta ads management</h3>
                <p>Facebook &amp; Instagram campaigns built around real customer funnels, not just boosted posts.</p>
              </div>
            </div>

            <div className="service-row">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21"/></svg></div>
              <div className="service-text">
                <h3>Google ads management</h3>
                <p>Search campaigns that show up exactly when someone's ready to buy.</p>
              </div>
            </div>

            <div className="service-row">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="3,17 9,10 13,14 21,5"/><polyline points="15,5 21,5 21,11"/></svg></div>
              <div className="service-text">
                <h3>Google SEO</h3>
                <p>Rank higher where it counts — local search, Google Business Profile, and organic growth.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="approach">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Approach</span>
            <h2>Why businesses choose Zyvora.</h2>
          </div>
          <div className="pillars">
            <div className="pillar">
              <span className="mark">₹</span>
              <h3>Pricing that fits your budget</h3>
              <p>Starter tiers built for first-time digital spenders, no pressure to overbuy.</p>
            </div>
            <div className="pillar">
              <span className="mark">#</span>
              <h3>Real numbers, no jargon</h3>
              <p>Simple monthly reports — leads and rankings, not vanity metrics.</p>
            </div>
            <div className="pillar">
              <span className="mark">◎</span>
              <h3>One team, every channel</h3>
              <p>Your site, ads, and search all working together instead of five different vendors.</p>
            </div>
            <div className="pillar">
              <span className="mark">↗</span>
              <h3>Built to scale with you</h3>
              <p>Start with one service, add more as it proves itself.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>A simple, honest process.</h2>
          </div>
          <div className="process">
            <div className="step"><span className="num">01</span><h3>Discover</h3><p>A short call to understand what's actually holding your business back online.</p></div>
            <div className="step"><span className="num">02</span><h3>Plan</h3><p>A one-page proposal — clear scope, clear price, clear timeline.</p></div>
            <div className="step"><span className="num">03</span><h3>Build</h3><p>We build or launch, keeping you in the loop the whole way.</p></div>
            <div className="step"><span className="num">04</span><h3>Grow</h3><p>Ongoing reporting and optimization so results keep compounding.</p></div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Featured work</span>
            <h2>Our first build: a home for modest fashion.</h2>
          </div>

          <div className="case-card">
            <div className="case-top">
              <span className="tag-pill">Website design &amp; build</span>
              <span className="case-niche">Modest fashion e-commerce</span>
            </div>
            <h3 className="case-name">Jamshion</h3>
            <p className="case-copy">A startup out of Jamia Millia Islamia, Jamshion needed an online store that did justice to their hijabs, abayas, and Islamic gifts. We designed and built their e-commerce home from the ground up — live and taking orders today.</p>
            <a className="btn btn-primary" href="https://jamshion.com/" target="_blank" rel="noopener noreferrer">Visit jamshion.com ↗</a>
          </div>

          <div className="next-slot">
            <p>Now taking on new projects — <a href="#contact">let's talk about yours</a>.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-panel">
            <h2>Let's put your business on the map.</h2>
            <div>
              <div className="contact-actions">
                <a className="btn btn-primary" href="mailto:zyvora.coofficial@gmail.com">Email zyvora.coofficial@gmail.com</a>
                <a className="btn btn-ghost" href="https://wa.me/919318363638" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
              </div>
              <div className="contact-note">Typically responds within 24 hours.</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="logo">Zyvora</div>
          <div className="foot-note">© <span id="year">{year}</span> Zyvora. Digital growth for real businesses.</div>
        </div>
      </footer>
    </>
  );
}
