import { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-12 border-b border-black/5",
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-4"
      )}
      id="navbar"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img 
            src="https://i.postimg.cc/v84rD5Yc/cropped-PS-INTERNATIONAL-1-1-scaled-1-2048x684.jpg" 
            alt="Pavna School Logo" 
            className="h-10 md:h-14 w-auto object-contain cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7 h-full">
          {CONTENT.navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.name) : setActiveDropdown(null)}
            >
              <a 
                href={link.href}
                className={cn(
                  "flex items-center gap-1 transition-all",
                  link.name === "Apply Online"
                    ? "bg-brand-orange text-white hover:bg-brand-dark-orange py-2 px-5 rounded-[4px] font-bold text-[13px] hover:shadow-md"
                    : link.name === "Pay Fees Online"
                      ? "border border-brand-orange text-brand-orange hover:bg-brand-orange/5 py-[7px] px-5 rounded-[4px] font-bold text-[13px]"
                      : cn(
                          "text-[12px] font-bold transition-colors py-4",
                          activeDropdown === link.name ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                        )
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={12} className={cn("transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />}
              </a>

              {/* Desktop Dropdown Content */}
              <AnimatePresence>
                {activeDropdown === link.name && link.hasDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-white border border-black/5 shadow-2xl hidden lg:block rounded-2xl overflow-hidden mt-0"
                    style={{ 
                      width: 'max-content',
                      minWidth: link.groups && link.groups.length > 1 ? '500px' : '280px'
                    }}
                  >
                    <div className="flex items-stretch">
                      <div className="p-6 flex-1" style={{ minWidth: link.groups && link.groups.length > 1 ? '340px' : '220px' }}>
                        <div className="grid gap-6" style={{ gridTemplateColumns: link.groups && link.groups.length > 1 ? '1fr 1fr' : '1fr' }}>
                          {link.groups?.map((group) => (
                            <div key={group.title} className="flex flex-col gap-3">
                              <h5 className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-orange">
                                {group.title}
                              </h5>
                              <div className="flex flex-col gap-1">
                                {group.items.map((item) => (
                                  <a 
                                    key={item.name} 
                                    href={item.href} 
                                    className="text-brand-navy hover:text-brand-orange text-[13px] font-medium transition-colors py-1.5 px-2 rounded-lg hover:bg-gray-50 flex items-center justify-between group/link"
                                  >
                                    {item.name}
                                    <div className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Button removed */}

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-brand-navy" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>



      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-brand-black border-t border-gray-100 shadow-xl p-6 lg:hidden max-h-[80vh] overflow-y-auto">
          {CONTENT.navLinks.map((link) => {
            if (link.name === "Apply Online") {
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-3 rounded-[4px] font-bold text-center mt-4 text-sm shadow-sm"
                >
                  {link.name}
                </a>
              );
            }
            if (link.name === "Pay Fees Online") {
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 border border-brand-orange text-brand-orange px-5 py-2.5 rounded-[4px] font-bold text-center mt-2.5 text-sm"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <div key={link.name} className="flex flex-col">
                <button 
                  className={cn(
                    "flex items-center justify-between text-lg font-medium py-3 text-left w-full",
                    "text-brand-navy hover:text-brand-orange"
                  )}
                  onClick={() => {
                    if (link.hasDropdown) {
                      setActiveDropdown(activeDropdown === link.name ? null : link.name);
                    } else {
                      window.location.hash = link.href.replace('#', '');
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={20} className={cn("transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />}
                </button>
                
                {link.hasDropdown && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="pl-4 flex flex-col gap-3 border-l-2 border-brand-orange/20 mb-2 mt-1"
                  >
                    {link.groups?.map(group => (
                      <div key={group.title} className="flex flex-col gap-1.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-brand-orange/70">
                          {group.title}
                        </p>
                        {group.items.map(item => (
                          <a 
                            key={item.name} 
                            href={item.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 text-brand-navy/80 text-sm hover:text-brand-orange block"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
