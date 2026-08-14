import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1>📞 Contact Us</h1>
          <p>We're here to help you 24×7</p>
        </div>

        {/* Main Contact Card */}
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p className="sub-text">Our support team is available around the clock to assist you with any issues.</p>

          {/* WhatsApp Support */}
          <div className="contact-section whatsapp-section">
            <h3>💬 WhatsApp Live Chat Support</h3>
            <p className="availability">Available 24×7</p>
            
            <div className="contact-item">
              <span className="icon">📱</span>
              <div className="contact-details">
                <span className="label">Primary Contact:</span>
                <a 
                  href="https://wa.me/917520655059" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  +91 7520655059
                </a>
                <span className="badge">Click to Chat</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📱</span>
              <div className="contact-details">
                <span className="label">Alternate Contact:</span>
                <a 
                  href="https://wa.me/918510027016" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  +91 8510027016
                </a>
                <span className="badge">Click to Chat</span>
              </div>
            </div>
          </div>

          {/* Email Support */}
          <div className="contact-section email-section">
            <h3>📧 Email Support</h3>
            
            <div className="contact-item">
              <span className="icon">📧</span>
              <div className="contact-details">
                <span className="label">Email 1:</span>
                <a href="mailto:support1@ludogame.com" className="email-link">
                  support1@ludogame.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📧</span>
              <div className="contact-details">
                <span className="label">Email 2:</span>
                <a href="mailto:support2@ludogame.com" className="email-link">
                  support2@ludogame.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Response Info */}
          <div className="quick-response">
            <div className="response-time">
              <span className="response-icon">⚡</span>
              <div>
                <h4>Quick Response</h4>
                <p>Average response time: &lt; 2 minutes on WhatsApp</p>
              </div>
            </div>
            <div className="response-time">
              <span className="response-icon">🕐</span>
              <div>
                <h4>24×7 Support</h4>
                <p>We're available all day, every day</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>❓ How do I contact support?</h4>
            <p>Simply click on any WhatsApp number above to start a live chat instantly.</p>
          </div>
          <div className="faq-item">
            <h4>❓ Is the support really 24×7?</h4>
            <p>Yes! Our support team is available 24 hours a day, 7 days a week.</p>
          </div>
          <div className="faq-item">
            <h4>❓ How quickly will I get a response?</h4>
            <p>We typically respond within 2 minutes on WhatsApp.</p>
          </div>
        </div>

        {/* Back Button */}
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back to Game
        </button>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 20px;
          font-family: 'Arial', sans-serif;
        }

        .contact-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          color: white;
          margin-bottom: 30px;
        }

        .contact-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .contact-header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .contact-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          margin-bottom: 20px;
        }

        .contact-card h2 {
          color: #2c3e50;
          font-size: 1.8rem;
          margin-bottom: 5px;
        }

        .sub-text {
          color: #666;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        .contact-section {
          margin-bottom: 25px;
          padding: 20px;
          border-radius: 10px;
          background: #f8f9fa;
        }

        .whatsapp-section {
          border-left: 4px solid #25D366;
        }

        .email-section {
          border-left: 4px solid #667eea;
        }

        .contact-section h3 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.2rem;
        }

        .availability {
          color: #25D366;
          font-weight: bold;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          padding: 12px;
          background: white;
          border-radius: 8px;
          margin-bottom: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .icon {
          font-size: 1.5rem;
          margin-right: 15px;
          min-width: 40px;
        }

        .contact-details {
          flex: 1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .label {
          font-weight: bold;
          color: #555;
          font-size: 0.9rem;
          min-width: 120px;
        }

        .whatsapp-link {
          color: #25D366;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          padding: 5px 10px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .whatsapp-link:hover {
          background: #25D366;
          color: white;
          text-decoration: none;
        }

        .email-link {
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          padding: 5px 10px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .email-link:hover {
          background: #667eea;
          color: white;
          text-decoration: none;
        }

        .badge {
          background: #25D366;
          color: white;
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: bold;
          margin-left: 5px;
        }

        .quick-response {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 20px;
        }

        .response-time {
          display: flex;
          align-items: center;
          padding: 15px;
          background: #f0f4ff;
          border-radius: 8px;
          gap: 12px;
        }

        .response-icon {
          font-size: 1.8rem;
        }

        .response-time h4 {
          color: #2c3e50;
          font-size: 1rem;
          margin-bottom: 2px;
        }

        .response-time p {
          color: #666;
          font-size: 0.85rem;
          margin: 0;
        }

        .faq-section {
          background: white;
          border-radius: 15px;
          padding: 25px 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          margin-bottom: 20px;
        }

        .faq-section h3 {
          color: #2c3e50;
          font-size: 1.4rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .faq-item {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-item h4 {
          color: #2c3e50;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .faq-item p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .back-button {
          display: block;
          width: 100%;
          padding: 15px;
          background: white;
          color: #667eea;
          border: 2px solid white;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .back-button:hover {
          background: transparent;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 600px) {
          .contact-card {
            padding: 20px;
          }

          .contact-header h1 {
            font-size: 2rem;
          }

          .contact-details {
            flex-direction: column;
            align-items: flex-start;
          }

          .label {
            min-width: auto;
          }

          .quick-response {
            grid-template-columns: 1fr;
          }

          .contact-item {
            flex-wrap: wrap;
          }

          .badge {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact
