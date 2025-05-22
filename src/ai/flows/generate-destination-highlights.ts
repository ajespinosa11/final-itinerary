
'use server';
/**
 * @fileOverview Generates highlights for a given destination.
 *
 * - generateDestinationHighlights - A function that generates highlights.
 * - GenerateHighlightsInput - The input type for the function.
 * - GenerateHighlightsOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateHighlightsInputSchema = z.object({
  destinationName: z.string().describe('The name of the destination in Bataan, Philippines.'),
});
export type GenerateHighlightsInput = z.infer<typeof GenerateHighlightsInputSchema>;

const GenerateHighlightsOutputSchema = z.object({
  highlights: z
    .array(z.string())
    .describe('A list of 3-4 concise and engaging highlights for the destination.'),
});
export type GenerateHighlightsOutput = z.infer<typeof GenerateHighlightsOutputSchema>;

export async function generateDestinationHighlights(
  input: GenerateHighlightsInput
): Promise<GenerateHighlightsOutput> {
  return generateHighlightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDestinationHighlightsPrompt',
  input: { schema: GenerateHighlightsInputSchema },
  output: { schema: GenerateHighlightsOutputSchema },
  prompt: `Generate exactly 3 bullet-point style highlights for {{destinationName}} in Bataan, Philippines.
Each highlight should be a concise and engaging phrase about unique aspects, key attractions, or experiences.
Focus on providing appealing summaries that would entice a tourist.
For example, if the destination is "Balanga City", highlights could be:
- "Explore the historic Balanga Cathedral and Plaza Mayor de Ciudad."
- "Discover migratory birds at the Balanga Wetland and Nature Park."
- "Delve into WWII history at the Bataan World War II Museum."

Return only the highlights.`,
});

const generateHighlightsFlow = ai.defineFlow(
  {
    name: 'generateHighlightsFlow',
    inputSchema: GenerateHighlightsInputSchema,
    outputSchema: GenerateHighlightsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
