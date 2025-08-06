// Service pour gérer les rendez-vous
// TODO: Remplacer par l'intégration Supabase

export interface Appointment {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  comments?: string;
  status: "en_attente" | "confirme" | "annule" | "termine";
  isUrgent: boolean;
  createdAt: string;
  updatedAt?: string;
}

const STORAGE_KEY = "optivision_appointments";

// Données par défaut
const defaultAppointments: Appointment[] = [
  {
    id: "1",
    firstName: "Marie",
    lastName: "Dubois",
    phone: "01 23 45 67 89",
    email: "marie.dubois@email.com",
    service: "examen-vue",
    date: "2024-03-25",
    time: "09:30",
    comments: "Problème de vision de près",
    status: "en_attente",
    isUrgent: false,
    createdAt: "2024-03-20T10:30:00Z",
  },
  {
    id: "2",
    firstName: "Pierre",
    lastName: "Martin",
    phone: "01 34 56 78 90",
    email: "pierre.martin@email.com",
    service: "reparation",
    date: "2024-03-25",
    time: "14:00",
    comments: "Ajustement urgent des lunettes",
    status: "confirme",
    isUrgent: true,
    createdAt: "2024-03-22T15:45:00Z",
  },
];

export class AppointmentsService {
  // Initialiser les données par défaut si pas présentes
  static init() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultAppointments));
    }
  }

  // Récupérer tous les rendez-vous
  static getAll(): Appointment[] {
    this.init();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // Récupérer un rendez-vous par ID
  static getById(id: string): Appointment | null {
    const appointments = this.getAll();
    return appointments.find((apt) => apt.id === id) || null;
  }

  // Créer un nouveau rendez-vous
  static create(
    appointmentData: Omit<Appointment, "id" | "createdAt" | "status">,
  ): Appointment {
    const appointments = this.getAll();
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
      status: "en_attente",
      createdAt: new Date().toISOString(),
    };

    appointments.push(newAppointment);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));

    return newAppointment;
  }

  // Mettre à jour un rendez-vous
  static update(id: string, updates: Partial<Appointment>): Appointment | null {
    const appointments = this.getAll();
    const index = appointments.findIndex((apt) => apt.id === id);

    if (index === -1) return null;

    appointments[index] = {
      ...appointments[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    return appointments[index];
  }

  // Supprimer un rendez-vous
  static delete(id: string): boolean {
    const appointments = this.getAll();
    const filteredAppointments = appointments.filter((apt) => apt.id !== id);

    if (filteredAppointments.length === appointments.length) {
      return false; // Aucun rendez-vous supprimé
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredAppointments));
    return true;
  }

  // Filtrer les rendez-vous par statut
  static getByStatus(status: Appointment["status"]): Appointment[] {
    return this.getAll().filter((apt) => apt.status === status);
  }

  // Filtrer les rendez-vous par date
  static getByDate(date: string): Appointment[] {
    return this.getAll().filter((apt) => apt.date === date);
  }

  // Vérifier les créneaux disponibles pour une date
  static getAvailableSlots(date: string): string[] {
    const allSlots = [
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

    const bookedSlots = this.getByDate(date)
      .filter((apt) => apt.status !== "annule")
      .map((apt) => apt.time);

    return allSlots.filter((slot) => !bookedSlots.includes(slot));
  }

  // Obtenir des statistiques
  static getStats() {
    const appointments = this.getAll();
    return {
      total: appointments.length,
      en_attente: appointments.filter((apt) => apt.status === "en_attente")
        .length,
      confirme: appointments.filter((apt) => apt.status === "confirme").length,
      termine: appointments.filter((apt) => apt.status === "termine").length,
      annule: appointments.filter((apt) => apt.status === "annule").length,
      urgent: appointments.filter(
        (apt) => apt.isUrgent && apt.status !== "termine",
      ).length,
    };
  }

  // Rechercher des rendez-vous
  static search(query: string): Appointment[] {
    const appointments = this.getAll();
    const lowerQuery = query.toLowerCase();

    return appointments.filter(
      (apt) =>
        apt.firstName.toLowerCase().includes(lowerQuery) ||
        apt.lastName.toLowerCase().includes(lowerQuery) ||
        apt.phone.includes(query) ||
        apt.email?.toLowerCase().includes(lowerQuery) ||
        apt.service.toLowerCase().includes(lowerQuery),
    );
  }
}

// Services disponibles avec leurs informations
export const servicesInfo = {
  "examen-vue": {
    name: "Examen de la vue",
    duration: 45,
    description: "Bilan visuel complet avec équipements de pointe",
  },
  "conseil-montures": {
    name: "Conseil en montures",
    duration: 30,
    description: "Accompagnement personnalisé pour choisir vos lunettes",
  },
  "adaptation-lentilles": {
    name: "Adaptation lentilles",
    duration: 60,
    description: "Essai et adaptation de lentilles de contact",
  },
  reparation: {
    name: "Réparation / Ajustement",
    duration: 15,
    description: "Réparation et ajustement de vos lunettes",
  },
  "examen-enfant": {
    name: "Examen enfant",
    duration: 30,
    description: "Examen spécialisé pour les enfants",
  },
  urgence: {
    name: "Urgence ophtalmique",
    duration: 20,
    description: "Consultation d'urgence",
  },
};
