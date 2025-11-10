import Link from 'next/link';
import { RegisterForm } from '../../../components/forms/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-16 px-6 py-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-primary">Créer un compte</h1>
          <p className="mt-4 text-sm text-slate-600">
            Bénéficiez d’un accès complet à la plateforme jrdriving : devis, suivi des missions, facturation et automatisations.
          </p>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <RegisterForm />
            <div className="mt-4 text-sm text-slate-600">
              Déjà client ?{' '}
              <Link href="/auth/login" className="text-accent">
                Connectez-vous
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-primary p-10 text-white">
          <h2 className="text-2xl font-semibold">Un onboarding personnalisé</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>✔️ Import de vos clients & chauffeurs</li>
            <li>✔️ Paramétrage de vos automatisations n8n / Orgatour</li>
            <li>✔️ Formation de vos équipes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
