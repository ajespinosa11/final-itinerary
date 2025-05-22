
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger, // Though not used to trigger manually, Dialog needs it or DialogClose
  DialogClose, // Added for completeness if needed inside InvitationDialogContent
} from '@/components/ui/dialog';
import InvitationDialogContent from './invitation-dialog-content';

export default function HeroSection() {
  const [isInvitationDialogOpen, setIsInvitationDialogOpen] = useState(false);

  useEffect(() => {
    // Open the dialog automatically when the component mounts
    const timer = setTimeout(() => {
      setIsInvitationDialogOpen(true);
    }, 500); // Slight delay to ensure page is stable
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative py-20 md:py-32 bg-secondary/30">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Scenic view of Bataan"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            data-ai-hint="landscape nature"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
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
        <DialogContent className="sm:max-w-[600px] bg-secondary">
          <InvitationDialogContent />
        </DialogContent>
      </Dialog>
    </>
  );
}
