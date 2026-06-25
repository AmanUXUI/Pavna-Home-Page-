import { FC } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  Activity, 
  Compass, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  ArrowRight, 
  Building, 
  Palette, 
  Music, 
  Trophy, 
  Layers,
  PhoneCall,
  Calendar,
  HelpCircle,
  GraduationCap
} from 'lucide-react';

const CampusLife: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="https://i.postimg.cc/sDX0mLp4/DSC05807-JPG.jpg" 
            alt="Campus Life Background" 
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>
        
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <span className="hover:text-brand-orange transition-colors cursor-pointer" onClick={() => window.location.hash = ''}>Home</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Campus Life</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Campus Life
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              A campus designed to inspire learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Campus Environment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-brand-orange"></div>
                <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  A CAMPUS DESIGNED TO INSPIRE LEARNING
                </span>
                <div className="w-12 h-[2px] bg-brand-orange"></div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                Campus Environment
              </h2>
              
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
                Spread across a beautifully planned campus, Pavna International School offers a safe, vibrant, and stimulating environment where students love to learn and grow. Surrounded by lush green landscapes, modern architecture, and thoughtfully designed learning spaces, our campus promotes academic excellence, creativity, well-being, and meaningful experiences every day.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-100 group">
                <img 
                  src="https://i.postimg.cc/sDX0mLp4/DSC05807-JPG.jpg" 
                  alt="Campus Environment" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Academic Infrastructure & Administration Block */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Academic Infrastructure */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-brand-orange"></div>
                  <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    EXPLORE OUR WORLD-CLASS ACADEMIC INFRASTRUCTURE
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange"></div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                  Academic Infrastructure
                </h2>
                
                <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                  Step into an inspiring learning environment designed to nurture curiosity, creativity, and academic excellence. At Pavna International School, our modern classrooms, advanced laboratories, collaborative learning spaces, and technology-enabled facilities create the perfect setting for students to thrive. Every corner of our academic infrastructure is thoughtfully designed to support innovation, critical thinking, and future-ready education.
                </p>
              </div>

              {/* Exact extracted list of items from the text, displayed visually in a grid of 2x2 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Modern Classrooms", icon: BookOpen },
                  { name: "Advanced Laboratories", icon: Layers },
                  { name: "Collaborative Learning Spaces", icon: Users },
                  { name: "Technology-Enabled Facilities", icon: Sparkles }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 bg-white py-4 px-5 rounded-xl border border-neutral-200/50 shadow-sm transition-all duration-300 hover:border-brand-orange hover:shadow-md"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                        <IconComp size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-brand-navy leading-tight">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Administration Block */}
            <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/60 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-brand-orange"></div>
                  <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    THE HEART OF CAMPUS OPERATIONS
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange"></div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                  Administration Block
                </h3>

                <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                  Experience the efficient administrative hub that ensures the smooth functioning of Pavna International School. From student support and academic coordination to parent communication and campus management, our dedicated administration team works tirelessly to provide a safe, organized, and enriching educational experience for every learner.
                </p>
              </div>

              {/* Exact extracted areas from the text */}
              <div className="border-t border-neutral-100 pt-6 grid grid-cols-2 gap-4">
                {[
                  { name: "Student Support", icon: Heart },
                  { name: "Academic Coordination", icon: GraduationCap },
                  { name: "Parent Communication", icon: PhoneCall },
                  { name: "Campus Management", icon: Building }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 text-[14px] text-brand-navy font-bold">
                      <IconComp size={16} className="text-brand-orange shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Sports Facilities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-orange"></div>
              <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                OLYMPIC-STANDARD SPORTS FACILITIES FOR HOLISTIC DEVELOPMENT
              </span>
              <div className="w-12 h-[2px] bg-brand-orange"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
              Sports Facilities
            </h2>
            
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              At Pavna International School, sports are an essential part of every student's growth journey. Our world-class sports infrastructure includes over 10 Olympic-standard facilities, encouraging students to develop discipline, teamwork, leadership, and resilience. From horse riding and swimming to basketball, cricket, lawn tennis, handball, and more, every child is empowered to discover their athletic potential.
            </p>
          </div>

          {/* Exact sports listed in the text, shown as highly-styled interactive list badges with icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: "Horse Riding", icon: Trophy },
              { name: "Swimming", icon: Activity },
              { name: "Basketball", icon: Sparkles },
              { name: "Cricket", icon: Award },
              { name: "Lawn Tennis", icon: Compass },
              { name: "Handball", icon: Users }
            ].map((sport, i) => {
              const IconComp = sport.icon;
              return (
                <motion.div
                  key={sport.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-[#FAF9F6] p-4 rounded-xl border border-neutral-100 flex flex-col items-center justify-center text-center group hover:border-brand-orange hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-orange/5 text-brand-orange flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                    <IconComp size={18} />
                  </div>
                  <span className="text-[14px] font-bold text-brand-navy">{sport.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Co-Curricular Activities (ECA) Section */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-orange"></div>
              <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                LEARNING BEYOND THE CLASSROOM
              </span>
              <div className="w-12 h-[2px] bg-brand-orange"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
              Co-Curricular Activities (ECA)
            </h2>
            
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Education at Pavna International School extends far beyond academics. Our diverse co-curricular programmes inspire students to explore their passions, build confidence, and develop essential life skills. Through music, dance, performing arts, visual arts, clubs, leadership programmes, sports, and creative activities, students enjoy a well-rounded educational experience that nurtures every aspect of their personality.
            </p>
          </div>

          {/* Exact activities mentioned in the text listed in a visual grid of badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Music", icon: Music },
              { name: "Dance", icon: Activity },
              { name: "Performing Arts", icon: Layers },
              { name: "Visual Arts", icon: Palette },
              { name: "Clubs", icon: Compass },
              { name: "Leadership Programmes", icon: Trophy },
              { name: "Sports", icon: Award },
              { name: "Creative Activities", icon: Sparkles }
            ].map((act, i) => {
              const IconComp = act.icon;
              return (
                <motion.div
                  key={act.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-white p-4 rounded-xl border border-neutral-100/80 flex items-center gap-3 hover:border-brand-orange hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                    <IconComp size={16} />
                  </div>
                  <span className="text-[14px] font-bold text-brand-navy leading-tight">{act.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls conforming with other academic/program pages */}
          <div className="mt-20 border-t border-neutral-200/60 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Previous button - Early Years */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <a 
                  href="#early-years"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  &larr; Early Years (Age 3 To 5)
                </a>
              </div>

              {/* Center Home button */}
              <button 
                onClick={() => window.location.hash = ''} 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
              >
                Return to Homepage
                <ArrowRight size={15} />
              </button>

              {/* Next button */}
              <div className="w-full sm:w-auto text-right order-3">
                <a 
                  href="#boarding"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  Boarding &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CampusLife;
