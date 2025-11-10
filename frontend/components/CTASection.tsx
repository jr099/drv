import Link from 'next/link';

export function CTASection() {
  return (
    <section className="section cta-section text-white">
      <div className="section-shell flex flex-col items-center gap-6 text-center">
        <p className="section-eyebrow border-white/40 bg-white/10 text-white/90">Prêts à démarrer ?</p>
        <h2 className="text-3xl font-bold md:text-4xl">Accélérez vos opérations de convoyage dès aujourd’hui</h2>
        <p className="max-w-2xl text-sm text-white/80 md:text-base">
          Notre équipe vous accompagne pour connecter jrdriving à vos outils, orchestrer vos missions et offrir une expérience premium
          à vos conducteurs comme à vos clients.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/devis" className="button-primary">
            Planifier une démo
          </Link>
          <Link
            href="/contact"
            className="button-secondary border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            Contact commercial
          </Link>
        </div>
      </div>
    </section>
  );
}
