import { motion } from 'motion/react';
import { Award, Brain, BookOpen, Globe } from 'lucide-react';

const ADVANTAGES = [
  {
    title: "Globally Recognized Qualification",
    desc: "Accepted by leading universities and institutions worldwide.",
    icon: Award
  },
  {
    title: "Develops Critical Thinking",
    desc: "Encourages analysis, problem-solving, and independent learning.",
    icon: Brain
  },
  {
    title: "Broad Subject Choices",
    desc: "Offers a wide range of subjects to match different interests and strengths.",
    icon: BookOpen
  },
  {
    title: "International Perspective",
    desc: "Promotes global awareness, cultural understanding, and responsible citizenship.",
    icon: Globe
  }
];

export default function CambridgeSection() {
  return (
    <section id="cambridge-education" className="py-20 md:py-28 bg-white px-6 sm:px-8 md:px-16 overflow-hidden font-gill text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Level: Header Title Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-start mb-16 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-12 h-[2px] bg-brand-orange"></div>
              <span className="text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange">GLOBAL STANDARD</span>
              <div className="w-12 h-[2px] bg-brand-orange"></div>
            </div>
            
            <h2 className="text-[28px] sm:text-[36px] md:text-[46px] leading-[34px] sm:leading-[44px] md:leading-[52px] tracking-[-1.2px] font-bold text-brand-navy font-serif text-center lg:text-left">
              Cambridge International <span className="text-brand-orange">Education</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-[16px] text-[#4B5563] leading-[24px] font-medium lg:pl-6 lg:border-l-2 lg:border-gray-100 font-gill max-w-2xl mb-0 lg:mb-12 text-center lg:text-left mx-auto lg:mx-0">
              At Pavna International School, we deliver a world-class Cambridge International Education that inspires curiosity, critical thinking, creativity, and academic excellence. Through globally benchmarked learning experiences, students develop the confidence, knowledge, and future-ready skills needed to thrive in an ever-evolving world.
            </p>
          </motion.div>
        </div>

        {/* Lower Level: Why Cambridge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-8">
          
          {/* Why Cambridge - Side Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col justify-between bg-neutral-50/50 hover:bg-neutral-50 rounded-2xl p-8 border border-neutral-100 transition-all duration-500 relative overflow-hidden group shadow-sm"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition-colors duration-500" />
            
            <div className="relative z-10 mb-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-orange bg-brand-orange/5 px-4 py-1.5 rounded-full inline-block mb-5 border border-brand-orange/10">
                Curriculum Insight
              </span>
              <h3 className="text-3xl font-serif font-bold text-brand-navy mb-4 leading-tight">
                Why Cambridge?
              </h3>
              <p className="text-[16px] text-neutral-600 leading-[24px] font-medium font-gill">
                The Cambridge curriculum helps students build a strong academic foundation while preparing them for future success through globally recognized learning standards.
              </p>
            </div>

            {/* Cambridge Curriculum Image */}
            <div className="relative z-10 rounded-xl overflow-hidden aspect-[16/10] shadow-md border-2 border-white bg-white">
              <img 
                src="https://i.postimg.cc/QdLnrStr/Cooking-Classes.jpg" 
                alt="Cambridge Curriculum" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

          </motion.div>

          {/* Core Advantages List */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ADVANTAGES.map((item, index) => {
              const IconComponent = item.icon;
              const formattedIndex = String(index + 1).padStart(2, '0');
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5, borderColor: '#f48120' }}
                  className="relative flex flex-col justify-between p-8 rounded-2xl border border-neutral-100/80 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
                >
                  {/* Floating Number Accent */}
                  <span className="absolute top-6 right-8 text-[32px] font-serif font-bold text-neutral-50 group-hover:text-brand-orange/5 transition-colors duration-500 select-none">
                    {formattedIndex}
                  </span>

                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-6 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white">
                      <IconComponent size={20} className="stroke-[1.75]" />
                    </div>

                    <h4 className="text-[17px] font-bold text-brand-navy mb-3">
                      {item.title}
                    </h4>
                    
                    <p className="text-[16px] text-neutral-600 leading-[24px] font-medium font-gill">
                      {item.desc}
                    </p>
                  </div>

                  {/* Aesthetic bottom bar transition */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
