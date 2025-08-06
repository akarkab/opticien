import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="w-24 h-24 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Construction className="w-12 h-12 text-navy-600" />
        </div>

        <h1 className="text-4xl font-playfair font-bold text-navy-900 mb-4">
          {title}
        </h1>

        <p className="text-lg text-gray-600 font-lato mb-8 leading-relaxed">
          {description}
        </p>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
            Contenu en cours de développement
          </h2>
          <p className="text-gray-600 font-lato mb-6">
            Cette page fait partie de notre nouveau site web premium. Le contenu
            sera bientôt disponible avec toutes les fonctionnalités avancées que
            vous attendez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Retour à l'accueil</span>
              </Button>
            </Link>
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">
              Nous contacter
            </Button>
          </div>
        </div>

        <p className="text-sm text-gray-500 font-lato">
          Pour plus d'informations, n'hésitez pas à nous contacter au{" "}
          <a
            href="tel:+212661347432"
            className="text-navy-600 hover:text-navy-800 font-medium"
          >
            +212 661 347 432
          </a>
        </p>
      </div>
    </div>
  );
}
