const partners = ['Renault Group', 'Arval', 'Europcar', 'AutoHero', 'Groupe Stellantis'];

export function TrustBar() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Ils nous font confiance
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center text-slate-500 md:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-6 text-sm font-semibold">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
