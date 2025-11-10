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
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-primary">Des clients satisfaits et fidélisés</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm text-slate-600">“{testimonial.feedback}”</p>
              <div className="mt-6 text-sm font-semibold text-primary">{testimonial.name}</div>
              <div className="text-xs text-slate-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
