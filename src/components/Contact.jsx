import React from 'react'; 
import { FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-600 border-b border-gray-300 pb-3">
          Contact Us
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Have questions or need assistance with your loan? Our support team is here to help you with any queries about personal loans, EMI calculations, or application processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ContactCard 
            icon={<FaEnvelope size={24} className="mr-2" />} 
            title="Email Support"
            items={[
              { label: 'General inquiries', value: 'support@reliancefin.co.in' },
              { label: 'Loan applications', value: 'loans@reliancefin.co.in' }
            ]}
          />
          
          <ContactCard 
            icon={<FaPhone size={24} className="mr-2" />} 
            title="Phone Support"
            items={[
              { label: 'Toll-Free', value: '1800-123-4567' },
              { label: 'Customer Care', value: '+91 9876543210' }
            ]}
          />
          
          <ContactCard 
            icon={<FaComments size={24} className="mr-2" />} 
            title="Live Chat"
            description="Available 24/7 for instant loan support"
            button="Start Live Chat"
            link="https://wa.me/919876543210"  // WhatsApp link for Reliance Finance
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-600">
          Send Us a Message
        </h3>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Your Name</label>
            <input 
              type="text" 
              className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Enter your email address"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Phone Number</label>
            <input 
              type="tel" 
              className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Loan Amount Required</label>
            <select className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
              <option value="">Select loan amount</option>
              <option value="50000">₹50,000</option>
              <option value="100000">₹1,00,000</option>
              <option value="200000">₹2,00,000</option>
              <option value="500000">₹5,00,000</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Subject</label>
            <input 
              type="text" 
              className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Enter subject of your query"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Message</label>
            <textarea 
              rows="5"
              className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Please describe your loan requirements or any questions you have..."
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-8 rounded-lg font-bold text-lg w-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, items, description, button, link }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-600 flex items-center">
        {icon} {title}
      </h3>
      
      {items && (
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index}>
              <p className="text-gray-600 text-sm">{item.label}:</p>
              <p className="text-blue-700 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      )}
      
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      
      {button && (
        link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-lg font-medium w-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
          >
            {button}
          </a>
        ) : (
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-lg font-medium w-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
            {button}
          </button>
        )
      )}
    </div>
  );
};

export default Contact;