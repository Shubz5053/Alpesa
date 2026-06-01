import React from 'react';
import './Partners.css';
import Header from './Header';
import Footer from './Footer';

function Partners() {
  return (
    <>
      <Header activePage="partners" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Partners</span>
          <h1>Universities &amp; institutions <em>we work with</em>.</h1>
          <p className="hero-lede">Alpesa partners with 200+ universities across USA, UK, Canada, Australia, Germany, and beyond — all carefully selected for academic excellence, student outcomes, and value for Indian students.</p>
        </div>
      </header>

      <section className="section">
        <div className="section-header center">
          <div className="section-label">Our Network</div>
          <h2 className="section-title">Partnerships built on <em>trust</em>.</h2>
          <p className="section-intro">We work directly with admissions teams, student success offices, and international student advisors — ensuring our students are fully supported from application to graduation.</p>
        </div>

        <div className="grid grid-3" style={{ marginTop: '50px' }}>
          <div className="card">
            <span className="ico">🇺🇸</span>
            <h3>USA</h3>
            <p>80+ universities — Ivy League, state schools, and specialized institutions across every state.</p>
            <button type="button" className="lk">View Universities →</button>
          </div>

          <div className="card">
            <span className="ico">🇬🇧</span>
            <h3>United Kingdom</h3>
            <p>40+ universities — Russell Group and modern universities offering globally recognized degrees.</p>
            <button type="button" className="lk">View Universities →</button>
          </div>

          <div className="card">
            <span className="ico">🇨🇦</span>
            <h3>Canada</h3>
            <p>35+ universities — research-intensive institutions with excellent post-graduation work permits.</p>
            <button type="button" className="lk">View Universities →</button>
          </div>

          <div className="card">
            <span className="ico">🇦🇺</span>
            <h3>Australia</h3>
            <p>28+ universities — Go8 institutions and emerging universities offering affordable, high-quality education.</p>
            <button type="button" className="lk">View Universities →</button>
          </div>

          <div className="card">
            <span className="ico">🇩🇪</span>
            <h3>Germany</h3>
            <p>22+ universities — excellent engineering, sciences, and affordable tuition for international students.</p>
            <button type="button" className="lk">View Universities →</button>
          </div>

          <div className="card">
            <span className="ico">🇫🇷</span>
            <h3>France</h3>
            <p>18+ universities — world-class higher education with accessible tuition and multicultural campus life.</p>
            <button type="button" className="lk">View Universities →</button>
          </div>
        </div>

        <div className="highlight" style={{ marginTop: '50px' }}>
          <div className="label">💡 Why Partner with These Universities</div>
          <ul style={{ marginLeft: '20px' }}>
            <li><strong>Verified Track Record:</strong> We've successfully placed hundreds of Indian students with these partners.</li>
            <li><strong>Dedicated Support:</strong> Each university has dedicated international student support teams.</li>
            <li><strong>Scholarship Opportunities:</strong> Many partners offer need-based, merit-based, and India-specific scholarships.</li>
            <li><strong>Career Outcomes:</strong> Strong alumni networks, internship placements, and career services for all students.</li>
          </ul>
        </div>
      </section>

      <section className="band-navy">
        <div className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="section-header center">
            <div className="section-label">Partnership Model</div>
            <h2 className="section-title">How we <em>collaborate</em>.</h2>
            <p className="section-intro">Our university partnerships go beyond simple recruitment — we're invested in student success.</p>
          </div>

          <div className="steps" style={{ maxWidth: '900px', margin: '50px auto 0' }}>
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h5>Student Recruitment &amp; Vetting</h5>
                <p>We identify and refer qualified Indian students to our partner universities — ensuring good program fits and successful outcomes.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h5>Application Support</h5>
                <p>We guide students through each university's application process — handling admissions coordination and expedited decisions where available.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h5>Student Onboarding</h5>
                <p>Partner universities work directly with us on student onboarding, orientation, and initial support — ensuring a smooth transition.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">4</div>
              <div>
                <h5>Ongoing Success &amp; Outcomes</h5>
                <p>We track student progress, coordinate support as needed, and maintain connections with alumni — building long-term relationships with each partner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header center">
          <h2 className="section-title">University <em>testimonials</em>.</h2>
          <p className="section-intro">What our university partners have to say about working with Alpesa.</p>
        </div>

        <div className="grid grid-2" style={{ marginTop: '50px' }}>
          <div className="tcard">
            <div className="quote">"</div>
            <p>"Alpesa students consistently demonstrate strong academic performance, clear goal orientation, and seamless integration into our campus culture. Their commitment to vetting and ongoing student support makes them a trusted recruitment partner."</p>
            <div className="who">
              <div className="av">🎓</div>
              <div>
                <b>Director of International Admissions</b>
                <span>University Partner, USA</span>
              </div>
            </div>
          </div>

          <div className="tcard">
            <div className="quote">"</div>
            <p>"Alpesa's professionalism and attention to detail in the application process has elevated our admissions standards. We value their partnership and recommend them highly to other institutions."</p>
            <div className="who">
              <div className="av">🌍</div>
              <div>
                <b>International Student Services</b>
                <span>University Partner, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-inner">
          <h2>Ready to explore these partnership universities?</h2>
          <p>Let's find the perfect fit for your goals and aspirations.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
            <a href="#services" className="btn btn-secondary">Learn About Our Services</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Partners;
