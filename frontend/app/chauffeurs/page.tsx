import Link from 'next/link';

const benefits = [
  {
    title: 'Affectations en temps réel',
    description: 'Recevez vos missions et instructions directement sur votre smartphone avec signature électronique.'
  },
  {
    title: 'Gestion des frais simplifiée',
    description: 'Déclarez vos dépenses, joignez les justificatifs et suivez vos remboursements en un clin d’œil.'
  },
  {
    title: 'Support dédié',
    description: 'Equipe logistique disponible 24/7, assistance hotline et documentation centralisée sur Google Drive.'
  }
];

const onboardingSteps = [
  'Créer votre compte chauffeur et renseigner vos documents',
  'Signer votre contrat cadre et valider vos disponibilités',
  'Recevoir vos premières missions et activer les notifications',
  'Suivre vos performances et vos gains depuis le tableau de bord'
];

export default function ChauffeursPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold">Espace chauffeurs jrdriving</h1>
          <p className="mt-4 text-slate-200">
            Pilotez vos missions, vos notes de frais et vos documents administratifs depuis une interface mobile-first intégrée à
            Orgatour et Google Drive.
          </p>
          <Link href="/auth/register" className="button-secondary mt-6 inline-flex border-white text-white">
            Rejoindre le réseau jrdriving
          </Link>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-primary">Vos avantages</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-primary">{benefit.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-primary">Processus d’onboarding</h2>
          <ol className="mt-8 space-y-4 text-sm text-slate-600">
            {onboardingSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
