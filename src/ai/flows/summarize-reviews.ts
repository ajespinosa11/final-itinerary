// Summarizes user reviews for a destination using Genkit.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReviewsInputSchema = z.object({
  destinationName: z.string().describe('The name of the destination.'),
  reviews: z.array(z.string()).describe('An array of user reviews for the destination.'),
});
export type SummarizeReviewsInput = z.infer<typeof SummarizeReviewsInputSchema>;

const SummarizeReviewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the user reviews.'),
});
export type SummarizeReviewsOutput = z.infer<typeof SummarizeReviewsOutputSchema>;

export async function summarizeReviews(input: SummarizeReviewsInput): Promise<SummarizeReviewsOutput> {
  return summarizeReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeReviewsPrompt',
  input: {
    schema: SummarizeReviewsInputSchema,
  },
  output: {
    schema: SummarizeReviewsOutputSchema,
  },
  prompt: `Summarize the following user reviews for {{destinationName}}.\n\nReviews:\n{{#each reviews}}\n- {{{this}}}\n{{/each}}\n\nSummary: `,
});

const summarizeReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeReviewsFlow',
    inputSchema: SummarizeReviewsInputSchema,
    outputSchema: SummarizeReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
