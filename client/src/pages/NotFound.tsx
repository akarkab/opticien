import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl font-playfair font-bold text-navy-900 mb-4">
              404
            </h1>
            <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
              Page non trouvée
            </h2>
            <p className="text-gray-600 font-lato leading-relaxed">
              Désolé, la page que vous recherchez n'existe pas ou a été
              déplacée. Retournez à l'accueil pour découvrir nos services
              optiques.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-navy-900 hover:bg-navy-800 text-white flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Accueil</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
