'use client';

import { useState } from 'react';

const mockStatuses = [
  { label: 'Mission créée', status: 'Terminée' },
  { label: 'Chauffeur assigné', status: 'Terminée' },
  { label: 'Véhicule récupéré', status: 'En attente' },
  { label: 'Livraison en cours', status: 'À venir' }
];

export default function TrackingPage() {
  const [reference, setReference] = useState('');
  const [tracking, setTracking] = useState<typeof mockStatuses | null>(null);

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setTracking(mockStatuses);
  };

  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold">Suivre une mission</h1>
          <p className="mt-4 text-slate-200">
            Saisissez votre référence de mission pour accéder au suivi en temps réel (statuts, documents, contact chauffeur).
          </p>
          <form onSubmit={onSearch} className="mx-auto mt-8 flex max-w-xl gap-3">
            <input
              className="flex-1 rounded-full border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/70"
              placeholder="Ex : JR-17000000"
              value={reference}
              onChange={(event) => setReference(event.target.value)}
            />
            <button type="submit" className="button-secondary border-white text-white">
              Consulter
            </button>
          </form>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {tracking ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary">Référence : {reference || 'JR-XXXXXX'}</h2>
              <ul className="mt-6 space-y-4">
                {tracking.map((step) => (
                  <li key={step.label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
                    <span className="text-sm font-semibold text-primary">{step.label}</span>
                    <span className="text-xs font-semibold uppercase text-slate-500">{step.status}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                Pour des mises à jour en direct et des notifications personnalisées, connectez-vous à votre espace client ou
                activez le suivi SMS.
              </p>
            </div>
          ) : (
            <p className="text-sm text-slate-600">Entrez une référence valide pour afficher le suivi.</p>
          )}
        </div>
      </section>
    </div>
  );
}
