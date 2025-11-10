import Link from 'next/link';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 className="text-3xl font-bold">Prêts à accélérer vos opérations de convoyage ?</h2>
        <p className="max-w-2xl text-slate-200">
          Notre équipe vous accompagne pour connecter jrdriving à vos outils, orchestrer vos missions et offrir une expérience
          premium à vos conducteurs comme à vos clients.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/devis" className="button-primary">
            Planifier une démo
          </Link>
          <Link href="/contact" className="button-secondary text-white border-white">
            Contact commercial
          </Link>
        </div>
      </div>
    </section>
  );
}
