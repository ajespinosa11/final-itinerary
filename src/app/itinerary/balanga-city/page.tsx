
import type { Metadata } from 'next';
import {
  ArrowLeft, MapPin, Building, Utensils,
  Clock, Luggage, BedSingle, CheckCircle2, CalendarCheck2,
  BellRing, Coffee, Zap, GlassWater, Wifi, Info, Users, Ruler
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface ItineraryPageProps {
  params: {
    // destinationId is not reliably populated from params for this static page
    // but the prop structure might be expected by Next.js
    destinationId?: string;
  };
}

export async function generateMetadata({ params }: ItineraryPageProps): Promise<Metadata> {
  const destinationId = "balanga-city"; // Hardcode for this specific page
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
  const destinationId = "balanga-city"; // Hardcode for this specific page
  const destinationName = destinationId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); // e.g., "Balanga City"

  const plazaHotelDetails = {
    name: "The Plaza Hotel - Balanga",
    imageSrc: "https://pix8.agoda.net/hotelImages/665/665955/665955_14070310130020134512.jpg?ca=2&ce=1&s=1024x",
    imageAlt: "The Plaza Hotel in Balanga City",
    description: "The Plaza Hotel Balanga is a prominent landmark in Balanga City, Bataan, known for its distinctive European-inspired architecture. Centrally located, it offers convenient access to key city attractions like the St. Joseph Cathedral and the Balanga City Hall. The hotel provides comfortable accommodations, dining options, and event facilities, making it a popular choice for both tourists and business travelers.",
    features: [
      "Elegant European-inspired facade",
      "Restaurant and cafe",
      "Event and function halls",
      "Strategically located in the city center",
    ],
    address: "Plaza Mayor de Ciudad de Balanga, Balanga City, Bataan, Philippines",
    checkInTime: "2:00 PM",
  };

  const suggestedRoomDetails = {
    name: "1 x Deluxe Twin",
    imageSrc: "https://pix8.agoda.net/hotelImages/665/665955/665955_16102014070047965737.jpg?ca=13&ce=1&s=375x&ar=16x9",
    imageAlt: "Deluxe Twin Room at The Plaza Hotel",
    size: "28 m²",
    occupancy: "Max: 2 adults, 2 children (0-7 years)",
    guests: "Guest(s): 2 adults",
    amenities: [
      { text: "Luggage storage available", icon: Luggage, colorClass: "text-primary" },
      { text: "24 hours check-in", icon: Clock, colorClass: "text-primary" },
      { text: "2 single beds", icon: BedSingle, colorClass: "text-primary" },
      { text: "Breakfast included", icon: CheckCircle2, colorClass: "text-green-600" },
      { text: "Pay nothing until 12 June 2025", icon: CalendarCheck2, colorClass: "text-green-600" },
      { text: "Hurry! Our last room for your dates at this price", icon: BellRing, colorClass: "text-accent" },
      { text: "Coffee & tea", icon: Coffee, colorClass: "text-green-600" },
      { text: "Express check-in", icon: Zap, colorClass: "text-green-600" },
      { text: "Free WiFi", icon: CheckCircle2, colorClass: "text-green-600" }, // Using CheckCircle2 for confirmed feature
      { text: "Drinking water", icon: GlassWater, colorClass: "text-green-600" },
    ]
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

        <div className="space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                <Info className="mr-3 h-7 w-7" /> Day 1: Arrival and City Exploration
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Settle in and get acquainted with the heart of Balanga City. Standard Check-in: {plazaHotelDetails.checkInTime}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Building className="mr-2 h-5 w-5 text-accent" />
                  Accommodation: {plazaHotelDetails.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={plazaHotelDetails.imageSrc}
                      alt={plazaHotelDetails.imageAlt}
                      layout="fill"
                      objectFit="cover"
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

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Suggested Room at {plazaHotelDetails.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="relative w-full sm:w-1/3 md:w-1/4 aspect-[16/9] rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src={suggestedRoomDetails.imageSrc}
                    alt={suggestedRoomDetails.imageAlt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-grow space-y-1 mt-4 sm:mt-0">
                  <h4 className="text-lg font-bold text-foreground">{suggestedRoomDetails.name}</h4>
                  <div className="flex items-center text-sm text-muted-foreground space-x-3">
                    <span className="flex items-center"><Ruler className="mr-1 h-4 w-4"/>{suggestedRoomDetails.size}</span>
                    <span className="flex items-center"><Users className="mr-1 h-4 w-4"/>{suggestedRoomDetails.occupancy}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{suggestedRoomDetails.guests}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline" className="text-green-700 border-green-500 hover:bg-green-50 font-medium">
                      <Utensils className="mr-1.5 h-4 w-4" />Free Breakfast
                    </Badge>
                    <Badge variant="outline" className="text-green-700 border-green-500 hover:bg-green-50 font-medium">
                      <Wifi className="mr-1.5 h-4 w-4" />Free Wi-Fi
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h5 className="text-md font-semibold text-foreground mb-3">Room Amenities:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  {suggestedRoomDetails.amenities.map((amenity, index) => (
                    <li key={index} className={`flex items-center ${amenity.colorClass === 'text-accent' || amenity.colorClass === 'text-green-600' ? amenity.colorClass : 'text-muted-foreground'}`}>
                      <amenity.icon className={`mr-2 h-4 w-4 shrink-0 ${amenity.colorClass === 'text-primary' ? 'text-primary' : amenity.colorClass === 'text-green-600' ? 'text-green-600' : amenity.colorClass === 'text-accent' ? 'text-accent' : 'text-muted-foreground'}`} />
                      {amenity.text}
                    </li>
                  ))}
                </ul>
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
      </main>
      <Footer />
    </>
  );
}
