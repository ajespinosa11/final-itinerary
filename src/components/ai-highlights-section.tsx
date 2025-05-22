
import { generateDestinationHighlights, type GenerateHighlightsOutput } from '@/ai/flows/generate-destination-highlights';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, ListChecks, AlertTriangle, Loader2 } from 'lucide-react';

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
    <Card className="flex-1 min-w-[300px] max-w-md shadow-xl bg-card hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-primary text-xl">
          <Sparkles className="mr-3 h-6 w-6 text-accent" />
          {destinationName}
        </CardTitle>
        <CardDescription>AI-Generated Key Highlights</CardDescription>
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
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI-Powered Destination Insights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover unique insights and must-see spots for Bataan's key municipalities, curated by AI.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-8">
           <HighlightsForDestination destinationName="Balanga City" />
           <HighlightsForDestination destinationName="Morong Municipality" />
        </div>
      </div>
    </section>
  );
}
