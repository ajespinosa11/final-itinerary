
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  BedDouble,
  CheckCircle2,
  Info,
  MapPin,
  Salad,
  ShieldAlert,
  ShoppingBag,
  Utensils,
  Waves,
  Wifi,
  Users,
  Wind,
  Map,
  Clock,
  Car,
  Home as HomeIcon,
  Footprints,
  Luggage,
  CalendarClock,
  Ban,
  Flame,
  Dog,
  ParkingCircle,
  Sun,
  GlassWater,
  Briefcase,
  ChevronRight,
  Sparkles,
  XCircle
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
    description: `Plan your trip to ${destinationName}, featuring a day 1 schedule and accommodation options like Verde Azul Leisure Resort and Morongstar Hotel and Resort.`,
  };
}

interface ResortRule {
  text: string;
  type: 'allowed' | 'disallowed' | 'info';
  icon?: React.ElementType;
}

const getRuleIcon = (rule: ResortRule) => {
  if (rule.icon) return rule.icon;
  switch (rule.type) {
    case 'allowed':
      return CheckCircle2;
    case 'disallowed':
      return Ban;
    case 'info':
    default:
      return Info;
  }
};

const montageImages = [
  { src: "https://mediaim.expedia.com/destination/9/b543ead1026500e146d98335c3cddf75.jpg", alt: "Bataan Montage Image 1" },
  { src: "https://mediaim.expedia.com/destination/9/35f960a2db723efa2fc4bccea71d4804.jpg", alt: "Bataan Montage Image 2" },
  { src: "https://mediaim.expedia.com/destination/2/f010be995f59ba59a59c1dccae024dad.jpg", alt: "Bataan Montage Image 3" },
  { src: "https://mediaim.expedia.com/destination/2/2f84ab5c2e60465b84affca9cf9cc034.jpg", alt: "Bataan Montage Image 4" },
  { src: "https://mediaim.expedia.com/destination/2/be7ab04c4fa7ab7779f91f101f6595a3.jpg", alt: "Bataan Montage Image 5" },
];


export default function MorongItineraryPage() {
  const destinationName = "Morong";

  const day1MorongSchedule = [
    { time: "12:00 PM", activity: "Depart from The Plaza Hotel - Balanga", description: "Begin your journey to Morong.", icon: Car },
    { time: "12:00 PM - 1:30 PM", activity: "Travel to Morong, Bataan", description: "Expected arrival in Morong.", icon: MapPin },
    { time: "1:30 PM - 2:00 PM", activity: "Arrival and Check-in at Chosen Resort", description: "Settle into your accommodation in Morong.", icon: HomeIcon },
    { time: "2:00 PM - 3:00 PM", activity: "Rest and Light Meal at Resort", description: "Unpack and have a quick bite.", icon: BedDouble },
    { time: "3:00 PM - 6:00 PM", activity: "Beach Stroll & Picture Taking", description: "Enjoy the coastline and capture memories.", icon: Waves },
  ];

  const day2MorongSchedule = [
    { time: "06:00 AM - 07:00 AM", activity: "Breakfast", description: "Enjoy breakfast at the resort.", icon: Utensils },
    { time: "07:00 AM - 09:00 AM", activity: "Beach Walk", description: "Take a refreshing walk along the beach.", icon: Footprints },
    { time: "09:00 AM - 11:00 AM", activity: "Packing Things Up", description: "Prepare for checkout.", icon: Luggage },
    { time: "11:00 AM", activity: "Depart from Resort", description: "Depart from Resort.", icon: Car },
  ];

  const verdeAzulDetails = {
    name: "Verde Azul Leisure Resort",
    imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/31/50/e3/this-resort-is-a-hidden.jpg?w=1400&h=-1&s=1",
    imageAlt: "Verde Azul Leisure Resort",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    room: {
      name: "Deluxe Room",
      price: "PHP 6,000",
      features: ["One double bed", "Free breakfast for 2"],
    },
    rebookingPolicy: [
      "You can re-book within the span of 60 days, starting from your original reservation date.",
      "Must inform 72 hours prior to your reservation date, in order to avoid being charged.",
      "If you re-book on the day of your reservation date, you will be charged a 15% re-booking fee from the total value of your reserved rooms.",
      "\"FORFEITED RESERVATION AND DOWN PAYMENT\" (no refund) will apply if a customer is NO SHOW or CANCELLED their reservation on the day without giving notice."
    ],
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
      <main className="flex-grow container mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <Button variant="outline" asChild className="mb-6 transition-transform hover:scale-105">
          <Link href="/#highlights">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
          Itinerary for {destinationName}, Bataan
        </h1>

        {/* Photo Montage Section */}
        <div className="mb-8 space-y-2">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src={montageImages[0].src} alt={montageImages[0].alt} layout="fill" objectFit="cover" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {montageImages.slice(1).map((img, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Day 1 Schedule Card */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full mb-8">
           <CardHeader>
             <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                <Clock className="mr-3 h-7 w-7 text-accent" /> Day 1 Schedule (June 15) - Morong Arrival & Beach
              </CardTitle>
            </CardHeader>
            <CardContent>
             <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-3/5 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Your timeline for arrival and initial activities in Morong.
                  </p>
                  <div className="relative pl-2 space-y-6">
                    <div className="absolute left-[7px] top-1/2 -translate-y-1/2 h-full w-0.5 bg-primary/30"></div> {/* Vertical line */}
                    {day1MorongSchedule.map((item, index) => (
                      <div key={index} className="relative flex items-center gap-4">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
                        <div className="w-40 text-sm font-medium text-muted-foreground shrink-0 pl-6">
                          {item.time}
                        </div>
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 shrink-0 ml-2 mr-2">
                          <item.icon className="h-5 w-5 text-accent" />
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
                    Route from Balanga to Morong
                  </h3>
                  <div className="relative aspect-[1/1] w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://maps.google.com/maps?q=Balanga%2C%20Bataan%20to%20Morong%2C%20Bataan&t=&z=11&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border:0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Route from Balanga to Morong, Bataan"
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Live map showing the route from Balanga City to Morong Municipality, Bataan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        {/* Day 2 Schedule Card */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary flex items-center">
              <Clock className="mr-3 h-7 w-7 text-accent" /> Day 2 Schedule (June 16) - Beach & Departure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Your timeline for morning activities and departure from Morong.
                </p>
                <div className="relative pl-2 space-y-6">
                  <div className="absolute left-[7px] top-1/2 -translate-y-1/2 h-full w-0.5 bg-primary/30"></div> {/* Vertical line */}
                  {day2MorongSchedule.map((item, index) => (
                    <div key={index} className="relative flex items-center gap-4">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
                      <div className="w-40 text-sm font-medium text-muted-foreground shrink-0 pl-6">
                        {item.time}
                      </div>
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 shrink-0 ml-2 mr-2">
                        <item.icon className="h-5 w-5 text-accent" />
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
                  <Waves className="mr-2 h-5 w-5 text-primary" />
                  Morong Beach
                </h3>
                <div className="relative aspect-[1/1] w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://bataan.gov.ph/wp-content/smush-webp/2021/10/pawikan-morong-municipality-image.jpg.webp"
                    alt="Pawikan Conservation Center area in Morong"
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Morong is known for its serene beaches, perfect for a morning walk.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8 text-center">
          Suggested Accommodation in {destinationName}
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{verdeAzulDetails.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                Check-in: {verdeAzulDetails.checkIn} / Check-out: {verdeAzulDetails.checkOut}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src={verdeAzulDetails.imageSrc}
                  alt={verdeAzulDetails.imageAlt}
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
                  <p className="font-medium text-foreground">{verdeAzulDetails.room.name} - <span className="text-primary">{verdeAzulDetails.room.price}</span></p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    {verdeAzulDetails.room.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <ShieldAlert className="mr-2 h-5 w-5 text-accent" /> Rebooking Policy Only
                </h3>
                <div className="p-4 bg-secondary/30 rounded-md text-sm text-muted-foreground space-y-2">
                  <ul className="list-decimal list-inside space-y-1">
                    {verdeAzulDetails.rebookingPolicy.map((policy, idx) => (
                      <li key={idx}>{policy}</li>
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
                    src="https://maps.google.com/maps?q=Verde%20Azul%20Leisure%20Resort%2C%20Morong%2C%20Bataan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border:0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Verde Azul Leisure Resort Location"
                  ></iframe>
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Map showing the location of {verdeAzulDetails.name}.
                </p>
              </div>

            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:w-1/2">
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
      </main>
      <Footer />
    </>
  );
}

    
