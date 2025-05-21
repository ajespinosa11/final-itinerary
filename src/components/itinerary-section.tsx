import { ListChecks } from 'lucide-react';

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ListChecks className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Your Interactive Itinerary
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Build, customize, and manage your Bataan travel plans with ease.
        </p>
        <div className="mt-8 p-8 bg-secondary/30 rounded-lg shadow-md">
          <p className="text-xl text-foreground font-medium">
            Interactive Itinerary Builder Coming Soon!
          </p>
          <p className="mt-2 text-muted-foreground">
            Stay tuned for features that will let you drag-and-drop activities, map your routes, and share your plans.
          </p>
        </div>
      </div>
    </section>
  );
}
