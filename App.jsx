import React, { useState } from 'react';
import { 
  Recycle, Wrench, ShoppingBag, Leaf, ChevronRight, Camera, 
  Sparkles, CheckCircle2, User, Search, MapPin, ArrowLeft, 
  ArrowRight, Smartphone, Laptop, Headphones, Tv, ShieldCheck, 
  Clock, TrendingUp, AlertCircle, Award, Gift, QrCode, X, Zap
} from 'lucide-react';

export default function App() {
  // Navigation State: 'splash' | 'login' | 'home' | 'sell'
  const [currentScreen, setCurrentScreen] = useState('splash');
  
  // Interactive Modal / Tab Overlay state for Home sub-features
  const [activeModal, setActiveModal] = useState(null); // 'buy' | 'repair' | 'recycle' | 'my-products' | 'track' | 'points'
  
  // User profile state
  const [user, setUser] = useState({
    name: 'Alex Morgan',
    email: 'alex@circularkart.eco',
    ecoPoints: 450,
    co2SavedKg: 128,
    isLoggedIn: false
  });

  // Sell Product Form State
  const [sellForm, setSellForm] = useState({
    category: 'Smartphones',
    productName: 'iPhone 13 Pro',
    age: '1-2 years',
    problems: ['Screen cracked'],
    photo: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60'
  });

  // AI Analysis State
  const [aiState, setAiState] = useState({
    analyzing: false,
    showResult: false,
    result: null
  });

  // Preset Device Photos for Quick Demo
  const presetPhotos = [
    {
      id: 'iphone',
      label: 'iPhone (Cracked Screen)',
      url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60',
      category: 'Smartphones',
      name: 'iPhone 13 Pro',
      age: '1-2 years',
      problems: ['Screen cracked', 'Battery draining fast']
    },
    {
      id: 'macbook',
      label: 'MacBook M1 (Working)',
      url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60',
      category: 'Laptops',
      name: 'MacBook Air M1',
      age: '2-4 years',
      problems: ['Minor scratches'],
    },
    {
      id: 'old-tablet',
      label: 'Unresponsive Tablet (E-Waste)',
      url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60',
      category: 'Tablets',
      name: 'Old Android Tablet',
      age: '5+ years',
      problems: ['Won\'t turn on', 'Physical damage']
    }
  ];

  // Quick select preset photo
  const selectPreset = (preset) => {
    setSellForm({
      category: preset.category,
      productName: preset.name,
      age: preset.age,
      problems: preset.problems,
      photo: preset.url
    });
  };

  // Toggle diagnostic problem selection
  const toggleProblem = (prob) => {
    if (sellForm.problems.includes(prob)) {
      setSellForm({
        ...sellForm,
        problems: sellForm.problems.filter(p => p !== prob)
      });
    } else {
      setSellForm({
        ...sellForm,
        problems: [...sellForm.problems, prob]
      });
    }
  };

  // Trigger AI Engine Diagnostics Logic
  const handleAnalyzeWithAI = () => {
    setAiState({ analyzing: true, showResult: false, result: null });

    setTimeout(() => {
      // Logic for AI decision based on inputs
      let recommendation = 'RESELL';
      let estValue = '$340';
      let repairability = '92%';
      let co2Impact = '48 kg';
      let points = 350;
      let reason = 'High market value and strong demand in certified refurbished market.';

      if (sellForm.problems.includes("Won't turn on") || sellForm.age === '5+ years') {
        recommendation = 'RECYCLE';
        estValue = '$45 (E-waste credit)';
        repairability = '15%';
        co2Impact = '65 kg';
        points = 200;
        reason = 'Device component lifecycle exceeded. E-waste extraction recovers precious metals safely.';
      } else if (sellForm.problems.includes("Screen cracked") || sellForm.problems.includes("Battery draining fast")) {
        recommendation = 'REPAIR';
        estValue = '$480 (Post-repair value)';
        repairability = '88%';
        co2Impact = '38 kg';
        points = 280;
        reason = 'Low repair cost ($35) will boost device resale value by over $180!';
      }

      setAiState({
        analyzing: false,
        showResult: true,
        result: {
          recommendation,
          estValue,
          repairability,
          co2Impact,
          points,
          reason
        }
      });
    }, 2200);
  };

  // Demo user login shortcut
  const handleDemoLogin = () => {
    setUser({ ...user, isLoggedIn: true });
    setCurrentScreen('home');
  };

  return (
    <div className="viewport-container">
      {/* Top Demo Bar for quick reviewer evaluation */}
      <div className="demo-bar">
        <button className={`demo-pill ${currentScreen === 'splash' ? 'active' : ''}`} onClick={() => setCurrentScreen('splash')}>1. Splash</button>
        <button className={`demo-pill ${currentScreen === 'login' ? 'active' : ''}`} onClick={() => setCurrentScreen('login')}>2. Login</button>
        <button className={`demo-pill ${currentScreen === 'home' ? 'active' : ''}`} onClick={() => setCurrentScreen('home')}>3. Home</button>
        <button className={`demo-pill ${currentScreen === 'sell' ? 'active' : ''}`} onClick={() => setCurrentScreen('sell')}>4. Sell Product (AI)</button>
      </div>

      {/* Realistic Mobile Frame */}
      <div className="mobile-frame">
        
        {/* Status Bar */}
        <div className={`status-bar ${currentScreen === 'splash' ? 'dark-theme' : ''}`}>
          <span>9:41</span>
          <div className="notch"></div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* SCREEN 1: SPLASH SCREEN */}
        {currentScreen === 'splash' && (
          <div className="splash-screen">
            <div className="splash-bg-glow"></div>
            
            <div className="splash-hero">
              <div className="logo-badge">
                <Recycle />
              </div>
              <h1 className="splash-title">CircularKart</h1>
              <p className="splash-subtitle">
                AI-Powered E-Commerce for Sustainable Electronics. Repair, Resell, or Recycle in seconds.
              </p>

              <div className="splash-features">
                <div className="feature-tag">
                  <Sparkles size={14} /> AI Diagnostics
                </div>
                <div className="feature-tag">
                  <Leaf size={14} /> Eco Points
                </div>
                <div className="feature-tag">
                  <ShieldCheck size={14} /> Verified Tech
                </div>
              </div>
            </div>

            <div className="splash-actions">
              <button className="btn-primary" onClick={() => setCurrentScreen('home')}>
                Get Started <ArrowRight size={18} />
              </button>
              <button className="btn-secondary" onClick={() => setCurrentScreen('login')}>
                Sign In to Account
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 2: LOGIN SCREEN */}
        {currentScreen === 'login' && (
          <div className="screen-content no-nav login-screen">
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Sign in to manage your circular electronics & eco-rewards.</p>
            </div>

            <div className="eco-banner-card">
              <Leaf size={24} />
              <div className="eco-banner-text">
                Sign in now and earn <strong>+100 Bonus Eco Points</strong> on your first item trade-in!
              </div>
            </div>

            <div className="login-form">
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <div className="input-wrapper">
                  <User />
                  <input type="email" className="form-input" placeholder="alex@example.com" defaultValue="alex@circularkart.eco" />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Password</label>
                <div className="input-wrapper">
                  <ShieldCheck />
                  <input type="password" className="form-input" placeholder="••••••••" defaultValue="password123" />
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked /> Remember me
                </label>
                <a href="#forgot" className="forgot-link" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
              </div>

              <button className="btn-primary" onClick={handleDemoLogin} style={{ marginTop: '8px' }}>
                Sign In <ArrowRight size={18} />
              </button>
            </div>

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <div className="social-btns">
              <button className="social-btn">Google</button>
              <button className="social-btn">Apple</button>
            </div>

            <div className="demo-shortcut-card">
              <div style={{ fontSize: '12px', color: '#065F46', fontWeight: 600 }}>⚡ Quick Reviewer Demo Access</div>
              <button className="demo-shortcut-btn" onClick={handleDemoLogin}>
                Continue as Alex (Eco Champion)
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 3: HOME SCREEN */}
        {currentScreen === 'home' && (
          <div className="screen-content home-screen">
            
            {/* Top Green Header */}
            <div className="home-top-header">
              <div className="user-profile-bar">
                <div className="user-info">
                  <div className="user-avatar">AM</div>
                  <div className="greeting-text">
                    <h3>Hello, Alex 👋</h3>
                    <p><MapPin size={11} inline="true" /> San Francisco, CA</p>
                  </div>
                </div>

                <div className="eco-points-badge" onClick={() => setActiveModal('points')}>
                  <Leaf size={16} color="#A7F3D0" />
                  <span className="points-val">{user.ecoPoints} Pts</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="home-search-bar">
                <Search size={18} />
                <input type="text" placeholder="Search refurbished phones, laptops, repairs..." />
              </div>
            </div>

            <div className="home-body">

              {/* AI Engine Hero Launcher Banner */}
              <div className="ai-banner">
                <div className="ai-banner-bg-circle"></div>
                <div className="ai-banner-chip">
                  <Sparkles size={12} /> AI Circular Engine
                </div>
                <h4>Have an old or broken device?</h4>
                <p>Upload a photo & let AI evaluate whether to Repair, Resell, or Recycle for max cash & points.</p>
                <button className="ai-banner-btn" onClick={() => setCurrentScreen('sell')}>
                  Analyze My Gadget <Zap size={16} />
                </button>
              </div>

              {/* Required 7 Core Features Grid */}
              <div>
                <div className="section-title-row">
                  <h4 className="section-title">Circular Services</h4>
                </div>

                <div className="modules-grid">
                  
                  {/* 1. Buy Used */}
                  <div className="module-card" onClick={() => setActiveModal('buy')}>
                    <div className="module-icon-box green">
                      <ShoppingBag size={22} />
                    </div>
                    <div className="module-info">
                      <h5>Buy Used</h5>
                      <p>Certified Tech</p>
                    </div>
                    <span className="module-badge">Save up to 60%</span>
                  </div>

                  {/* 2. Sell Product (AI) */}
                  <div className="module-card" onClick={() => setCurrentScreen('sell')}>
                    <div className="module-icon-box amber">
                      <Sparkles size={22} />
                    </div>
                    <div className="module-info">
                      <h5>Sell Product</h5>
                      <p>AI Trade-In Offer</p>
                    </div>
                    <span className="module-badge" style={{ background: '#FEF3C7', color: '#D97706' }}>AI Powered</span>
                  </div>

                  {/* 3. Repair */}
                  <div className="module-card" onClick={() => setActiveModal('repair')}>
                    <div className="module-icon-box blue">
                      <Wrench size={22} />
                    </div>
                    <div className="module-info">
                      <h5>Repair</h5>
                      <p>Local Tech Specs</p>
                    </div>
                  </div>

                  {/* 4. Recycle */}
                  <div className="module-card" onClick={() => setActiveModal('recycle')}>
                    <div className="module-icon-box purple">
                      <Recycle size={22} />
                    </div>
                    <div className="module-info">
                      <h5>Recycle</h5>
                      <p>Zero E-Waste</p>
                    </div>
                  </div>

                  {/* 5. My Products */}
                  <div className="module-card" onClick={() => setActiveModal('my-products')}>
                    <div className="module-icon-box teal">
                      <Laptop size={22} />
                    </div>
                    <div className="module-info">
                      <h5>My Products</h5>
                      <p>3 Saved Gadgets</p>
                    </div>
                  </div>

                  {/* 6. Track Requests */}
                  <div className="module-card" onClick={() => setActiveModal('track')}>
                    <div className="module-icon-box emerald">
                      <Clock size={22} />
                    </div>
                    <div className="module-info">
                      <h5>Track Requests</h5>
                      <p>2 Active Orders</p>
                    </div>
                    <span className="module-badge">Live Updates</span>
                  </div>

                  {/* 7. Eco Points */}
                  <div className="module-card span-2" onClick={() => setActiveModal('points')}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="module-icon-box green">
                        <Award size={24} />
                      </div>
                      <div className="module-info">
                        <h5>Eco Points & Rewards</h5>
                        <p>You saved 128 kg CO₂ e-waste this year!</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontWeight: 700, fontSize: '13px' }}>
                      Redeem <ChevronRight size={16} />
                    </div>
                  </div>

                </div>
              </div>

              {/* Refurbished Deals Carousel */}
              <div>
                <div className="section-title-row">
                  <h4 className="section-title">Buy Refurbished Electronics</h4>
                  <span className="see-all-link" onClick={() => setActiveModal('buy')}>See All</span>
                </div>

                <div className="horizontal-scroll">
                  
                  <div className="item-card" onClick={() => setActiveModal('buy')}>
                    <div className="item-img-container">
                      <span className="eco-impact-badge"><Leaf size={10} /> -32kg CO₂</span>
                      <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&auto=format&fit=crop&q=60" alt="iPhone 12" />
                    </div>
                    <div className="item-details">
                      <h6>iPhone 12 Pro 128GB</h6>
                      <div className="item-price-row">
                        <span className="price">$380</span>
                        <span className="condition-tag">Like New</span>
                      </div>
                    </div>
                  </div>

                  <div className="item-card" onClick={() => setActiveModal('buy')}>
                    <div className="item-img-container">
                      <span className="eco-impact-badge"><Leaf size={10} /> -85kg CO₂</span>
                      <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" alt="MacBook" />
                    </div>
                    <div className="item-details">
                      <h6>MacBook Air M1 256GB</h6>
                      <div className="item-price-row">
                        <span className="price">$620</span>
                        <span className="condition-tag">Refurbished</span>
                      </div>
                    </div>
                  </div>

                  <div className="item-card" onClick={() => setActiveModal('buy')}>
                    <div className="item-img-container">
                      <span className="eco-impact-badge"><Leaf size={10} /> -15kg CO₂</span>
                      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60" alt="Headphones" />
                    </div>
                    <div className="item-details">
                      <h6>Sony WH-1000XM4</h6>
                      <div className="item-price-row">
                        <span className="price">$190</span>
                        <span className="condition-tag">Mint</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* SCREEN 4: SELL PRODUCT SCREEN (AI Recommendation Engine) */}
        {currentScreen === 'sell' && (
          <div className="screen-content sell-screen">
            <div className="page-title-header">
              <button className="back-btn" onClick={() => setCurrentScreen('home')}>
                <ArrowLeft size={20} />
              </button>
              <div>
                <h2>Sell or Evaluate Tech</h2>
                <p style={{ fontSize: '12px', color: '#64748B' }}>AI determines whether to Repair, Resell, or Recycle</p>
              </div>
            </div>

            <div className="sell-form">

              {/* 1. Upload Photo */}
              <div className="input-group">
                <label className="input-label">1. Upload Device Photo</label>
                
                {sellForm.photo ? (
                  <div className="image-preview-box">
                    <img src={sellForm.photo} alt="Device Preview" />
                    <button className="remove-img-btn" onClick={() => setSellForm({ ...sellForm, photo: '' })}>
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="photo-upload-zone">
                    <div className="upload-icon-circle">
                      <Camera size={26} />
                    </div>
                    <div className="upload-title">Tap to Upload or Take Photo</div>
                    <div className="upload-hint">AI will scan for physical scratches & model details</div>
                  </div>
                )}

                {/* Quick Presets for Demo */}
                <div style={{ marginTop: '8px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#047857' }}>Select Demo Sample Gadget:</div>
                  <div className="preset-photos">
                    {presetPhotos.map(p => (
                      <div 
                        key={p.id} 
                        className={`preset-chip ${sellForm.productName === p.name ? 'active' : ''}`}
                        onClick={() => selectPreset(p)}
                      >
                        {p.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Category Picker */}
              <div className="input-group">
                <label className="input-label">2. Electronics Category</label>
                <div className="category-chips">
                  {[
                    { id: 'Smartphones', icon: Smartphone, label: 'Phone' },
                    { id: 'Laptops', icon: Laptop, label: 'Laptop' },
                    { id: 'Tablets', icon: Laptop, label: 'Tablet' },
                    { id: 'Audio', icon: Headphones, label: 'Audio' },
                    { id: 'Gaming', icon: Tv, label: 'Console' }
                  ].map(cat => {
                    const IconComp = cat.icon;
                    return (
                      <div 
                        key={cat.id} 
                        className={`category-chip-btn ${sellForm.category === cat.id ? 'active' : ''}`}
                        onClick={() => setSellForm({ ...sellForm, category: cat.id })}
                      >
                        <IconComp />
                        <span>{cat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Product Name */}
              <div className="input-group">
                <label className="input-label">3. Product Name / Model</label>
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ paddingLeft: '16px' }} 
                  value={sellForm.productName}
                  onChange={(e) => setSellForm({ ...sellForm, productName: e.target.value })}
                  placeholder="e.g. iPhone 13 Pro, MacBook M1"
                />
              </div>

              {/* 4. Device Age */}
              <div className="input-group">
                <label className="input-label">4. Device Age</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                  {['< 1 yr', '1-2 yrs', '2-4 yrs', '5+ yrs'].map(ageOption => (
                    <button 
                      key={ageOption}
                      type="button"
                      className={`preset-chip ${sellForm.age === ageOption ? 'active' : ''}`}
                      onClick={() => setSellForm({ ...sellForm, age: ageOption })}
                      style={{ padding: '10px 4px' }}
                    >
                      {ageOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Problem / Diagnostic Condition */}
              <div className="input-group">
                <label className="input-label">5. Device Condition & Issues</label>
                <div className="problem-tags">
                  {[
                    'Mint Condition',
                    'Screen cracked',
                    'Battery draining fast',
                    'Won\'t turn on',
                    'Minor scratches',
                    'Speaker issue',
                    'Camera blurry'
                  ].map(prob => (
                    <div 
                      key={prob}
                      className={`problem-tag ${sellForm.problems.includes(prob) ? 'selected' : ''}`}
                      onClick={() => toggleProblem(prob)}
                    >
                      {sellForm.problems.includes(prob) ? '✓ ' : '+ '}{prob}
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Action Button: Analyze with AI */}
              <button className="btn-primary" onClick={handleAnalyzeWithAI} style={{ marginTop: '10px' }}>
                <Sparkles size={20} /> Analyze with AI Engine
              </button>

            </div>
          </div>
        )}

        {/* AI LOADING OVERLAY / RESULT POPUP MODAL */}
        {(aiState.analyzing || aiState.showResult) && (
          <div className="ai-analysis-modal">
            {aiState.analyzing ? (
              <div className="ai-card-popup">
                <div className="ai-scanning-ring"></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>
                  AI Circular Engine Analyzing...
                </h3>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.4 }}>
                  Scanning condition tags, estimating component lifecycle & evaluating global market trade-in values...
                </p>
              </div>
            ) : (
              <div className="ai-card-popup">
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#047857', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  AI Diagnostic Complete
                </div>

                {/* AI VERDICT BADGE */}
                <div className={`verdict-badge ${aiState.result.recommendation.toLowerCase()}`}>
                  {aiState.result.recommendation === 'RESELL' && <TrendingUp size={22} />}
                  {aiState.result.recommendation === 'REPAIR' && <Wrench size={22} />}
                  {aiState.result.recommendation === 'RECYCLE' && <Recycle size={22} />}
                  RECOMMENDED: {aiState.result.recommendation}
                </div>

                <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.4, marginBottom: '16px' }}>
                  {aiState.result.reason}
                </p>

                <div className="metrics-grid">
                  <div className="metric-box">
                    <span className="metric-val" style={{ color: '#047857' }}>{aiState.result.estValue}</span>
                    <span className="metric-label">Est. Value</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-val" style={{ color: '#2563EB' }}>{aiState.result.repairability}</span>
                    <span className="metric-label">Repairability</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-val" style={{ color: '#D97706' }}>+{aiState.result.points}</span>
                    <span className="metric-label">Eco Points</span>
                  </div>
                </div>

                <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '10px', borderRadius: '10px', width: '100%', marginBottom: '16px', fontSize: '12px', color: '#065F46' }}>
                  🌱 <strong>Environmental Impact:</strong> Prevents <strong>{aiState.result.co2Impact}</strong> toxic e-waste emissions!
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {aiState.result.recommendation === 'RESELL' && (
                    <button className="btn-primary" onClick={() => { setAiState({ analyzing: false, showResult: false }); setActiveModal('track'); }}>
                      List on Marketplace ($340 Cash)
                    </button>
                  )}
                  {aiState.result.recommendation === 'REPAIR' && (
                    <button className="btn-primary" onClick={() => { setAiState({ analyzing: false, showResult: false }); setActiveModal('repair'); }}>
                      Book Repair Tech ($35)
                    </button>
                  )}
                  {aiState.result.recommendation === 'RECYCLE' && (
                    <button className="btn-primary" onClick={() => { setAiState({ analyzing: false, showResult: false }); setActiveModal('recycle'); }}>
                      Schedule Free Pickup (+200 Pts)
                    </button>
                  )}

                  <button className="btn-secondary" style={{ color: '#0F172A', borderColor: '#CBD5E1' }} onClick={() => setAiState({ analyzing: false, showResult: false })}>
                    Close Diagnostic
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUB-MODAL INTERACTIVE SHEETS FOR HOME MODULES */}
        {activeModal && (
          <div className="sub-modal" onClick={() => setActiveModal(null)}>
            <div className="sub-modal-content" onClick={(e) => e.stopPropagation()}>
              
              {/* 1. Buy Used Marketplace Modal */}
              {activeModal === 'buy' && (
                <div>
                  <div className="modal-header">
                    <h3>Certified Refurbished Tech</h3>
                    <button className="close-modal-btn" onClick={() => setActiveModal(null)}><X size={18} /></button>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '16px' }}>Tested with 50-point diagnostic inspection. 1-year warranty included.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { name: 'iPhone 13 128GB', price: '$420', orig: '$799', co2: '45kg', img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&auto=format&fit=crop&q=60' },
                      { name: 'MacBook Pro 13" M1', price: '$750', orig: '$1299', co2: '110kg', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60' },
                      { name: 'iPad Air 4th Gen 64GB', price: '$340', orig: '$599', co2: '30kg', img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&auto=format&fit=crop&q=60' }
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '12px', padding: '12px', background: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', alignItems: 'center' }}>
                        <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'contain', background: '#fff', borderRadius: '10px' }} />
                        <div style={{ flex: 1 }}>
                          <h5 style={{ fontSize: '14px', fontWeight: 700 }}>{item.name}</h5>
                          <div style={{ fontSize: '12px', color: '#047857', fontWeight: 600 }}>Save {item.co2} CO₂</div>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline', marginTop: '4px' }}>
                            <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{item.price}</span>
                            <span style={{ fontSize: '12px', color: '#94A3B8', textDecoration: 'line-through' }}>{item.orig}</span>
                          </div>
                        </div>
                        <button className="btn-primary" style={{ padding: '8px 14px', fontSize: '12px', width: 'auto' }}>
                          Buy
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Repair Service Modal */}
              {activeModal === 'repair' && (
                <div>
                  <div className="modal-header">
                    <h3>Book Certified Tech Repair</h3>
                    <button className="close-modal-btn" onClick={() => setActiveModal(null)}><X size={18} /></button>
                  </div>
                  <div style={{ background: '#FEF3C7', padding: '12px', borderRadius: '12px', color: '#B45309', fontSize: '13px', marginBottom: '16px', display: 'flex', gap: '8px' }}>
                    <Wrench size={20} />
                    <span>Free diagnostics & doorstep pickup by certified eco-repair partners.</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div className="input-group">
                      <label className="input-label">Select Issue</label>
                      <select className="form-input" style={{ paddingLeft: '16px' }}>
                        <option>Screen Replacement ($35 - $65)</option>
                        <option>Battery Replacement ($25 - $45)</option>
                        <option>Charging Port Repair ($20)</option>
                        <option>Full Diagnostic & Water Damage ($40)</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label className="input-label">Preferred Date & Time</label>
                      <input type="date" className="form-input" style={{ paddingLeft: '16px' }} defaultValue="2026-09-15" />
                    </div>

                    <button className="btn-primary" onClick={() => { setActiveModal(null); alert("Repair appointment confirmed! Technician assigned."); }}>
                      Confirm Repair Appointment ($35)
                    </button>
                  </div>
                </div>
              )}

              {/* 3. Recycle Modal */}
              {activeModal === 'recycle' && (
                <div>
                  <div className="modal-header">
                    <h3>E-Waste Recycling Hub</h3>
                    <button className="close-modal-btn" onClick={() => setActiveModal(null)}><X size={18} /></button>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '16px' }}>100% zero-landfill guarantee. Earn 200 Eco Points per recycled item!</p>

                  <div style={{ background: '#F0FDF4', border: '1px solid #34D399', padding: '14px', borderRadius: '14px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <Recycle color="#059669" size={24} />
                      <div style={{ fontWeight: 800, color: '#065F46', fontSize: '15px' }}>Free Doorstep Pickup</div>
                    </div>
                    <p style={{ fontSize: '12px', color: '#047857' }}>Our eco-courier will pick up your e-waste & safely deliver it to R2-Certified recycling facilities.</p>
                  </div>

                  <button className="btn-primary" onClick={() => { setActiveModal(null); alert("Recycling pickup scheduled! You will earn +200 Eco Points upon pickup."); }}>
                    Schedule Free Collection (+200 Pts)
                  </button>
                </div>
              )}

              {/* 4. My Products Modal */}
              {activeModal === 'my-products' && (
                <div>
                  <div className="modal-header">
                    <h3>My Registered Devices</h3>
                    <button className="close-modal-btn" onClick={() => setActiveModal(null)}><X size={18} /></button>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { name: 'iPhone 13 Pro', health: '89% Battery', estVal: '$420', status: 'Optimal' },
                      { name: 'MacBook Air M1', health: '94% Battery', estVal: '$680', status: 'Optimal' },
                      { name: 'Old Sony Headphones', health: 'Battery Weak', estVal: '$40', status: 'Needs Repair' }
                    ].map((dev, idx) => (
                      <div key={idx} style={{ padding: '14px', background: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h5 style={{ fontSize: '14px', fontWeight: 700 }}>{dev.name}</h5>
                          <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Health: {dev.health}</div>
                          <div style={{ fontSize: '12px', color: '#047857', fontWeight: 700, marginTop: '2px' }}>Valued at {dev.estVal}</div>
                        </div>
                        <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12px', color: '#047857', borderColor: '#A7F3D0', background: '#ECFDF5' }} onClick={() => { setActiveModal(null); setCurrentScreen('sell'); }}>
                          Evaluate AI
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Track Requests Modal */}
              {activeModal === 'track' && (
                <div>
                  <div className="modal-header">
                    <h3>Track Live Requests</h3>
                    <button className="close-modal-btn" onClick={() => setActiveModal(null)}><X size={18} /></button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ padding: '14px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#065F46' }}>Trade-In #CK-9482</span>
                        <span style={{ fontSize: '11px', fontWeight: 700, background: '#10B981', color: '#fff', padding: '2px 8px', borderRadius: '10px' }}>In Transit</span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#047857', fontWeight: 600 }}>iPhone 12 Pro - $380 Payout</div>
                      <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px' }}>Courier arriving today by 4:00 PM</div>
                    </div>

                    <div style={{ padding: '14px', background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#92400E' }}>Repair #RP-3011</span>
                        <span style={{ fontSize: '11px', fontWeight: 700, background: '#F59E0B', color: '#fff', padding: '2px 8px', borderRadius: '10px' }}>Technician Assigned</span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#B45309', fontWeight: 600 }}>MacBook Screen Diagnostic</div>
                      <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px' }}>Tech: Marcus V. (Arriving Tomorrow)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Eco Points Rewards Modal */}
              {activeModal === 'points' && (
                <div>
                  <div className="modal-header">
                    <h3>Eco Points Wallet</h3>
                    <button className="close-modal-btn" onClick={() => setActiveModal(null)}><X size={18} /></button>
                  </div>

                  <div style={{ background: 'linear-gradient(135deg, #064E3B 0%, #047857 100%)', padding: '20px', borderRadius: '18px', color: '#fff', textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', color: '#A7F3D0', textTransform: 'uppercase', fontWeight: 700 }}>Total Balance</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, margin: '4px 0' }}>{user.ecoPoints} Pts</div>
                    <div style={{ fontSize: '13px', color: '#ECFDF5' }}>Rank: 🌿 Green Champion</div>
                  </div>

                  <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>Redeem Rewards</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '13px' }}>$10 Amazon Eco Gift Card</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Cost: 300 Pts</div>
                      </div>
                      <button className="btn-primary" style={{ width: 'auto', padding: '6px 12px', fontSize: '12px' }} onClick={() => alert("Redeemed $10 Voucher!")}>
                        Redeem
                      </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '13px' }}>Plant 5 Real Trees 🌳</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Cost: 150 Pts</div>
                      </div>
                      <button className="btn-primary" style={{ width: 'auto', padding: '6px 12px', fontSize: '12px' }} onClick={() => alert("5 Trees Planted in your name!")}>
                        Plant
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* BOTTOM APP NAVIGATION (Visible on Home and Sell) */}
        {(currentScreen === 'home' || currentScreen === 'sell') && (
          <div className="bottom-nav">
            <button 
              className={`nav-item ${currentScreen === 'home' && !activeModal ? 'active' : ''}`}
              onClick={() => { setCurrentScreen('home'); setActiveModal(null); }}
            >
              <User />
              <span>Home</span>
            </button>

            <button 
              className={`nav-item ${activeModal === 'buy' ? 'active' : ''}`}
              onClick={() => { setCurrentScreen('home'); setActiveModal('buy'); }}
            >
              <ShoppingBag />
              <span>Buy Used</span>
            </button>

            {/* AI Sell Button Floating Center */}
            <button 
              className="nav-item-sell"
              onClick={() => { setCurrentScreen('sell'); setActiveModal(null); }}
              title="AI Evaluate & Sell"
            >
              <Sparkles size={24} />
            </button>

            <button 
              className={`nav-item ${activeModal === 'track' ? 'active' : ''}`}
              onClick={() => { setCurrentScreen('home'); setActiveModal('track'); }}
            >
              <Clock />
              <span>Track</span>
            </button>

            <button 
              className={`nav-item ${activeModal === 'points' ? 'active' : ''}`}
              onClick={() => { setCurrentScreen('home'); setActiveModal('points'); }}
            >
              <Leaf />
              <span>Eco Wallet</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
