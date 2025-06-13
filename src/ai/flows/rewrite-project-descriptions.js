'use server';
/**
 * @fileOverview An AI tool that rewrites project descriptions based on the resume content.
 *
 * - rewriteProjectDescriptions - A function that handles the rewriting of project descriptions.
 * - RewriteProjectDescriptionsInput - The input type for the rewriteProjectDescriptions function.
 * - DiagnosePlantOutput - The return type for the rewriteProjectDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteProjectDescriptionsInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The content of the resume, which includes project descriptions.'),
});

// export type RewriteProjectDescriptionsInput = z.infer<
//   typeof RewriteProjectDescriptionsInputSchema
// >;

const RewriteProjectDescriptionsOutputSchema = z.object({
  rewrittenDescriptions: z
    .string()
    .describe('The rewritten project descriptions with enhanced formatting.'),
});

// export type RewriteProjectDescriptionsOutput = z.infer<
//   typeof RewriteProjectDescriptionsOutputSchema
// >;

export async function rewriteProjectDescriptions(
  input
) {
  return rewriteProjectDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteProjectDescriptionsPrompt',
  input: {schema: RewriteProjectDescriptionsInputSchema},
  output: {schema: RewriteProjectDescriptionsOutputSchema},
  prompt: `You are an expert resume writer specializing in improving project descriptions.

You will use the content of the resume to rewrite the project descriptions with enhanced and better structured formatting, for better presentation of content.

Resume content: {{{resumeContent}}}

Please rewrite the project descriptions from the provided content with enhanced formatting and structure. Return the rewritten descriptions in a single string.
`,
});

const rewriteProjectDescriptionsFlow = ai.defineFlow(
  {
    name: 'rewriteProjectDescriptionsFlow',
    inputSchema: RewriteProjectDescriptionsInputSchema,
    outputSchema: RewriteProjectDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output;
  }
);
