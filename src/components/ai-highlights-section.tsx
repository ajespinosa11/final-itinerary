
import { generateDestinationHighlights, type GenerateHighlightsOutput } from '@/ai/flows/generate-destination-highlights';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ListChecks, AlertTriangle, Loader2 } from 'lucide-react';

async function HighlightsForDestination({ destinationName }: { destinationName: string }) {
  let highlightsOutput: GenerateHighlightsOutput | null = null;
  let error: string | null = null;

  try {
    highlightsOutput = await generateDestinationHighlights({ destinationName });
  } catch (e: any) {
    console.error(`Error fetching highlights for ${destinationName}:`, e);
    error = `Could not load highlights for ${destinationName}. ${e.message || ''}`;
  }

  return (
    <Card className="w-full shadow-xl bg-card hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-primary text-xl">
          Key Highlights for {destinationName}
        </CardTitle>
        <CardDescription>Concise insights for your visit.</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertTitle className="text-destructive">Loading Error</AlertTitle>
            <AlertDescription className="text-destructive/80">{error}</AlertDescription>
          </Alert>
        )}
        {highlightsOutput && highlightsOutput.highlights && highlightsOutput.highlights.length > 0 && (
          <ul className="space-y-3">
            {highlightsOutput.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start text-sm">
                <ListChecks className="mr-2.5 mt-0.5 h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {highlightsOutput && (!highlightsOutput.highlights || highlightsOutput.highlights.length === 0) && !error && (
          <p className="text-muted-foreground italic">No highlights available at the moment.</p>
        )}
        {!highlightsOutput && !error && ( 
          <div className="flex flex-col items-center justify-center space-y-2 h-24">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Generating highlights...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default async function AiHighlightsSection() {
  return (
    <section id="ai-highlights" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Destination Insights
          </h2>
        </div>
        <div className="space-y-8">
           <HighlightsForDestination destinationName="Balanga City" />
           <HighlightsForDestination destinationName="Morong Municipality" />
        </div>
      </div>
    </section>
  );
}
