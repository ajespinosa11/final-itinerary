
import DestinationCard, { type Destination } from '@/components/destination-card';
import { MapPin } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 'balanga-city',
    name: 'Balanga City',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Overview of Balanga City',
    dataAiHint: 'cityscape historical',
    shortDescription: 'The capital of Bataan, offering a blend of historical significance, urban development, and natural spots.',
    details: '<p>Balanga City serves as the vibrant capital of Bataan province. It is a hub of commerce, education, and governance, while also preserving its rich history. Visitors can explore historical landmarks like the Balanga Cathedral and the Bataan World War II Museum. The city is known for its efforts in environmentalism and has several parks and public spaces. It\'s a convenient base for exploring other attractions in Bataan due to its central location and accessibility.</p>',
    reviews: [
      "Balanga is a clean and progressive city. Enjoyed my visit!",
      "A lot of history to learn here, especially about WWII.",
      "Good food options and friendly locals. The public market is interesting.",
      "Well-maintained public areas and parks. Feels safe to walk around."
    ],
  },
  {
    id: 'morong-municipality',
    name: 'Morong',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Coastal view of Morong',
    dataAiHint: 'coastal town',
    shortDescription: 'A coastal municipality known for its beautiful beaches, resorts, and the Pawikan Conservation Center.',
    details: '<p>Morong is a charming coastal town in Bataan, popular for its serene beaches like Sabang Beach and a growing number of resorts catering to tourists. It is also home to the Pawikan Conservation Center, dedicated to protecting marine turtles. Beyond the beaches, Morong offers opportunities for eco-tourism, with natural landscapes and a more laid-back atmosphere compared to urban centers. It\'s an ideal destination for those seeking relaxation and a connection with nature.</p>',
    reviews: [
      "Morong\'s beaches are fantastic for a weekend getaway.",
      "Visiting the Pawikan Center was a highlight – very educational.",
      "A peaceful town with a relaxing vibe. Perfect for de-stressing.",
      "Lots of good resorts to choose from, suitable for different budgets."
    ],
  },
];

export default function DestinationsSection() {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Bataan's Municipalities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the unique character and attractions of Bataan's key areas.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
