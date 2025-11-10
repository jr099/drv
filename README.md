# jrdriving – Plateforme de convoyage automobile

Solution complète de Galaxj Air Digital pour gérer le pôle convoyage "jrdriving" : vitrine commerciale, portail client, espace chauffeurs et back-office connecté aux automatisations (n8n, Orgatour, Google Sheets).

## Architecture

- **frontend/** – Application Next.js 14 + Tailwind CSS (vitrine, espaces clients/chauffeurs, formulaires IA, chatbot).
- **backend/** – API Express + Prisma (MySQL) avec authentification sécurisée, gestion des missions, devis et notifications.
- **prisma/** – Schéma BDD relationnelle pour utilisateurs, missions, documents, notifications, intégrations.
- **docs/** – Recommandations d’automatisation (cron / n8n / Orgatour).

## Prérequis

- Node.js 18+
- npm 9+
- Base de données MySQL 8 (ou compatible Aurora / MariaDB)
- Accès SMTP pour l’envoi d’e-mails (réinitialisation mot de passe)

## Variables d’environnement

Copiez le fichier `.env.example` fourni et adaptez-le :

```bash
cp backend/.env.example backend/.env
```

> Pour le frontend, créez si besoin un fichier `frontend/.env.local` contenant `NEXT_PUBLIC_API_URL`.

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Chaîne de connexion MySQL (format : `mysql://USER:PASSWORD@HOST:PORT/DATABASE`). |
| `JWT_SECRET` | Secret JWT (>=32 caractères) pour les tokens d’accès. |
| `REFRESH_TOKEN_SECRET` | Secret JWT pour les tokens de rafraîchissement. |
| `RESET_TOKEN_SECRET` | Secret pour tokens de réinitialisation de mot de passe. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` | Paramètres SMTP pour l’envoi d’e-mails. |
| `APP_URL` | URL publique du frontend (ex : `https://app.jrdriving.fr`). |
| `BACKEND_PORT` | Port d’exposition de l’API Express (défaut : 4000). |
| `STORAGE_PATH` | Dossier de stockage des fichiers uploadés. |
| `NEXT_PUBLIC_API_URL` (frontend) | URL de base de l’API (ex : `https://api.jrdriving.fr/api`). |

## Installation

```bash
npm install --workspaces
```

### Génération Prisma

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
cd ..
```

> **Remarque** : configurez vos accès MySQL avant d’exécuter les migrations.

## Lancement en développement

Dans le dossier racine :

```bash
npm run dev
```

- API disponible sur `http://localhost:4000`
- Frontend sur `http://localhost:3000`

## Commandes utiles

| Commande | Description |
| --- | --- |
| `npm run build` | Build frontend et backend. |
| `npm run start` | Démarre l’API compilée (`backend/dist`). |
| `npm run lint` | Lint des deux projets. |
| `npm run format` | Formatage Prettier front + back. |
| `npm run dev --workspace backend` | Démarrage API uniquement. |
| `npm run dev --workspace frontend` | Démarrage frontend uniquement. |

## Authentification & sécurité

- Hashage des mots de passe avec Argon2.
- Tokens JWT (access + refresh) + gestion de rafraîchissement.
- Réinitialisation de mot de passe par e-mail (token dédié).
- Middleware d’authentification + autorisation par rôle (ADMIN, MANAGER, DRIVER, CLIENT).
- Rate limiting, Helmet, validation Zod des entrées.

## Fonctionnalités clés

- **Devis IA** : formulaire connecté à l’API pour créer des `QuoteRequest` et synchroniser vos workflows n8n/Google Sheets.
- **Gestion missions** : création, suivi, affectation chauffeur, génération d’événements et pièces jointes.
- **Espace chauffeurs** : visualisation des missions assignées, notes de frais, dépôt de documents.
- **Espace administration** : gestion centralisée, statistiques et logs d’intégration.
- **Notifications** : stockage des messages système, extension possible vers SMS/WhatsApp.
- **Chatbot IA** : widget frontend prêt à connecter à votre fournisseur IA (OpenAI, Azure, etc.).

## Automatisations

Consultez `backend/docs/automation.md` pour la liste des tâches CRON / scénarios n8n recommandés (nettoyage tokens, synchronisation Orgatour, sauvegardes MySQL, rapports, rappels chauffeurs).

## Déploiement (Coolify / VPS)

1. **Backend**
   - Configurer un service Node 18.
   - Déployer le répertoire `backend`.
   - Définir les variables d’environnement listées ci-dessus.
   - Exécuter `npm install`, `npx prisma migrate deploy`, puis `npm run build` et `npm run start`.
2. **Frontend**
   - Déployer le dossier `frontend` en mode Next.js standalone (`npm run build`, `npm run start`).
   - Renseigner `NEXT_PUBLIC_API_URL` vers l’API publiée.
3. **Base de données**
   - Créer la base MySQL avec un utilisateur dédié et TLS si disponible.
   - Ouvrir le port uniquement à vos services (backend / outils d’administration).
4. **Stockage fichiers**
   - Monter un volume persistant pour `STORAGE_PATH`.
5. **Sécurité**
   - Activer HTTPS (reverse proxy type Traefik ou Nginx).
   - Forcer l’utilisation de mots de passe robustes et rotation des secrets.

## Tests & validation

- Frontend : Next lint (`npm run lint --workspace frontend`).
- Backend : ESLint + tests unitaires à ajouter selon vos besoins (`npm run lint --workspace backend`).
- Santé API : `GET /health`.
- Documentation interactive : `/docs` (Swagger UI).

## Roadmap suggérée

- Connecter le chatbot IA au backend (OpenAI / Azure OpenAI) avec un endpoint `/api/assistant`.
- Implémenter les scripts CRON listés dans `automation.md`.
- Ajouter la génération PDF des ordres de mission et factures.
- Compléter les webhooks n8n / Orgatour pour la synchronisation bidirectionnelle.
