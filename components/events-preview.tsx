'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Beer,
  Music,
  Trophy,
  GamepadIcon as Controller,
  Calendar,
} from 'lucide-react';

export function EventsPreview() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState('weekly');

  const weeklyEvents = [
    {
      id: 1,
      title: 'Beer Pong Tournament',
      day: 'Mardi',
      time: '20h30',
      description:
        "Affrontez d'autres équipes lors de notre tournoi hebdomadaire de Beer Pong",
      icon: <Beer className="h-5 w-5" />,
      color: 'bg-yellow-500',
    },
    {
      id: 2,
      title: 'Blind Test Musical',
      day: 'Mercredi',
      time: '21h00',
      description:
        'Testez vos connaissances musicales dans une ambiance conviviale',
      icon: <Music className="h-5 w-5" />,
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Soirée Karaoké',
      day: 'Jeudi',
      time: '21h00',
      description: 'Prenez le micro et montrez votre talent de chanteur',
      icon: <Music className="h-5 w-5" />,
      color: 'bg-pink-500',
    },
    {
      id: 4,
      title: 'Tournoi Mario Kart',
      day: 'Vendredi',
      time: '19h00',
      description: 'Participez à notre tournoi hebdomadaire sur Switch',
      icon: <Controller className="h-5 w-5" />,
      color: 'bg-green-500',
    },
  ];

  const specialEvents = [
    {
      id: 5,
      title: 'Tournoi FIFA 2025',
      date: '15 Juin',
      time: '19h00',
      description: 'Grand tournoi à élimination directe avec lots à gagner',
      icon: <Trophy className="h-5 w-5" />,
      color: 'bg-blue-600',
    },
    {
      id: 6,
      title: 'Soirée Retrogaming',
      date: '22 Juin',
      time: '20h00',
      description:
        'Retrouvez les consoles de votre enfance (SNES, MegaDrive, etc.)',
      icon: <Controller className="h-5 w-5" />,
      color: 'bg-purple-600',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-4 text-primary border-primary/40 py-1 px-4"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Événements
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Ne manquez rien au Burnout
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos événements réguliers et spéciaux, il y en a pour tous
          les goûts !
        </p>
      </div>

      <Tabs
        defaultValue="weekly"
        className="max-w-4xl mx-auto"
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="weekly">Événements Hebdo</TabsTrigger>
            <TabsTrigger value="special">Événements Spéciaux</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="weekly" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {weeklyEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/40">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div
                        className={`p-2 rounded-full ${event.color} text-white`}
                      >
                        {event.icon}
                      </div>
                      <Badge variant="outline" className="font-medium">
                        {event.day} • {event.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="special" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {specialEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/40">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div
                        className={`p-2 rounded-full ${event.color} text-white`}
                      >
                        {event.icon}
                      </div>
                      <Badge variant="secondary" className="font-medium">
                        {event.date} • {event.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-12">
        <Button asChild size="lg">
          <Link href="/evenements">Voir tous les événements</Link>
        </Button>
      </div>
    </section>
  );
}
