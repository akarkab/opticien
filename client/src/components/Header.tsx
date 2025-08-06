import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-6 h-6 bg-mint-400 rounded-full opacity-90"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl text-navy-900">
                MouradOptic
              </span>
              <span className="text-xs text-gray-600 font-lato">
                Cabinet d'optique
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-navy-900 font-medium transition-colors duration-200 relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/produits"
              className="text-gray-700 hover:text-navy-900 font-medium transition-colors duration-200 relative group"
            >
              Produits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-navy-900 font-medium transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/a-propos"
              className="text-gray-700 hover:text-navy-900 font-medium transition-colors duration-200 relative group"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-navy-900 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+212661347432"
              className="flex items-center space-x-2 text-gray-600 hover:text-navy-900 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+212 661 347 432</span>
            </a>
            <Link to="/rendez-vous">
              <Button className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Calendar className="w-4 h-4 mr-2" />
                Rendez-vous
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/produits"
                className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/a-propos"
                className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <a
                  href="tel:+212661347432"
                  className="flex items-center space-x-2 text-gray-600 hover:text-navy-900 py-2 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+212 661 347 432</span>
                </a>
                <Link to="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Prendre rendez-vous
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
