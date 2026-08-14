import React from 'react';
import { 
  FaGraduationCap, 
  FaBookOpen, 
  FaUsers, 
  FaAward, 
  FaClock, 
  FaChartBar,
  FaCheckCircle,
  FaUserGraduate,
  FaTrophy,
  FaLaptopCode,
  FaBrain,
  FaCalendarAlt
} from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-3xl text-indigo-600" />,
      title: "Comprehensive Test Series",
      description: "Access mock tests for Bihar Daroga, Bihar Police, Group D, GD, 10th & 12th BSEB Board, and Daily Current Affairs."
    },
    {
      icon: <FaBrain className="text-3xl text-indigo-600" />,
      title: "Real Exam Simulation",
      description: "Experience actual exam pattern with time-bound tests, real difficulty levels, and authentic question patterns."
    },
    {
      icon: <FaClock className="text-3xl text-indigo-600" />,
      title: "24/7 Access",
      description: "Practice anytime, anywhere with our platform. Take mock tests at your convenience, 24 hours a day."
    },
    {
      icon: <FaChartBar className="text-3xl text-indigo-600" />,
      title: "Detailed Performance Analysis",
      description: "Get comprehensive insights with subject-wise analysis, progress tracking, and comparison with toppers."
    }
  ];

  const exams = [
    {
      name: "Bihar Daroga",
      icon: <FaGraduationCap className="text-4xl text-indigo-600" />,
      tests: "50+ Mock Tests",
      students: "25,000+ Students",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Bihar Police",
      icon: <FaUserGraduate className="text-4xl text-indigo-600" />,
      tests: "40+ Mock Tests",
      students: "30,000+ Students",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Group D",
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      tests: "35+ Mock Tests",
      students: "20,000+ Students",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "GD (General Duty)",
      icon: <FaTrophy className="text-4xl text-indigo-600" />,
      tests: "30+ Mock Tests",
      students: "18,000+ Students",
      color: "from-red-500 to-pink-600"
    },
    {
      name: "10th BSEB Board",
      icon: <FaBookOpen className="text-4xl text-indigo-600" />,
      tests: "45+ Mock Tests",
      students: "35,000+ Students",
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "12th BSEB Board",
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
      tests: "45+ Mock Tests",
      students: "28,000+ Students",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Daily Current Affairs",
      icon: <FaCalendarAlt className="text-4xl text-indigo-600" />,
      tests: "365+ Quizzes",
      students: "40,000+ Students",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Active Students" },
    { number: "250+", label: "Mock Tests Available" },
    { number: "98%", label: "Success Rate" },
    { number: "7+", label: "Exam Categories" }
  ];

  const testimonials = [
    {
      name: "Amit Kumar",
      exam: "Bihar Daroga 2023",
      quote: "The mock tests were incredibly helpful. The questions were very close to the actual exam pattern. I cleared my exam in first attempt!",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Priya Singh",
      exam: "BSEB 12th Board 2024",
      quote: "I practiced daily on this platform. The detailed solutions and analysis helped me identify my weak areas and improve significantly.",
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Rahul Sharma",
      exam: "Bihar Police 2023",
      quote: "The time management feature was a game-changer. I could simulate real exam conditions and build confidence for the main exam.",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Mock Test Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            India's most trusted platform for competitive exam preparation in Bihar - Your Gateway to Success
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl">
              "Empowering students with high-quality mock tests, comprehensive study materials, and 
              expert guidance to crack Bihar's most competitive examinations."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaGraduationCap className="text-2xl text-indigo-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide accessible, high-quality, and affordable mock test preparation to every 
                student in Bihar. We aim to level the playing field and ensure that every aspirant 
                gets the best chance to succeed in competitive examinations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaTrophy className="text-2xl text-indigo-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the preferred mock test platform for students across Bihar, known for our 
                quality content, innovative features, and proven track record of producing successful 
                candidates in every competitive exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality mock tests, comprehensive analysis, and expert guidance - all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-indigo-300 hover:scale-105"
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {achievements.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Exam Categories
          </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive preparation for all major competitive exams in Bihar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {exams.map((exam, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${exam.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <div className="mb-4">
                  {exam.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{exam.name}</h3>
                <div className="flex justify-between text-sm opacity-90">
                  <span>{exam.tests}</span>
                  <span>{exam.students}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from students who achieved their dreams with our mock tests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-indigo-600">{testimonial.exam}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaCheckCircle key={i} className="text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Practice with Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Practice with Us?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Latest exam pattern and updated syllabus</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Detailed solutions with step-by-step explanations</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Performance tracking and progress reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Expert tips and strategies for each exam</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Previous year question papers and practice sets</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6">
                Join 50,000+ students who are already preparing for their dream exams with us.
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-full">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Exam Preparation Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access the best mock tests in Bihar and take the first step towards your dream career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Explore Tests
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
              View All Exams
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
