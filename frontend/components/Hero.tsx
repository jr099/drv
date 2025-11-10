import Link from 'next/link';

export function Hero() {
  return (
    <section className="section hero-section text-white">
      <div className="section-shell grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
        <div className="space-y-7">
          <span className="badge border-white/20 bg-white/10 text-white/90">
            jrdriving · Galaxj Air Digital
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Votre partenaire logistique pour le transport <span className="text-orange-300">rapide</span> et sécurisé de vos
            véhicules.
          </h1>
          <p className="text-lg text-slate-200 md:text-xl">
            Une plateforme tout-en-un pour orchestrer vos missions B2B &amp; B2C, superviser vos chauffeurs et synchroniser vos outils
            métiers grâce à l’IA et l’automatisation.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-white/80">
            <span className="data-pill bg-white/10 text-white/80">Convoyage B2B &amp; B2C</span>
            <span className="data-pill bg-white/10 text-white/80">Suivi temps réel</span>
            <span className="data-pill bg-white/10 text-white/80">Automatisation IA</span>
          </div>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Link href="/devis" className="button-primary">
              Demander un devis
            </Link>
            <Link
              href="/suivi"
              className="button-secondary border-white/60 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              Suivre une mission
            </Link>
          </div>
          <div className="grid gap-4 text-sm text-white/80 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-orange-200">
                01
              </span>
              <p className="text-balance">
                Demandes centralisées et dispatch IA vers vos chauffeurs certifiés partout en France.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-orange-200">
                02
              </span>
              <p className="text-balance">
                Notifications temps réel, feuilles de route numériques et preuves de livraison automatisées.
              </p>
            </div>
          </div>
        </div>
        <div className="glass-card space-y-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/60">
            <span>cockpit jrdriving</span>
            <span>LIVE</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="stat-card items-start text-left">
              <p className="text-3xl font-semibold text-white">+15 000</p>
              <p className="text-sm text-white/70">Véhicules convoyés</p>
            </div>
            <div className="stat-card items-start text-left">
              <p className="text-3xl font-semibold text-white">98%</p>
              <p className="text-sm text-white/70">Taux de ponctualité</p>
            </div>
            <div className="stat-card items-start text-left">
              <p className="text-3xl font-semibold text-white">24h/24</p>
              <p className="text-sm text-white/70">Support réactif</p>
            </div>
            <div className="stat-card items-start text-left">
              <p className="text-3xl font-semibold text-white">IA</p>
              <p className="text-sm text-white/70">Automatisation avancée</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-white/70">
            <p className="font-semibold text-white">Synchronisations actives</p>
            <ul className="mt-3 space-y-2 text-xs">
              <li className="flex items-center justify-between">
                <span>Google Sheets &amp; n8n</span>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </li>
              <li className="flex items-center justify-between">
                <span>Orgatour API</span>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </li>
              <li className="flex items-center justify-between">
                <span>Notifications SMS</span>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
