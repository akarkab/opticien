import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Calendar,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  Camera,
  Wrench,
  Smartphone,
  Brain,
} from "lucide-react";

const services = [
  {
    id: "examen-vue",
    title: "Examen de la Vue Complet",
    description: "Bilan visuel approfondi avec les dernières technologies",
    icon: Eye,
    duration: "45-60 min",
    price: "Remboursé Sécu",
    color: "mint",
    features: [
      "Test d'acuité visuelle",
      "Mesure de la réfraction",
      "Examen du fond d'œil",
      "Dépistage glaucome",
      "Analyse de la vision des couleurs",
      "Test de vision binoculaire",
    ],
    image: "examination",
  },
  {
    id: "conseil-personnalise",
    title: "Conseil Personnalisé",
    description: "Accompagnement expert pour choisir vos lunettes idéales",
    icon: Users,
    duration: "30 min",
    price: "Gratuit",
    color: "navy",
    features: [
      "Analyse morphologique du visage",
      "Conseils de style personnalisés",
      "Sélection selon votre mode de vie",
      "Test de différentes montures",
      "Conseils d'entretien",
      "Suivi post-achat",
    ],
    image: "consultation",
  },
  {
    id: "reparation",
    title: "Réparation & Maintenance",
    description:
      "Service après-vente expert pour prolonger la vie de vos lunettes",
    icon: Wrench,
    duration: "15-30 min",
    price: "À partir de 15€",
    color: "gold",
    features: [
      "Réparation express",
      "Remplacement de verres",
      "Ajustement de montures",
      "Changement de plaquettes",
      "Nettoyage professionnel",
      "Garantie sur les réparations",
    ],
    image: "repair",
  },
  {
    id: "essayage-virtuel",
    title: "Essayage Virtuel AR",
    description:
      "Technologie de réalité augmentée pour essayer avant d'acheter",
    icon: Smartphone,
    duration: "15 min",
    price: "Gratuit",
    color: "purple",
    features: [
      "Essayage en temps réel",
      "Capture photo & vidéo",
      "Partage avec proches",
      "Mesures automatiques",
      "Recommandations IA",
      "Compatible tous appareils",
    ],
    image: "ar-try",
  },
  {
    id: "examen-enfant",
    title: "Optométrie Pédiatrique",
    description: "Examens spécialisés pour la vision des enfants",
    icon: Heart,
    duration: "30-45 min",
    price: "Remboursé Sécu",
    color: "pink",
    features: [
      "Tests adaptés à l'âge",
      "Dépistage précoce",
      "Suivi de développement",
      "Conseils aux parents",
      "Montures enfants spécialisées",
      "Programmes de prévention",
    ],
    image: "pediatric",
  },
  {
    id: "lentilles",
    title: "Adaptation Lentilles",
    description: "Service complet pour l'adaptation et le suivi des lentilles",
    icon: Camera,
    duration: "60 min",
    price: "À partir de 50€",
    color: "cyan",
    features: [
      "Examen de compatibilité",
      "Essai gratuit",
      "Formation à la manipulation",
      "Suivi régulier",
      "Toutes corrections",
      "Livraison à domicile",
    ],
    image: "lenses",
  },
];

const advantages = [
  {
    icon: Award,
    title: "Expertise Reconnue",
    description:
      "Plus de 20 ans d'expérience et formation continue de notre équipe",
  },
  {
    icon: Clock,
    title: "Service Rapide",
    description:
      "Prise en charge immédiate et délais respectés pour tous nos services",
  },
  {
    icon: Shield,
    title: "Garantie Premium",
    description:
      "Garanties étendues et service après-vente exceptionnel inclus",
  },
  {
    icon: Zap,
    title: "Technologies Avancées",
    description:
      "Équipements de dernière génération pour des diagnostics précis",
  },
];

export default function Services() {
  const getColorClasses = (color: string) => {
    const colorMap: Record<
      string,
      { bg: string; text: string; border: string }
    > = {
      mint: {
        bg: "bg-mint-500",
        text: "text-mint-600",
        border: "border-mint-200",
      },
      navy: {
        bg: "bg-navy-600",
        text: "text-navy-600",
        border: "border-navy-200",
      },
      gold: {
        bg: "bg-gold-500",
        text: "text-gold-600",
        border: "border-gold-200",
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      pink: {
        bg: "bg-pink-500",
        text: "text-pink-600",
        border: "border-pink-200",
      },
      cyan: {
        bg: "bg-cyan-500",
        text: "text-cyan-600",
        border: "border-cyan-200",
      },
    };
    return colorMap[color] || colorMap.mint;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-950 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1)_0%,transparent_70%)]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-mint-500/20 backdrop-blur-md rounded-full px-6 py-2 border border-mint-400/30 mb-8">
              <Award className="w-5 h-5 text-mint-400" />
              <span className="text-mint-300 font-medium">
                Services professionnels certifiés
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-400">
                Services
              </span>
            </h1>

            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto leading-relaxed mb-10">
              De l'examen de vue à la réparation, en passant par les conseils
              personnalisés, découvrez notre gamme complète de services optiques
              premium.
            </p>

            <Button
              size="lg"
              className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 rounded-full"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Excellence & Expertise
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Chaque service est conçu pour vous offrir le meilleur de l'optique
              moderne
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const colors = getColorClasses(service.color);
              const Icon = service.icon;

              return (
                <Card
                  key={service.id}
                  className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-playfair font-semibold text-navy-900">
                            {service.title}
                          </h3>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Durée</div>
                            <div className="font-semibold text-navy-900">
                              {service.duration}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 font-lato leading-relaxed mb-4">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between mb-6">
                          <Badge
                            className={`${colors.text} bg-${service.color}-50 border-${service.color}-200`}
                          >
                            {service.price}
                          </Badge>
                        </div>

                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-mint-500 flex-shrink-0" />
                              <span className="text-gray-700 font-lato">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                          Réserver ce service
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Des avantages uniques qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-mint-500 to-mint-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 font-lato leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-mint-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Un parcours client pensé pour votre confort et satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Prise de Rendez-vous
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Réservation en ligne ou par téléphone. Créneaux disponibles du
                lundi au samedi avec possibilité d'urgence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Consultation Expert
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Examen approfondi avec nos équipements de pointe et conseils
                personnalisés selon vos besoins spécifiques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Suivi Personnalisé
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Accompagnement post-achat, contrôles réguliers et service
                après-vente pour garantir votre satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Questions Fréquentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 border-l-4 border-mint-500">
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                À quelle fréquence dois-je faire contrôler ma vue ?
              </h3>
              <p className="text-gray-600 font-lato">
                Nous recommandons un contrôle annuel pour les adultes et tous
                les 6 mois pour les enfants en période de croissance ou en cas
                de problème particulier.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-gold-500">
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Mes lunettes sont-elles garanties ?
              </h3>
              <p className="text-gray-600 font-lato">
                Oui, toutes nos montures bénéficient d'une garantie de 2 ans
                contre les défauts de fabrication et nos verres sont garantis 1
                an.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-navy-500">
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Proposez-vous des facilités de paiement ?
              </h3>
              <p className="text-gray-600 font-lato">
                Oui, nous acceptons les paiements en 3 fois sans frais et
                proposons des solutions de financement sur 12 ou 24 mois pour
                les équipements premium.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Prêt à Prendre Soin de Votre Vision ?
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-10 max-w-3xl mx-auto">
            Réservez votre consultation dès aujourd'hui et découvrez
            l'excellence de nos services optiques premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-mint-600 hover:bg-mint-700 text-white px-10 py-4 rounded-full"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Prendre rendez-vous
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/20 hover:border-white px-10 py-4 rounded-full bg-white/10"
            >
              <Brain className="w-5 h-5 mr-3" />
              Conseil en ligne
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
