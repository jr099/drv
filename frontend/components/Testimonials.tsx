const testimonials = [
  {
    name: 'S. Martin',
    role: 'Directrice flotte - Loueur national',
    feedback:
      'Grâce à jrdriving nous avons divisé par deux nos délais de convoyage et nos équipes disposent enfin de KPI fiables en temps réel.'
  },
  {
    name: 'H. Dubois',
    role: 'Responsable logistique - Groupe de concessions',
    feedback:
      'L’intégration avec Orgatour et nos outils n8n nous permet d’automatiser toute la chaîne administrative : un vrai gain de temps.'
  },
  {
    name: 'C. Leroy',
    role: 'Particulier premium',
    feedback: 'Service impeccable pour la livraison de mon véhicule électrique, avec suivi complet depuis mon mobile.'
  }
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="section-shell space-y-12">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <p className="section-eyebrow bg-orange-50 text-accent">Témoignages</p>
          <h2 className="section-title">Des clients qui accélèrent leur logistique avec jrdriving</h2>
          <p className="section-subtitle">
            Loueurs, concessions et clients premium témoignent de gains de temps, de visibilité et de satisfaction client grâce à la
            plateforme et aux automatisations IA.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="surface-card h-full bg-white/95">
              <div className="text-4xl text-orange-200">“</div>
              <blockquote className="mt-4 text-sm text-slate-600">{testimonial.feedback}</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-primary">
                {testimonial.name}
                <span className="block text-xs font-normal text-slate-500">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
