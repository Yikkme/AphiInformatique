import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aphi Informatique</h3>
            <p className="text-gray-700 mb-4">
              Votre partenaire informatique de confiance depuis 2005. Réparation, vente et services à des prix compétitifs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <MapPin className="text-secondary h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>Centre Commercial des Vignes Benettes, 78230 Le Pecq</span>
              </p>
              <p className="flex items-start">
                <Phone className="text-secondary h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>01 23 45 67 89</span>
              </p>
              <p className="flex items-start">
                <Mail className="text-secondary h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>contact@aphi-informatique.fr</span>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-secondary transition-colors">Accueil</a>
                </Link>
              </li>
              <li>
                <Link href="/store">
                  <a className="hover:text-secondary transition-colors">Boutique</a>
                </Link>
              </li>
              <li><a href="#" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Aphi Informatique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
