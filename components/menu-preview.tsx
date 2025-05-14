'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Beer, Coffee, Wine, UtensilsCrossed } from 'lucide-react';

export function MenuPreview() {
  const beerItems = [
    {
      name: 'Pression locale',
      price: '4.50€',
      description: 'Brasserie artisanale de Montpellier',
    },
    { name: 'IPA', price: '5.50€', description: 'Indian Pale Ale houblonnée' },
    {
      name: 'Blanche',
      price: '5.00€',
      description: 'Légère et rafraîchissante',
    },
    {
      name: 'Blonde Belge',
      price: '5.50€',
      description: 'Saveur fruitée et épicée',
    },
  ];

  const cocktailItems = [
    {
      name: 'Burnout Flaming',
      price: '8.50€',
      description: "Whisky, jus d'orange, sirop de cannelle, flammes",
    },
    {
      name: 'Pixel Perfect',
      price: '9.00€',
      description: 'Vodka, liqueur de framboise, citron vert, sprite',
    },
    {
      name: 'Game Over',
      price: '10.00€',
      description: 'Rhum, curaçao bleu, ananas, passion',
    },
    {
      name: 'Cheat Code',
      price: '8.00€',
      description: 'Gin, tonic, concombre, baies roses',
    },
  ];

  const mockItems = [
    {
      name: 'Virgin Burnout',
      price: '6.50€',
      description: 'Orange, sirop de grenadine, gingembre',
    },
    {
      name: 'Jungle Level',
      price: '6.00€',
      description: 'Ananas, passion, menthe fraîche',
    },
    {
      name: 'Power Up',
      price: '6.50€',
      description: "Fraise, banane, lait d'amande",
    },
    {
      name: 'Loading...',
      price: '5.50€',
      description: 'Citron, concombre, menthe, soda',
    },
  ];

  const snackItems = [
    {
      name: 'Nachos Deluxe',
      price: '8.00€',
      description: 'Chips tortilla, guacamole, salsa, fromage fondu',
    },
    { name: 'Quesadilla', price: '9.00€', description: 'Poulet ou végétarien' },
    {
      name: 'Plateau Gamer',
      price: '15.00€',
      description: 'Assortiment de fromages et charcuteries',
    },
    {
      name: 'Frites Maison',
      price: '5.00€',
      description: 'Avec sauce au choix',
    },
  ];

  const categories = [
    {
      id: 'beers',
      label: 'Bières',
      icon: <Beer className="h-4 w-4" />,
      items: beerItems,
    },
    {
      id: 'cocktails',
      label: 'Cocktails',
      icon: <Wine className="h-4 w-4" />,
      items: cocktailItems,
    },
    {
      id: 'mocktails',
      label: 'Mocktails',
      icon: <Coffee className="h-4 w-4" />,
      items: mockItems,
    },
    {
      id: 'snacks',
      label: 'Snacks',
      icon: <UtensilsCrossed className="h-4 w-4" />,
      items: snackItems,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted/30">
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-4 text-primary border-primary/40 py-1 px-4"
        >
          <UtensilsCrossed className="h-4 w-4 mr-2" />
          Carte
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Notre Sélection
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos boissons et snacks soigneusement sélectionnés pour
          accompagner vos parties
        </p>
      </div>

      <Tabs defaultValue="beers" className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-10">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-xl">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="flex items-center gap-2"
              >
                {cat.icon}
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="space-y-8"
          >
            <div className="grid lg:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex justify-between p-5 rounded-lg border border-border/80 shadow bg-card hover:border-primary/30 transition-all">
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Badge
                        variant="secondary"
                        className="text-base font-medium"
                      >
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p>
                * Happy Hour de 18h à 20h: -30% sur toutes les bières pression
                et cocktails sélectionnés
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-center mt-12">
        <Button asChild size="lg">
          <Link href="/carte">Voir la carte complète</Link>
        </Button>
      </div>
    </section>
  );
}
