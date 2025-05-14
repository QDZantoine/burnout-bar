import Link from 'next/link';
import {
  Flame,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <Flame size={24} className="text-primary fire-glow" />
              <span className="text-xl font-bold gradient-text">Burnout</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Le bar pop culture de Montpellier depuis 2014. Tournois,
              blindtests, karaoké, consoles & plus encore.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/evenements"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Événements
              </Link>
              <Link
                href="/carte"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Carte
              </Link>
              <Link
                href="/galerie"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Galerie
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/reservation"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Réservation
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-2 shrink-0" />
                <span>60 BIS Av. du Pont Juvénal, 34000 Montpellier</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone size={16} className="mr-2 shrink-0" />
                <span>+33 4 67 XX XX XX</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2 shrink-0" />
                <span>contact@burnoutbar.fr</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock size={16} className="mr-2 shrink-0" />
                <span>Du mardi au samedi, 18h - 01h</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {[
                {
                  name: 'Facebook',
                  icon: <Facebook />,
                  link: 'https://www.facebook.com/leburnoutbar/',
                },
                {
                  name: 'Instagram',
                  icon: <Instagram />,
                  link: 'https://www.instagram.com/leburnoutbar/',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                  aria-label={`Suivez-nous sur ${social.name}`}
                >
                  <span className="text-xl" aria-hidden="true">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Happy Hour</h3>
              <p className="text-muted-foreground">
                Tous les jours de 18h à 20h
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                -30% sur toutes les bières pression et cocktails sélectionnés
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Burnout Bar — Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/mentions-legales"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
