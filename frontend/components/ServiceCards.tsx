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
    <section className="section">
      <div className="section-shell space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow bg-orange-50 text-accent">Services</p>
            <h2 className="section-title">Des parcours de convoyage pensés pour chaque scenario</h2>
            <p className="section-subtitle">
              jrdriving combine expertise terrain et automatisations IA pour assurer une logistique fluide, traçable et sécurisée sur
              toute la chaîne de valeur.
            </p>
          </div>
          <Link href="/devis" className="button-primary self-start md:self-auto">
            Demander un devis
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="surface-card h-full bg-white/95">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100/80 text-accent shadow-inner shadow-orange-200/40">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <Link href="/devis" className="mt-8 cta-link">
                Demander un devis
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
