const contactDetails = [
  { label: 'Téléphone', value: '+33 1 84 60 12 34' },
  { label: 'Email', value: 'contact@jrdriving.fr' },
  { label: 'Adresse', value: '120 Avenue de la Logistique, 75000 Paris' }
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold">Contactez jrdriving</h1>
          <p className="mt-4 text-slate-200">
            Notre équipe commerciale et opérationnelle vous accompagne pour déployer la plateforme et assurer vos missions de convoyage.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">Formulaire de contact</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">Nom</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" placeholder="Votre nom" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Téléphone</label>
                  <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" placeholder="Décrivez votre besoin" />
              </div>
              <button type="submit" className="button-primary w-full md:w-auto">
                Envoyer
              </button>
            </form>
          </div>
          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-semibold text-primary">Coordonnées</h2>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {contactDetails.map((detail) => (
                  <li key={detail.label}>
                    <span className="font-semibold text-primary">{detail.label} :</span> {detail.value}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <iframe
                  title="Localisation jrdriving"
                  className="h-64 w-full rounded-2xl border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999315575132!2d2.2922926156742743!3d48.85837307928732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjIiTiAywrAxNSczNS4xIkU!5e0!3m2!1sfr!2sfr!4v1616589552389!5m2!1sfr!2sfr"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="mt-6 rounded-3xl bg-primary px-6 py-5 text-white">
              <p className="text-sm font-semibold">WhatsApp Business</p>
              <p className="mt-2 text-sm text-slate-200">+33 6 00 00 00 00</p>
              <a href="https://wa.me/33600000000" target="_blank" className="mt-4 inline-flex text-sm font-semibold text-orange-200">
                Discuter maintenant →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
