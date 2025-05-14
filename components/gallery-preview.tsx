'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

export function GalleryPreview() {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const images = [
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Soirée blindtest au Burnout',
      title: 'Blindtest du mardi',
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Tournoi de Beer Pong',
      title: 'Tournoi Beer Pong',
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Karaoké entre amis',
      title: 'Soirée Karaoké',
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Espace jeux vidéo',
      title: 'Espace Gaming',
    },
    {
      src: '/images/cocktail.png',
      alt: 'Bar du Burnout',
      title: 'Le Bar',
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Soirée spéciale',
      title: 'Événement Spécial',
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImage !== null) {
      setCurrentImage((currentImage + 1) % images.length);
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImage !== null) {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-4 text-primary border-primary/40 py-1 px-4"
        >
          <Camera className="h-4 w-4 mr-2" />
          Galerie
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          L&apos;Ambiance du Burnout
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez l&apos;atmosphère unique de notre bar à travers ces quelques
          images
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <motion.div
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                onClick={() => setCurrentImage(index)}
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-screen-lg bg-transparent border-none shadow-none">
              <div className="relative">
                <button
                  onClick={() => setCurrentImage(null)}
                  className="absolute z-10 right-4 top-4 bg-black/60 rounded-full p-2 hover:bg-black/80 transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                <Image
                  src={images[currentImage === null ? index : currentImage].src}
                  alt={images[currentImage === null ? index : currentImage].alt}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto object-contain rounded-lg"
                />

                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-3 hover:bg-black/80 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-3 hover:bg-black/80 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild size="lg">
          <Link href="/galerie">Voir toutes les photos</Link>
        </Button>
      </div>
    </section>
  );
}
