
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

interface ItineraryPageProps {
  params: {
    destinationId: string;
  };
}

export async function generateMetadata({ params }: ItineraryPageProps): Promise<Metadata> {
  const destinationName = params.destinationId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return {
    title: `Itinerary for ${destinationName} | Bataan Explorer`,
    description: `View and plan your itinerary for ${destinationName} in Bataan.`,
  };
}

export default function ItineraryPage({ params }: ItineraryPageProps) {
  const { destinationId } = params;
  const destinationName = destinationId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto max-w-4xl px-4 py-8 sm:px-6 md:px-8">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/#highlights">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl mb-6">
          Itinerary for {destinationName}
        </h1>
        <div className="p-8 bg-secondary/30 rounded-lg shadow-xl">
          <p className="text-xl text-foreground font-medium">
            Detailed Itinerary for {destinationName} Coming Soon!
          </p>
          <p className="mt-2 text-muted-foreground">
            This page will soon display a detailed itinerary including suggested activities,
            timings, and useful tips for your visit to {destinationName}.
            For now, please check back later or explore other destinations.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
