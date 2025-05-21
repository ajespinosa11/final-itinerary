
import type { Metadata } from 'next';
import { ArrowLeft, MapPin, BedDouble, Utensils, Building } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ItineraryPageProps {
  params: {
    destinationId: string;
  };
}

export async function generateMetadata({ params }: ItineraryPageProps): Promise<Metadata> {
  // This will correctly be 'balanga-city'
  const destinationId = params.destinationId;
  const destinationName = destinationId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return {
    title: `Itinerary for ${destinationName} | Bataan Explorer`,
    description: `Plan your Day 1 in ${destinationName}, starting with a stay at The Plaza Hotel.`,
  };
}

export default function ItineraryPage({ params }: ItineraryPageProps) {
  const { destinationId } = params; // e.g., "balanga-city"
  const destinationName = destinationId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); // e.g., "Balanga City"

  // Placeholder for fetching actual itinerary data based on destinationId
  // For now, we'll hardcode for Balanga City
  const isBalangaCity = destinationId === 'balanga-city';

  const plazaHotelDetails = {
    name: "The Plaza Hotel - Balanga",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "The Plaza Hotel in Balanga City",
    dataAiHint: "hotel building",
    description: "The Plaza Hotel Balanga is a prominent landmark in Balanga City, Bataan, known for its distinctive European-inspired architecture. Centrally located, it offers convenient access to key city attractions like the St. Joseph Cathedral and the Balanga City Hall. The hotel provides comfortable accommodations, dining options, and event facilities, making it a popular choice for both tourists and business travelers.",
    features: [
      "Elegant European-inspired facade",
      "Restaurant and cafe",
      "Event and function halls",
      "Strategically located in the city center",
    ],
    address: "Plaza Mayor de Ciudad de Balanga, Balanga City, Bataan, Philippines",
  };

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Button variant="outline" asChild className="mb-6 transition-transform hover:scale-105">
          <Link href="/#highlights">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
          Itinerary for {destinationName}
        </h1>

        {isBalangaCity ? (
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                  <BedDouble className="mr-3 h-7 w-7" /> Day 1: Arrival and City Exploration
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Settle in and get acquainted with the heart of Balanga City.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Building className="mr-2 h-5 w-5 text-accent" />
                    Check-in: {plazaHotelDetails.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={plazaHotelDetails.imageSrc}
                        alt={plazaHotelDetails.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={plazaHotelDetails.dataAiHint}
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm">{plazaHotelDetails.description}</p>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Key Features:</h4>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                          {plazaHotelDetails.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-start text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-primary" />
                        <span>{plazaHotelDetails.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator className="my-6" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                    <Utensils className="mr-2 h-5 w-5 text-accent" />
                    Evening Suggestion:
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    After settling in, consider exploring the Plaza Mayor de Ciudad de Balanga in the evening. You can have dinner at the hotel's restaurant or try local eateries nearby.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Placeholder for Day 2, Day 3, etc. */}
            <div className="p-8 bg-secondary/30 rounded-lg shadow-xl text-center">
              <p className="text-xl text-foreground font-medium">
                More Activities for {destinationName} Coming Soon!
              </p>
              <p className="mt-2 text-muted-foreground">
                Detailed plans for subsequent days, including other attractions, dining, and tips, will be added here.
              </p>
            </div>
          </div>
        ) : (
          // Fallback for other destinations
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
        )}
      </main>
      <Footer />
    </>
  );
}
