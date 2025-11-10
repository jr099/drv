import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">jrdriving</h3>
          <p className="mt-3 max-w-sm text-sm text-slate-200">
            Votre partenaire logistique pour le transport rapide et sécurisé de vos véhicules. Une solution Galaxj Air Digital.
          </p>
        </div>
        <div className="flex gap-10 text-sm">
          <div>
            <h4 className="font-semibold">Navigation</h4>
            <ul className="mt-2 space-y-1 text-slate-200">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/devis">Demander un devis</Link>
              </li>
              <li>
                <Link href="/dashboard">Espace client</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Légal</h4>
            <ul className="mt-2 space-y-1 text-slate-200">
              <li>
                <Link href="/legal/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/legal/cgv">CGV</Link>
              </li>
              <li>
                <Link href="/legal/rgpd">RGPD</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 space-y-1 text-slate-200">
              <li>Email : contact@jrdriving.fr</li>
              <li>Téléphone : +33 1 84 60 12 34</li>
              <li>
                <Link href="https://wa.me/33600000000" target="_blank">
                  WhatsApp Business
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Galaxj Air Digital - jrdriving. Tous droits réservés.
      </div>
    </footer>
  );
}
