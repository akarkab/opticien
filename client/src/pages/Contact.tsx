import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Car,
  Train,
  Accessibility,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: [
      "Boulevard Zerktouni, Résidence Al Mamoun",
      "20100 Casablanca, Maroc",
    ],
    color: "mint",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: ["+212 661 347 432", "Fix: +212 537 867 619"],
    color: "navy",
  },
  {
    icon: Mail,
    title: "Email",
    content: ["contact@mouradoptic.ma", "urgence@mouradoptic.ma"],
    color: "gold",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: ["Lun-Ven: 9h00 - 18h30", "Sam: 9h00 - 17h00", "Dim: Fermé"],
    color: "purple",
  },
];

const services = [
  "Examen de la vue",
  "Conseil en montures",
  "Adaptation lentilles",
  "Réparation",
  "Urgence ophtalmique",
  "Autre",
];

const timeSlots = [
  "9h00 - 10h00",
  "10h00 - 11h00",
  "11h00 - 12h00",
  "14h00 - 15h00",
  "15h00 - 16h00",
  "16h00 - 17h00",
  "17h00 - 18h00",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    isUrgent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string }> = {
      mint: { bg: "bg-mint-500", text: "text-mint-600" },
      navy: { bg: "bg-navy-600", text: "text-navy-600" },
      gold: { bg: "bg-gold-500", text: "text-gold-600" },
      purple: { bg: "bg-purple-500", text: "text-purple-600" },
    };
    return colorMap[color] || colorMap.mint;
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-mint-50 to-white">
          <div className="text-center max-w-2xl mx-auto px-4">
            <div className="w-24 h-24 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl font-playfair font-bold text-navy-900 mb-4">
              Demande Envoyée !
            </h1>

            <p className="text-lg text-gray-600 font-lato mb-8 leading-relaxed">
              Votre demande a été transmise avec succès. Notre équipe vous
              contactera dans les plus brefs délais pour confirmer votre
              rendez-vous.
            </p>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                Prochaines étapes
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-mint-500" />
                  <span className="text-gray-600 font-lato">
                    Confirmation par email dans 15 minutes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-mint-500" />
                  <span className="text-gray-600 font-lato">
                    Appel de notre équipe sous 24h
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-mint-500" />
                  <span className="text-gray-600 font-lato">
                    Rappel SMS 24h avant le rendez-vous
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-navy-900 hover:bg-navy-800 text-white"
              >
                Nouveau rendez-vous
              </Button>
              <Button variant="outline">Retour à l'accueil</Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-950 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1)_0%,transparent_70%)]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-mint-500/20 backdrop-blur-md rounded-full px-6 py-2 border border-mint-400/30 mb-8">
              <MessageCircle className="w-5 h-5 text-mint-400" />
              <span className="text-mint-300 font-medium">
                Nous sommes là pour vous
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-400">
                Contactez
              </span>{" "}
              Nous
            </h1>

            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto leading-relaxed">
              Une question ? Besoin d'un rendez-vous ? Notre équipe est à votre
              disposition pour vous accompagner dans tous vos besoins visuels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colors = getColorClasses(info.color);

              return (
                <Card
                  key={index}
                  className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-navy-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600 font-lato">
                        {line}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-playfair font-bold text-navy-900 mb-4">
                  Prendre Rendez-vous
                </h2>
                <p className="text-gray-600 font-lato">
                  Remplissez ce formulaire et nous vous contacterons rapidement
                  pour confirmer votre rendez-vous.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full"
                      placeholder="+212 661 347 432"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Service souhaité *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="preferredDate"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Date souhaitée
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        handleInputChange("preferredDate", e.target.value)
                      }
                      className="w-full"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Heure souhaitée
                    </Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) =>
                        handleInputChange("preferredTime", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez un créneau" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Message (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full"
                    placeholder="Précisez vos besoins ou posez vos questions..."
                  />
                </div>

                {/* Urgency checkbox */}
                <div className="flex items-center space-x-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <input
                    type="checkbox"
                    id="isUrgent"
                    checked={formData.isUrgent}
                    onChange={(e) =>
                      handleInputChange("isUrgent", e.target.checked)
                    }
                    className="w-4 h-4 text-orange-600"
                  />
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                    <Label
                      htmlFor="isUrgent"
                      className="text-sm text-orange-800 font-medium cursor-pointer"
                    >
                      Demande urgente (réponse sous 2h)
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white py-3 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Envoyer la demande
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Map & Location Info */}
            <div className="space-y-6">
              {/* Map */}
              <Card className="p-6 border-0 shadow-xl">
                <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-4">
                  Nous Localiser
                </h3>
                <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-lato">Carte Google Maps</p>
                    <p className="text-sm">
                      Boulevard Zerktouni, 20100 Casablanca
                    </p>
                  </div>
                </div>
                <Button className="w-full bg-mint-600 hover:bg-mint-700 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Obtenir l'itinéraire
                </Button>
              </Card>

              {/* Transport Info */}
              <Card className="p-6 border-0 shadow-xl">
                <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-4">
                  Accès & Transport
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Train className="w-6 h-6 text-mint-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">
                        Métro
                      </h4>
                      <p className="text-gray-600 font-lato text-sm">
                        Louvre-Rivoli (Ligne 1) - 2 min à pied
                        <br />
                        Châtelet (Lignes 1, 4, 7, 11, 14) - 5 min à pied
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Car className="w-6 h-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">
                        Parking
                      </h4>
                      <p className="text-gray-600 font-lato text-sm">
                        Parking Rivoli - 50m (payant)
                        <br />
                        Parking Louvre - 200m (payant)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Accessibility className="w-6 h-6 text-navy-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">
                        Accessibilité
                      </h4>
                      <p className="text-gray-600 font-lato text-sm">
                        Cabinet accessible PMR
                        <br />
                        Ascenseur disponible
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 border-0 shadow-xl bg-red-50 border-red-200">
                <h3 className="text-xl font-playfair font-semibold text-red-900 mb-4">
                  Urgences Ophtalmiques
                </h3>
                <p className="text-red-800 font-lato mb-4 text-sm">
                  En cas d'urgence oculaire (douleur intense, perte de vision
                  soudaine, traumatisme), contactez-nous immédiatement.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Urgences: 06 12 34 56 78
                </Button>
              </Card>
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

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Comment annuler un rendez-vous ?
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Vous pouvez annuler jusqu'à 24h avant par téléphone ou email.
                Pour les annulations de dernière minute, merci d'appeler
                directement.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Acceptez-vous la carte vitale ?
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Oui, nous sommes conventionnés et acceptons la carte vitale. La
                plupart de nos consultations sont remboursées par la sécurité
                sociale.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Combien de temps dure une consultation ?
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Un examen de vue complet dure environ 45-60 minutes. Pour un
                conseil en montures, comptez 30 minutes.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Que faire en cas de retard ?
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Merci de nous prévenir par téléphone. Nous ferons notre possible
                pour vous recevoir, mais un nouveau rendez-vous pourrait être
                nécessaire.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
