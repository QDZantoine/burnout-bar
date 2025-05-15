import { Metadata } from 'next';

import { Beer, Music, GamepadIcon as Controller } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Événements | Burnout Bar Montpellier',
  description:
    'Découvrez tous les événements organisés au Burnout Bar à Montpellier: tournois, blindtests, karaoké, et plus encore.',
};

interface Event {
  id: number;
  title: string;
  description: string;
  day?: string;
  date?: string;
  time: string;
  type: string;
  icon: React.ReactNode;
  color: string;
}

export default function EventsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const weeklyEvents: Event[] = [
    {
      id: 1,
      title: 'Beer Pong Tournament',
      day: 'Mardi',
      time: '20h30',
      description:
        "Affrontez d'autres équipes lors de notre tournoi hebdomadaire de Beer Pong. Inscriptions sur place à partir de 19h30. Prix spéciaux pour les gagnants ! Équipes de 2 personnes.",
      type: 'tournament',
      icon: <Beer />,
      color: 'bg-yellow-500',
    },
    {
      id: 2,
      title: 'Blind Test Musical',
      day: 'Mercredi',
      time: '21h00',
      description:
        'Testez vos connaissances musicales dans une ambiance conviviale. Thématiques variées: musiques de films, années 80/90, rock, pop, et bien plus. Lots à gagner pour les meilleures équipes !',
      type: 'music',
      icon: <Music />,
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Soirée Karaoké',
      day: 'Jeudi',
      time: '21h00',
      description:
        'Prenez le micro et montrez votre talent de chanteur sur notre scène. Grand choix de chansons françaises et internationales. Ambiance festive garantie !',
      type: 'music',
      icon: <Music />,
      color: 'bg-pink-500',
    },
    {
      id: 4,
      title: 'Tournoi Mario Kart',
      day: 'Vendredi',
      time: '19h00',
      description:
        'Participez à notre tournoi hebdomadaire de Mario Kart sur Nintendo Switch. Inscriptions sur place à partir de 18h30. Prix pour les gagnants et boissons offertes !',
      type: 'gaming',
      icon: <Controller />,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Événements à Burnout Bar</h1>
    </div>
  );
}
