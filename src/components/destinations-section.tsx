import DestinationCard, { type Destination } from '@/components/destination-card';
import { MapPin } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 'samat',
    name: 'Mount Samat National Shrine',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Mount Samat National Shrine',
    dataAiHint: 'monument shrine',
    shortDescription: 'A historical landmark offering panoramic views and a glimpse into Bataan\'s valiant past.',
    details: '<p>The Mount Samat National Shrine, also known as Dambana ng Kagitingan (Shrine of Valor), is a memorial complex built atop Mount Samat in Pilar, Bataan. The shrine commemorates the bravery of Filipino and American soldiers who fought during World War II.</p><p>Key features include a towering Memorial Cross and a colonnade with a museum. Visitors can take an elevator to the viewing gallery in the arms of the cross for breathtaking 360-degree views of Bataan Peninsula.</p>',
    reviews: [
      "A very historic place with immense significance.",
      "The views from the top of the cross are absolutely amazing!",
      "Learned a lot about Philippine history. A must-visit for everyone.",
      "The museum provides a lot of context. It was a solemn and educational experience."
    ],
  },
  {
    id: 'lascasas',
    name: 'Las Casas Filipinas de Acuzar',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Las Casas Filipinas de Acuzar',
    dataAiHint: 'heritage houses',
    shortDescription: 'Step back in time in this stunning resort featuring restored Spanish-Filipino colonial houses.',
    details: '<p>Las Casas Filipinas de Acuzar is an open-air museum and heritage resort in Bagac, Bataan. It showcases a collection of meticulously restored Spanish colonial-era houses, some of which were transported brick-by-brick from different parts of the Philippines.</p><p>Guests can take guided tours, ride a kalesa, or even stay in one of the heritage houses. The resort aims to preserve Filipino heritage and craftsmanship.</p>',
    reviews: [
      "Beautifully restored heritage houses, truly a sight to behold.",
      "Felt like I was transported back to the Spanish colonial era. The attention to detail is incredible.",
      "It's on the pricier side, but definitely worth it for the unique experience and historical immersion.",
      "The river cruise was a highlight. Staff were knowledgeable and friendly."
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
