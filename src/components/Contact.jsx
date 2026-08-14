import React from 'react';

const Home = () => {
  // Mock test categories data
  const testCategories = [
    { id: 1, name: 'Bihar Daroga', icon: '👮', color: '#e74c3c', tests: 24 },
    { id: 2, name: 'Bihar Police', icon: '🚔', color: '#f39c12', tests: 18 },
    { id: 3, name: 'BPSC', icon: '📜', color: '#2ecc71', tests: 32 },
    { id: 4, name: 'UPSC', icon: '🇮🇳', color: '#3498db', tests: 45 },
    { id: 5, name: 'Group D', icon: '👥', color: '#9b59b6', tests: 15 },
    { id: 6, name: 'IBPS PO', icon: '🏦', color: '#1abc9c', tests: 28 },
    { id: 7, name: 'IBPS Clerk', icon: '📋', color: '#e67e22', tests: 22 },
    { id: 8, name: 'SSC GD', icon: '🛡️', color: '#e74c3c', tests: 20 },
    { id: 9, name: 'Bank PO', icon: '💰', color: '#2ecc71', tests: 26 },
    { id: 10, name: 'Current Affairs', icon: '📰', color: '#3498db', tests: 50 },
    { id: 11, name: 'Daily Current Affairs', icon: '📅', color: '#9b59b6', tests: 365 },
    { id: 12, name: 'Special Science', icon: '🔬', color: '#1abc9c', tests: 30 },
    { id: 13, name: 'Mathematics', icon: '📐', color: '#e67e22', tests: 35 },
    { id: 14, name: 'Social Science', icon: '🌍', color: '#f39c12', tests: 28 },
    { id: 15, name: 'English', icon: '📚', color: '#e74c3c', tests: 25 },
    { id: 16, name: 'General Knowledge', icon: '🧠', color: '#2ecc71', tests: 40 },
  ];

  // Featured tests
  const featuredTests = [
    { id: 101, title: 'BPSC Mains 2025 Mock Test-1', category: 'BPSC', questions: 120, time: '2 Hours', attempts: 3400 },
    { id: 102, title: 'UPSC Prelims GS Paper-1', category: 'UPSC', questions: 100, time: '2 Hours', attempts: 2800 },
    { id: 103, title: 'Bihar Daroga Practice Set-5', category: 'Bihar Daroga', questions: 80, time: '90 Min', attempts: 1900 },
    { id: 104, title: 'SSC GD Reasoning Special', category: 'SSC GD', questions: 50, time: '60 Min', attempts: 1500 },
  ];

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-content">
            <h1>🎯 Mock Test Hub</h1>
            <p>Your one-stop platform for all competitive exam preparation</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">16+</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">800+</span>
                <span className="stat-label">Mock Tests</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for mock tests, categories..." className="search-input" />
            <button className="search-btn">Search</button>
          </div>
        </div>

        {/* Featured Tests */}
        <div className="featured-section">
          <div className="section-header">
            <h2>⭐ Featured Mock Tests</h2>
            <a href="#" className="view-all">View All →</a>
          </div>
          <div className="featured-grid">
            {featuredTests.map((test) => (
              <div key={test.id} className="featured-card">
                <div className="featured-badge">{test.category}</div>
                <h3>{test.title}</h3>
                <div className="featured-meta">
                  <span>📝 {test.questions} Questions</span>
                  <span>⏱️ {test.time}</span>
                </div>
                <div className="featured-footer">
                  <span className="attempts">👥 {test.attempts.toLocaleString()} attempts</span>
                  <button className="start-btn">Start Test</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Categories */}
        <div className="categories-section">
          <div className="section-header">
            <h2>📚 All Mock Test Categories</h2>
            <span className="category-count">{testCategories.length} Categories</span>
          </div>

          <div className="categories-grid">
            {testCategories.map((category) => (
              <div key={category.id} className="category-card" style={{ borderColor: category.color }}>
                <div className="category-icon" style={{ backgroundColor: category.color }}>
                  {category.icon}
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.tests} Tests Available</p>
                </div>
                <button className="category-btn">Explore</button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="quick-access">
          <div className="quick-card">
            <span className="quick-icon">📝</span>
            <h3>Daily Current Affairs</h3>
            <p>Stay updated with daily news and current events</p>
            <button className="quick-btn">Read Now</button>
          </div>
          <div className="quick-card">
            <span className="quick-icon">🏆</span>
            <h3>Practice Tests</h3>
            <p>Attempt topic-wise practice tests</p>
            <button className="quick-btn">Start Practice</button>
          </div>
          <div className="quick-card">
            <span className="quick-icon">📊</span>
            <h3>Performance Analysis</h3>
            <p>Track your progress and improve</p>
            <button className="quick-btn">View Reports</button>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-section">
          <h2>Why Choose Mock Test Hub?</h2>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon">✅</span>
              <h4>Quality Content</h4>
              <p>Expert-curated questions based on latest exam patterns</p>
            </div>
            <div className="why-item">
              <span className="why-icon">⏰</span>
              <h4>Real Exam Experience</h4>
              <p>Timed tests with real exam interface and difficulty level</p>
            </div>
            <div className="why-item">
              <span className="why-icon">📈</span>
              <h4>Detailed Analysis</h4>
              <p>Get comprehensive performance reports and improvement tips</p>
            </div>
            <div className="why-item">
              <span className="why-icon">🔄</span>
              <h4>Unlimited Attempts</h4>
              <p>Practice as many times as you want to master the concepts</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-col">
              <h3>🎯 Mock Test Hub</h3>
              <p>Your trusted platform for competitive exam preparation. Join thousands of students and ace your exams.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">All Tests</a></li>
                <li><a href="#">Results</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Popular Categories</h4>
              <ul>
                <li><a href="#">BPSC</a></li>
                <li><a href="#">UPSC</a></li>
                <li><a href="#">Bihar Police</a></li>
                <li><a href="#">SSC GD</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Mock Test Hub. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-page {
          min-height: 100vh;
          background: #f0f2f5;
          font-family: 'Arial', sans-serif;
        }

        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 0 0 30px 30px;
          padding: 50px 40px;
          margin: 0 -20px 30px -20px;
          text-align: center;
          color: white;
        }

        .header-content h1 {
          font-size: 2.8rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .header-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 25px;
        }

        .header-stats {
          display: flex;
          justify-content: center;
          gap: 50px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #ffd700;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Search */
        .search-section {
          margin-bottom: 30px;
        }

        .search-container {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 50px;
          padding: 5px 5px 5px 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .search-icon {
          font-size: 1.2rem;
          margin-right: 10px;
        }

        .search-input {
          flex: 1;
          padding: 12px 0;
          border: none;
          outline: none;
          font-size: 1rem;
          background: transparent;
        }

        .search-btn {
          padding: 12px 30px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        /* Section Header */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-header h2 {
          color: #2c3e50;
          font-size: 1.6rem;
        }

        .view-all {
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .view-all:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        .category-count {
          background: #667eea;
          color: white;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        /* Featured */
        .featured-section {
          margin-bottom: 40px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .featured-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          position: relative;
        }

        .featured-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .featured-badge {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 2px 12px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .featured-card h3 {
          font-size: 1rem;
          color: #2c3e50;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .featured-meta {
          display: flex;
          gap: 15px;
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 12px;
        }

        .featured-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eee;
          padding-top: 12px;
        }

        .attempts {
          font-size: 0.8rem;
          color: #888;
        }

        .start-btn {
          padding: 6px 18px;
          background: linear-gradient(135deg, #2ecc71, #27ae60);
          color: white;
          border: none;
          border-radius: 20px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .start-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
        }

        /* Categories */
        .categories-section {
          margin-bottom: 40px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }

        .category-card {
          background: white;
          border-radius: 12px;
          padding: 18px;
          border-left: 4px solid #667eea;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        .category-icon {
          width: 45px;
          height: 45px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: white;
          flex-shrink: 0;
        }

        .category-info {
          flex: 1;
        }

        .category-info h3 {
          font-size: 0.95rem;
          color: #2c3e50;
          margin-bottom: 2px;
        }

        .category-info p {
          font-size: 0.75rem;
          color: #888;
        }

        .category-btn {
          padding: 4px 12px;
          background: #f0f2f5;
          border: none;
          border-radius: 15px;
          font-size: 0.7rem;
          color: #555;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover {
          background: #667eea;
          color: white;
        }

        /* Quick Access */
        .quick-access {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .quick-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .quick-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }

        .quick-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 10px;
        }

        .quick-card h3 {
          color: #2c3e50;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .quick-card p {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .quick-btn {
          padding: 8px 25px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quick-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        /* Why Section */
        .why-section {
          background: white;
          border-radius: 16px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .why-section h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 30px;
          font-size: 1.8rem;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 25px;
        }

        .why-item {
          text-align: center;
        }

        .why-icon {
          font-size: 2.2rem;
          display: block;
          margin-bottom: 10px;
        }

        .why-item h4 {
          color: #2c3e50;
          margin-bottom: 5px;
        }

        .why-item p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Footer */
        .footer-section {
          background: #1a1a2e;
          color: #ddd;
          border-radius: 16px 16px 0 0;
          padding: 40px 30px 20px;
          margin: 0 -20px -20px -20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .footer-col h3 {
          color: white;
          margin-bottom: 10px;
        }

        .footer-col h4 {
          color: white;
          margin-bottom: 10px;
        }

        .footer-col p {
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 6px;
        }

        .footer-col ul li a {
          color: #aaa;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .footer-col ul li a:hover {
          color: #667eea;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 20px;
          text-align: center;
          color: #777;
          font-size: 0.85rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-content h1 {
            font-size: 2rem;
          }

          .header-stats {
            gap: 20px;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .quick-access {
            grid-template-columns: 1fr;
          }

          .why-grid {
            grid-template-columns: 1fr 1fr;
          }

          .search-container {
            flex-wrap: wrap;
            border-radius: 16px;
            padding: 10px;
          }

          .search-input {
            width: 100%;
            padding: 10px 0;
          }

          .search-btn {
            width: 100%;
            border-radius: 25px;
            margin-top: 5px;
          }
        }

        @media (max-width: 480px) {
          .header-section {
            padding: 30px 20px;
          }

          .header-content h1 {
            font-size: 1.6rem;
          }

          .categories-grid {
            grid-template-columns: 1fr 1fr;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
