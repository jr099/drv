import { Cog6ToothIcon, ShieldCheckIcon, ChartBarIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const modules = [
  {
    title: 'Portail administration',
    description: 'Tableau de bord en temps réel, génération de documents (factures, ordres de mission) et KPI personnalisés.',
    icon: ChartBarIcon
  },
  {
    title: 'Espace chauffeurs',
    description: 'Planning des missions, suivi kilométrique, notes de frais et dépôt de documents depuis mobile.',
    icon: DocumentCheckIcon
  },
  {
    title: 'Automatisation IA',
    description: 'Chatbot intelligent, notifications mail/SMS et synchronisation n8n, Orgatour, Google Sheets.',
    icon: Cog6ToothIcon
  },
  {
    title: 'Sécurité & conformité',
    description: 'Gestion des accès par rôle, RGPD, traçabilité, sauvegardes planifiées et chiffrement des données sensibles.',
    icon: ShieldCheckIcon
  }
];

export function PlatformOverview() {
  return (
    <section className="section">
      <div className="section-shell space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="section-eyebrow bg-orange-50 text-accent">Plateforme</p>
          <h2 className="section-title">Une suite modulaire orientée performance opérationnelle</h2>
          <p className="section-subtitle mx-auto">
            De la prise de commande à la facturation, jrdriving automatise chaque étape, se connecte à vos outils métiers et offre une
            vision consolidée de vos indicateurs clés.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <div key={module.title} className="surface-card h-full bg-white/95">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <module.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{module.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
