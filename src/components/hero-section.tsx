
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import InvitationDialogContent from './invitation-dialog-content';

const slideshowImages = [
  { src: "https://bataan.gov.ph/wp-content/smush-webp/2021/09/45561_Balanga_History_MtSamat.jpg.webp", alt: "Mount Samat National Shrine in Bataan" },
  { src: "https://bataan.gov.ph/wp-content/smush-webp/2021/12/Bataan_Mariveles_2.jpg.webp", alt: "Coastal view in Mariveles, Bataan" },
  { src: "https://iamtravelinglight.com/wp-content/uploads/2018/05/cover-photo2.jpg?w=584", alt: "Scenic Bataan landscape with Las Casas Filipinas de Acuzar in view" },
];

const SLIDESHOW_INTERVAL = 5000; // 5 seconds

export default function HeroSection() {
  const [isInvitationDialogOpen, setIsInvitationDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Open the dialog automatically when the component mounts
    const timer = setTimeout(() => {
      setIsInvitationDialogOpen(true);
    }, 500); // Slight delay to ensure page is stable
    return () => clearTimeout(timer);
  }, []);

  // Slideshow logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % slideshowImages.length
      );
    }, SLIDESHOW_INTERVAL);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <section className="relative py-20 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0">
          {slideshowImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-[0.75] ${
                index === currentImageIndex ? 'opacity-[0.75]' : 'opacity-0'
              }`}
              priority={index === 0} // Prioritize the first image for LCP
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Discover the Wonders of <span className="text-primary">Bataan</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
            Embark on an unforgettable journey through historic landmarks, breathtaking landscapes, and vibrant culture. Plan your perfect Bataan adventure with us.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="#highlights">Explore Destinations</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground border-primary text-primary">
              <Link href="/destinations-summary">View Travel Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isInvitationDialogOpen} onOpenChange={setIsInvitationDialogOpen}>
        <DialogContent className="p-6 border w-[90vw] max-w-sm sm:max-w-md md:max-w-[600px] bg-secondary max-h-[85vh] overflow-y-auto">
          <InvitationDialogContent />
        </DialogContent>
      </Dialog>
    </>
  );
}
