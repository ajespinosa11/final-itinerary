'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { summarizeReviews, type SummarizeReviewsInput } from '@/ai/flows/summarize-reviews';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, Info, MessageSquareQuote } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export interface Destination {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
  shortDescription: string;
  details: string; // HTML content for details
  reviews: string[];
}

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [summaryError, setSummaryError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSummarizeReviews = async () => {
    setIsLoadingSummary(true);
    setSummaryError(null);
    setSummary(null);

    try {
      const input: SummarizeReviewsInput = {
        destinationName: destination.name,
        reviews: destination.reviews,
      };
      const result = await summarizeReviews(input);
      setSummary(result.summary);
    } catch (error) {
      console.error('Error summarizing reviews:', error);
      setSummaryError('Failed to summarize reviews. Please try again.');
    } finally {
      setIsLoadingSummary(false);
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-60 w-full">
        <Image
          src={destination.imageSrc}
          alt={destination.imageAlt}
          layout="fill"
          objectFit="cover"
          data-ai-hint={destination.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">{destination.name}</CardTitle>
        <CardDescription className="text-muted-foreground min-h-[3rem]">{destination.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details">
            <AccordionTrigger className="text-primary hover:text-primary/80 font-medium">
              <Info className="inline-block mr-2 h-5 w-5" /> View Details
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: destination.details }} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="reviews">
            <AccordionTrigger className="text-primary hover:text-primary/80 font-medium">
              <MessageSquareQuote className="inline-block mr-2 h-5 w-5" /> Review Highlights
            </AccordionTrigger>
            <AccordionContent>
              {isClient ? (
                <>
                  <Button
                    onClick={handleSummarizeReviews}
                    disabled={isLoadingSummary}
                    variant="outline"
                    className="mb-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {isLoadingSummary ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    {isLoadingSummary ? 'Generating Summary...' : 'Generate AI Review Summary'}
                  </Button>
                  {isLoadingSummary && (
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  )}
                  {summaryError && (
                    <Alert variant="destructive">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{summaryError}</AlertDescription>
                    </Alert>
                  )}
                  {summary && (
                    <Alert variant="default" className="bg-secondary/50">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <AlertTitle className="text-primary">AI Generated Summary</AlertTitle>
                      <AlertDescription className="text-foreground">{summary}</AlertDescription>
                    </Alert>
                  )}
                  {!summary && !isLoadingSummary && !summaryError && (
                     <p className="text-sm text-muted-foreground italic text-center py-2">Click the button above to generate a summary of user reviews.</p>
                  )}
                </>
              ) : (
                <div className="space-y-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
          <a href={`#itinerary?destination=${destination.id}`}>Add to Itinerary</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
