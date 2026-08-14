import React from 'react';

const Home = () => {
  // Mock test categories data
  const testCategories = [
    { id: 1, name: 'Bihar Daroga', icon: '👮', color: '#e74c3c', tests: 24, bg: '#fde8e8' },
    { id: 2, name: 'Bihar Police', icon: '🚔', color: '#f39c12', tests: 18, bg: '#fef3e2' },
    { id: 3, name: 'BPSC', icon: '📜', color: '#2ecc71', tests: 32, bg: '#e8f8ed' },
    { id: 4, name: 'UPSC', icon: '🇮🇳', color: '#3498db', tests: 45, bg: '#e3f0fa' },
    { id: 5, name: 'Group D', icon: '👥', color: '#9b59b6', tests: 15, bg: '#f3e8f9' },
    { id: 6, name: 'IBPS PO', icon: '🏦', color: '#1abc9c', tests: 28, bg: '#e6f7f3' },
    { id: 7, name: 'IBPS Clerk', icon: '📋', color: '#e67e22', tests: 22, bg: '#fdf0e2' },
    { id: 8, name: 'SSC GD', icon: '🛡️', color: '#e74c3c', tests: 20, bg: '#fde8e8' },
    { id: 9, name: 'Bank PO', icon: '💰', color: '#2ecc71', tests: 26, bg: '#e8f8ed' },
    { id: 10, name: 'Current Affairs', icon: '📰', color: '#3498db', tests: 50, bg: '#e3f0fa' },
    { id: 11, name: 'Daily Current Affairs', icon: '📅', color: '#9b59b6', tests: 365, bg: '#f3e8f9' },
    { id: 12, name: 'Special Science', icon: '🔬', color: '#1abc9c', tests: 30, bg: '#e6f7f3' },
    { id: 13, name: 'Mathematics', icon: '📐', color: '#e67e22', tests: 35, bg: '#fdf0e2' },
    { id: 14, name: 'Social Science', icon: '🌍', color: '#f39c12', tests: 28, bg: '#fef3e2' },
    { id: 15, name: 'English', icon: '📚', color: '#e74c3c', tests: 25, bg: '#fde8e8' },
    { id: 16, name: 'General Knowledge', icon: '🧠', color: '#2ecc71', tests: 40, bg: '#e8f8ed' },
    { id: 17, name: 'Reasoning', icon: '🧩', color: '#3498db', tests: 32, bg: '#e3f0fa' },
    { id: 18, name: 'Computer Awareness', icon: '💻', color: '#9b59b6', tests: 20, bg: '#f3e8f9' },
  ];

  // Popular tests data
  const popularTests = [
    { id: 101, title: 'BPSC Mains 2025 Mock Test-1', category: 'BPSC', questions: 120, time: '2 Hours', attempts: 3400, level: 'Advanced' },
    { id: 102, title: 'UPSC Prelims GS Paper-1', category: 'UPSC', questions: 100, time: '2 Hours', attempts: 2800, level: 'Expert' },
    { id: 103, title: 'Bihar Daroga Practice Set-5', category: 'Bihar Daroga', questions: 80, time: '90 Min', attempts: 1900, level: 'Medium' },
    { id: 104, title: 'SSC GD Reasoning Special', category: 'SSC GD', questions: 50, time: '60 Min', attempts: 1500, level: 'Easy' },
    { id: 105, title: 'IBPS PO Quantitative Aptitude', category: 'IBPS PO', questions: 35, time: '45 Min', attempts: 2100, level: 'Advanced' },
    { id: 106, title: 'Current Affairs Weekly Digest', category: 'Current Affairs', questions: 60, time: '30 Min', attempts: 4200, level: 'Medium' },
  ];

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Animated Header Section */}
        <div className="header-section">
          <div className="header-animated-bg"></div>
          <div className="header-content">
            <div className="header-badge">🔥 #1 Mock Test Platform</div>
            <h1>
              <span className="gradient-text">Master Your</span>
              <br />
              Competitive Exams
            </h1>
            <p>Practice with 800+ mock tests designed by experts. Track your progress and crack your dream exam!</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">18+</span>
                <span className="stat-label">📚 Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">800+</span>
                <span className="stat-label">📝 Mock Tests</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">👥 Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8⭐</span>
                <span className="stat-label">⭐ Rating</span>
              </div>
            </div>
            <div className="header-actions">
              <button className="primary-btn">Explore Tests →</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* Search Bar with Filter */}
        <div className="search-section">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search mock tests, categories, exams..." className="search-input" />
            <div className="filter-group">
              <select className="filter-select">
                <option>All Categories</option>
                <option>BPSC</option>
                <option>UPSC</option>
                <option>Bihar Police</option>
                <option>SSC GD</option>
              </select>
              <select className="filter-select">
                <option>All Levels</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Advanced</option>
                <option>Expert</option>
              </select>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>

        {/* Trending Tests */}
        <div className="trending-section">
          <div className="section-header">
            <div className="header-left">
              <span className="trending-icon">🔥</span>
              <h2>Trending Mock Tests</h2>
            </div>
            <a href="#" className="view-all">View All →</a>
          </div>
          <div className="trending-grid">
            {popularTests.slice(0, 3).map((test) => (
              <div key={test.id} className="trending-card">
                <div className="trending-badge">{test.category}</div>
                <div className="trending-level" style={{ 
                  background: test.level === 'Expert' ? '#e74c3c' : 
                              test.level === 'Advanced' ? '#e67e22' : 
                              test.level === 'Medium' ? '#f39c12' : '#2ecc71'
                }}>{test.level}</div>
                <h3>{test.title}</h3>
                <div className="trending-meta">
                  <span>📝 {test.questions} Questions</span>
                  <span>⏱️ {test.time}</span>
                </div>
                <div className="trending-footer">
                  <span className="attempts">👥 {test.attempts.toLocaleString()} attempts</span>
                  <span className="trending-view">View Details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tests Grid */}
        <div className="popular-section">
          <div className="section-header">
            <h2>⭐ Popular Mock Tests</h2>
            <span className="view-all">See All (24+) →</span>
          </div>
          <div className="popular-grid">
            {popularTests.map((test) => (
              <div key={test.id} className="popular-card">
                <div className="popular-header">
                  <span className="popular-category">{test.category}</span>
                  <span className="popular-level" style={{
                    background: test.level === 'Expert' ? '#e74c3c' : 
                                test.level === 'Advanced' ? '#e67e22' : 
                                test.level === 'Medium' ? '#f39c12' : '#2ecc71'
                  }}>{test.level}</span>
                </div>
                <h4>{test.title}</h4>
                <div className="popular-meta">
                  <span>📝 {test.questions} Qs</span>
                  <span>⏱️ {test.time}</span>
                  <span>👥 {test.attempts.toLocaleString()}</span>
                </div>
                <div className="popular-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${Math.min(100, (test.attempts / 5000) * 100)}%` }}></div>
                  </div>
                  <span className="progress-label">Popularity</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Categories - Modern Grid */}
        <div className="categories-section">
          <div className="section-header">
            <h2>📚 All Mock Test Categories</h2>
            <span className="category-count">{testCategories.length} Categories</span>
          </div>

          <div className="categories-grid">
            {testCategories.map((category) => (
              <div key={category.id} className="category-card-modern" style={{ 
                borderBottom: `4px solid ${category.color}`,
                background: category.bg 
              }}>
                <div className="category-icon-modern" style={{ background: category.color }}>
                  {category.icon}
                </div>
                <div className="category-info-modern">
                  <h3>{category.name}</h3>
                  <p>{category.tests} Tests</p>
                </div>
                <div className="category-arrow">→</div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers / Features Banner */}
        <div className="features-banner">
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">🎯</div>
              <h4>Topic-wise Tests</h4>
              <p>Practice specific topics with targeted tests</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">📊</div>
              <h4>Performance Analytics</h4>
              <p>Get detailed insights and improvement tips</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🏆</div>
              <h4>Leaderboard</h4>
              <p>Compete with thousands of aspirants</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">📱</div>
              <h4>Mobile Friendly</h4>
              <p>Practice anytime, anywhere on any device</p>
            </div>
          </div>
        </div>

        {/* Daily Current Affairs Section */}
        <div className="daily-affairs">
          <div className="daily-header">
            <span className="daily-icon">📅</span>
            <div>
              <h2>Daily Current Affairs</h2>
              <p>Stay updated with today's important news and events</p>
            </div>
            <button className="daily-btn">View Today's Digest →</button>
          </div>
          <div className="daily-grid">
            <div className="daily-card">
              <span className="daily-badge">🔥 Top Story</span>
              <h4>Union Budget 2025-26 Highlights</h4>
              <p>Key announcements and policy changes for the fiscal year</p>
              <span className="daily-time">📅 March 14, 2025</span>
            </div>
            <div className="daily-card">
              <span className="daily-badge">📰 Important</span>
              <h4>New Education Policy Updates</h4>
              <p>Major reforms in higher education and research</p>
              <span className="daily-time">📅 March 14, 2025</span>
            </div>
            <div className="daily-card">
              <span className="daily-badge">🌍 Global</span>
              <h4>International Relations: India's New Initiatives</h4>
              <p>Diplomatic developments and trade agreements</p>
              <span className="daily-time">📅 March 14, 2025</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h2>💬 What Our Students Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The mock tests here are incredibly helpful! I cleared my BPSC exam with the practice tests."</p>
              <div className="student-info">
                <span className="student-name">Amit Kumar</span>
                <span className="student-exam">BPSC Topper 2024</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Best platform for UPSC preparation. The quality of questions is excellent."</p>
              <div className="student-info">
                <span className="student-name">Priya Singh</span>
                <span className="student-exam">UPSC CSE 2024</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Daily current affairs helped me stay updated. Highly recommended for all aspirants!"</p>
              <div className="student-info">
                <span className="student-name">Rahul Sharma</span>
                <span className="student-exam">Bank PO 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Reset & Base */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Segoe UI', 'Arial', sans-serif;
          padding-bottom: 40px;
        }

        .home-container {
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header-section {
          position: relative;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          border-radius: 0 0 40px 40px;
          padding: 60px 50px 50px;
          margin: 0 -20px 30px -20px;
          overflow: hidden;
        }

        .header-animated-bg {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(10deg); }
        }

        .header-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .header-badge {
          display: inline-block;
          background: rgba(255, 215, 0, 0.2);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 6px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          color: #ffd700;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .header-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-content p {
          font-size: 1.2rem;
          opacity: 0.85;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }

        .header-stats {
          display: flex;
          justify-content: center;
          gap: 50px;
          margin-bottom: 35px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffd700;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.7;
          margin-top: 2px;
        }

        .header-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .primary-btn {
          padding: 14px 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
        }

        .secondary-btn {
          padding: 14px 35px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px);
        }

        /* Search */
        .search-section {
          margin-bottom: 35px;
        }

        .search-container {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 16px;
          padding: 8px 8px 8px 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          gap: 10px;
          flex-wrap: wrap;
        }

        .search-icon {
          font-size: 1.2rem;
        }

        .search-input {
          flex: 1;
          padding: 14px 0;
          border: none;
          outline: none;
          font-size: 1rem;
          background: transparent;
          min-width: 150px;
        }

        .filter-group {
          display: flex;
          gap: 8px;
        }

        .filter-select {
          padding: 10px 15px;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          font-size: 0.9rem;
          background: #f8f9fa;
          cursor: pointer;
          outline: none;
          transition: all 0.3s ease;
        }

        .filter-select:hover {
          border-color: #667eea;
        }

        .search-btn {
          padding: 12px 30px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }

        /* Section Header */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-header h2 {
          color: #1a1a2e;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .view-all {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all:hover {
          color: #764ba2;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trending-icon {
          font-size: 1.8rem;
        }

        .category-count {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 4px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Trending */
        .trending-section {
          margin-bottom: 40px;
        }

        .trending-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .trending-card {
          background: white;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          position: relative;
        }

        .trending-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .trending-badge {
          display: inline-block;
          background: #f0f2f5;
          color: #555;
          padding: 3px 14px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .trending-level {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 3px 12px;
          border-radius: 12px;
          font-size: 0.65rem;
          font-weight: 700;
          color: white;
        }

        .trending-card h3 {
          font-size: 1rem;
          color: #1a1a2e;
          margin-bottom: 10px;
          line-height: 1.4;
          padding-right: 60px;
        }

        .trending-meta {
          display: flex;
          gap: 15px;
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 12px;
        }

        .trending-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eee;
          padding-top: 12px;
        }

        .attempts {
          font-size: 0.85rem;
          color: #888;
        }

        .trending-view {
          color: #667eea;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .trending-view:hover {
          color: #764ba2;
        }

        /* Popular */
        .popular-section {
          margin-bottom: 40px;
        }

        .popular-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 18px;
        }

        .popular-card {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .popular-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .popular-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .popular-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: #667eea;
          background: #eef0ff;
          padding: 2px 12px;
          border-radius: 10px;
        }

        .popular-level {
          font-size: 0.65rem;
          font-weight: 700;
          color: white;
          padding: 2px 10px;
          border-radius: 10px;
        }

        .popular-card h4 {
          font-size: 0.95rem;
          color: #1a1a2e;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .popular-meta {
          display: flex;
          gap: 12px;
          font-size: 0.8rem;
          color: #888;
          margin-bottom: 10px;
        }

        .popular-progress {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .progress-bar {
          flex: 1;
          height: 4px;
          background: #f0f0f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .progress-label {
          font-size: 0.7rem;
          color: #888;
          font-weight: 500;
        }

        /* Categories Modern */
        .categories-section {
          margin-bottom: 40px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 14px;
        }

        .category-card-modern {
          background: white;
          border-radius: 14px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: all 0.3s ease;
          cursor: pointer;
          border-bottom: 4px solid transparent;
        }

        .category-card-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .category-icon-modern {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: white;
          flex-shrink: 0;
        }

        .category-info-modern {
          flex: 1;
        }

        .category-info-modern h3 {
          font-size: 0.9rem;
          color: #1a1a2e;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .category-info-modern p {
          font-size: 0.7rem;
          color: #888;
        }

        .category-arrow {
          color: #ccc;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .category-card-modern:hover .category-arrow {
          color: #667eea;
          transform: translateX(4px);
        }

        /* Features Banner */
        .features-banner {
          background: white;
          border-radius: 20px;
          padding: 35px 30px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 25px;
        }

        .feature-box {
          text-align: center;
          padding: 10px;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
          display: block;
        }

        .feature-box h4 {
          color: #1a1a2e;
          font-size: 1rem;
          margin-bottom: 5px;
        }

        .feature-box p {
          color: #888;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        /* Daily Affairs */
        .daily-affairs {
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 20px;
          padding: 30px 35px;
          margin-bottom: 40px;
          color: white;
        }

        .daily-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .daily-icon {
          font-size: 2.5rem;
        }

        .daily-header h2 {
          font-size: 1.5rem;
          margin-bottom: 2px;
        }

        .daily-header p {
          opacity: 0.7;
          font-size: 0.95rem;
        }

        .daily-btn {
          margin-left: auto;
          padding: 10px 25px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .daily-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }

        .daily-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 15px;
        }

        .daily-card {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 18px 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .daily-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        .daily-badge {
          display: inline-block;
          padding: 2px 12px;
          border-radius: 10px;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          background: #ffd700;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .daily-card h4 {
          font-size: 0.95rem;
          margin-bottom: 5px;
          color: white;
        }

        .daily-card p {
          font-size: 0.85rem;
          opacity: 0.7;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .daily-time {
          font-size: 0.75rem;
          opacity: 0.5;
        }

        /* Testimonials */
        .testimonials {
          margin-bottom: 20px;
        }

        .testimonials h2 {
          text-align: center;
          color: #1a1a2e;
          font-size: 1.8rem;
          margin-bottom: 25px;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .testimonial-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }

        .stars {
          color: #ffd700;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }

        .testimonial-card p {
          color: #444;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 15px;
          font-style: italic;
        }

        .student-info {
          border-top: 1px solid #f0f0f0;
          padding-top: 12px;
        }

        .student-name {
          display: block;
          font-weight: 700;
          color: #1a1a2e;
          font-size: 0.95rem;
        }

        .student-exam {
          font-size: 0.8rem;
          color: #667eea;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .header-content h1 {
            font-size: 2.5rem;
          }

          .header-stats {
            gap: 30px;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .header-section {
            padding: 40px 25px 35px;
          }

          .header-content h1 {
            font-size: 2rem;
          }

          .header-stats {
            gap: 15px;
          }

          .stat-number {
            font-size: 1.6rem;
          }

          .header-actions {
            flex-direction: column;
            align-items: center;
          }

          .search-container {
            flex-direction: column;
            align-items: stretch;
            padding: 15px;
          }

          .filter-group {
            flex-direction: column;
          }

          .filter-select {
            width: 100%;
          }

          .search-btn {
            width: 100%;
            padding: 14px;
          }

          .daily-header {
            flex-direction: column;
            text-align: center;
          }

          .daily-btn {
            margin-left: 0;
            width: 100%;
          }

          .popular-grid {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .header-content h1 {
            font-size: 1.6rem;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .trending-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr 1fr;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .daily-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
