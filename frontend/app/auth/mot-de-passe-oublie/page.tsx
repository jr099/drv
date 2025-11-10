import { ForgotPasswordForm } from '../../../components/forms/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-16">
        <h1 className="text-3xl font-bold text-primary">Mot de passe oublié</h1>
        <p className="mt-2 text-sm text-slate-600">
          Saisissez l’adresse e-mail associée à votre compte. Vous recevrez un lien sécurisé pour réinitialiser votre mot de passe.
        </p>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
