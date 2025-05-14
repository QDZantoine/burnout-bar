'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  AlertCircle,
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Instagram,
  Facebook,
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      if (formState.name && formState.email && formState.message) {
        setIsSubmitted(true);
        setIsError(false);
        // Reset form
        setFormState({ name: '', email: '', message: '' });
      } else {
        setIsError(true);
      }
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Adresse',
      details: '60 BIS Av. du Pont Juvénal, 34000 Montpellier',
      link: 'https://maps.google.com',
      linkText: 'Voir sur Google Maps',
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Téléphone',
      details: '+33 4 67 XX XX XX',
      link: 'tel:+33467XXXXXX',
      linkText: 'Appeler',
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      details: 'contact@burnoutbar.fr',
      link: 'mailto:contact@burnoutbar.fr',
      linkText: 'Envoyer un email',
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Horaires',

      details: 'Du mardi au samedi, 18h - 01h',
      link: null,
      linkText: null,
      subdetails: 'Happy Hour : 18h - 20h',
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-4 text-primary border-primary/40 py-1 px-4"
        >
          <MapPin className="h-4 w-4 mr-2" />
          Contact
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Nous Trouver & Nous Contacter
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Une question, une réservation ou une suggestion ? Contactez-nous !
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Informations de Contact
          </h3>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-start p-4 rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-medium">{info.title}</h4>
                  <p className="text-muted-foreground mt-1">{info.details}</p>
                  {info.subdetails && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {info.subdetails}
                    </p>
                  )}
                  {info.link && (
                    <a
                      href={info.link}
                      className="text-primary hover:underline text-sm inline-block mt-2"
                      target={
                        info.link.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        info.link.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {info.linkText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Suivez-nous</h3>
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
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Envoyez-nous un Message
          </h3>

          {isSubmitted && (
            <Alert className="mb-6 bg-green-500/10 text-green-600 border-green-600/20">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Votre message a été envoyé avec succès ! Nous vous répondrons
                dans les plus brefs délais.
              </AlertDescription>
            </Alert>
          )}

          {isError && (
            <Alert className="mb-6 bg-destructive/10 text-destructive border-destructive/20">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Veuillez remplir tous les champs du formulaire.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="votre@email.com"
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Votre message..."
                className="w-full min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full flex items-center gap-2">
              <Send className="h-4 w-4" />
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
