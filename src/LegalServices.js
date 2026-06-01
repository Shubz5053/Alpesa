import React from 'react';
import './LegalServices.css';
import Header from './Header';
import Footer from './Footer';

function LegalServices() {
  return (
    <>
      <Header activePage="legal-services" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Legal Services</span>
          <h1>Immigration counsel, <em>step by step</em>.</h1>
          <p className="hero-lede">We offer immigration advisory for student visas and provide referrals to licensed immigration lawyers for visa applications and ongoing compliance.</p>
        </div>
      </header>

      <section className="section">
        <div className="section-header">
          <div className="section-label">Our Expertise</div>
          <h2 className="section-title">Immigration support <em>you can trust</em>.</h2>
          <p className="section-intro">We partner with licensed immigration lawyers across 8+ countries to provide legal guidance on student visas, compliance, and special circumstances.</p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <span className="ico">📜</span>
            <h3>Student Visa Guidance</h3>
            <p>Expert advisory on student visa requirements, documentation standards, and application strategies for 8+ countries.</p>
            <ul>
              <li>Visa category selection &amp; eligibility assessment</li>
              <li>Documentation standards &amp; checklist customization</li>
              <li>Financial documentation preparation</li>
              <li>Interview coaching &amp; mock sessions</li>
            </ul>
          </div>

          <div className="card">
            <span className="ico">⚖️</span>
            <h3>Legal Referral Network</h3>
            <p>Referrals to licensed immigration lawyers in your destination country for visa applications and ongoing legal advice.</p>
            <ul>
              <li>Partner lawyers in USA, UK, Canada, Australia</li>
              <li>Referrals for visa appeals &amp; special cases</li>
              <li>Compliance guidance during your studies</li>
              <li>Post-graduation visa planning</li>
            </ul>
          </div>

          <div className="card">
            <span className="ico">🛡️</span>
            <h3>Compliance Support</h3>
            <p>Ongoing guidance to ensure you maintain legal status throughout your study abroad program.</p>
            <ul>
              <li>Work permit &amp; employment guidance</li>
              <li>Course change &amp; transfer protocols</li>
              <li>Extension &amp; renewal procedures</li>
              <li>Off-campus housing &amp; living requirements</li>
            </ul>
          </div>

          <div className="card">
            <span className="ico">🆘</span>
            <h3>Special Circumstances</h3>
            <p>Specialized advisory for complex cases — rejections, appeals, visa delays, and unique personal situations.</p>
            <ul>
              <li>Visa rejection analysis &amp; appeal strategy</li>
              <li>Medical &amp; health-related accommodations</li>
              <li>Family visa sponsorship guidance</li>
              <li>PR &amp; post-study pathway planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band-navy">
        <div className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="section-header center">
            <div className="section-label">Our Commitment</div>
            <h2 className="section-title">Licensed counsel, <em>ethical advice</em>.</h2>
            <p className="section-intro">All legal services are provided through licensed immigration lawyers. Alpesa does not provide legal representation — we provide guidance and referrals within the bounds of what we can offer as educational consultants.</p>
          </div>

          <div className="steps" style={{ maxWidth: '900px', margin: '50px auto 0' }}>
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h5>Initial Visa Assessment</h5>
                <p>We evaluate your profile against destination country visa requirements — identifying gaps, documentation needs, and potential challenges.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h5>Documentation Preparation</h5>
                <p>We help you prepare and organize all required documents — ensuring they meet current standards and strengthening your application.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h5>Legal Referral (if needed)</h5>
                <p>For complex cases or legal representation, we refer you to licensed immigration lawyers in your destination country.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">4</div>
              <div>
                <h5>Ongoing Compliance Support</h5>
                <p>Once you arrive, we provide guidance on maintaining legal status, work permits, and post-graduation visa options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header center">
          <h2 className="section-title">Frequently asked <em>questions</em>.</h2>
        </div>

        <div className="faq-list">
          <details className="faq">
            <summary>Do I need a lawyer for my student visa?</summary>
            <div className="ans">Most straightforward student visa applications don't require a lawyer. Our guidance is typically sufficient. However, if you have a rejection, criminal record, health issues, or other special circumstances, a licensed immigration lawyer is highly recommended.</div>
          </details>

          <details className="faq">
            <summary>What if my visa is rejected?</summary>
            <div className="ans">We'll analyze the rejection reason, help you understand what went wrong, and develop an appeal or reapplication strategy. For complex cases, we'll refer you to a licensed immigration lawyer.</div>
          </details>

          <details className="faq">
            <summary>Can I work part-time while studying?</summary>
            <div className="ans">Work eligibility varies by country and visa type. We provide country-specific guidance on part-time work, on-campus employment, and internship opportunities. Always check with your destination country's requirements.</div>
          </details>

          <details className="faq">
            <summary>What are my options after graduation?</summary>
            <div className="ans">Most destinations offer post-study work visas, pathways to PR, or other options. We provide guidance on your eligibility and next steps — and can refer you to a lawyer for formal PR applications.</div>
          </details>

          <details className="faq">
            <summary>How do I maintain my visa status?</summary>
            <div className="ans">Key compliance areas include: full-time enrollment, minimum grades, accommodation registration, work-hour limits, and departure/extension protocols. We provide a compliance checklist and ongoing support to keep you on track.</div>
          </details>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-inner">
          <h2>Have questions about your visa or immigration status?</h2>
          <p>Get expert guidance from our team. We're here to help.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Book a Consultation</a>
            <a href="#services" className="btn btn-secondary">Learn More Services</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LegalServices;
