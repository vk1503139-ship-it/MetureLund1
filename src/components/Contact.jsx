import React from 'react'; 
import { FaEnvelope, FaPhone, FaComments, FaLaughBeam, FaGrinTongueWink, FaFire } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-8 bg-gradient-to-br from-orange-50 to-pink-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-yellow-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 border-b-2 border-dotted border-pink-300 pb-3">
          🐹 Contact Hamaster - The Meme Masters!
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium">
          Got a hilarious meme idea? Need emergency funny content? Spotted a meme that made you LOL too hard? 
          Our meme support team is here 24/7 to handle all your funny business! 🎭
        </p>

        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-xl border border-orange-200">
          <p className="text-center font-bold text-lg text-purple-700">
            ⚡ Warning: Excessive laughter may occur when contacting us! ⚡
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ContactCard 
            icon={<FaLaughBeam size={28} className="mr-2 text-purple-600" />} 
            title="Meme Mail"
            items={[
              { label: 'General hilarity', value: 'funny@hamaster.com' },
              { label: 'Meme submissions', value: 'memes@hamaster.com' },
              { label: 'Dad jokes (emergency)', value: 'dadjokes@hamaster.com' }
            ]}
          />
          
          <ContactCard 
            icon={<FaGrinTongueWink size={28} className="mr-2 text-green-600" />} 
            title="Giggle Hotline"
            items={[
              { label: 'LOL Emergency', value: '1-800-LOL-MEMS' },
              { label: 'International ROFL', value: '+1-555-ROFL-NOW' },
              { label: 'Prank Calls (we love them!)', value: '1-888-PRANK-ME' }
            ]}
          />
          
          <ContactCard 
            icon={<FaComments size={28} className="mr-2 text-blue-600" />} 
            title="Instant Chuckles"
            description="Chat with our meme bots for instant laughs!"
            button="Start LOL Chat"
            link="https://chat.hamaster.com"
            emoji="🤖"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
          🎪 Send Us Your Funniest Message
        </h3>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block font-medium text-gray-800 flex items-center">
              Your Funny Name <span className="ml-2 text-sm text-gray-500">(Stage name accepted!)</span>
            </label>
            <input 
              type="text" 
              className="w-full bg-white border-2 border-purple-200 rounded-xl py-3 px-4 text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              placeholder="e.g., Sir Laughs-a-Lot"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-white border-2 border-pink-200 rounded-xl py-3 px-4 text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              placeholder="your.funny.email@lol.com"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-medium text-gray-800">Your LOL Level</label>
              <select className="w-full bg-white border-2 border-green-200 rounded-xl py-3 px-4 text-gray-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200">
                <option value="">How funny are you?</option>
                <option value="chuckle">Just a Chuckler 😄</option>
                <option value="lol">Full LOL-er 🤣</option>
                <option value="rofl">ROFL Master 🤪</option>
                <option value="dead">Dying of Laughter 💀</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-gray-800">Meme Type</label>
              <select className="w-full bg-white border-2 border-blue-200 rounded-xl py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                <option value="">What's your meme style?</option>
                <option value="dank">Dank Memes 🌿</option>
                <option value="wholesome">Wholesome ❤️</option>
                <option value="dark">Dark Humor 🌚</option>
                <option value="dad">Dad Jokes 👨</option>
                <option value="random">Random AF 🎲</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">Subject of Your Chuckle</label>
            <input 
              type="text" 
              className="w-full bg-white border-2 border-yellow-200 rounded-xl py-3 px-4 text-gray-800 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              placeholder="e.g., 'Help! I can't stop laughing at this meme!'"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium text-gray-800">
              Your Hilarious Message <span className="font-normal text-sm text-gray-500">(Emojis encouraged! 🚀)</span>
            </label>
            <textarea 
              rows="5"
              className="w-full bg-white border-2 border-orange-200 rounded-xl py-3 px-4 text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              placeholder="Describe the meme that broke your funny bone, share your joke, or just tell us what's cracking you up..."
            ></textarea>
          </div>

          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="terms" 
              className="mr-3 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
            />
            <label htmlFor="terms" className="text-gray-700">
              I promise my message is at least 70% funny (or I'll send a cookie 🍪)
            </label>
          </div>
          
          <button 
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-xl font-bold text-lg w-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🚀 Launch My Funny Message!
          </button>
        </form>

        <div className="mt-10 pt-6 border-t-2 border-dashed border-gray-300">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <FaFire className="mx-auto text-2xl text-orange-500 mb-2" />
              <p className="font-bold text-blue-700">🔥 Hot Meme Line</p>
              <p className="text-sm text-gray-600">Trending memes only!</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <span className="text-2xl mb-2 block">🦸</span>
              <p className="font-bold text-green-700">Meme Rescue Squad</p>
              <p className="text-sm text-gray-600">Bad day? We fix!</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
              <span className="text-2xl mb-2 block">😂</span>
              <p className="font-bold text-red-700">24/7 LOL Guarantee</p>
              <p className="text-sm text-gray-600">Or your smile back!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, items, description, button, link, emoji }) => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-lg md:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center">
        {icon} {title} {emoji && <span className="ml-2">{emoji}</span>}
      </h3>
      
      {items && (
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm font-medium">{item.label}:</p>
              <p className="text-purple-700 font-bold text-base">{item.value}</p>
            </div>
          ))}
        </div>
      )}
      
      {description && (
        <p className="text-gray-600 mb-4 p-2 bg-yellow-50 rounded-lg italic">{description}</p>
      )}
      
      {button && (
        link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-bold w-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            {button}
          </a>
        ) : (
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-bold w-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
            {button}
          </button>
        )
      )}
    </div>
  );
};

export default Contact;
