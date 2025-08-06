import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  Clock,
  User,
  Phone,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
} from "lucide-react";
import { useState, useEffect } from "react";
import { format, isSameDay } from "date-fns";
import { fr } from "date-fns/locale";
import {
  AppointmentsService,
  Appointment,
  servicesInfo,
} from "@/services/appointments";

interface AppointmentCalendarProps {
  onAppointmentSelect?: (appointment: Appointment) => void;
}

const statusConfig = {
  en_attente: {
    label: "En attente",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: AlertCircle,
  },
  confirme: {
    label: "Confirmé",
    color: "bg-green-100 text-green-800 border-green-200",
    icon: CheckCircle,
  },
  annule: {
    label: "Annulé",
    color: "bg-red-100 text-red-800 border-red-200",
    icon: XCircle,
  },
  termine: {
    label: "Terminé",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: CheckCircle,
  },
};

export default function AppointmentCalendar({
  onAppointmentSelect,
}: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [dayAppointments, setDayAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const dateStr = format(selectedDate, "yyyy-MM-dd");
      const dayAppts = appointments.filter((apt) => apt.date === dateStr);
      setDayAppointments(dayAppts.sort((a, b) => a.time.localeCompare(b.time)));
    }
  }, [selectedDate, appointments]);

  const loadAppointments = () => {
    const data = AppointmentsService.getAll();
    setAppointments(data);
  };

  // Obtenir les dates avec des rendez-vous
  const getDatesWithAppointments = (): Date[] => {
    return appointments
      .map((apt) => new Date(apt.date))
      .filter(
        (date, index, self) =>
          index === self.findIndex((d) => isSameDay(d, date)),
      );
  };

  // Obtenir le nombre de rendez-vous pour une date
  const getAppointmentCountForDate = (date: Date): number => {
    const dateStr = format(date, "yyyy-MM-dd");
    return appointments.filter(
      (apt) => apt.date === dateStr && apt.status !== "annule",
    ).length;
  };

  // Personnaliser les jours avec des rendez-vous
  const modifiers = {
    hasAppointments: getDatesWithAppointments(),
  };

  const modifiersStyles = {
    hasAppointments: {
      backgroundColor: "rgba(45, 212, 191, 0.1)",
      color: "rgb(15, 118, 110)",
      fontWeight: "bold",
      border: "2px solid rgba(45, 212, 191, 0.3)",
      borderRadius: "8px",
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <Card className="p-6 border-0 shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-2">
            Calendrier des Rendez-vous
          </h3>
          <p className="text-gray-600 text-sm">
            Les dates avec des rendez-vous sont surlignées en bleu
          </p>
        </div>

        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          locale={fr}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          className="rounded-md border"
        />

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-navy-900 mb-3">Légende</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-mint-100 border-2 border-mint-300 rounded"></div>
              <span className="text-gray-600">Jours avec rendez-vous</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
              <span className="text-gray-600">Jours sans rendez-vous</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Day Schedule */}
      <Card className="p-6 border-0 shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-playfair font-semibold text-navy-900 mb-2">
            Planning du{" "}
            {selectedDate
              ? format(selectedDate, "dd MMMM yyyy", { locale: fr })
              : ""}
          </h3>
          <p className="text-gray-600 text-sm">
            {dayAppointments.length} rendez-vous programmé
            {dayAppointments.length > 1 ? "s" : ""}
          </p>
        </div>

        {dayAppointments.length === 0 ? (
          <div className="text-center py-12">
            <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-600 mb-2">
              Aucun rendez-vous
            </h4>
            <p className="text-gray-500">
              Aucun rendez-vous programmé pour cette date
            </p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {dayAppointments.map((appointment) => {
              const statusInfo = statusConfig[appointment.status];
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={appointment.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-navy-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">
                          {appointment.firstName} {appointment.lastName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {servicesInfo[
                            appointment.service as keyof typeof servicesInfo
                          ]?.name || appointment.service}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {appointment.isUrgent && (
                        <Badge className="bg-red-100 text-red-800 text-xs">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Urgent
                        </Badge>
                      )}
                      <Badge className={`${statusInfo.color} text-xs`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {statusInfo.label}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{appointment.phone}</span>
                    </div>
                  </div>

                  {appointment.comments && (
                    <div className="bg-gray-50 rounded p-2 mb-3">
                      <p className="text-xs text-gray-700">
                        <strong>Note:</strong> {appointment.comments}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onAppointmentSelect?.(appointment)}
                      className="text-xs"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Détails
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
