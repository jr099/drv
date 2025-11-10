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
    <header className="site-header">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-primary">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold uppercase text-white shadow-lg shadow-primary/30">
            jr
          </span>
          <span>jrdriving</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/auth/login" className="button-secondary text-xs">
            Connexion
          </Link>
          <Link href="/auth/register" className="button-primary text-xs">
            Créer un compte
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/90 p-2 text-slate-600 shadow-sm transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200/60 bg-white/90 pb-6 pt-4 backdrop-blur md:hidden">
          <div className="section-shell flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/auth/login" className="button-secondary text-xs" onClick={() => setOpen(false)}>
              Connexion
            </Link>
            <Link href="/auth/register" className="button-primary text-xs" onClick={() => setOpen(false)}>
              Créer un compte
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
