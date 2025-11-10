'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../lib/api';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type LoginFormData = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: LoginFormData) => {
    setError(null);
    try {
      const response = await api.post('/auth/login', data);
      localStorage.setItem('jrdriving.accessToken', response.data.tokens.accessToken);
      localStorage.setItem('jrdriving.refreshToken', response.data.tokens.refreshToken);
      router.push('/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-700">Email</label>
        <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('email')} />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-700">Mot de passe</label>
        <input type="password" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('password')} />
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="button-primary w-full">
        {isSubmitting ? 'Connexion...' : 'Se connecter'}
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
