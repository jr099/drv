const policies = [
  {
    title: 'Collecte des données',
    content:
      'Les informations collectées via les formulaires (nom, email, téléphone, données de mission) sont utilisées pour la gestion commerciale et opérationnelle des convoyages.'
  },
  {
    title: 'Base légale',
    content:
      'La collecte repose sur l’exécution contractuelle et l’intérêt légitime pour assurer les missions. Le consentement est requis pour les communications marketing.'
  },
  {
    title: 'Durée de conservation',
    content:
      'Les données sont conservées pendant la durée de la relation contractuelle puis archivées pendant 5 ans.'
  },
  {
    title: 'Droits des personnes',
    content:
      'Conformément au RGPD, vous pouvez exercer vos droits d’accès, rectification, opposition et suppression en contactant dpo@jrdriving.fr.'
  }
];

export default function RgpdPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-3xl font-bold text-primary">Politique de protection des données (RGPD)</h1>
      <p className="text-sm text-slate-600">
        Les éléments ci-dessous constituent un canevas à personnaliser avec votre DPO ou votre conseiller juridique.
      </p>
      {policies.map((policy) => (
        <section key={policy.title}>
          <h2 className="text-xl font-semibold text-primary">{policy.title}</h2>
          <p className="mt-2 text-sm text-slate-600">{policy.content}</p>
        </section>
      ))}
    </div>
  );
}
