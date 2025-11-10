# Automatisations recommandées

Avant de mettre en place les automatisations, validez dans n8n ou sur votre VPS les éléments suivants :

1. **Nettoyage des tokens expirés (cron toutes les nuits)**
   - Endpoint à utiliser : `DELETE /api/auth/refresh` (à implémenter si nécessaire) ou script Prisma supprimant les `RefreshToken` expirés.
   - Peut être exécuté via un cron système qui lance `node dist/scripts/cleanupTokens.js` (script à créer si besoin).

2. **Synchronisation Orgatour / n8n (toutes les heures)**
   - Utiliser l’endpoint `GET /api/missions` pour récupérer les missions à synchroniser.
   - Envoyer les données vers Orgatour ou Google Sheets via vos workflows existants.

3. **Sauvegarde base de données MySQL (quotidienne)**
   - Planifier un `mysqldump` depuis votre VPS ou via un job Coolify.

4. **Rapport d’activité hebdomadaire**
   - Générer un rapport consolidé (missions terminées, CA, taux de ponctualité) et l’envoyer par email via un script Node + Nodemailer.

5. **Rappels chauffeurs (2h avant mission)**
   - Workflow n8n déclenché via webhook `POST /api/notifications` (à créer selon vos besoins) pour pousser un SMS / WhatsApp.

Ces tâches sont proposées pour guider votre implémentation. Adaptez-les selon vos besoins métiers et l’infrastructure choisie.
