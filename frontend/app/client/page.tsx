import Link from 'next/link';

export default function ClientSpacePage() {
  return (
    <div className="bg-slate-100 py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <h1 className="text-3xl font-bold text-primary">Espace client</h1>
        <p className="text-sm text-slate-600">
          Retrouvez l’historique de vos missions, vos factures et vos devis acceptés. Téléchargez vos documents et pilotez vos accès.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/dashboard" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-primary">Tableau de bord</h2>
            <p className="mt-2 text-sm text-slate-600">Visualisez l’état de vos missions et statistiques clés.</p>
          </Link>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-primary">Factures & documents</h2>
            <p className="mt-2 text-sm text-slate-600">
              Les factures validées apparaîtront ici avec un lien de téléchargement sécurisé.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary">Accès API et automatisations</h2>
          <p className="mt-2 text-sm text-slate-600">
            Connectez jrdriving à vos outils internes via nos webhooks sécurisés et nos scénarios n8n prêts à l’emploi.
          </p>
        </div>
      </div>
    </div>
  );
}
