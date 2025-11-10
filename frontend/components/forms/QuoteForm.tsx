'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import api from '../../lib/api';

const schema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(6),
  vehicleType: z.string().min(2),
  pickupAddress: z.string().min(2),
  dropoffAddress: z.string().min(2),
  desiredDate: z.string(),
  additionalNotes: z.string().optional()
});

export type QuoteFormData = z.infer<typeof schema>;

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<QuoteFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: QuoteFormData) => {
    setStatus('idle');
    try {
      await api.post('/quotes', data);
      setStatus('success');
      reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700">Nom complet</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('fullName')} />
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Société</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('company')} />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Email</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('email')} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Téléphone</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('phone')} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Type de véhicule</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('vehicleType')} />
          {errors.vehicleType && <p className="mt-1 text-xs text-red-500">{errors.vehicleType.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Date souhaitée</label>
          <input type="date" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('desiredDate')} />
          {errors.desiredDate && <p className="mt-1 text-xs text-red-500">{errors.desiredDate.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700">Lieu de départ</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('pickupAddress')} />
          {errors.pickupAddress && <p className="mt-1 text-xs text-red-500">{errors.pickupAddress.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700">Lieu d’arrivée</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('dropoffAddress')} />
          {errors.dropoffAddress && <p className="mt-1 text-xs text-red-500">{errors.dropoffAddress.message}</p>}
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-700">Informations complémentaires</label>
        <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" {...register('additionalNotes')} />
      </div>
      <button type="submit" disabled={isSubmitting} className="button-primary w-full md:w-auto">
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>
      {status === 'success' && <p className="text-sm text-green-600">Votre demande a été envoyée avec succès.</p>}
      {status === 'error' && <p className="text-sm text-red-600">Une erreur est survenue. Merci de réessayer.</p>}
    </form>
  );
}
