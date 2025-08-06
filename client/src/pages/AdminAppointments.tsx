import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Calendar as CalendarIcon,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
  Clock,
  User,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  RefreshCw,
  List,
  Grid,
} from "lucide-react";
import AppointmentCalendar from "@/components/AppointmentCalendar";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  AppointmentsService,
  servicesInfo,
  Appointment,
} from "@/services/appointments";
import { NotificationEventHandler } from "@/services/notifications";

// Types importés du service

const statusConfig = {
  en_attente: {
    label: "En attente",
    color: "bg-yellow-100 text-yellow-800",
    icon: AlertCircle,
  },
  confirme: {
    label: "Confirmé",
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
  },
  annule: { label: "Annulé", color: "bg-red-100 text-red-800", icon: XCircle },
  termine: {
    label: "Terminé",
    color: "bg-blue-100 text-blue-800",
    icon: CheckCircle,
  },
};

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Charger les rendez-vous au montage du composant
  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = () => {
    const data = AppointmentsService.getAll();
    setAppointments(data);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");

  // Filtrage des rendez-vous
  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.phone.includes(searchTerm) ||
      appointment.service.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;

    const matchesDate =
      !dateFilter || appointment.date === format(dateFilter, "yyyy-MM-dd");

    return matchesSearch && matchesStatus && matchesDate;
  });

  const updateAppointmentStatus = async (
    appointmentId: string,
    newStatus: Appointment["status"],
  ) => {
    const currentAppointment = appointments.find(
      (apt) => apt.id === appointmentId,
    );
    if (!currentAppointment) return;

    const oldStatus = currentAppointment.status;
    AppointmentsService.update(appointmentId, { status: newStatus });

    // Envoyer les notifications de changement de statut
    const updatedAppointment = { ...currentAppointment, status: newStatus };
    await NotificationEventHandler.onAppointmentStatusChanged(
      updatedAppointment,
      oldStatus,
    );

    loadAppointments(); // Recharger les données
  };

  const deleteAppointment = (appointmentId: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce rendez-vous ?")) {
      AppointmentsService.delete(appointmentId);
      loadAppointments(); // Recharger les données
    }
  };

  const counts = AppointmentsService.getStats();

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-playfair font-bold mb-4">
                Gestion des Rendez-vous
              </h1>
              <p className="text-xl text-gray-300">
                Interface d'administration pour gérer les réservations
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={
                    viewMode === "list"
                      ? "bg-white text-navy-900"
                      : "text-white hover:bg-white/20"
                  }
                >
                  <List className="w-4 h-4 mr-2" />
                  Liste
                </Button>
                <Button
                  variant={viewMode === "calendar" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("calendar")}
                  className={
                    viewMode === "calendar"
                      ? "bg-white text-navy-900"
                      : "text-white hover:bg-white/20"
                  }
                >
                  <Grid className="w-4 h-4 mr-2" />
                  Calendrier
                </Button>
              </div>
              <Button
                variant="outline"
                className="border-white/60 text-white hover:bg-white/20 hover:border-white bg-white/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Exporter
              </Button>
              <Button
                className="bg-mint-600 hover:bg-mint-700"
                onClick={loadAppointments}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Actualiser
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card className="p-4 border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-navy-900">
                    {counts.total}
                  </p>
                </div>
                <CalendarIcon className="w-8 h-8 text-gray-400" />
              </div>
            </Card>

            <Card className="p-4 border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">En attente</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {counts.en_attente}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-yellow-400" />
              </div>
            </Card>

            <Card className="p-4 border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Confirmés</p>
                  <p className="text-2xl font-bold text-green-600">
                    {counts.confirme}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </Card>

            <Card className="p-4 border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Terminés</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {counts.termine}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
            </Card>

            <Card className="p-4 border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Urgents</p>
                  <p className="text-2xl font-bold text-red-600">
                    {counts.urgent}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher un patient..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filtrer par statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="en_attente">En attente</SelectItem>
                  <SelectItem value="confirme">Confirmé</SelectItem>
                  <SelectItem value="annule">Annulé</SelectItem>
                  <SelectItem value="termine">Terminé</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-gray-600">
              {filteredAppointments.length} résultat(s) sur{" "}
              {appointments.length}
            </div>
          </div>
        </div>
      </section>

      {/* Appointments Content */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {viewMode === "calendar" ? (
            <AppointmentCalendar onAppointmentSelect={setSelectedAppointment} />
          ) : (
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => {
                const statusInfo = statusConfig[appointment.status];
                const StatusIcon = statusInfo.icon;

                return (
                  <Card
                    key={appointment.id}
                    className="border-0 shadow-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-navy-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-navy-900">
                              {appointment.firstName} {appointment.lastName}
                            </h3>
                            <p className="text-gray-600">
                              {servicesInfo[
                                appointment.service as keyof typeof servicesInfo
                              ]?.name || appointment.service}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          {appointment.isUrgent && (
                            <Badge className="bg-red-100 text-red-800">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              Urgent
                            </Badge>
                          )}
                          <Badge className={statusInfo.color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusInfo.label}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">
                            {format(new Date(appointment.date), "dd MMM yyyy", {
                              locale: fr,
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{appointment.phone}</span>
                        </div>
                        {appointment.email && (
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="text-sm">{appointment.email}</span>
                          </div>
                        )}
                      </div>

                      {appointment.comments && (
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <p className="text-sm text-gray-700">
                            <strong>Commentaires :</strong>{" "}
                            {appointment.comments}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Créé le{" "}
                          {format(
                            new Date(appointment.createdAt),
                            "dd/MM/yyyy à HH:mm",
                            { locale: fr },
                          )}
                        </div>

                        <div className="flex space-x-2">
                          {appointment.status === "en_attente" && (
                            <>
                              <Button
                                size="sm"
                                onClick={() =>
                                  updateAppointmentStatus(
                                    appointment.id,
                                    "confirme",
                                  )
                                }
                                className="bg-green-600 hover:bg-green-700 text-white"
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Confirmer
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  updateAppointmentStatus(
                                    appointment.id,
                                    "annule",
                                  )
                                }
                                className="border-red-200 text-red-600 hover:bg-red-50"
                              >
                                <XCircle className="w-4 h-4 mr-1" />
                                Annuler
                              </Button>
                            </>
                          )}

                          {appointment.status === "confirme" && (
                            <Button
                              size="sm"
                              onClick={() =>
                                updateAppointmentStatus(
                                  appointment.id,
                                  "termine",
                                )
                              }
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Marquer terminé
                            </Button>
                          )}

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedAppointment(appointment)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Détails
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteAppointment(appointment.id)}
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {filteredAppointments.length === 0 && (
                <Card className="p-12 text-center border-0 shadow-lg">
                  <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Aucun rendez-vous trouvé
                  </h3>
                  <p className="text-gray-500">
                    Modifiez vos critères de recherche ou filtres
                  </p>
                </Card>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Appointment Details Modal (simplified) */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-playfair font-bold text-navy-900">
                  Détails du rendez-vous
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setSelectedAppointment(null)}
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Prénom
                    </label>
                    <p className="text-lg text-navy-900">
                      {selectedAppointment.firstName}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Nom
                    </label>
                    <p className="text-lg text-navy-900">
                      {selectedAppointment.lastName}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Téléphone
                    </label>
                    <p className="text-lg text-navy-900">
                      {selectedAppointment.phone}
                    </p>
                  </div>
                  {selectedAppointment.email && (
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <p className="text-lg text-navy-900">
                        {selectedAppointment.email}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Service
                  </label>
                  <p className="text-lg text-navy-900">
                    {selectedAppointment.service}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Date
                    </label>
                    <p className="text-lg text-navy-900">
                      {format(
                        new Date(selectedAppointment.date),
                        "dd MMMM yyyy",
                        { locale: fr },
                      )}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Heure
                    </label>
                    <p className="text-lg text-navy-900">
                      {selectedAppointment.time}
                    </p>
                  </div>
                </div>

                {selectedAppointment.comments && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Commentaires
                    </label>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                      {selectedAppointment.comments}
                    </p>
                  </div>
                )}

                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Badge
                    className={statusConfig[selectedAppointment.status].color}
                  >
                    {statusConfig[selectedAppointment.status].label}
                  </Badge>
                  {selectedAppointment.isUrgent && (
                    <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </Layout>
  );
}
