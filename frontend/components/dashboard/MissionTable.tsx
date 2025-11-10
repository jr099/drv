'use client';

import useSWR from 'swr';
import api from '../../lib/api';

export type Mission = {
  id: string;
  reference: string;
  vehicleType: string;
  pickupAddress: string;
  dropoffAddress: string;
  pickupDate: string;
  status: string;
  driverProfile?: {
    user?: {
      firstName: string;
      lastName: string;
    };
  };
};

const fetcher = (url: string) =>
  api
    .get(url, {
      headers: {
        Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('jrdriving.accessToken') : ''}`
      }
    })
    .then((res) => res.data);

export function MissionTable() {
  const { data, isLoading, error } = useSWR<Mission[]>('/missions', fetcher);

  if (isLoading) {
    return <p>Chargement des missions...</p>;
  }

  if (error) {
    return <p className="text-red-600">Impossible de charger les missions.</p>;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50 text-left uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-6 py-3">Mission</th>
            <th className="px-6 py-3">Chauffeur</th>
            <th className="px-6 py-3">Départ</th>
            <th className="px-6 py-3">Arrivée</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Statut</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data?.map((mission) => (
            <tr key={mission.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 font-semibold text-primary">{mission.reference}</td>
              <td className="px-6 py-4 text-slate-600">
                {mission.driverProfile?.user
                  ? `${mission.driverProfile.user.firstName} ${mission.driverProfile.user.lastName}`
                  : 'Non assigné'}
              </td>
              <td className="px-6 py-4 text-slate-600">{mission.pickupAddress}</td>
              <td className="px-6 py-4 text-slate-600">{mission.dropoffAddress}</td>
              <td className="px-6 py-4 text-slate-600">{new Date(mission.pickupDate).toLocaleDateString('fr-FR')}</td>
              <td className="px-6 py-4">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-primary">
                  {mission.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
