import React from 'react';
import './Services.css';
import Header from './Header';
import Footer from './Footer';

function Services() {
  return (
    <>
      <Header activePage="services" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Our Services</span>
          <h1>Complete support, from <em>application to arrival</em>.</h1>
          <p className="hero-lede">We guide you through every stage of your study-abroad journey — counselling, test prep, admissions, funding, visas, departure, and on-campus university support. Everything you need, under one roof.</p>
          <div className="hero-cta">
            <a href="#" className="btn btn-primary">Student Services</a>
            <a href="#" className="btn btn-secondary">University Services</a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-header">
          <div className="section-label">Student Services</div>
          <h2 className="section-title">Your journey, <em>step by step</em>.</h2>
          <p className="section-intro">Seven stages of personalised support — each handled by experts who know exactly what admissions committees and visa officers look for.</p>
        </div>

        <div className="steps" style={{ maxWidth: 'none' }}>
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <h5>Counselling &amp; Planning</h5>
              <p>A free, in-depth profile evaluation to map your strengths, budget, and goals — then a tailored country, course, and intake plan.</p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0' }}>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> One-on-one career &amp; course counselling</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Country &amp; university shortlisting matched to your profile</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Intake selection &amp; a clear application timeline</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Budget &amp; ROI planning across destinations</li>
              </ul>
            </div>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <div>
              <h5>Test Preparation</h5>
              <p>We connect you with the best coaching and resources for every required exam, and plan your test calendar around application deadlines.</p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0' }}>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> English tests: IELTS, TOEFL, PTE, Duolingo</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Aptitude tests: GRE, GMAT, SAT</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Referrals to trusted coaching centres &amp; official prep portals</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Score-targeting &amp; retake strategy</li>
              </ul>
            </div>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <div>
              <h5>Admissions &amp; Application</h5>
              <p>End-to-end application management — we build the strongest possible file for each university and track it through to your offer.</p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0' }}>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> SOP &amp; essay guidance, LOR coordination</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Resume/CV building &amp; transcript preparation</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Application submission across multiple universities</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Offer-letter management &amp; admission acceptance</li>
              </ul>
            </div>
          </div>

          <div className="step">
            <div className="step-num">4</div>
            <div>
              <h5>Financial Assistance &amp; Scholarships</h5>
              <p>We help you fund your education and prepare a watertight financial file — the backbone of a successful visa application.</p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0' }}>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Matching to merit, need-based &amp; country-specific awards</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Assistantship &amp; fellowship guidance</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Application &amp; essay support for scholarships</li>
              </ul>
            </div>
          </div>

          <div className="step">
            <div className="step-num">5</div>
            <div>
              <h5>Student Visa Application</h5>
              <p>Dedicated visa counselling and documentation support to ensure your application is visa-officer approved.</p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0' }}>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Visa requirements &amp; documentation checklist</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Financial proof &amp; bank statements</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Interview coaching &amp; mock sessions</li>
              </ul>
            </div>
          </div>

          <div className="step">
            <div className="step-num">6</div>
            <div>
              <h5>Pre-Departure Support</h5>
              <p>Get ready for your new life — accommodation, travel, banking, and settling-in guidance.</p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0' }}>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Accommodation guidance &amp; housing resources</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Flight booking &amp; travel planning</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Local banking, SIM card, and settling-in checklist</li>
              </ul>
            </div>
          </div>

          <div className="step">
            <div className="step-num">7</div>
            <div>
              <h5>On-Campus Support &amp; Alumni Network</h5>
              <p>Your journey doesn't end when you arrive — we're here to help you thrive on campus and build lasting connections.</p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0' }}>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Academic &amp; career guidance at university</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Internship &amp; job placement support</li>
                <li style={{ padding: '5px 0 5px 20px', position: 'relative', fontSize: '14px', color: 'var(--ink-soft)' }}><span style={{ position: 'absolute', left: '0', color: 'var(--saffron)' }}>→</span> Alumni network &amp; mentorship programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band-navy">
        <div className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="section-header center">
            <div className="section-label">University Services</div>
            <h2 className="section-title">Partnerships that <em>matter</em>.</h2>
            <p className="section-intro">We work with universities globally to build recruitment pipelines, manage student onboarding, and support their India strategy.</p>
          </div>

          <div className="grid grid-2" style={{ marginTop: '50px' }}>
            <div className="card">
              <span className="ico">🎓</span>
              <h3>Recruitment &amp; Outreach</h3>
              <p>Targeted student recruitment, campus events, webinars, and fair participation to build your enrollment pipeline from India.</p>
              <ul>
                <li>Education fair participation &amp; sponsorship</li>
                <li>Campus ambassador programs</li>
                <li>Student recruitment funnels &amp; campaigns</li>
              </ul>
            </div>

            <div className="card">
              <span className="ico">📋</span>
              <h3>Admissions Support</h3>
              <p>Application volume generation, student quality assurance, and admissions counselling — delivered at scale.</p>
              <ul>
                <li>High-volume application generation</li>
                <li>Student profile evaluation &amp; matching</li>
                <li>Admissions process optimization</li>
              </ul>
            </div>

            <div className="card">
              <span className="ico">🎯</span>
              <h3>Student Lifecycle Management</h3>
              <p>From onboarding to graduation, we support your students through every milestone — and we report back to you.</p>
              <ul>
                <li>New student onboarding &amp; orientation</li>
                <li>Retention &amp; academic support coordination</li>
                <li>Career services &amp; alumni engagement</li>
              </ul>
            </div>

            <div className="card">
              <span className="ico">🌐</span>
              <h3>Strategic India Partnerships</h3>
              <p>Long-term collaboration models — from student pipelines to joint research, university partnerships that drive mutual growth.</p>
              <ul>
                <li>Dedicated account management</li>
                <li>Joint marketing initiatives &amp; branding</li>
                <li>Research collaborations &amp; faculty exchanges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-inner">
          <h2>Ready to transform your study-abroad goals?</h2>
          <p>Book a free consultation with one of our expert counsellors today.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Your Journey</a>
            <a href="#contact" className="btn btn-secondary">Request University Partnership</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;
