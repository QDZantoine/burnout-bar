'use client';

import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Bloc infos de contact */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">📍 Où nous trouver</h2>
          <p className="text-muted-foreground mb-4">
            Burnout Bar
            <br />
            60 BIS Av. du Pont Juvénal
            <br />
            34000 Montpellier
          </p>

          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin size={20} />
            <a
              href="https://www.google.com/maps?q=60+BIS+Av.+du+Pont+Juvénal,+34000+Montpellier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline"
            >
              Voir sur Google Maps
            </a>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail size={20} />
            <a
              href="mailto:contact@burnoutbar.fr"
              className="hover:text-primary underline"
            >
              contact@burnoutbar.fr
            </a>
          </div>
        </div>

        {/* Google Map intégrée */}
        <div className="rounded-xl overflow-hidden border shadow-md">
          <iframe
            src="https://www.google.com/maps?q=60+BIS+Av.+du+Pont+Juvénal,+34000+Montpellier&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
