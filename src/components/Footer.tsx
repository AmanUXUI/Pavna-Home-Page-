import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="relative bg-[#201a5b] text-gray-300 overflow-hidden z-20 mt-auto">
      {/* 1. CTA Part (Upper Footer) */}
      <div className="py-16 md:py-24 relative overflow-hidden border-b border-white/10">
        {/* Floating Ambient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/30 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-sky/20 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[8px] p-6 sm:p-10 md:p-16 lg:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden group">
            {/* Inner glow hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="w-full lg:w-6/12 text-center lg:text-left relative z-10">
              <div className="inline-flex items-center space-x-2 py-1.5 px-5 border border-brand-yellow/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-yellow mb-6 bg-[#201a5b]/50 shadow-md backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse"></span>
                <span>Admissions Open 2026-27</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Begin Your Journey <br />at <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange drop-shadow-lg">Pavna</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 font-medium mb-0 leading-relaxed max-w-md mx-auto lg:mx-0">
                Step into a world of limitless possibilities. Join a vibrant community of scholars, innovators, and future leaders today.
              </p>
            </div>

            <div className="w-full lg:w-5/12 flex flex-col space-y-5 relative z-10">
              {/* Apply Now Premium Card Button */}
              <a href="#" className="group/btn relative flex items-center justify-between bg-brand-orange text-white p-5 md:p-6 rounded-[8px] hover:bg-brand-darkOrange transition-all duration-300 shadow-glow transform hover:-translate-y-1 overflow-hidden border border-brand-orange/50 hover:border-white/20">
                <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover/btn:w-full"></div>
                <div className="flex flex-col text-left relative z-10">
                  <span className="text-sm md:text-base font-bold uppercase tracking-widest mb-1">Apply Now</span>
                  <span className="text-xs text-white/80 font-medium">Start your application process</span>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center relative z-10 group-hover/btn:bg-white group-hover/btn:text-brand-orange transition-colors duration-300 shadow-sm">
                  <i className="fas fa-arrow-right transform -rotate-45 group-hover/btn:rotate-0 group-hover/btn:-translate-y-1 transition-transform duration-300"></i>
                </div>
              </a>

              {/* Download Brochure Premium Card Button */}
              <a href="#" className="group/btn relative flex items-center justify-between bg-white/5 border border-white/10 text-white p-5 md:p-6 rounded-[8px] hover:border-brand-sky hover:bg-brand-sky/20 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md">
                <div className="flex flex-col text-left">
                  <span className="text-sm md:text-base font-bold uppercase tracking-widest mb-1">Download Brochure</span>
                  <span className="text-xs text-gray-400 font-medium group-hover/btn:text-brand-sky transition-colors">Explore our curriculum & campus</span>
                </div>
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-full flex items-center justify-center group-hover/btn:border-brand-sky group-hover/btn:bg-brand-sky group-hover/btn:text-white transition-colors duration-300">
                  <i className="fas fa-download transform group-hover/btn:-translate-y-1 transition-transform duration-300"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links & Info */}
      <div className="pt-16 md:pt-24 pb-10 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 banner-pattern opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16 border-b border-white/10 pb-16">
            
            {/* Column 1: Brand */}
            <div className="md:col-span-4 lg:col-span-4">
              <div className="mb-6 bg-white inline-block p-3.5 rounded-[4px] border border-white/10 shadow-lg">
                <img src="https://i.postimg.cc/v84rD5Yc/cropped-PS-INTERNATIONAL-1-1-scaled-1-2048x684.jpg" alt="Pavna School Logo" className="h-10 md:h-12 w-auto object-contain" />
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed font-medium text-[13px] pr-4">Empowering future leaders through holistic education, dynamic global curriculum, and unwavering core values.</p>
              
              {/* Campus Addresses & Contacts */}
              <div className="space-y-6 mb-8">
                {/* Sasni */}
                <div className="flex items-start space-x-3 text-gray-400 text-[12px]">
                  <i className="fas fa-map-marker-alt text-brand-orange mt-1 flex-shrink-0"></i>
                  <div className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Pavna International School, Sasni</strong>
                    Pavna International School, Aligarh–Agra Highway, Sasni, Hathras, Uttar Pradesh – 204216, India
                    <div className="mt-1 text-brand-sky font-bold flex items-center">
                      <i className="fas fa-phone-alt mr-2 text-[10px]"></i> +91 82669 54007
                    </div>
                  </div>
                </div>
                {/* Hathras */}
                <div className="flex items-start space-x-3 text-gray-400 text-[12px]">
                  <i className="fas fa-map-marker-alt text-brand-orange mt-1 flex-shrink-0"></i>
                  <div className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Pavna School, Hathras</strong>
                    8 Km Milestone on SH-33, Hathras–Mathura Road, Hathras – 204213 (U.P.), India
                    <div className="mt-1 text-brand-sky font-bold flex items-center">
                      <i className="fas fa-phone-alt mr-2 text-[10px]"></i> +91 8006409329
                    </div>
                  </div>
                </div>
                {/* Aligarh */}
                <div className="flex items-start space-x-3 text-gray-400 text-[12px]">
                  <i className="fas fa-map-marker-alt text-brand-orange mt-1 flex-shrink-0"></i>
                  <div className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Pavna School, Aligarh</strong>
                    Agra Highway, Near Gyan Mahavidyalaya, Aligarh – 202001, Uttar Pradesh, India
                    <div className="mt-1 text-brand-sky font-bold flex items-center">
                      <i className="fas fa-phone-alt mr-2 text-[10px]"></i> +91 8006409329
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-brand-yellow hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] group">
                Get Directions <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
            
            {/* Column 2: Quick Links */}
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="font-bold mb-8 uppercase tracking-widest text-[11px] text-white flex items-center">
                <span className="w-2 h-2 bg-brand-orange rounded-full mr-3 shadow-glow"></span> The School
              </h4>
              <ul className="space-y-4 text-[13px]">
                <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Leadership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Policies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Admissions */}
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="font-bold mb-8 uppercase tracking-widest text-[11px] text-white flex items-center">
                <span className="w-2 h-2 bg-brand-sky rounded-full mr-3 shadow-[0_0_10px_rgba(0,183,221,0.5)]"></span> Admissions
              </h4>
              <ul className="space-y-4 text-[13px]">
                <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Apply Now</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Fee Structure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Scholarships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Campus Tour</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> FAQs</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter & Social */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="font-bold mb-8 uppercase tracking-widest text-[11px] text-white flex items-center">
                <span className="w-2 h-2 bg-brand-yellow rounded-full mr-3 shadow-[0_0_10px_rgba(255,202,5,0.5)]"></span> Stay Connected
              </h4>
              <p className="text-gray-400 mb-5 text-[13px] leading-relaxed">Subscribe to our newsletter for the latest updates, event details, and school news.</p>
              
              <form className="relative mb-8 group" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your Email Address" className="w-full bg-white/5 border border-white/10 rounded-[4px] py-4 pl-6 pr-32 focus:outline-none focus:border-brand-orange text-white placeholder-gray-500 font-medium transition-all duration-300 focus:bg-white/10 shadow-inner" />
                <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-orange hover:bg-brand-darkOrange text-white rounded-[4px] px-6 transition-all duration-300 uppercase text-[10px] font-bold tracking-widest shadow-glow hover:shadow-lg transform group-hover:scale-[1.02]">Join</button>
              </form>

              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-youtube"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 font-medium text-[10px] uppercase tracking-widest">
            <p>&copy; 2026 Pavna School. All rights reserved.</p>
            <div className="space-x-5 mt-5 md:mt-0 flex items-center">
              <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-brand-yellow transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
