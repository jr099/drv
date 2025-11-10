import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <span className="rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-wide text-orange-300">
            jrdriving - Pôle convoyage Galaxj Air Digital
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Votre partenaire logistique pour le transport rapide et sécurisé de vos véhicules.
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Une plateforme tout-en-un pour piloter vos missions de convoyage B2B et B2C, suivre vos chauffeurs et automatiser vos
            opérations avec l’IA.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/devis" className="button-primary">
              Demander un devis
            </Link>
            <Link href="/suivi" className="button-secondary">
              Suivre une mission
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-3xl bg-white/10 p-8 shadow-xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-3xl font-bold text-white">+15 000</p>
                <p className="mt-2 text-slate-200">Véhicules convoyés</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="mt-2 text-slate-200">Taux de ponctualité</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-3xl font-bold text-white">24h/24</p>
                <p className="mt-2 text-slate-200">Support réactif</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-3xl font-bold text-white">IA</p>
                <p className="mt-2 text-slate-200">Automatisation avancée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
