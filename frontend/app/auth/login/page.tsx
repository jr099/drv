import Link from 'next/link';
import { LoginForm } from '../../../components/forms/LoginForm';

export default function LoginPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-16 px-6 py-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-primary">Connexion</h1>
          <p className="mt-4 text-sm text-slate-600">
            Accédez à votre tableau de bord jrdriving pour suivre vos missions, consulter vos documents et piloter vos automatisations.
          </p>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <LoginForm />
            <div className="mt-4 text-sm text-slate-600">
              <Link href="/auth/mot-de-passe-oublie" className="text-accent">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-primary p-10 text-white">
          <h2 className="text-2xl font-semibold">Pas encore de compte ?</h2>
          <p className="mt-3 text-sm text-slate-200">
            Créez un espace jrdriving pour accéder au suivi de vos missions, télécharger vos documents et piloter vos demandes.
          </p>
          <Link href="/auth/register" className="button-secondary mt-6 inline-flex border-white text-white">
            Créer mon espace
          </Link>
        </div>
      </div>
    </div>
  );
}
