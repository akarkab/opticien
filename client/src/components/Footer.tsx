import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-mint-400 to-mint-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl">
                  MouradOptic
                </span>
                <span className="text-xs text-gray-400 font-lato">
                  Cabinet d'optique
                </span>
              </div>
            </div>
            <p className="text-gray-300 font-lato leading-relaxed">
              Votre vision, notre expertise. Cabinet d'optique moderne à
              Casablanca offrant des solutions visuelles personnalisées avec les
              dernières technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-mint-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-mint-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-6">
            <h3 className="font-playfair font-semibold text-lg">Navigation</h3>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                Accueil
              </Link>
              <Link
                to="/produits"
                className="block text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                Produits
              </Link>
              <Link
                to="/services"
                className="block text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                Services
              </Link>
              <Link
                to="/a-propos"
                className="block text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-playfair font-semibold text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-mint-400 mt-1 flex-shrink-0" />
                <div className="font-lato">
                  <p className="text-gray-300">
                    Boulevard Zerktouni, Résidence Al Mamoun
                  </p>
                  <p className="text-gray-300">20100 Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mint-400 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+212661347432"
                    className="block text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato"
                  >
                    +212 661 347 432
                  </a>
                  <a
                    href="tel:+212537867619"
                    className="block text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato text-sm"
                  >
                    Fix: +212 537 867 619
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mint-400 flex-shrink-0" />
                <a
                  href="mailto:contact@mouradoptic.ma"
                  className="text-gray-300 hover:text-mint-400 transition-colors duration-200 font-lato"
                >
                  contact@mouradoptic.ma
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-6">
            <h3 className="font-playfair font-semibold text-lg">Horaires</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-mint-400 mt-1 flex-shrink-0" />
                <div className="font-lato text-gray-300 space-y-1">
                  <p>
                    <span className="font-medium">Lun - Ven:</span> 9h00 - 19h00
                  </p>
                  <p>
                    <span className="font-medium">Samedi:</span> 9h00 - 18h00
                  </p>
                  <p>
                    <span className="font-medium">Dimanche:</span> 10h00 - 14h00
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-navy-800 rounded-lg p-4 border border-navy-700">
              <p className="text-sm text-gray-300 font-lato">
                <span className="font-medium text-mint-400">Urgences:</span>{" "}
                Disponible 24h/7j pour les urgences oculaires
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-lato">
              © 2024 MouradOptic. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/mentions-legales"
                className="text-gray-400 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                Mentions légales
              </Link>
              <Link
                to="/politique-confidentialite"
                className="text-gray-400 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                Politique de confidentialité
              </Link>
              <Link
                to="/cgv"
                className="text-gray-400 hover:text-mint-400 transition-colors duration-200 font-lato"
              >
                CGV
              </Link>
              <Link
                to="/admin/rendez-vous"
                className="text-gray-500 hover:text-mint-400 transition-colors duration-200 font-lato text-xs"
                title="Accès professionnel"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
