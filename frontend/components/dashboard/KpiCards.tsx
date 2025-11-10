const stats = [
  { label: 'Missions du mois', value: 128, trend: '+12% vs N-1' },
  { label: 'Chiffre d’affaires', value: '84 200 €', trend: '+8% vs N-1' },
  { label: 'Ponctualité', value: '98%', trend: 'Objectif atteint' },
  { label: 'Satisfaction clients', value: '4.9/5', trend: 'Basée sur 320 avis' }
];

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
          <p className="mt-3 text-2xl font-bold text-primary">{stat.value}</p>
          <p className="text-xs text-slate-500">{stat.trend}</p>
        </div>
      ))}
    </div>
  );
}
