import { ContactSection } from '@/components/contact-section';
import { EventsPreview } from '@/components/events-preview';
import { GalleryPreview } from '@/components/gallery-preview';
import { HeroSection } from '@/components/heroSection';
import { MenuPreview } from '@/components/menu-preview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <EventsPreview />
      <MenuPreview />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}
