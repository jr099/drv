import Link from 'next/link';
import { TruckIcon, BuildingOffice2Icon, UserGroupIcon, BoltIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Convoyage B2B',
    description: 'Solutions sur-mesure pour loueurs, garages et concessions avec suivi en temps réel et rapports automatisés.',
    icon: BuildingOffice2Icon
  },
  {
    title: 'Convoyage B2C',
    description: 'Livraison de véhicules pour particuliers, transferts aéroport et mouvements ponctuels avec expérience premium.',
    icon: UserGroupIcon
  },
  {
    title: 'Convoyage express',
    description: 'Interventions urgentes et multi-étapes grâce à notre réseau national de chauffeurs professionnels.',
    icon: BoltIcon
  },
  {
    title: 'Logistique flotte',
    description: 'Gestion centralisée des missions, documents, KPI et intégration CRM pour vos flottes multi-sites.',
    icon: TruckIcon
  }
];

export function ServiceCards() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary">Des services de convoyage adaptés à chaque besoin</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              jrdriving combine expertise terrain et automatisations IA pour assurer une logistique fluide, traçable et sécurisée.
            </p>
          </div>
          <Link href="/devis" className="button-primary w-fit">
            Demander un devis
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <service.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-6 text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <Link href="/devis" className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                Demander un devis
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
