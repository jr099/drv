const sections = [
  {
    title: 'Objet',
    content:
      'Les présentes Conditions Générales de Vente encadrent la fourniture des prestations de convoyage automobile proposées par jrdriving pour les clients professionnels et particuliers.'
  },
  {
    title: 'Commandes',
    content:
      'Toute mission fait l’objet d’un devis validé par le client. La confirmation peut être transmise via la plateforme, par e-mail ou via API.'
  },
  {
    title: 'Tarification et facturation',
    content:
      'Les tarifs sont établis selon la distance, le type de véhicule et les services additionnels. La facturation est automatisée depuis le tableau de bord jrdriving.'
  },
  {
    title: 'Responsabilité',
    content:
      'jrdriving s’engage à mettre en œuvre tous les moyens nécessaires pour assurer le transport en toute sécurité. Les clients doivent garantir l’exactitude des informations fournies.'
  }
];

export default function CgvPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-3xl font-bold text-primary">Conditions Générales de Vente</h1>
      <p className="text-sm text-slate-600">
        Ce contenu est un exemple générique. Merci de l’adapter avec vos mentions légales, modalités spécifiques et informations contractuelles.
      </p>
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
          <p className="mt-2 text-sm text-slate-600">{section.content}</p>
        </section>
      ))}
    </div>
  );
}
