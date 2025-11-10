import Link from 'next/link';
import { ServiceCards } from '../../components/ServiceCards';

const processSteps = [
  {
    title: '1. Brief & devis IA',
    description: 'Vous saisissez votre demande, l’assistant IA pré-remplit le devis et envoie les informations à votre CRM.'
  },
  {
    title: '2. Planification mission',
    description: 'Affectation automatique du chauffeur, génération de l’ordre de mission et notifications SMS/e-mail.'
  },
  {
    title: '3. Suivi et reporting',
    description: 'Tracking temps réel, collecte des preuves de livraison, notes de frais et analyse KPI via le tableau de bord.'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">Des services de convoyage taillés pour vos enjeux</h1>
          <p className="mt-4 max-w-3xl text-slate-200">
            jrdriving accompagne les professionnels de l’automobile et les particuliers grâce à une plateforme digitale sécurisée,
            des chauffeurs certifiés et des processus entièrement automatisés.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/devis" className="button-primary">
              Démarrer un devis
            </Link>
            <Link href="/contact" className="button-secondary text-white border-white">
              Echanger avec un expert
            </Link>
          </div>
        </div>
      </section>
      <ServiceCards />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-primary">Une méthodologie éprouvée</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
