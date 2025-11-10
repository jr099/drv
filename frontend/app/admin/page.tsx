const workflows = [
  {
    title: 'Génération automatique de documents',
    description: 'Créez vos ordres de mission, lettres de voiture et factures au format PDF, prêts à être envoyés.'
  },
  {
    title: 'Synchronisation API Orgatour / n8n',
    description: 'Mettez à jour vos missions, chauffeurs et véhicules depuis vos workflows existants en temps réel.'
  },
  {
    title: 'Notifications multi-canaux',
    description: 'Envoyez des alertes e-mail, SMS et WhatsApp lorsque le statut d’une mission évolue.'
  },
  {
    title: 'Tableau de bord IA',
    description: 'Identifiez vos goulets d’étranglement, estimez vos besoins en chauffeurs et optimisez vos délais.'
  }
];

export default function AdminPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-primary">Espace administration</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Centralisez la gestion de vos missions, clients et chauffeurs. Configurez vos automatisations, suivez votre chiffre d’affaires
          et générez vos documents en quelques clics.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {workflows.map((workflow) => (
            <div key={workflow.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-primary">{workflow.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{workflow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
