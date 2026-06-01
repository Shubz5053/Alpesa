import React, { useState } from 'react';
import './StudyDestinations.css';
import Header from './Header';
import Footer from './Footer';

function StudyDestinations() {
  const [selectedCountry, setSelectedCountry] = useState('usa');

  const destinations = {
    usa: {
      name: 'USA',
      flag: '🇺🇸',
      info: 'Home to the world\'s top universities and thriving international student communities. World-class research, diverse programs, and strong career outcomes.',
      tuition: '$20,000 - $60,000 per year',
      duration: '4 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['OPT Work Visa (12-36 months)', 'Assistantships & scholarships', 'Internship placements', 'PR pathways'],
      topUniversities: ['Harvard University', 'Stanford University', 'MIT', 'Yale University', 'Princeton University', 'University of Chicago', 'Penn University', 'Columbia University']
    },
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      info: 'Historic universities, specialized programs, and a compact study timeline. Graduate in 1 year with quality education and global recognition.',
      tuition: '$15,000 - $40,000 per year',
      duration: '3 years (Bachelor\'s), 1 year (Master\'s)',
      opportunities: ['Graduate Route Visa (2 years)', 'Scholarship opportunities', 'Internship pathways', 'EU placement network'],
      topUniversities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'LSE', 'UCL', 'University of Edinburgh', 'University of Manchester', 'Kings College London']
    },
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      info: 'Affordable education, welcoming communities, and excellent post-graduate work visa opportunities. Many students eventually get PR.',
      tuition: '$12,000 - $30,000 per year',
      duration: '4 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Post-Graduation Work Permit (3 years)', 'PR pathway', 'Tuition fee stability', 'Part-time work during studies'],
      topUniversities: ['University of Toronto', 'University of British Columbia', 'McMaster University', 'University of Alberta', 'Western University', 'University of Waterloo', 'McGill University', 'Ryerson University']
    },
    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      info: 'Sunny climate, high-quality education, and strong internship opportunities. Many students work part-time and earn well.',
      tuition: '$15,000 - $35,000 per year',
      duration: '3 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Post-study work visa (2-3 years)', 'PR eligibility after graduation', 'Part-time work on campus', 'Internship placements'],
      topUniversities: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW', 'Monash University', 'University of Queensland', 'University of Western Australia', 'University of South Wales']
    },
    germany: {
      name: 'Germany',
      flag: '🇩🇪',
      info: 'Affordable or free tuition at public universities, excellent engineering programs, and strong industrial connections.',
      tuition: 'Free - $10,000 per year',
      duration: '3 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Work permit (120/240 days per year)', 'PR pathway after graduation', 'Affordable living costs', 'Strong internship network'],
      topUniversities: ['Technical University of Munich', 'Heidelberg University', 'University of Berlin', 'University of Bonn', 'University of Hamburg', 'Karlsruhe Institute of Technology', 'University of Stuttgart', 'University of Cologne']
    },
    france: {
      name: 'France',
      flag: '🇫🇷',
      info: 'Culturally rich, affordable education, and world-class arts, sciences, and business programs. Gateway to Europe.',
      tuition: '$5,000 - $20,000 per year',
      duration: '3 years (Bachelor\'s), 2 years (Master\'s)',
      opportunities: ['Work permit (964 hours/year)', 'Living allowance & scholarships', 'Internship opportunities', 'European career network'],
      topUniversities: ['Sorbonne University', 'PSL Research University', 'University of Lyon', 'Grenoble INP', 'ESSEC', 'HEC Paris', 'Ecole Polytechnique', 'Sciences Po']
    }
  };

  const current = destinations[selectedCountry];

  return (
    <>
      <Header activePage="study-destinations" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Study Destinations</span>
          <h1>Study abroad, <em>your way</em>.</h1>
          <p className="hero-lede">Explore 6+ countries, compare programs, costs, and career outcomes. Find your perfect destination and build your global education strategy.</p>
        </div>
      </header>

      <div className="country-nav">
        <div className="country-nav-inner">
          {Object.keys(destinations).map(key => (
            <a key={key} href="#" onClick={(e) => { e.preventDefault(); setSelectedCountry(key); }} style={{ backgroundColor: selectedCountry === key ? 'var(--navy)' : '', color: selectedCountry === key ? '#fff' : '' }}>
              {destinations[key].flag} {destinations[key].name}
            </a>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="country-detail">
          <div className="country-head">
            <div className="country-flag">{current.flag}</div>
            <div>
              <h2>{current.name}</h2>
              <p>{current.info}</p>
            </div>
          </div>

          <div className="grid grid-2" style={{ marginTop: '40px' }}>
            <div className="card">
              <h3>💰 Typical Costs</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: '600', color: 'var(--navy)', marginTop: '10px' }}>{current.tuition}</p>
              <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--ink-soft)' }}>Plus living expenses of $10,000-$20,000/year depending on city</p>
            </div>

            <div className="card">
              <h3>📚 Study Duration</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: '600', color: 'var(--navy)', marginTop: '10px' }}>{current.duration}</p>
              <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--ink-soft)' }}>Varies by program and institution</p>
            </div>
          </div>

          <div className="highlight" style={{ marginTop: '40px' }}>
            <div className="label">🎯 Post-Study Opportunities</div>
            <ul style={{ marginLeft: '20px' }}>
              {current.opportunities.map((opp, idx) => (
                <li key={idx}>{opp}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '50px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>Top Universities</h3>
            <ul className="uni-list">
              {current.topUniversities.map((uni, idx) => (
                <li key={idx}>{uni}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band-navy">
        <div className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="section-header center">
            <div className="section-label">Our Support</div>
            <h2 className="section-title">We help you <em>succeed</em> abroad.</h2>
            <p className="section-intro">From pre-arrival preparations to on-campus success, we support you throughout your journey.</p>
          </div>

          <div className="grid grid-3" style={{ marginTop: '50px' }}>
            <div className="card">
              <span className="ico">📋</span>
              <h3>Pre-Arrival</h3>
              <p>Accommodation search, city guides, budget planning, and local SIM card setup.</p>
            </div>

            <div className="card">
              <span className="ico">🛫</span>
              <h3>Arrival &amp; Orientation</h3>
              <p>Airport pickup coordination, campus orientation, and initial settling-in support.</p>
            </div>

            <div className="card">
              <span className="ico">🎓</span>
              <h3>On-Campus Support</h3>
              <p>Academic mentorship, career guidance, and internship placement assistance.</p>
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
            <summary>Which country is best for Indian students?</summary>
            <div className="ans">There's no single "best" — it depends on your goals, budget, and field of study. USA offers the most universities and career opportunities. UK is great for rapid master's programs. Canada has excellent post-graduation work visas and PR pathways. Australia offers quality education with lower costs. Germany has minimal tuition fees. We help you evaluate all options.</div>
          </details>

          <details className="faq">
            <summary>How much does it cost to study abroad?</summary>
            <div className="ans">Total costs (tuition + living) range from $20,000-$80,000+ per year depending on country and university. Germany is most affordable. USA and UK can be expensive but offer excellent scholarships. We help you budget and explore funding options.</div>
          </details>

          <details className="faq">
            <summary>Can I work while studying?</summary>
            <div className="ans">Yes, most countries allow part-time work (15-20 hours/week during studies, full-time during holidays). Work eligibility varies by country. We provide specific guidance for your destination.</div>
          </details>

          <details className="faq">
            <summary>What are my visa options after graduation?</summary>
            <div className="ans">Most countries offer post-graduation work visas (12 months to 3 years). Many have PR pathways. We guide you through options for your destination.</div>
          </details>

          <details className="faq">
            <summary>What about scholarships?</summary>
            <div className="ans">Many universities offer merit-based, need-based, and country-specific scholarships. Government scholarships may be available in some countries. We help you identify and apply for all available funding.</div>
          </details>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-inner">
          <h2>Ready to explore your perfect destination?</h2>
          <p>Let's craft a study-abroad plan tailored to your goals and budget.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Book Consultation</a>
            <a href="#services" className="btn btn-secondary">View All Services</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default StudyDestinations;
