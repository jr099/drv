import { QuoteForm } from '../../components/forms/QuoteForm';

const checklist = [
  'Transmission automatique de la demande vers Google Sheets ou votre CRM',
  'Assignation IA du chauffeur et estimation de coût',
  'Notifications e-mail/SMS envoyées au client et au chauffeur',
  'Suivi des pièces jointes (ordre de mission, carte grise)',
  'Génération d’un lien de suivi pour votre client final'
];

export default function QuotePage() {
  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">Demande de devis & commande</h1>
          <p className="mt-4 max-w-2xl text-slate-200">
            Renseignez les informations clés de votre mission. L’assistant IA prépare votre devis, notifie vos équipes et
            synchronise automatiquement la mission dans n8n ou Orgatour.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
          <div className="lg:w-2/3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary">Formulaire intelligent</h2>
              <p className="mt-2 text-sm text-slate-600">
                Les données sont automatiquement envoyées vers vos automatisations (Google Sheets, Make, n8n, Orgatour...).
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
          <aside className="lg:w-1/3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-primary">À savoir</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-slate-600">
                <p className="font-semibold text-primary">Besoin d’un accès API ?</p>
                <p className="mt-2">
                  Connectez jrdriving à vos outils internes via nos webhooks et modules n8n prêts à l’emploi.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
