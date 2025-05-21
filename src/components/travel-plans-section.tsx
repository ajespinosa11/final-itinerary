
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function TravelPlansSection() {
  return (
    <section id="plans" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Extend an Invitation to Bataan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Share the beauty and history of Bataan by inviting your friends and family for an unforgettable visit.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Sample Invitation Letter</CardTitle>
            <CardDescription className="text-muted-foreground">
              Use this template to invite someone to explore Bataan with you.
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-foreground">
            <p>Dearest [Friend's Name],</p>
            <br />
            <p>
              I hope this letter finds you well!
            </p>
            <p>
              I'm so excited to invite you on an adventure to the beautiful province of Bataan. I've been wanting to explore its rich history and stunning natural landscapes, and I immediately thought of sharing this experience with you.
            </p>
            <p>
              Bataan offers such a diverse range of attractions – from significant historical landmarks like the Mount Samat National Shrine to serene beaches in Morong and the unique heritage houses at Las Casas Filipinas de Acuzar. We could spend our days learning about its pivotal role in history, relaxing by the sea, or even trekking through lush nature parks.
            </p>
            <p>
              I was thinking we could plan a trip around [Suggest a month or specific dates, e.g., "the long weekend in October" or "sometime in November"]. Of course, I'm flexible and we can figure out dates that work best for both of us.
            </p>
            <p>
              Imagine the stories we'll create and the memories we'll make! It would be wonderful to have you join me.
            </p>
            <p>
              Let me know what you think, and we can start planning the details.
            </p>
            <br />
            <p>Warmly,</p>
            <p>[Your Name]</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
