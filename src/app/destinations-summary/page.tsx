
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
      shortDescription: 'Balanga City, the vibrant capital of Bataan, serves as a significant center for commerce, education, and provincial governance. It masterfully blends urban development with a deep respect for its rich historical legacy, evident in its well-preserved landmarks. Visitors can immerse themselves in history at sites like the Balanga Cathedral and the World War II Museum or enjoy the city\'s modern amenities and parks. The city also offers a diverse culinary scene, reflecting its cultural dynamism. Its central location makes it an excellent starting point for exploring the wider wonders of Bataan province.',
      id: 'balanga-city',
    },
    {
      name: 'Morong',
      shortDescription: 'Morong is a charming coastal municipality in Bataan, celebrated for its stunning stretch of beaches that invite relaxation and water activities. It is home to numerous resorts catering to various preferences, from luxury stays to more budget-friendly options. A key attraction is the Pawikan Conservation Center, dedicated to the protection of marine turtles, offering an educational experience for visitors. Beyond its beautiful coastline, Morong\'s landscape supports eco-tourism and provides a tranquil escape from urban life. This makes it a perfect destination for those seeking a peaceful retreat combined with opportunities to connect with nature.',
      id: 'morong-municipality',
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto max-w-4xl px-6 py-8 sm:px-8 lg:px-10">
        <Button variant="outline" asChild className="mb-6">
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
            <Card key={dest.id} className="shadow-lg">
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
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
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
