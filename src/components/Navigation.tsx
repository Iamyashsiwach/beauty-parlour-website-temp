import { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Book Now', href: 'booking' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-serif text-rose-600">Elegance</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-rose-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-600">
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-rose-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-600 hover:text-rose-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;