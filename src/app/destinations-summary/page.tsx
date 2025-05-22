
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Destinations Summary | Bataan Explorer',
  description: 'A summary of key destinations in Bataan: Balanga City and Morong.',
};

export default function DestinationsSummaryPage() {
  const summaryDestinations = [
    {
      name: 'Balanga City',
      shortDescription: 'The capital of Bataan, offering a blend of historical significance, urban development, and natural spots. Explore historical landmarks, parks, and enjoy local cuisine.',
      id: 'balanga-city',
    },
    {
      name: 'Morong',
      shortDescription: 'A coastal municipality known for its beautiful beaches, resorts, and the Pawikan Conservation Center. Ideal for relaxation and nature-based activities.',
      id: 'morong-municipality',
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Button variant="outline" asChild className="mb-6 transition-transform hover:scale-105">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
          Destinations Summary
        </h1>
        <div className="space-y-8">
          {summaryDestinations.map((dest) => (
            <Card key={dest.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-accent" />
                  {dest.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {dest.shortDescription}
                </CardDescription>
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
                  <Link href={`/itinerary/${dest.id}`}>View {dest.name} Itinerary</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
