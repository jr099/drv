'use client';

import { useState } from 'react';
import { PaperAirplaneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Bonjour 👋 Je suis l’assistant jrdriving. Comment puis-je vous aider ?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Placeholder IA - à connecter à votre fournisseur (OpenAI, Azure...) via backend
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: "Merci pour votre message ! Un conseiller jrdriving revient vers vous très vite. Pour un suivi immédiat, utilisez le formulaire de devis ou connectez-vous à votre espace mission."
        }
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-3xl bg-primary px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Assistant jrdriving</p>
              <p className="text-xs text-slate-200">Devis, suivi mission, support client</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="text-white">
              ×
            </button>
          </div>
          <div className="h-64 space-y-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((message, index) => (
              <div
                key={`${message.from}-${index}`}
                className={message.from === 'bot' ? 'text-slate-600' : 'text-primary text-right font-semibold'}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-slate-200 px-4 py-3">
            <input
              className="flex-1 rounded-full border border-slate-300 px-3 py-2 text-sm"
              placeholder="Écrivez votre demande"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              type="button"
              className="rounded-full bg-accent p-2 text-white"
              onClick={sendMessage}
              aria-label="Envoyer"
            >
              <PaperAirplaneIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg"
      >
        <ChatBubbleLeftRightIcon className="h-5 w-5" />
        Chat IA
      </button>
    </div>
  );
}
