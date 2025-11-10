import Link from 'next/link';
import { MissionTable } from '../../components/dashboard/MissionTable';
import { KpiCards } from '../../components/dashboard/KpiCards';

const quickActions = [
  {
    title: 'Créer une mission',
    description: 'Planifier un convoyage, assigner un chauffeur et générer les documents.',
    href: '/admin/missions'
  },
  {
    title: 'Inviter un chauffeur',
    description: 'Envoyer un accès sécurisé et gérer ses documents administratifs.',
    href: '/admin/chauffeurs'
  },
  {
    title: 'Accéder aux factures',
    description: 'Télécharger vos factures, reçus et suivre vos règlements.',
    href: '/client/factures'
  }
];

export default function DashboardPage() {
  return (
    <div className="bg-slate-100 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">Tableau de bord</h1>
          <p className="mt-2 text-sm text-slate-600">
            Visualisez vos missions, vos indicateurs de performance et accédez à vos automatisations en un coup d’œil.
          </p>
        </div>
        <KpiCards />
        <div className="grid gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">{action.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{action.description}</p>
            </Link>
          ))}
        </div>
        <section>
          <h2 className="text-xl font-semibold text-primary">Missions en cours</h2>
          <p className="text-sm text-slate-500">Suivi en temps réel des convoyages assignés à vos chauffeurs.</p>
          <div className="mt-4">
            <MissionTable />
          </div>
        </section>
      </div>
    </div>
  );
}
