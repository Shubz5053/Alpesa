import React, { useState } from 'react';
import './VisaServices.css';
import Header from './Header';
import Footer from './Footer';

function VisaServices() {
  const [expandedCountry, setExpandedCountry] = useState('usa');

  const visaInfo = {
    usa: {
      flag: '🇺🇸',
      name: 'United States (F-1)',
      duration: 'Valid for entire duration of studies + 12-month OPT',
      timeline: 'Apply 120 days before arrival; visa interview 2-4 weeks after DS-160',
      requirements: 'I-20 from university, passport, financial documents, passport-style photo, DS-160 form',
      cost: '$160 visa fee + SEVIS fee ($200)',
      workPermit: 'On-campus: 20 hrs/week max during semester, unlimited during breaks. Off-campus: only with special authorization',
      renewal: 'Extension possible; OPT available for 12 months (STEM: 24-36 months)',
      tips: [
        'Apply early; visa interviews can get booked out',
        'Be prepared to answer questions about funding, career goals, ties to home country',
        'Keep all documents organized in a folder',
        'Recent stamp collection is critical'
      ]
    },
    uk: {
      flag: '🇬🇧',
      name: 'United Kingdom (Student)',
      duration: 'Usually 1 year longer than course duration',
      timeline: 'Apply up to 3 months before course start; decision within 15 working days (Fast-track: 5 days)',
      requirements: 'CAS from university, passport, financial proof, tuberculosis test (non-UK),language test results',
      cost: '£719 for tier 4/student visa',
      workPermit: 'On-campus: 20 hours/week during term. Off-campus: unlimited during breaks',
      renewal: 'Available within 12 weeks of course ending for graduate route (2 years)',
      tips: [
        'Get CAS number early; needed to apply',
        'Financial proof should show funds held for 28 days',
        'Graduate Route visa allows 2 years post-study work without sponsor',
        'TB test required for countries with high TB rates'
      ]
    },
    canada: {
      flag: '🇨🇦',
      name: 'Canada (Study Permit)',
      duration: 'Valid for duration of studies + 3 months after graduation',
      timeline: 'Apply 4 months before course start; decision within 8 weeks (can be faster)',
      requirements: 'Letter of acceptance, passport, proof of financial support ($30,000+), medical exam (depending on origin)',
      cost: 'CAD 150 (application fee)',
      workPermit: 'On-campus: 20 hours/week during studies. Off-campus: available after 1st academic year',
      renewal: 'Open work permit upon graduation for 3 years (matching course length)',
      tips: [
        'Study Permit allows PGWP for 3 years post-study — PR pathway easier',
        'Financial proof must be for 2 years',
        'Medical exam required from certain countries',
        'Tuition fees often locked in; budget accordingly'
      ]
    },
    australia: {
      flag: '🇦🇺',
      name: 'Australia (Student)',
      duration: 'Valid for duration of studies + 5 months after graduation',
      timeline: 'Apply at least 4 weeks before course start; decision usually within 2 weeks',
      requirements: 'CoE (Confirmation of Enrollment), passport, proof of funds, English language test (if required)',
      cost: 'AUD 650 (visa application)',
      workPermit: 'On-campus: unlimited (but study-first requirement). Off-campus: 48 hours/fortnight during semester',
      renewal: 'Eligible for TSV/ESV post-study for 18-24 months (leads to potential PR)',
      tips: [
        'CoE must be applied for before visa',
        'Financial proof should cover tuition + living (typically AUD 60,000+)',
        'Post-Study Work Visa available for 18-24 months',
        'Strong pathway to PR; many students transition to employer sponsorship'
      ]
    },
    germany: {
      flag: '🇩🇪',
      name: 'Germany (Student Residence Permit)',
      duration: 'Typically 2 years; renewable if still studying',
      timeline: 'Apply 8-12 weeks before arrival; decision within 6-8 weeks',
      requirements: 'University admission letter, passport, proof of health insurance (€110/month), blocked account or sponsor letter (€10,332)',
      cost: 'Free to €75 (state-dependent)',
      workPermit: '120 full days OR 240 half days per year; unlimited during summer/semester breaks',
      renewal: 'Automatic if enrolled; extended for job-seeking after graduation',
      tips: [
        'Blocked account OR sponsor letter required before visa',
        'Health insurance mandatory — get it before applying',
        'English-taught programs don\'t typically require German proficiency',
        'Very affordable — minimal visa costs and tuition'
      ]
    }
  };

  return (
    <>
      <Header activePage="visa-services" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Visa Services</span>
          <h1>Visa guidance that <em>works</em>.</h1>
          <p className="hero-lede">Comprehensive student visa support for USA, UK, Canada, Australia, Germany, and beyond. We handle documentation, strategy, and interview prep — so your visa approval is nearly guaranteed.</p>
        </div>
      </header>

      <section className="section">
        <div className="section-header center">
          <div className="section-label">Visa by Country</div>
          <h2 className="section-title">Know your visa <em>requirements</em>.</h2>
          <p className="section-intro">Student visa requirements vary by country. We provide country-specific guidance to ensure your application is complete and compelling.</p>
        </div>

        <div className="grid grid-3" style={{ marginTop: '50px' }}>
          {Object.keys(visaInfo).map(key => (
            <button
              key={key}
              onClick={() => setExpandedCountry(key)}
              style={{
                background: expandedCountry === key ? 'var(--navy)' : 'var(--paper)',
                color: expandedCountry === key ? '#fff' : 'var(--ink)',
                border: expandedCountry === key ? 'none' : '1px solid var(--line)',
                borderRadius: '12px',
                padding: '20px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all .2s',
                fontSize: '1rem'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{visaInfo[key].flag}</div>
              <div style={{ fontWeight: '600' }}>{visaInfo[key].name.split('(')[0].trim()}</div>
              <div style={{ fontSize: '12px', marginTop: '4px', opacity: '0.8' }}>Click for details</div>
            </button>
          ))}
        </div>

        {expandedCountry && (
          <div className="card" style={{ marginTop: '50px', background: 'var(--cream)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>
              {visaInfo[expandedCountry].flag} {visaInfo[expandedCountry].name}
            </h3>

            <div className="grid grid-2" style={{ gap: '30px', marginBottom: '30px' }}>
              <div>
                <h4 style={{ color: 'var(--saffron)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Visa Duration</h4>
                <p style={{ fontSize: '1rem', color: 'var(--ink)' }}>{visaInfo[expandedCountry].duration}</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--saffron)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Timeline to Apply</h4>
                <p style={{ fontSize: '1rem', color: 'var(--ink)' }}>{visaInfo[expandedCountry].timeline}</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--saffron)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Application Cost</h4>
                <p style={{ fontSize: '1rem', color: 'var(--ink)' }}>{visaInfo[expandedCountry].cost}</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--saffron)', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Part-Time Work</h4>
                <p style={{ fontSize: '1rem', color: 'var(--ink)' }}>{visaInfo[expandedCountry].workPermit}</p>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '12px', fontWeight: '600' }}>📋 Required Documents</h4>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7' }}>{visaInfo[expandedCountry].requirements}</p>
            </div>

            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '12px', fontWeight: '600' }}>📈 After-Study Options</h4>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7' }}>{visaInfo[expandedCountry].renewal}</p>
            </div>

            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '12px', fontWeight: '600' }}>💡 Pro Tips</h4>
              <ul style={{ marginLeft: '20px' }}>
                {visaInfo[expandedCountry].tips.map((tip, idx) => (
                  <li key={idx} style={{ color: 'var(--ink-soft)', marginBottom: '8px', lineHeight: '1.6' }}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      <section className="band-navy">
        <div className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="section-header center">
            <div className="section-label">Our Process</div>
            <h2 className="section-title">We handle your <em>visa</em>.</h2>
            <p className="section-intro">From document organization to interview prep, we guide you through every step.</p>
          </div>

          <div className="steps" style={{ maxWidth: '900px', margin: '50px auto 0' }}>
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h5>Visa Requirements Assessment</h5>
                <p>We evaluate your profile against your destination country's specific visa requirements — identifying any gaps or concerns early.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h5>Documentation Organization &amp; Preparation</h5>
                <p>We provide a detailed checklist, help you organize documents, and ensure everything meets official standards (notarization, translations, etc.).</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h5>Financial File Strengthening</h5>
                <p>Financial proof is critical for visa approval. We help you document income sources, sponsorship letters, and bank statements convincingly.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">4</div>
              <div>
                <h5>Interview Coaching &amp; Mock Sessions</h5>
                <p>We conduct mock interviews, anticipate tough questions, and prepare you to confidently answer visa officer questions.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">5</div>
              <div>
                <h5>Application Submission &amp; Tracking</h5>
                <p>We help with online applications, fee payments, appointment booking, and track your application status throughout.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">6</div>
              <div>
                <h5>Post-Approval Support</h5>
                <p>Visa approved? We help with travel arrangements, accommodation, banking setup, and SIM card information for your arrival.</p>
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
            <summary>How early should I apply for a student visa?</summary>
            <div className="ans">Timing varies by country: USA (120 days before arrival), UK (3 months), Canada (4 months), Australia (4 weeks), Germany (8-12 weeks). We recommend applying as soon as you have your university admission letter and financial proof ready.</div>
          </details>

          <details className="faq">
            <summary>What's the most common reason for visa rejection?</summary>
            <div className="ans">Insufficient financial proof is the #1 reason. Visa officers need to see that you can afford your education and living expenses without relying on illegal work. We help you present a strong, transparent financial file.</div>
          </details>

          <details className="faq">
            <summary>Do I need a lawyer for my student visa?</summary>
            <div className="ans">Not typically. Most student visas are straightforward. A lawyer is helpful if you have a rejection, criminal record, health issues, or unique circumstances. We can refer you to qualified immigration lawyers if needed.</div>
          </details>

          <details className="faq">
            <summary>What if my visa is rejected?</summary>
            <div className="ans">We analyze the rejection reason, help you understand the issues, and develop an appeal or reapplication strategy. Many rejections can be overcome with stronger documentation or addressing specific concerns. We have a strong track record of turning around rejections.</div>
          </details>

          <details className="faq">
            <summary>Can I work while on a student visa?</summary>
            <div className="ans">Yes, but with limitations. On-campus work is usually allowed (15-20 hours/week during studies, unlimited during breaks). Off-campus work varies by country — USA is most restrictive, while Germany allows up to 120 full or 240 half days per year. We provide country-specific guidance.</div>
          </details>

          <details className="faq">
            <summary>What's the post-study work visa situation?</summary>
            <div className="ans">Most countries offer post-study work visas: USA (12-36 months for STEM), UK (2 years with Graduate Route), Canada (3 years), Australia (18-24 months), Germany (18 months job-seeking). Many have pathways to PR. We guide you through all options.</div>
          </details>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-inner">
          <h2>Your visa approval, nearly guaranteed.</h2>
          <p>Let's prepare a visa application that stands out.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Visa Preparation</a>
            <a href="#contact" className="btn btn-secondary">Book Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default VisaServices;
