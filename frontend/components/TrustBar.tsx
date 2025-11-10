const partners = ['Renault Group', 'Arval', 'Europcar', 'AutoHero', 'Groupe Stellantis'];

export function TrustBar() {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="text-center">
          <p className="section-eyebrow bg-orange-50 text-accent">Ils nous font confiance</p>
          <p className="section-subtitle mx-auto mt-4 max-w-3xl text-sm text-slate-600">
            Réseaux de loueurs, groupes automobiles et partenaires mobilité utilisent jrdriving pour piloter leurs flux logistiques
            en toute transparence.
          </p>
        </div>
        <div className="mt-10 grid gap-4 text-slate-600 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-2xl border border-white/70 bg-white/80 px-4 py-5 text-sm font-semibold shadow-[0_15px_45px_-20px_rgba(15,23,42,0.25)]"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
