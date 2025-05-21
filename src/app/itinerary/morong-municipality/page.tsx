
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  BedDouble,
  CalendarClock,
  CheckCircle2,
  Info,
  MapPin, // Kept for general use, can be removed if not needed for maps
  Salad, // For food/meals
  ShoppingBag,
  Utensils,
  Waves, // For beach/pool
  Wifi,
  Users,
  Wind, // For Air-conditioned
  Map // Added for map sections
} from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata(): Promise<Metadata> {
  const destinationName = "Morong Municipality";
  return {
    title: `Itinerary for ${destinationName} | Bataan Explorer`,
    description: `Plan your trip to ${destinationName}, featuring accommodation options like Verze Azul Leisure Resort and Morongstar Hotel and Resort.`,
  };
}

export default function MorongItineraryPage() {
  const destinationName = "Morong";

  const verzeAzulDetails = {
    name: "Verze Azul Leisure Resort",
    imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/31/50/e3/this-resort-is-a-hidden.jpg?w=1400&h=-1&s=1",
    imageAlt: "Verze Azul Leisure Resort",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    room: {
      name: "Deluxe Room",
      price: "PHP 6,000",
      features: ["One double bed", "Free breakfast for 2"],
    },
    // Rules and rebooking policy removed as per request
  };

  const morongstarDetails = {
    name: "Morongstar Hotel and Resort",
    imageSrc: "https://i.ytimg.com/vi/gMIC8zyyr34/maxresdefault.jpg",
    imageAlt: "Morongstar Hotel and Resort",
    checkIn: "2:00 PM",
    checkOut: "12:00 NN",
    packages: [
      {
        name: "Package A: Room for 2",
        price: "PHP 5,000",
        inclusions: [
          { text: "Air-conditioned Room Accommodation", icon: Wind },
          { text: "3 Meals (Dinner-first Meal, Breakfast and Lunch)", icon: Utensils },
          { text: "Beach and Swimming Pool Access", icon: Waves },
          { text: "VAT Inclusive", icon: CheckCircle2 },
        ],
      },
      {
        name: "Package B: Room for 2",
        price: "PHP 3,600",
        inclusions: [
          { text: "Air-conditioned Room Accommodation", icon: Wind },
          { text: "Complimentary Breakfast", icon: Salad },
          { text: "Beach and Swimming Pool Access", icon: Waves },
          { text: "VAT Inclusive", icon: CheckCircle2 },
        ],
      },
    ],
    corkage: "Outside food & Alcoholic drinks - 100 pesos/head",
  };

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Button variant="outline" asChild className="mb-6 transition-transform hover:scale-105">
          <Link href="/#highlights">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
          Suggested Accommodation in {destinationName}, Bataan
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <Card className="shadow-lg md:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{verzeAzulDetails.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                Check-in: {verzeAzulDetails.checkIn} / Check-out: {verzeAzulDetails.checkOut}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src={verzeAzulDetails.imageSrc}
                  alt={verzeAzulDetails.imageAlt}
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <BedDouble className="mr-2 h-5 w-5 text-accent" /> Available Room
                </h3>
                <div className="p-4 bg-secondary/30 rounded-md">
                  <p className="font-medium text-foreground">{verzeAzulDetails.room.name} - <span className="text-primary">{verzeAzulDetails.room.price}</span></p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    {verzeAzulDetails.room.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <Map className="mr-2 h-5 w-5 text-accent" /> Location Map
                </h3>
                <div className="relative aspect-[1/1] w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://maps.google.com/maps?q=Verze%20Azul%20Leisure%20Resort%2C%20Morong%2C%20Bataan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border:0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Verze Azul Leisure Resort Location"
                  ></iframe>
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Map showing the location of {verzeAzulDetails.name}.
                </p>
              </div>

            </CardContent>
          </Card>

          <Card className="shadow-lg md:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{morongstarDetails.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                Check-in: {morongstarDetails.checkIn} / Check-out: {morongstarDetails.checkOut}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src={morongstarDetails.imageSrc}
                  alt={morongstarDetails.imageAlt}
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-lg"
                />
              </div>
              {morongstarDetails.packages.map((pkg, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5 text-accent" /> {pkg.name} - <span className="text-primary">{pkg.price}</span>
                  </h3>
                  <div className="p-4 bg-secondary/30 rounded-md">
                    <p className="font-medium text-foreground mb-1">Inclusions:</p>
                    <ul className="space-y-1 text-sm">
                      {pkg.inclusions.map((inclusion, iIdx) => (
                        <li key={iIdx} className="flex items-center text-muted-foreground">
                          <inclusion.icon className="h-4 w-4 mr-2 text-primary" />
                          {inclusion.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center">
                  <Info className="mr-2 h-5 w-5 text-accent" /> Additional Notes
                </h3>
                <p className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded-md">{morongstarDetails.corkage}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <Map className="mr-2 h-5 w-5 text-accent" /> Location Map
                </h3>
                <div className="relative aspect-[1/1] w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://maps.google.com/maps?q=Morongstar%20Hotel%20and%20Resort%2C%20Morong%2C%20Bataan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border:0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Morongstar Hotel and Resort Location"
                  ></iframe>
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Map showing the location of {morongstarDetails.name}.
                </p>
              </div>

            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 mt-8">
           <div className="p-8 bg-secondary/30 rounded-lg shadow-xl">
            <p className="text-xl text-foreground font-medium">
              More Itinerary Details for {destinationName} Coming Soon!
            </p>
            <p className="mt-2 text-muted-foreground">
              This page will soon display a detailed day-by-day itinerary including suggested activities,
              timings, and useful tips for your visit to {destinationName}.
              For now, please check back later or explore other destinations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

    