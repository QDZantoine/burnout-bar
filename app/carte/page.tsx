'use client';

import { Download, FileText } from 'lucide-react';

export default function CartePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Carte du Burnout</h1>
      <p className="text-muted-foreground mb-8">
        Retrouvez toutes nos boissons, cocktails, tapas et pizzas sur notre
        carte à jour.
      </p>

      <div className="flex justify-center mb-10">
        <a
          href="/Menu_Burnout.pdf"
          download
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          <Download size={18} />
          Télécharger la carte
        </a>
      </div>

      {/* Bloc "fenêtre stylisée" du PDF */}
      <div className="relative bg-card border border-border rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
        {/* Header style navigateur */}
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <FileText size={16} />
            <span>Menu_Burnout.pdf</span>
          </div>
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
        </div>

        {/* Aperçu intégré du PDF */}
        <object
          data="/Menu_Burnout.pdf"
          type="application/pdf"
          className="w-full h-[70vh] sm:h-[80vh] rounded-b-xl"
        >
          <p className="p-4 text-sm">
            Votre navigateur ne peut pas afficher le PDF.{' '}
            <a href="/Menu_Burnout.pdf" className="text-primary underline">
              Cliquez ici pour le télécharger.
            </a>
          </p>
        </object>
      </div>
    </section>
  );
}
