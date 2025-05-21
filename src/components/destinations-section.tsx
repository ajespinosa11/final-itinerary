import DestinationCard, { type Destination } from '@/components/destination-card';
import { MapPin } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 'balanga-cathedral',
    name: 'Balanga Cathedral (St. Joseph Cathedral)',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Balanga Cathedral',
    dataAiHint: 'cathedral church',
    shortDescription: 'A historic cathedral in the heart of Balanga City, known for its beautiful architecture and religious significance.',
    details: '<p>The Balanga Cathedral, formally known as the Diocesan Shrine and Cathedral Parish of St. Joseph, is a significant religious and historical landmark in Balanga City, Bataan. Originally built in 1739, it has undergone several reconstructions and renovations, especially after damages from wars and natural calamities. The cathedral features a beautiful facade and interiors, serving as a central place of worship and a testament to the resilient faith of the Bataeños. It played a role during World War II, serving as an artillery emplacement during the Japanese invasion.</p>',
    reviews: [
      "A peaceful and solemn place for prayer and reflection.",
      "The architecture is stunning, especially the stained glass windows.",
      "Centrally located and easy to visit. A must-see in Balanga.",
      "Rich in history and a beautiful structure."
    ],
  },
  {
    id: 'sabang-beach',
    name: 'Sabang Beach',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Sabang Beach in Morong',
    dataAiHint: 'beach resort',
    shortDescription: 'A popular beach destination in Morong, offering fine sands, clear waters, and various water activities.',
    details: '<p>Sabang Beach in Morong, Bataan, is a well-known coastal destination favored for its stretch of fine, grayish sand and relatively calm, clear waters, making it suitable for swimming and family outings. The beach is lined with various resorts and accommodations catering to different budgets. Visitors can enjoy activities like kayaking, banana boat rides, or simply relaxing by the shore. It\'s a great spot to unwind and enjoy Bataan\'s natural coastal beauty.</p>',
    reviews: [
      "Great place for a family getaway. The kids loved the beach!",
      "Clean shoreline and the water is good for swimming.",
      "Lots of resorts to choose from. We found a nice affordable one.",
      "Peaceful atmosphere, perfect for relaxing."
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
            Destination Highlights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the iconic landmarks and breathtaking attractions Bataan has to offer.
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
