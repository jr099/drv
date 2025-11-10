'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../lib/api';

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().optional(),
  company: z.string().optional()
});

type RegisterFormData = z.infer<typeof schema>;

export function RegisterForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: RegisterFormData) => {
    setStatus('idle');
    try {
      await api.post('/auth/register', data);
      setStatus('success');
      router.push('/auth/login');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700">Prénom</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('firstName')} />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Nom</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('lastName')} />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>
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
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700">Téléphone</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('phone')} />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Société</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('company')} />
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="button-primary w-full md:w-auto">
        {isSubmitting ? 'Création...' : 'Créer mon compte'}
      </button>
      {status === 'success' && <p className="text-sm text-green-600">Compte créé ! Vous pouvez vous connecter.</p>}
      {status === 'error' && <p className="text-sm text-red-600">Impossible de créer le compte. Merci de réessayer.</p>}
    </form>
  );
}
