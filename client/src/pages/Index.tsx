import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Eye,
  Shield,
  Star,
  ArrowRight,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-mint-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gold-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                  <Star className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-medium">
                    Cabinet d'optique premium
                  </span>
                </div>

                <h1 className="hero-title text-5xl lg:text-7xl leading-tight">
                  Votre{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-mint-300">
                    Vision
                  </span>
                  ,
                  <br />
                  Notre{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                    Expertise
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 font-lato leading-relaxed max-w-2xl">
                  Découvrez l'excellence en optique avec MouradOptic. Des
                  solutions visuelles personnalisées, des technologies de pointe
                  et un service client exceptionnel.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/rendez-vous">
                  <Button
                    size="lg"
                    className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Prendre rendez-vous
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/60 text-white hover:bg-white/20 hover:border-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-md transition-all duration-300 bg-white/10"
                >
                  Découvrir nos services
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mint-400 font-playfair">
                    20+
                  </div>
                  <div className="text-sm text-gray-300 font-lato">
                    Années d'expérience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 font-playfair">
                    5000+
                  </div>
                  <div className="text-sm text-gray-300 font-lato">
                    Clients satisfaits
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white font-playfair">
                    50+
                  </div>
                  <div className="text-sm text-gray-300 font-lato">
                    Marques premium
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Visual - Mockup of eyeglasses */}
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                    {/* Eyeglasses SVG Mockup */}
                    <div className="flex items-center justify-center h-64">
                      <svg
                        viewBox="0 0 400 150"
                        className="w-full h-full max-w-sm"
                      >
                        {/* Left Lens */}
                        <circle
                          cx="100"
                          cy="75"
                          r="45"
                          fill="none"
                          stroke="url(#grad1)"
                          strokeWidth="3"
                          className="opacity-90"
                        />
                        {/* Right Lens */}
                        <circle
                          cx="300"
                          cy="75"
                          r="45"
                          fill="none"
                          stroke="url(#grad2)"
                          strokeWidth="3"
                          className="opacity-90"
                        />
                        {/* Bridge */}
                        <line
                          x1="145"
                          y1="75"
                          x2="255"
                          y2="75"
                          stroke="url(#grad3)"
                          strokeWidth="3"
                          className="opacity-90"
                        />
                        {/* Left Temple */}
                        <line
                          x1="55"
                          y1="75"
                          x2="20"
                          y2="75"
                          stroke="url(#grad4)"
                          strokeWidth="3"
                          className="opacity-90"
                        />
                        {/* Right Temple */}
                        <line
                          x1="345"
                          y1="75"
                          x2="380"
                          y2="75"
                          stroke="url(#grad5)"
                          strokeWidth="3"
                          className="opacity-90"
                        />

                        <defs>
                          <linearGradient
                            id="grad1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#2dd4bf"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0d9488"
                              stopOpacity="0.9"
                            />
                          </linearGradient>
                          <linearGradient
                            id="grad2"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#fde047"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="100%"
                              stopColor="#eab308"
                              stopOpacity="0.9"
                            />
                          </linearGradient>
                          <linearGradient
                            id="grad3"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#2dd4bf"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="100%"
                              stopColor="#fde047"
                              stopOpacity="0.8"
                            />
                          </linearGradient>
                          <linearGradient
                            id="grad4"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#2dd4bf"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0d9488"
                              stopOpacity="0.9"
                            />
                          </linearGradient>
                          <linearGradient
                            id="grad5"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#fde047"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="100%"
                              stopColor="#eab308"
                              stopOpacity="0.9"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-mint-400 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-400 rounded-full animate-bounce delay-700"></div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-mint-400/20 to-gold-400/20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-lato">Découvrir</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-white/70 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Excellence & Innovation
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Nous combinons expertise traditionnelle et technologies de pointe
              pour vous offrir la meilleure expérience visuelle possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-500 to-mint-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Examens Complets
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Bilans visuels approfondis avec équipements de dernière
                génération pour détecter et prévenir tous les troubles de la
                vision.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Conseil Expert
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Accompagnement personnalisé par nos opticiens diplômés pour
                choisir la solution visuelle parfaitement adaptée à vos besoins.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Garantie Premium
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Service après-vente exceptionnel avec garanties étendues,
                réparations rapides et suivi personnalisé à vie.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-600 to-navy-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Service Rapide
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                Montage express, livraison rapide et disponibilité étendue pour
                répondre à tous vos besoins dans les meilleurs délais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Ils Nous Font Confiance
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Découvrez les témoignages de nos clients qui ont choisi
              MouradOptic pour leurs besoins en optique et vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 font-lato leading-relaxed mb-6">
                "Un service exceptionnel ! L'équipe de MouradOptic a su me
                conseiller parfaitement. Mes nouvelles lunettes sont non
                seulement belles mais parfaitement adaptées à ma vue."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-mint-400 to-mint-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">MH</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-navy-900">
                    Marie Dubois
                  </div>
                  <div className="text-sm text-gray-600">Architecte</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 font-lato leading-relaxed mb-6">
                "Professionnalisme et expertise remarquables. L'examen de vue
                était très complet et le choix de montures impressionnant. Je
                recommande vivement !"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">PL</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-navy-900">
                    Pierre Leroy
                  </div>
                  <div className="text-sm text-gray-600">Médecin</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 font-lato leading-relaxed mb-6">
                "Une expérience client exceptionnelle du début à la fin.
                L'équipe est à l'écoute, professionnelle et les produits sont de
                qualité premium."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SB</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-navy-900">
                    Sophie Bernard
                  </div>
                  <div className="text-sm text-gray-600">Consultante</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">
                  Nouveautés
                </span>
                <span className="text-sm text-navy-600 font-medium px-3 py-1 bg-navy-50 rounded-full">
                  Bestsellers
                </span>
                <span className="text-sm text-mint-600 font-medium px-3 py-1 bg-mint-50 rounded-full">
                  Promotion
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900">
                Collection Premium
              </h2>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="hidden lg:flex items-center space-x-2 border-navy-200 text-navy-900 hover:bg-navy-50"
            >
              <span>Voir tous les produits</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Product 1 - Lucien */}
            <Link to="/produits/lucien" className="group cursor-pointer block">
              <div className="relative bg-gray-50 rounded-2xl p-6 mb-4 overflow-hidden group-hover:bg-gray-100 transition-all duration-300">
                <div className="absolute top-4 left-4">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 hover:bg-white/80"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Button>
                </div>

                {/* Glasses SVG */}
                <div className="flex justify-center py-8">
                  <svg viewBox="0 0 200 80" className="w-32 h-16">
                    <circle
                      cx="50"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#8B4513"
                      strokeWidth="2"
                    />
                    <circle
                      cx="150"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#8B4513"
                      strokeWidth="2"
                    />
                    <line
                      x1="75"
                      y1="40"
                      x2="125"
                      y2="40"
                      stroke="#8B4513"
                      strokeWidth="2"
                    />
                    <line
                      x1="25"
                      y1="40"
                      x2="15"
                      y2="40"
                      stroke="#8B4513"
                      strokeWidth="2"
                    />
                    <line
                      x1="175"
                      y1="40"
                      x2="185"
                      y2="40"
                      stroke="#8B4513"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-navy-900 hover:bg-navy-800 text-white"
                  >
                    Essayer virtuellement
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-playfair font-semibold text-lg text-navy-900">
                  Lucien
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="w-4 h-4 bg-amber-800 rounded-full border-2 border-white shadow-sm"></span>
                    <span className="w-4 h-4 bg-black rounded-full border-2 border-white shadow-sm"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full border-2 border-white shadow-sm"></span>
                  </div>
                  <span className="text-lg font-semibold text-navy-900">
                    €95
                  </span>
                </div>
              </div>
            </Link>

            {/* Product 2 - Nadia */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-50 rounded-2xl p-6 mb-4 overflow-hidden group-hover:bg-gray-100 transition-all duration-300">
                <div className="absolute top-4 left-4">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 hover:bg-white/80"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Button>
                </div>

                <div className="flex justify-center py-8">
                  <svg viewBox="0 0 200 80" className="w-32 h-16">
                    <circle
                      cx="50"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#4A5568"
                      strokeWidth="2"
                    />
                    <circle
                      cx="150"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#4A5568"
                      strokeWidth="2"
                    />
                    <line
                      x1="75"
                      y1="40"
                      x2="125"
                      y2="40"
                      stroke="#4A5568"
                      strokeWidth="2"
                    />
                    <line
                      x1="25"
                      y1="40"
                      x2="15"
                      y2="40"
                      stroke="#4A5568"
                      strokeWidth="2"
                    />
                    <line
                      x1="175"
                      y1="40"
                      x2="185"
                      y2="40"
                      stroke="#4A5568"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-navy-900 hover:bg-navy-800 text-white"
                  >
                    Essayer virtuellement
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-playfair font-semibold text-lg text-navy-900">
                  Nadia
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="w-4 h-4 bg-gray-600 rounded-full border-2 border-white shadow-sm"></span>
                    <span className="w-4 h-4 bg-pink-300 rounded-full border-2 border-white shadow-sm"></span>
                    <span className="w-4 h-4 bg-purple-400 rounded-full border-2 border-white shadow-sm"></span>
                  </div>
                  <span className="text-lg font-semibold text-navy-900">
                    €95
                  </span>
                </div>
              </div>
            </div>

            {/* Product 3 - Tobias */}
            <Link to="/produits/tobias" className="group cursor-pointer block">
              <div className="relative bg-gray-50 rounded-2xl p-6 mb-4 overflow-hidden group-hover:bg-gray-100 transition-all duration-300">
                <div className="absolute top-4 left-4">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 hover:bg-white/80"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Button>
                </div>

                <div className="flex justify-center py-8">
                  <svg viewBox="0 0 200 80" className="w-32 h-16">
                    <circle
                      cx="50"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                    <circle
                      cx="150"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                    <line
                      x1="75"
                      y1="40"
                      x2="125"
                      y2="40"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                    <line
                      x1="25"
                      y1="40"
                      x2="15"
                      y2="40"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                    <line
                      x1="175"
                      y1="40"
                      x2="185"
                      y2="40"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-navy-900 hover:bg-navy-800 text-white"
                  >
                    Essayer virtuellement
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-playfair font-semibold text-lg text-navy-900">
                  Tobias
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="w-4 h-4 bg-gray-200 rounded-full border-2 border-white shadow-sm"></span>
                    <span className="w-4 h-4 bg-amber-600 rounded-full border-2 border-white shadow-sm"></span>
                    <span className="w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-sm"></span>
                  </div>
                  <span className="text-lg font-semibold text-navy-900">
                    €95
                  </span>
                </div>
              </div>
            </Link>

            {/* Product 4 - Reiner */}
            <Link to="/produits/reiner" className="group cursor-pointer block">
              <div className="relative bg-gray-50 rounded-2xl p-6 mb-4 overflow-hidden group-hover:bg-gray-100 transition-all duration-300">
                <div className="absolute top-4 left-4">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 hover:bg-white/80"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Button>
                </div>

                <div className="flex justify-center py-8">
                  <svg viewBox="0 0 200 80" className="w-32 h-16">
                    <circle
                      cx="50"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                    />
                    <circle
                      cx="150"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                    />
                    <line
                      x1="75"
                      y1="40"
                      x2="125"
                      y2="40"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                    />
                    <line
                      x1="25"
                      y1="40"
                      x2="15"
                      y2="40"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                    />
                    <line
                      x1="175"
                      y1="40"
                      x2="185"
                      y2="40"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-navy-900 hover:bg-navy-800 text-white"
                  >
                    Essayer virtuellement
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-playfair font-semibold text-lg text-navy-900">
                  Reiner
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="w-4 h-4 bg-gray-400 rounded-full border-2 border-white shadow-sm"></span>
                    <span className="w-4 h-4 bg-amber-700 rounded-full border-2 border-white shadow-sm"></span>
                  </div>
                  <span className="text-lg font-semibold text-navy-900">
                    €95
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile Shop Button */}
          <div className="lg:hidden text-center">
            <Button
              size="lg"
              className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-full"
            >
              Voir tous les produits
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-mint-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Technologie & Innovation
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Nous investissons dans les dernières technologies pour vous offrir
              la meilleure expérience visuelle possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mint-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-2">
                    Examen 3D Avancé
                  </h3>
                  <p className="text-gray-600 font-lato leading-relaxed">
                    Topographie cornéenne et analyse rétinienne avec les
                    équipements les plus performants du marché.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-2">
                    Essayage Virtuel AR
                  </h3>
                  <p className="text-gray-600 font-lato leading-relaxed">
                    Technologie de réalité augmentée pour essayer nos lunettes
                    depuis chez vous avec un réalisme parfait.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-2">
                    Verres Haute Performance
                  </h3>
                  <p className="text-gray-600 font-lato leading-relaxed">
                    Verres progressifs dernière génération, anti-reflets premium
                    et protection UV totale.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mint-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-mint-600">
                        3D
                      </span>
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">
                      Scanner 3D
                    </h4>
                    <p className="text-sm text-gray-600">Mesure précise</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-gold-600">
                        AR
                      </span>
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">
                      Réalité Augmentée
                    </h4>
                    <p className="text-sm text-gray-600">Essayage virtuel</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-navy-600">
                        AI
                      </span>
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">
                      Intelligence Artificielle
                    </h4>
                    <p className="text-sm text-gray-600">
                      Conseil personnalisé
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mint-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-mint-600">
                        UV
                      </span>
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">
                      Protection UV
                    </h4>
                    <p className="text-sm text-gray-600">100% sécurisé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1)_0%,transparent_70%)]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-mint-500/20 backdrop-blur-md rounded-full px-6 py-2 border border-mint-400/30 mb-8">
              <Award className="w-5 h-5 text-mint-400" />
              <span className="text-mint-300 font-medium">
                Excellence reconnue depuis 20 ans
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
              Prêt à Découvrir la Différence ?
            </h2>

            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto leading-relaxed mb-10">
              Prenez rendez-vous dès aujourd'hui et découvrez pourquoi plus de
              5000 clients nous font confiance pour leur santé visuelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/rendez-vous">
                <Button
                  size="lg"
                  className="bg-mint-600 hover:bg-mint-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Prendre rendez-vous maintenant
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/60 text-white hover:bg-white/20 hover:border-white px-10 py-4 rounded-full font-semibold text-lg backdrop-blur-md transition-all duration-300 bg-white/10"
                >
                  Nous contacter
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
