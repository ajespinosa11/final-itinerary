
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Sun } from 'lucide-react';
import Image from 'next/image';

const travelPlans = [
  {
    id: 'historical-tour',
    name: 'Historical Bataan Tour',
    duration: '3 Days, 2 Nights',
    price: 'PHP 5,500',
    description: 'Explore Bataan\'s rich history with visits to key landmarks, war memorials, and heritage sites.',
    imageSrc: 'https://placehold.co/400x300.png',
    dataAiHint: 'history tour',
    features: ['Visit Mount Samat Shrine', 'Tour Las Casas Filipinas', 'Corregidor Island Day Trip (optional add-on)'],
  },
  {
    id: 'nature-adventure',
    name: 'Bataan Nature Adventure',
    duration: '2 Days, 1 Night',
    price: 'PHP 4,000',
    description: 'Immerse yourself in Bataan\'s natural beauty with beach hopping, trekking, and eco-park visits.',
    imageSrc: 'https://placehold.co/400x300.png',
    dataAiHint: 'nature beach',
    features: ['Visit Pawikan Conservation Center', 'Trek to Dunsulan Falls', 'Relax at a pristine beach'],
  }
];

export default function TravelPlansSection() {
  return (
    <section id="plans" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CalendarDays className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Curated Travel Plans
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose from our expertly crafted itineraries or customize your own Bataan experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {travelPlans.map((plan) => (
            <Card key={plan.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-52 w-full">
                <Image
                  src={plan.imageSrc}
                  alt={plan.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={plan.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground flex items-center gap-4">
                  <span className="flex items-center"><Sun className="h-4 w-4 mr-1 text-accent" />{plan.duration}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-lg font-semibold text-primary">{plan.price} <span className="text-xs text-muted-foreground">/ person</span></p>
                <Button variant="outline" className="border-primary text-primary hover:bg-accent hover:text-accent-foreground transition-transform hover:scale-105">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
            Customize Your Trip
          </Button>
        </div>
      </div>
    </section>
  );
}

    