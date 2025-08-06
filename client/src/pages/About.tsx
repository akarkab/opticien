import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Calendar,
  Users,
  Heart,
  Eye,
  Shield,
  Star,
  MapPin,
  GraduationCap,
  Trophy,
  Clock,
  CheckCircle,
} from "lucide-react";

const team = [
  {
    name: "Dr. Marie Dubois",
    role: "Optométriste Fondatrice",
    experience: "25 ans",
    specialties: ["Optométrie clinique", "Basse vision", "Pédiatrie"],
    education: "Doctorat en Optométrie - Université Paris-Sud",
    description:
      "Passionnée par l'innovation en optique, Dr. Dubois a fondé MouradOptic avec la vision de démocratiser l'accès aux soins visuels de qualité.",
    image: "marie-dubois",
  },
  {
    name: "Pierre Leroy",
    role: "Opticien-Lunetier Expert",
    experience: "15 ans",
    specialties: ["Contactologie", "Optique sportive", "Verres progressifs"],
    education: "BTS Opticien-Lunetier - École Supérieure d'Optique",
    description:
      "Expert en contactologie et passionné de sport, Pierre accompagne nos clients sportifs dans leurs défis visuels les plus exigeants.",
    image: "pierre-leroy",
  },
  {
    name: "Sophie Bernard",
    role: "Optométriste Spécialisée",
    experience: "12 ans",
    specialties: ["Vision binoculaire", "Rééducation visuelle", "Orthoptie"],
    education: "Master en Sciences de la Vision - Institut d'Optique",
    description:
      "Spécialiste de la rééducation visuelle, Sophie aide nos patients à optimiser leurs performances visuelles au quotidien.",
    image: "sophie-bernard",
  },
  {
    name: "Thomas Martin",
    role: "Conseiller Optique",
    experience: "8 ans",
    specialties: ["Conseil en montures", "Morpho-styling", "Tendances"],
    education: "Formation Style & Optique - École Nationale d'Optique",
    description:
      "Expert en style et morphologie, Thomas vous aide à trouver la monture qui révèle votre personnalité tout en optimisant votre confort visuel.",
    image: "thomas-martin",
  },
];

const values = [
  {
    icon: Eye,
    title: "Excellence",
    description:
      "Nous nous engageons à fournir les meilleurs soins visuels avec les technologies les plus avancées.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description:
      "Chaque patient est unique. Nous prenons le temps de l'écouter et de comprendre ses besoins spécifiques.",
  },
  {
    icon: Shield,
    title: "Confiance",
    description:
      "Transparence, honnêteté et professionnalisme sont les piliers de notre relation avec nos patients.",
  },
  {
    icon: Star,
    title: "Innovation",
    description:
      "Nous investissons continuellement dans les dernières innovations pour vous offrir le meilleur.",
  },
];

const milestones = [
  {
    year: "2004",
    title: "Fondation de MouradOptic",
    description:
      "Dr. Marie Dubois ouvre le premier cabinet avec une vision : démocratiser l'optique premium.",
  },
  {
    year: "2008",
    title: "Première Innovation",
    description:
      "Introduction des premiers équipements 3D pour des examens visuels révolutionnaires.",
  },
  {
    year: "2012",
    title: "Expansion de l'Équipe",
    description:
      "Arrivée de Pierre Leroy et développement du département contactologie.",
  },
  {
    year: "2016",
    title: "Technologie AR",
    description:
      "Premier cabinet parisien à proposer l'essayage virtuel en réalité augmentée.",
  },
  {
    year: "2020",
    title: "Téléconsultation",
    description:
      "Lancement des services de consultation à distance pendant la pandémie.",
  },
  {
    year: "2024",
    title: "Cabinet du Futur",
    description:
      "Rénovation complète avec les dernières technologies IA et diagnostic automatisé.",
  },
];

const certifications = [
  "Certification ISO 9001 - Qualité",
  "Agrément Sécurité Sociale",
  "Certification CE - Dispositifs Médicaux",
  "Label Excellence Optique France",
  "Certification Formation Continue",
  "Agrément Télémédecine",
];

export default function About() {
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
                20 ans d'excellence en optique
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Notre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-400">
                Histoire
              </span>
            </h1>

            <p className="text-xl text-gray-300 font-lato max-w-4xl mx-auto leading-relaxed">
              Depuis 2004, MouradOptic révolutionne l'optique marocaine en
              alliant expertise traditionnelle et innovations technologiques
              pour offrir une expérience visuelle exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-8">
                Une Vision, Une Passion
              </h2>
              <div className="space-y-6 text-gray-600 font-lato leading-relaxed">
                <p className="text-lg">
                  L'histoire de MouradOptic commence en 2004 avec Dr. Marie
                  Dubois, jeune optométriste diplômée, qui rêvait de créer un
                  cabinet d'optique différent. Un lieu où la technologie de
                  pointe rencontrerait l'humain, où chaque patient bénéficierait
                  d'un service personnalisé et d'une expertise reconnue.
                </p>
                <p>
                  Très vite, le cabinet se distingue par son approche innovante
                  et son investissement dans les dernières technologies. Premier
                  cabinet marocain à proposer l'essayage virtuel en réalité
                  augmentée, MouradOptic n'a cessé d'évoluer pour rester à la
                  pointe de l'innovation optique.
                </p>
                <p>
                  Aujourd'hui, avec une équipe de 4 experts passionnés, nous
                  continuons à innover tout en préservant nos valeurs
                  fondamentales : excellence, bienveillance et proximité avec
                  nos patients.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-mint-600 mb-2">
                    5000+
                  </div>
                  <div className="text-gray-600 font-lato">
                    Patients satisfaits
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-gold-600 mb-2">
                    20
                  </div>
                  <div className="text-gray-600 font-lato">
                    Années d'expérience
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-mint-100 to-gold-100 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="w-full h-64 bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Calendar className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-lato">Photo historique du cabinet</p>
                      <p className="text-sm">Fondation en 2004</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-playfair font-semibold text-xl text-navy-900 mb-2">
                      Cabinet MouradOptic
                    </h3>
                    <p className="text-gray-600 font-lato">
                      Boulevard Zerktouni, 20100 Casablanca
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-mint-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Ces principes fondamentaux guident chacune de nos actions et
              décisions au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-mint-500 to-mint-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-lato leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Des experts passionnés, formés aux dernières techniques et
              technologies optiques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-mint-400 to-mint-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-playfair font-semibold text-navy-900">
                          {member.name}
                        </h3>
                        <Badge className="bg-gold-100 text-gold-800 border-gold-200">
                          {member.experience}
                        </Badge>
                      </div>

                      <p className="text-mint-600 font-medium font-lato mb-4">
                        {member.role}
                      </p>

                      <p className="text-gray-600 font-lato leading-relaxed mb-4">
                        {member.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 font-lato">
                            {member.education}
                          </span>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Trophy className="w-4 h-4 text-gray-400 mt-1" />
                          <div className="flex flex-wrap gap-1">
                            {member.specialties.map((specialty, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              20 ans d'innovation et de croissance au service de votre vision
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-mint-300"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6"
                  >
                    <div className="w-16 h-16 bg-mint-500 rounded-full flex items-center justify-center text-white font-bold font-playfair text-lg shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>

                    <Card className="flex-1 p-6 border-0 shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl font-playfair font-bold text-navy-900">
                          {milestone.year}
                        </span>
                        <div className="h-px bg-mint-300 flex-1"></div>
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 font-lato leading-relaxed">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Certifications & Agréments
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Nos qualifications et reconnaissances professionnelles
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0" />
                  <span className="font-lato text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-mint-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
                Nous Trouver
              </h2>
              <p className="text-xl text-gray-600 font-lato leading-relaxed mb-8">
                Situé au cœur de Casablanca, notre cabinet moderne vous
                accueille dans un environnement chaleureux et professionnel.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-mint-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      Adresse
                    </h3>
                    <p className="text-gray-600 font-lato">
                      Boulevard Zerktouni, Résidence Al Mamoun
                      <br />
                      20100 Casablanca, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-mint-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      Horaires
                    </h3>
                    <div className="text-gray-600 font-lato space-y-1">
                      <p>Lundi - Vendredi: 9h00 - 18h30</p>
                      <p>Samedi: 9h00 - 17h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-mint-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      Accessibilité
                    </h3>
                    <p className="text-gray-600 font-lato">
                      Cabinet accessible PMR
                      <br />
                      Métro: Louvre-Rivoli (Ligne 1)
                      <br />
                      Parking public à 50m
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 border-0 shadow-xl">
                <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-lato">Plan d'accès interactif</p>
                    <p className="text-sm">Google Maps intégré</p>
                  </div>
                </div>
                <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  Obtenir l'itinéraire
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-10 max-w-3xl mx-auto">
            Découvrez pourquoi plus de 5000 patients nous font confiance pour
            leurs besoins en optique et vision.
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
              <Users className="w-5 h-5 mr-3" />
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
