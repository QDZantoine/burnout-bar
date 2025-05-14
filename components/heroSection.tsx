'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Beer, Music, Gamepad, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const iconContainers = [
    {
      icon: <Beer size={24} />,
      title: 'Happy Hour',
      description: '18h à 20h tous les jours',
    },
    {
      icon: <Music size={24} />,
      title: 'Blindtest & Karaoké',
      description: 'Mardi et jeudi soir',
    },
    {
      icon: <Gamepad size={24} />,
      title: 'Consoles & Jeux',
      description: 'Disponibles gratuitement',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Événements',
      description: 'Tournois réguliers',
    },
  ];

  return (
    <div className="relative">
      {/* Video or Image Background */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Image
              src="/images/logo.jpg"
              alt="Burnout Logo"
              width={500}
              height={300}
              className="fire-glow animate-float rounded-full"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">Burnout</span> Bar
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 max-w-3xl text-foreground/90"
          >
            Le bar pop culture de Montpellier depuis 2014.
            <span className="block mt-2">
              Tournois, blindtests, karaoké, consoles & plus encore 🎮🎵🍻
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button asChild size="lg" className="text-lg font-semibold">
              <Link href="/evenements">Voir les événements</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg font-semibold"
            >
              <Link href="/carte">Découvrir notre carte</Link>
            </Button>
          </motion.div>

          {/* Features Icons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl"
          >
            {iconContainers.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-background/40 backdrop-blur-sm rounded-lg border border-border/30 shadow-lg hover:bg-background/60 transition-all"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 bg-primary/20 rounded-full mb-4">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/70 text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
