import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-white">
      <div className="section-shell flex flex-col gap-10 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold uppercase">
              jr
            </span>
            jrdriving
          </Link>
          <p className="text-sm text-white/70">
            Votre partenaire logistique pour le transport rapide et sécurisé de vos véhicules. Une solution Galaxj Air Digital.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-white/60">
            <span className="data-pill bg-white/10 text-white/70">Convoyage</span>
            <span className="data-pill bg-white/10 text-white/70">Automatisation</span>
            <span className="data-pill bg-white/10 text-white/70">Suivi temps réel</span>
          </div>
        </div>
        <div className="grid gap-8 text-sm sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="font-semibold">Navigation</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/devis" className="hover:text-white">
                  Demander un devis
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Espace client
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Légal</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>
                <Link href="/legal/mentions-legales" className="hover:text-white">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/legal/cgv" className="hover:text-white">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/legal/rgpd" className="hover:text-white">
                  RGPD
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>Email : contact@jrdriving.fr</li>
              <li>Téléphone : +33 1 84 60 12 34</li>
              <li>
                <Link href="https://wa.me/33600000000" target="_blank" className="hover:text-white">
                  WhatsApp Business
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Galaxj Air Digital - jrdriving. Tous droits réservés.
      </div>
    </footer>
  );
}
