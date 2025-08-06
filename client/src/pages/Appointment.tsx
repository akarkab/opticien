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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Eye,
  Wrench,
  Users,
  Glasses,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { AppointmentsService, servicesInfo } from "@/services/appointments";
import { NotificationEventHandler } from "@/services/notifications";

// Services disponibles
const services = [
  {
    id: "examen-vue",
    name: "Examen de la vue",
    icon: Eye,
    duration: 45,
    description: "Bilan visuel complet avec équipements de pointe",
  },
  {
    id: "conseil-montures",
    name: "Conseil en montures",
    icon: Glasses,
    duration: 30,
    description: "Accompagnement personnalisé pour choisir vos lunettes",
  },
  {
    id: "adaptation-lentilles",
    name: "Adaptation lentilles",
    icon: User,
    duration: 60,
    description: "Essai et adaptation de lentilles de contact",
  },
  {
    id: "reparation",
    name: "Réparation / Ajustement",
    icon: Wrench,
    duration: 15,
    description: "Réparation et ajustement de vos lunettes",
  },
  {
    id: "examen-enfant",
    name: "Examen enfant",
    icon: Users,
    duration: 30,
    description: "Examen spécialisé pour les enfants",
  },
  {
    id: "urgence",
    name: "Urgence ophtalmique",
    icon: AlertCircle,
    duration: 20,
    description: "Consultation d'urgence",
  },
];

// Créneaux horaires par défaut (seront filtrés selon la disponibilité)
const allTimeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date: Date | undefined;
  time: string;
  comments: string;
  isUrgent: boolean;
}

export default function Appointment() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    date: undefined,
    time: "",
    comments: "",
    isUrgent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>(allTimeSlots);

  // Mettre à jour les créneaux disponibles quand la date change
  useEffect(() => {
    if (formData.date) {
      const dateStr = format(formData.date, "yyyy-MM-dd");
      const slots = AppointmentsService.getAvailableSlots(dateStr);
      setAvailableSlots(slots);
    } else {
      setAvailableSlots(allTimeSlots);
    }
  }, [formData.date]);

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est obligatoire";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est obligatoire";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est obligatoire";
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Format de téléphone invalide";
    }
    if (!formData.service) {
      newErrors.service = "Veuillez sélectionner un service";
    }
    if (!formData.date) {
      newErrors.date = "Veuillez sélectionner une date";
    }
    if (!formData.time) {
      newErrors.time = "Veuillez sélectionner un créneau horaire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Créer le rendez-vous avec le service
      const appointmentData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        date: format(formData.date!, "yyyy-MM-dd"),
        time: formData.time,
        comments: formData.comments,
        isUrgent: formData.isUrgent,
      };

      // Simulation d'un délai pour l'UX
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const newAppointment = AppointmentsService.create(appointmentData);
      console.log("Rendez-vous créé:", newAppointment);

      // Envoyer les notifications automatiques
      await NotificationEventHandler.onAppointmentCreated(newAppointment);

      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Page de confirmation
  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-mint-50 to-white">
          <div className="text-center max-w-2xl mx-auto px-4">
            <div className="w-24 h-24 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl font-playfair font-bold text-navy-900 mb-4">
              Rendez-vous Réservé !
            </h1>

            <p className="text-lg text-gray-600 font-lato mb-8 leading-relaxed">
              Votre demande de rendez-vous a été envoyée avec succès. Notre
              équipe vous contactera dans les plus brefs délais pour confirmer
              votre créneau.
            </p>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-xl font-playfair font-semibold text-navy-900 mb-6">
                Récapitulatif de votre demande
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nom :</span>
                  <span className="font-medium">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service :</span>
                  <span className="font-medium">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date souhaitée :</span>
                  <span className="font-medium">
                    {formData.date
                      ? format(formData.date, "dd MMMM yyyy", { locale: fr })
                      : ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Heure souhaitée :</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Téléphone :</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-navy-900 mb-3">
                Prochaines étapes :
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-mint-500" />
                  <span>Confirmation automatique par email envoyée</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Appel de confirmation sous 24h ouvrées</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-purple-500" />
                  <span>SMS de rappel 24h avant le rendez-vous</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    service: "",
                    date: undefined,
                    time: "",
                    comments: "",
                    isUrgent: false,
                  });
                }}
                className="bg-navy-900 hover:bg-navy-800 text-white"
              >
                Nouveau rendez-vous
              </Button>
              <Link to="/">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-mint-500/20 backdrop-blur-md rounded-full px-6 py-2 border border-mint-400/30 mb-8">
              <CalendarIcon className="w-5 h-5 text-mint-400" />
              <span className="text-mint-300 font-medium">
                Réservation en ligne 24h/24
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Prendre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-400">
                Rendez-vous
              </span>
            </h1>

            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto leading-relaxed">
              Réservez votre consultation en quelques clics. Notre équipe vous
              contactera pour confirmer votre créneau dans les 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Service Selection Sidebar */}
                <div className="bg-navy-50 p-8">
                  <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-6">
                    Nos Services
                  </h3>
                  <div className="space-y-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      const isSelected = formData.service === service.id;

                      return (
                        <div
                          key={service.id}
                          onClick={() => {
                            handleInputChange("service", service.id);
                            setSelectedService(service);
                          }}
                          className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "bg-navy-900 text-white shadow-lg"
                              : "bg-white hover:bg-navy-100 text-gray-700"
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <Icon
                              className={`w-5 h-5 mt-1 ${isSelected ? "text-mint-400" : "text-navy-600"}`}
                            />
                            <div className="flex-1">
                              <h4
                                className={`font-semibold mb-1 ${isSelected ? "text-white" : "text-navy-900"}`}
                              >
                                {service.name}
                              </h4>
                              <p
                                className={`text-sm ${isSelected ? "text-gray-300" : "text-gray-600"}`}
                              >
                                {service.description}
                              </p>
                              <p
                                className={`text-xs mt-1 ${isSelected ? "text-mint-300" : "text-navy-600"}`}
                              >
                                Durée : {service.duration} min
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {errors.service && (
                    <p className="text-red-600 text-sm mt-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Main Form */}
                <div className="lg:col-span-2 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-6">
                        Vos Informations
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label
                            htmlFor="firstName"
                            className="flex items-center space-x-2 mb-2"
                          >
                            <User className="w-4 h-4 text-gray-500" />
                            <span>Prénom *</span>
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            placeholder="Votre prénom"
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="lastName"
                            className="flex items-center space-x-2 mb-2"
                          >
                            <User className="w-4 h-4 text-gray-500" />
                            <span>Nom *</span>
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            placeholder="Votre nom"
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="phone"
                            className="flex items-center space-x-2 mb-2"
                          >
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span>Téléphone *</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="+212 661 347 432"
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="email"
                            className="flex items-center space-x-2 mb-2"
                          >
                            <Mail className="w-4 h-4 text-gray-500" />
                            <span>Email (optionnel)</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="votre.email@exemple.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Date & Time Selection */}
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-6">
                        Date & Heure
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="flex items-center space-x-2 mb-2">
                            <CalendarIcon className="w-4 h-4 text-gray-500" />
                            <span>Date du rendez-vous *</span>
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !formData.date && "text-muted-foreground",
                                  errors.date && "border-red-500",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formData.date ? (
                                  format(formData.date, "dd MMMM yyyy", {
                                    locale: fr,
                                  })
                                ) : (
                                  <span>Sélectionner une date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={formData.date}
                                onSelect={(date) =>
                                  handleInputChange("date", date)
                                }
                                disabled={
                                  (date) =>
                                    date < new Date() || date.getDay() === 0 // Disable Sundays
                                }
                                initialFocus
                                locale={fr}
                              />
                            </PopoverContent>
                          </Popover>
                          {errors.date && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.date}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label className="flex items-center space-x-2 mb-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span>Heure souhaitée *</span>
                          </Label>
                          <Select
                            value={formData.time}
                            onValueChange={(value) =>
                              handleInputChange("time", value)
                            }
                          >
                            <SelectTrigger
                              className={errors.time ? "border-red-500" : ""}
                            >
                              <SelectValue placeholder="Choisir un créneau" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableSlots.length > 0 ? (
                                availableSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value="" disabled>
                                  Aucun créneau disponible
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          {errors.time && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.time}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div>
                      <Label
                        htmlFor="comments"
                        className="flex items-center space-x-2 mb-2"
                      >
                        <MessageSquare className="w-4 h-4 text-gray-500" />
                        <span>Commentaires ou précisions (optionnel)</span>
                      </Label>
                      <Textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) =>
                          handleInputChange("comments", e.target.value)
                        }
                        placeholder="Précisez vos besoins, problèmes visuels particuliers..."
                        rows={3}
                      />
                    </div>

                    {/* Urgency */}
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
                          Demande urgente (réponse prioritaire)
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-navy-900 hover:bg-navy-800 text-white py-4 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="w-5 h-5 mr-3" />
                          Réserver mon rendez-vous
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg">
              <Clock className="w-12 h-12 text-mint-500 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Confirmation Rapide
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Réponse garantie sous 24h ouvrées pour confirmer votre
                rendez-vous
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CheckCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Sans Engagement
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Annulation gratuite jusqu'à 24h avant le rendez-vous
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                Rappel Automatique
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                SMS de rappel envoyé 24h avant votre consultation
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
