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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary">Une plateforme opérationnelle, pensée pour la performance</h2>
          <p className="mt-3 text-slate-600">
            De la prise de commande à la facturation, jrdriving automatise chaque étape et s’intègre à vos outils métiers.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <div key={module.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <module.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-4 text-xl font-semibold text-primary">{module.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
