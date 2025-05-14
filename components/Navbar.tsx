'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Flame, Beer, Music, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ui/toggleMode';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({
    href,
    icon,
    children,
  }: {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm font-medium transition-all hover:text-primary"
      onClick={() => setOpen(false)}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-all group-hover:bg-primary/20">
        {icon}
      </span>
      <span className="transition-colors">{children}</span>
    </Link>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="text-2xl font-extrabold">
            <Flame size={28} className="inline mr-2 text-primary fire-glow" />
            <span className="gradient-text">Burnout</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavItem
            href="/evenements"
            icon={<Calendar size={16} className="text-foreground/70" />}
          >
            Événements
          </NavItem>
          <NavItem
            href="/carte"
            icon={<Beer size={16} className="text-foreground/70" />}
          >
            Carte
          </NavItem>
          <NavItem
            href="/galerie"
            icon={<Music size={16} className="text-foreground/70" />}
          >
            Galerie
          </NavItem>
          <NavItem
            href="/contact"
            icon={<MapPin size={16} className="text-foreground/70" />}
          >
            Contact
          </NavItem>

          <Button
            variant="outline"
            size="sm"
            className="ml-2 bg-background/60 backdrop-blur"
          >
            <Link href="/reservation">Réserver</Link>
          </Button>

          <ModeToggle />
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-background/60 backdrop-blur"
          >
            <Link href="/reservation">Réserver</Link>
          </Button>

          <button
            className="text-foreground p-2 rounded-full hover:bg-muted/20 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg px-6 py-6 animate-in slide-in-from-top duration-300 flex flex-col space-y-5 border-t border-border">
          <NavItem
            href="/evenements"
            icon={<Calendar size={18} className="text-foreground/70" />}
          >
            Événements
          </NavItem>
          <NavItem
            href="/carte"
            icon={<Beer size={18} className="text-foreground/70" />}
          >
            Carte
          </NavItem>
          <NavItem
            href="/galerie"
            icon={<Music size={18} className="text-foreground/70" />}
          >
            Galerie
          </NavItem>
          <NavItem
            href="/contact"
            icon={<MapPin size={18} className="text-foreground/70" />}
          >
            Contact
          </NavItem>
          <div className="pt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
