import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { CATEGORIES, HIGHLIGHTS, MENU_ITEMS, REVIEWS, WHY_US_ITEMS } from './menuData';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.3 });
    };

    const handleHover = () => {
      cursorRef.current.classList.add('cursor-grow');
      followerRef.current.classList.add('follower-grow');
    };

    const handleLeave = () => {
      cursorRef.current.classList.remove('cursor-grow');
      followerRef.current.classList.remove('follower-grow');
    };

    window.addEventListener('mousemove', moveCursor);

    const interactive = document.querySelectorAll('a, button, .why-card, .menu-card, .cat-btn');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">FUELYN</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reviews">Success</a></li>
          <li><a href="#order">Order</a></li>
        </ul>
        <a href="#order" className="nav-button">Order Now</a>
      </div>
    </nav>
  );
};

const Marquee = () => {
  const items = ["NO REFINED SUGAR", "GLUTEN FREE", "HIGH PROTEIN", "ORGANIC", "PREBIOTIC RICH", "PLANT BASED"];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="dot">●</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="blob blob-1"></div>
      <div className="hero-images">
        <motion.img 
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80" 
          className="floating-img" style={{ top: '15%', left: '10%', width: '150px', height: '150px' }}
          animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80" 
          className="floating-img" style={{ top: '60%', left: '5%', width: '180px', height: '180px' }}
          animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80" 
          className="floating-img" style={{ top: '20%', right: '8%', width: '160px', height: '160px' }}
          animate={{ y: [0, -25, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div className="floating-icon" style={{ top: '30%', left: '25%' }} animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>🥑</motion.div>
        <motion.div className="floating-icon" style={{ top: '75%', left: '30%' }} animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>🥗</motion.div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div className="bubble" style={{ display: 'inline-block', marginBottom: '15px' }}>Premium Nutrition</motion.div>
          <motion.h1 
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            The Ultimate Fuel<br/>for High Performance
          </motion.h1>
          <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Gourmet, prebiotic-rich meals engineered for regularity, energy, and cognitive focus.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <a href="#menu" className="btn-primary">View Menu</a>
            <a href="#order" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--lime)', color: 'var(--lime)' }}>Custom Plan</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HorizontalScrollSection = ({ id, items, title, subtitle, renderItem, bgClass }) => {
  const wrapperRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.scroll-panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + wrapperRef.current.offsetWidth
        }
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} className={`highlights-wrapper ${bgClass}`} ref={wrapperRef}>
      <div className="highlights-container">
        {items.map((item, index) => (
          <div key={index} className="highlight-panel scroll-panel">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="bubble" style={{ display: 'inline-block', marginBottom: '10px' }}>Our Pillars</div>
          <h2 className="heading-m">Why FUELYN?</h2>
        </div>
        <div className="why-grid">
          {WHY_US_ITEMS.map((item, index) => (
            <motion.div key={item.id} className="why-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="why-icon-wrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecialDish = () => {
  return (
    <section className="section special-dish">
      <div className="container">
        <div className="special-grid">
          <div className="special-image-container">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80" className="special-image" />
            <div className="special-badge">20%<br/>Off</div>
          </div>
          <div className="special-info">
            <div className="bubble">Chef's Choice</div>
            <h2 className="heading-m" style={{ margin: '15px 0' }}>Quinoa Power Bowl</h2>
            <p>Our signature performance fuel. Organic quinoa, roasted vegetables, and prebiotic dressing.</p>
            <ul className="feature-list">
              <li>🥗 100% Organic Ingredients</li>
              <li>⚡ Immediate Energy Boost</li>
              <li>🛡️ Immunity Support</li>
            </ul>
            <a href="#order" className="btn-primary">Order Special - ₹499</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCat, setActiveCat] = useState('all');
  const items = activeCat === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === activeCat);

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="heading-m">Gourmet Selection</h2>
        </div>
        <div className="category-tabs">
          {CATEGORIES.map(cat => (
            <button key={cat.id} className={`cat-btn ${activeCat === cat.id ? 'active' : ''}`} onClick={() => setActiveCat(cat.id)}>
              {cat.label}
            </button>
          ))}
        </div>
        <motion.div className="menu-grid" layout>
          <AnimatePresence mode="popLayout">
            {items.map(item => (
              <motion.div key={item.id} className="menu-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
                <div className="menu-card-img-wrap"><img src={item.image} className="menu-card-img" /></div>
                <div className="menu-card-content">
                  <h3 className="menu-card-title">{item.name}</h3>
                  <p className="menu-card-desc">{item.desc}</p>
                  <div className="menu-card-footer">
                    <span className="menu-card-price">₹{item.price}</span>
                    <button className="add-btn">+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const OrderForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending Order...');
    setTimeout(() => {
      setStatus('Order Placed Successfully!');
      form.current.reset();
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="order" className="section order-section">
      <div className="container">
        <div className="order-container">
          <h2 className="heading-m" style={{ textAlign: 'center', marginBottom: '30px' }}>Get Started</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="form-input" placeholder="Full Name" required />
            <input type="email" name="user_email" className="form-input" placeholder="Email" required />
            <select name="plan" className="form-input" required>
              <option value="">Select Plan...</option>
              <option value="daily">Daily Special (₹499)</option>
              <option value="weekly">Weekly Pack (₹2,999)</option>
              <option value="monthly">Monthly Elite (₹9,999)</option>
            </select>
            <textarea name="message" className="form-input" style={{ height: '80px' }} placeholder="Notes..."></textarea>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>{status || 'Confirm Order'}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="logo footer-logo" style={{ marginBottom: '20px' }}>FUELYN</div>
      <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 FUELYN. Gourmet Performance Nutrition.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      
      {/* Horizontal Highlights Section */}
      <HorizontalScrollSection 
        id="benefits" 
        items={HIGHLIGHTS} 
        renderItem={(item) => (
          <div className="highlight-content">
            <span style={{ fontSize: '5rem' }}>{item.icon}</span>
            <h2 className="heading-l" style={{ margin: '20px 0' }}>{item.text}</h2>
            <div className="bubble">Scientifically Verified</div>
          </div>
        )}
      />

      <WhyChooseUs />
      <SpecialDish />
      <Menu />

      {/* Horizontal Testimonials Section */}
      <HorizontalScrollSection 
        id="reviews" 
        items={REVIEWS} 
        bgClass="reviews-wrapper"
        renderItem={(item) => (
          <div className="review-card-large">
            <div className="quote">{item.text}</div>
            <div className="reviewer-large">
              <img src={item.image} />
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ color: 'var(--dark-green)' }}>{item.name}</h4>
                <p style={{ color: '#444', fontSize: '0.8rem' }}>{item.role}</p>
              </div>
            </div>
          </div>
        )}
      />

      <OrderForm />
      <Footer />
    </div>
  );
}
