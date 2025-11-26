import React from 'react';
import { FaShieldAlt, FaRocket, FaUsers, FaAward, FaHandHoldingUsd, FaChartLine } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Secure & Trusted",
      description: "Your financial security is our top priority with bank-level encryption and protection."
    },
    {
      icon: <FaRocket className="text-3xl text-blue-600" />,
      title: "Quick Approval",
      description: "Get loan approvals within hours with our streamlined digital process."
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "Customer First",
      description: "24/7 customer support to guide you through every step of your loan journey."
    },
    {
      icon: <FaAward className="text-3xl text-blue-600" />,
      title: "Award Winning",
      description: "Recognized as one of India's most reliable financial service providers."
    }
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to make loans accessible" },
    { year: "2019", title: "10,000+ Customers", description: "Served over 10,000 happy customers" },
    { year: "2020", title: "Digital Transformation", description: "Launched fully digital loan process" },
    { year: "2023", title: "₹500Cr+ Disbursed", description: "Milestone of 500 crore rupees in loans" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      experience: "15+ years in Banking"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      experience: "12+ years in Finance"
    },
    {
      name: "Amit Patel",
      role: "Technology Director",
      experience: "10+ years in FinTech"
    },
    {
      name: "Sneha Reddy",
      role: "Customer Success",
      experience: "8+ years in Service"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Reliance Finance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering millions of Indians with accessible, transparent, and hassle-free personal loans
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl">
              "Our mission is to make India self-reliant by providing financial solutions that are simple, 
              secure, and designed to help you achieve your dreams."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaHandHoldingUsd className="text-2xl text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize access to personal finance by providing quick, transparent, and affordable 
                loan solutions to every Indian. We believe in breaking down financial barriers and creating 
                opportunities for growth and prosperity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaChartLine className="text-2xl text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become India's most trusted financial partner, empowering individuals and families 
                to achieve their aspirations through innovative lending solutions and exceptional 
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Reliance Finance?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're redefining the personal loan experience with technology, transparency, and trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">₹500Cr+</div>
              <div className="text-blue-200">Loan Disbursed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a small startup to one of India's fastest growing financial service providers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
              
              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 px-8">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                        <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                    <div className="w-1/2 px-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                <div className="text-gray-600 text-sm">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Your Dreams?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their lives with our personal loans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Apply for Loan
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;