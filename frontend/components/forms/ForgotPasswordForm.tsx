'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import api from '../../lib/api';

const schema = z.object({
  email: z.string().email()
});

type ForgotFormData = z.infer<typeof schema>;

export function ForgotPasswordForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgotFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ForgotFormData) => {
    setStatus('idle');
    try {
      await api.post('/auth/password/request-reset', data);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-700">Email</label>
        <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('email')} />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="button-primary w-full">
        {isSubmitting ? 'Envoi...' : 'Recevoir le lien'}
      </button>
      {status === 'success' && <p className="text-sm text-green-600">Vérifiez votre boîte mail pour le lien de réinitialisation.</p>}
      {status === 'error' && <p className="text-sm text-red-600">Une erreur est survenue. Merci de réessayer.</p>}
    </form>
  );
}
