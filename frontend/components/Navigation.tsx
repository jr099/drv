'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/devis', label: 'Devis' },
  { href: '/chauffeurs', label: 'Espace Chauffeurs' },
  { href: '/dashboard', label: 'Espace Client' },
  { href: '/contact', label: 'Contact' }
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          jrdriving
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
          <Link href="/auth/login" className="button-secondary text-sm">
            Connexion
          </Link>
          <Link href="/auth/register" className="button-primary text-sm">
            Créer un compte
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/auth/login" className="button-secondary text-sm" onClick={() => setOpen(false)}>
              Connexion
            </Link>
            <Link href="/auth/register" className="button-primary text-sm" onClick={() => setOpen(false)}>
              Créer un compte
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
