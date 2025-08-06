// Service de notifications pour les rendez-vous

export interface EmailNotification {
  to: string;
  subject: string;
  body: string;
  type: "confirmation" | "reminder" | "status_change";
}

export interface SMSNotification {
  phone: string;
  message: string;
  type: "confirmation" | "reminder" | "status_change";
}

export class NotificationService {
  // Envoyer une confirmation de rendez-vous par email
  static async sendAppointmentConfirmation(appointment: any): Promise<boolean> {
    console.log("📧 Envoi de la confirmation par email...");

    const emailContent = this.generateConfirmationEmail(appointment);

    // Simulation d'envoi d'email (ici vous intégreriez avec un service comme SendGrid, Mailgun, etc.)
    try {
      await this.simulateEmailSend(emailContent);
      console.log("✅ Email de confirmation envoyé avec succès");
      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email:", error);
      return false;
    }
  }

  // Envoyer un SMS de rappel
  static async sendSMSReminder(appointment: any): Promise<boolean> {
    console.log("📱 Envoi du SMS de rappel...");

    const smsContent = this.generateReminderSMS(appointment);

    try {
      await this.simulateSMSSend(smsContent);
      console.log("✅ SMS de rappel envoyé avec succès");
      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi du SMS:", error);
      return false;
    }
  }

  // Notifier un changement de statut
  static async notifyStatusChange(
    appointment: any,
    oldStatus: string,
    newStatus: string,
  ): Promise<boolean> {
    console.log(
      `📢 Notification de changement de statut: ${oldStatus} → ${newStatus}`,
    );

    const notification = this.generateStatusChangeNotification(
      appointment,
      oldStatus,
      newStatus,
    );

    try {
      if (appointment.email) {
        await this.simulateEmailSend(notification.email);
      }
      await this.simulateSMSSend(notification.sms);
      console.log("✅ Notifications de changement de statut envoyées");
      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi des notifications:", error);
      return false;
    }
  }

  // Générer le contenu de l'email de confirmation
  private static generateConfirmationEmail(
    appointment: any,
  ): EmailNotification {
    const subject = `Confirmation de votre rendez-vous - OptiVision`;
    const body = `
Bonjour ${appointment.firstName} ${appointment.lastName},

Nous avons bien reçu votre demande de rendez-vous et vous en remercions.

📅 Détails de votre rendez-vous :
• Date : ${new Date(appointment.date).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
• Heure : ${appointment.time}
• Service : ${appointment.service}
${appointment.comments ? `• Notes : ${appointment.comments}` : ""}

⏰ Statut : En attente de confirmation
Notre équipe vous contactera sous 24h pour confirmer définitivement votre créneau.

📞 Contact : 01 23 45 67 89
📧 Email : contact@optivision.fr

Cordialement,
L'équipe OptiVision

---
Ce message a été envoyé automatiquement, merci de ne pas y répondre.
    `;

    return {
      to: appointment.email || "",
      subject,
      body,
      type: "confirmation",
    };
  }

  // Générer le contenu du SMS de rappel
  private static generateReminderSMS(appointment: any): SMSNotification {
    const message = `
OptiVision - Rappel RDV demain ${appointment.time} pour ${appointment.service}. 
Pour annuler/reporter: 01 23 45 67 89. 
123 Av. de la Vision, Paris.
    `.trim();

    return {
      phone: appointment.phone,
      message,
      type: "reminder",
    };
  }

  // Générer les notifications de changement de statut
  private static generateStatusChangeNotification(
    appointment: any,
    oldStatus: string,
    newStatus: string,
  ) {
    const statusMessages = {
      en_attente: "en attente",
      confirme: "confirmé",
      annule: "annulé",
      termine: "terminé",
    };

    const emailSubject = `Mise à jour de votre rendez-vous - OptiVision`;
    const emailBody = `
Bonjour ${appointment.firstName} ${appointment.lastName},

Le statut de votre rendez-vous a été mis à jour :

📅 Rendez-vous du ${new Date(appointment.date).toLocaleDateString("fr-FR")} à ${appointment.time}
📝 Nouveau statut : ${statusMessages[newStatus as keyof typeof statusMessages]}

${
  newStatus === "confirme"
    ? `
✅ Votre rendez-vous est maintenant confirmé !
Merci de vous présenter 10 minutes avant l'heure prévue.

📍 Adresse : 123 Avenue de la Vision, 75001 Paris
📞 Contact : 01 23 45 67 89
`
    : ""
}

${
  newStatus === "annule"
    ? `
❌ Votre rendez-vous a été annulé.
N'hésitez pas à nous contacter pour reprendre un nouveau créneau.

📞 Contact : 01 23 45 67 89
📧 Email : contact@optivision.fr
`
    : ""
}

Cordialement,
L'équipe OptiVision
    `;

    const smsMessage =
      newStatus === "confirme"
        ? `OptiVision - RDV confirmé le ${new Date(appointment.date).toLocaleDateString("fr-FR")} à ${appointment.time}. 123 Av. de la Vision, Paris. Info: 01 23 45 67 89`
        : `OptiVision - RDV du ${new Date(appointment.date).toLocaleDateString("fr-FR")} ${statusMessages[newStatus as keyof typeof statusMessages]}. Contact: 01 23 45 67 89`;

    return {
      email: {
        to: appointment.email || "",
        subject: emailSubject,
        body: emailBody,
        type: "status_change" as const,
      },
      sms: {
        phone: appointment.phone,
        message: smsMessage,
        type: "status_change" as const,
      },
    };
  }

  // Simulation d'envoi d'email
  private static async simulateEmailSend(
    email: EmailNotification,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          // 90% de succès
          console.log(`📧 Email envoyé à ${email.to}:`, email.subject);
          resolve();
        } else {
          reject(new Error("Échec de l'envoi d'email"));
        }
      }, 500);
    });
  }

  // Simulation d'envoi de SMS
  private static async simulateSMSSend(sms: SMSNotification): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.05) {
          // 95% de succès
          console.log(
            `📱 SMS envoyé au ${sms.phone}:`,
            sms.message.substring(0, 50) + "...",
          );
          resolve();
        } else {
          reject(new Error("Échec de l'envoi de SMS"));
        }
      }, 300);
    });
  }

  // Programmer un rappel automatique
  static scheduleReminder(appointment: any): void {
    console.log(`⏰ Rappel programmé pour le rendez-vous ${appointment.id}`);

    // Dans un vrai système, ceci serait géré par un service de tâches programmées
    // comme cron jobs, AWS Lambda avec CloudWatch Events, etc.

    const appointmentDate = new Date(appointment.date + "T" + appointment.time);
    const reminderTime = new Date(
      appointmentDate.getTime() - 24 * 60 * 60 * 1000,
    ); // 24h avant

    console.log(
      `📅 Rappel prévu pour: ${reminderTime.toLocaleString("fr-FR")}`,
    );

    // Simulation : si le rappel devrait être envoyé maintenant (pour les tests)
    if (reminderTime <= new Date()) {
      console.log("���� Envoi immédiat du rappel (test)");
      this.sendSMSReminder(appointment);
    }
  }

  // Obtenir l'historique des notifications
  static getNotificationHistory(appointmentId: string): any[] {
    // Dans un vrai système, ceci récupérerait l'historique depuis la base de données
    return [
      {
        id: "1",
        type: "confirmation",
        method: "email",
        sentAt: new Date().toISOString(),
        status: "sent",
      },
      {
        id: "2",
        type: "reminder",
        method: "sms",
        sentAt: new Date().toISOString(),
        status: "sent",
      },
    ];
  }
}

// Gestionnaire d'événements pour les notifications automatiques
export class NotificationEventHandler {
  // Gérer la création d'un nouveau rendez-vous
  static async onAppointmentCreated(appointment: any): Promise<void> {
    console.log("🆕 Nouveau rendez-vous créé, envoi des notifications...");

    // Envoyer la confirmation immédiatement
    if (appointment.email) {
      await NotificationService.sendAppointmentConfirmation(appointment);
    }

    // Programmer le rappel
    NotificationService.scheduleReminder(appointment);
  }

  // Gérer le changement de statut d'un rendez-vous
  static async onAppointmentStatusChanged(
    appointment: any,
    oldStatus: string,
  ): Promise<void> {
    console.log(
      `📝 Statut du rendez-vous ${appointment.id} changé: ${oldStatus} → ${appointment.status}`,
    );

    // Envoyer les notifications de changement de statut
    await NotificationService.notifyStatusChange(
      appointment,
      oldStatus,
      appointment.status,
    );
  }
}
