
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  BedDouble,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  Dog,
  Flame,
  Info,
  MapPin,
  ParkingCircle,
  Salad, // For food/meals
  ShieldAlert, // For rules/warnings
  ShoppingBag,
  Sparkles, // For special offers or highlights
  Sun,
  Utensils,
  Waves, // For beach/pool
  Wifi,
  XCircle, // For NOT ALLOWED
  Users,
  Wind, // For Air-conditioned
  GlassWater,
  Briefcase,
  Ban
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
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    room: {
      name: "Deluxe Room",
      price: "PHP 6,000",
      features: ["One double bed", "Free breakfast for 2"],
    },
    rules: [
      { text: "NO PETS ALLOWED", icon: Dog, type: "disallowed" as const },
      { text: "NO SMOKING INSIDE THE ROOMS", icon: Ban, type: "disallowed" as const },
      { text: "NOT ALLOWED - COOKED FOOD", icon: Flame, type: "disallowed" as const },
      { text: "NOT ALLOWED - COOKING", icon: Flame, type: "disallowed" as const },
      { text: "DO NOT USE BATH TOWEL ON THE FLOOR", icon: Info, type: "info" as const },
      { text: "NO MAONGS / COTTONS - WEAR PROPER SWIMMING ATTIRE", icon: Waves, type: "info" as const },
      { text: "ALLOWED (Bread, Chips, Water)", icon: CheckCircle2, type: "allowed" as const },
      { text: "WE HAVE IN-HOUSE RESTAURANT - 7 a.m. to 8 p.m.", icon: Utensils, type: "info" as const },
      { text: "DAY TOUR is allowed; limited slots on weekends", icon: Sun, type: "info" as const },
    ],
    rebookingPolicy: [
      "You can re-book within the span of 60 days, starting from your original reservation date.",
      "Must inform 72 hours prior to your reservation date, in order to avoid being charged.",
      "If you re-book on the day of your reservation date, you will be charged a 15% re-booking fee from the total value of your reserved rooms.",
      "\"FORFEITED RESERVATION AND DOWN PAYMENT\" (no refund) will apply if a customer is NO SHOW or CANCELLED their reservation on the day without giving notice.",
    ],
  };

  const morongstarDetails = {
    name: "Morongstar Hotel and Resort",
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

  const getRuleIcon = (type: 'disallowed' | 'allowed' | 'info', SpecificIcon: any) => {
    if (type === 'disallowed') return <Ban className="h-4 w-4 mr-2 text-destructive" />;
    if (type === 'allowed') return <CheckCircle2 className="h-4 w-4 mr-2 text-green-600" />;
    return <SpecificIcon className="h-4 w-4 mr-2 text-primary" />;
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
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{verzeAzulDetails.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                Check-in: {verzeAzulDetails.checkIn} / Check-out: {verzeAzulDetails.checkOut}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <ShieldAlert className="mr-2 h-5 w-5 text-accent" /> Resort Rules
                </h3>
                <ul className="space-y-2 text-sm">
                  {verzeAzulDetails.rules.map((rule, idx) => (
                    <li key={idx} className={`flex items-center p-2 rounded-md ${rule.type === 'disallowed' ? 'bg-destructive/10 text-destructive' : rule.type === 'allowed' ? 'bg-green-500/10 text-green-700' : 'bg-blue-500/10 text-blue-700'}`}>
                      {getRuleIcon(rule.type, rule.icon)}
                      <span>{rule.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <CalendarClock className="mr-2 h-5 w-5 text-accent" /> Rebooking Policy Only
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {verzeAzulDetails.rebookingPolicy.map((policy, idx) => (
                    <li key={idx}>{policy}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{morongstarDetails.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                Check-in: {morongstarDetails.checkIn} / Check-out: {morongstarDetails.checkOut}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
            </CardContent>
          </Card>

           <div className="p-8 bg-secondary/30 rounded-lg shadow-xl mt-8">
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

    
