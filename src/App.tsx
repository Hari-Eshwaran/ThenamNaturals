import React, { useState } from 'react';
import { Mail, Phone, MapPin, Leaf, Home, ShoppingBasket, Heart } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF6EC] via-[#FDF6EC] to-[#F4C842]/20">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#F4C842]/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#DD8142]/15 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#5C4328] rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#F4C842]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#5C4328]" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Thenam Naturals
                </h1>
                <p className="text-xs text-[#A99E8B]">தேனம் இயற்கை</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 text-sm text-[#5C4328]">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>9344786408</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>mail@harishwaran.tech</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-[#F4C842]/20 rounded-full blur-xl"></div>
            <h2 className="relative text-6xl md:text-8xl font-bold text-[#5C4328] mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
              Coming Soon
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-[#5C4328] mb-6 leading-relaxed">
              Pure. Natural. Authentic.
            </p>
            <p className="text-lg text-[#A99E8B] leading-relaxed">
              Discover the finest natural products sourced directly from village farms. 
              Thenam Naturals brings you the essence of traditional purity in every product.
            </p>
            <p className="text-base text-[#A99E8B] mt-4" style={{fontFamily: 'Noto Sans Tamil, sans-serif'}}>
              இயற்கையின் தூய்மையை உங்கள் வீட்டிற்கு கொண்டு வருகிறோம்
            </p>
          </div>

          {/* Decorative Icons */}
          <div className="flex justify-center items-center space-x-8 mb-16">
            {[
              { icon: Home, label: "Village Fresh" },
              { icon: Leaf, label: "100% Natural" },
              { icon: ShoppingBasket, label: "Farm Direct" },
              { icon: Heart, label: "Made with Love" }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-[#DD8142] group-hover:text-[#5C4328] transition-colors duration-300" />
                </div>
                <p className="text-xs text-[#A99E8B] mt-2 group-hover:text-[#5C4328] transition-colors duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-[#5C4328] mb-4">
              Get notified when we launch
            </h3>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-2 border-[#DD8142]/30 focus:border-[#DD8142] focus:outline-none bg-white/80 backdrop-blur-sm text-[#5C4328] placeholder-[#A99E8B]"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#DD8142] hover:bg-[#5C4328] text-white rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Notify Me
              </button>
            </form>
            {isSubscribed && (
              <p className="text-[#DD8142] mt-3 font-medium animate-pulse">
                Thank you! We'll notify you when we launch. 🌿
              </p>
            )}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#5C4328] mb-4">Meet Our Team</h3>
            <p className="text-[#A99E8B]">Passionate about bringing nature's best to you</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4C842] to-[#DD8142] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl font-bold text-white">H</span>
              </div>
              <h4 className="text-xl font-semibold text-[#5C4328] mb-2">Harishwaran P</h4>
              <p className="text-[#DD8142] font-medium mb-2">Owner</p>
              <p className="text-sm text-[#A99E8B]">Leading the vision for pure, natural products</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#5C4328] to-[#A99E8B] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl font-bold text-white">J</span>
              </div>
              <h4 className="text-xl font-semibold text-[#5C4328] mb-2">Jayamurugan V</h4>
              <p className="text-[#DD8142] font-medium mb-2">Founder</p>
              <p className="text-sm text-[#A99E8B]">Pioneering authentic village-sourced products</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12">
        <div className="bg-[#5C4328] rounded-3xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#F4C842] rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-[#5C4328]" />
            </div>
          </div>
          
          <h4 className="text-2xl font-bold text-white mb-6">Stay Connected</h4>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-[#FDF6EC]">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#F4C842]" />
              <span className="font-medium">9344786408</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#A99E8B]"></div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#F4C842]" />
              <span className="font-medium">mail@harishwaran.tech</span>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-[#A99E8B]/30">
            <p className="text-[#A99E8B] text-sm">
              © 2025 Thenam Naturals. Bringing nature's purity to your doorstep.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-[#F4C842]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 bg-[#DD8142]/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#5C4328]/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-[#F4C842]/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}

export default App;