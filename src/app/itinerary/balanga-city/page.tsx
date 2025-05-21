
import type { Metadata } from 'next';
import {
  ArrowLeft, MapPin, Building, Utensils, // Added Utensils
  Clock, Luggage, BedSingle, CheckCircle2, CalendarCheck2,
  BellRing, Coffee, Zap, GlassWater, Wifi, Info, Users, Ruler,
  Car, Bus, Footprints, Home as HomeIcon, Map, Landmark // Added Landmark
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
    destinationId?: string;
  };
}

export async function generateMetadata({ params }: ItineraryPageProps): Promise<Metadata> {
  const destinationId = "balanga-city";
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
  const destinationId = "balanga-city";
  const destinationName = destinationId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

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
      { text: "Free WiFi", icon: Wifi, colorClass: "text-green-600" },
      { text: "Drinking water", icon: GlassWater, colorClass: "text-green-600" },
    ]
  };

  const roomPricing = {
    discountBadge: "54% OFF TODAY",
    originalPrice: "11,600.00",
    ourPrice: "6,633.85",
    instantDiscount: "1,265.62",
    roomPrice: "5,368.23",
    taxesAndFees: "1,181.00",
    bookingFees: "FREE",
    finalPrice: "6,549.23"
  };

  const day1Schedule = [
    { time: "8:00 AM", activity: "Depart from Manila", description: "Begin your journey to Bataan.", icon: Car },
    { time: "10:00 AM", subtext: "(Max)", activity: "Arrive at Robinson San Fernando, Pampanga", description: "Transit point for Bataan.", icon: MapPin },
    { time: "10:15 AM", activity: "Board Bataan Transit", description: "Located at Robinson Terminal.", icon: Bus },
    { time: "12:30 PM", subtext: "(Max)", activity: "Arrive in Balanga City", description: "Welcome to the capital of Bataan!", icon: MapPin },
    { time: "12:30 PM - 2:00 PM", activity: "Lunch at SM City Bataan", description: "Enjoy a meal before hotel check-in.", icon: Utensils },
    { time: "2:00 PM", activity: `Check-in at ${plazaHotelDetails.name}`, description: "Settle into your accommodation.", icon: HomeIcon },
    { time: "2:00 PM - 3:00 PM", activity: "Quick rest and prepare", description: "Unpack and freshen up at the hotel.", icon: HomeIcon },
    { time: "3:00 PM - 5:00 PM", activity: "Visit Bataan World War II Museum", description: "Explore local history.", icon: Landmark },
    { time: "5:00 PM - 6:00 PM", activity: "Stroll at Plaza Mayor De Ciudad de Balanga", description: "Experience the city center.", icon: Footprints },
  ];

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
          Itinerary for {destinationName}
        </h1>

        <div className="space-y-8">
          {/* Schedule Card (Full Width) */}
          <Card className="shadow-xl w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                <Clock className="mr-3 h-7 w-7 text-accent" /> Day 1 Schedule (June 14)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-3/5 space-y-4">
                   <p className="text-sm text-muted-foreground">
                    Your timeline for arrival and initial activities in Balanga City.
                  </p>
                  <div className="relative pl-2 space-y-6">
                    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-primary/30"></div> {/* Vertical line */}
                    {day1Schedule.map((item, index) => (
                      <div key={index} className="relative flex items-center gap-4">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
                        <div className="w-40 text-sm font-medium text-muted-foreground shrink-0 pl-6">
                          {item.time}
                          {item.subtext && <span className="block text-xs">{item.subtext}</span>}
                        </div>
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 shrink-0 ml-2 mr-2">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium text-foreground">{item.activity}</p>
                          {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/5 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <Map className="mr-2 h-5 w-5 text-primary" />
                    Route Overview
                  </h3>
                  <div className="relative aspect-[1/1] w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://maps.google.com/maps?q=Robinson%20Starmills%20Pampanga%2C%20San%20Fernando%20to%20Balanga%2C%20Bataan&t=&z=10&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border:0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Route from Robinson Starmills Pampanga to Balanga, Bataan"
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Live map showing the route from Robinsons Starmills Pampanga, San Fernando to Balanga City, Bataan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation and Suggested Room Cards (Side-by-Side) */}
          <div className="flex flex-col md:flex-row gap-8">
            <Card className="shadow-xl md:w-1/2">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                  <Building className="mr-3 h-7 w-7" /> Your Stay: {plazaHotelDetails.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Settle in and get acquainted with the heart of Balanga City. Standard Check-in: {plazaHotelDetails.checkInTime}.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    Accommodation Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 items-start">
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
                <Separator />
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

            <Card className="shadow-xl md:w-1/2">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Suggested Room at {plazaHotelDetails.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="relative w-full sm:w-1/3 md:w-2/5 aspect-[16/9] rounded-lg overflow-hidden shadow-md flex-shrink-0">
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

                <Separator className="my-6" />

                <div>
                  <div className="flex justify-end mb-2">
                    <Badge variant="destructive" className="bg-accent text-accent-foreground text-xs">
                      {roomPricing.discountBadge}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Original price (1 room x 2 nights)</span>
                      <span className="line-through">₱ {roomPricing.originalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Our price</span>
                      <span className="line-through">₱ {roomPricing.ourPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600 font-medium">Instant discount</span>
                      <span className="text-green-600 font-medium">-₱ {roomPricing.instantDiscount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Room price (1 room x 2 nights)</span>
                      <span>₱ {roomPricing.roomPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes and fees</span>
                      <span>₱ {roomPricing.taxesAndFees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600 font-medium">Booking fees</span>
                      <span className="text-green-600 font-medium">{roomPricing.bookingFees}</span>
                    </div>
                  </div>
                  <Separator className="my-4 border-dashed" />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-lg font-semibold text-foreground">
                      Price <Info className="ml-1 h-4 w-4 text-muted-foreground cursor-pointer" title="Total price for the stay" />
                    </div>
                    <span className="text-xl font-bold text-primary">₱ {roomPricing.finalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

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


    