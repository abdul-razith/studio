"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { rewriteProjectDescriptions } from "@/ai/flows/rewrite-project-descriptions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
  resumeContent: z.string().min(50, "Please provide at least 50 characters for effective rewriting."),
});

// type FormData = z.infer<typeof FormSchema>;

export function RewriteDescriptionTool() {
  const [rewrittenText, setRewrittenText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      resumeContent: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setRewrittenText(null);
    try {
      const result = await rewriteProjectDescriptions({ resumeContent: data.resumeContent });
      setRewrittenText(result.rewrittenDescriptions);
      toast({
        title: "Success!",
        description: "Description rewritten successfully.",
      });
    } catch (error) {
      console.error("Error rewriting description:", error);
      toast({
        title: "Error",
        description: "Failed to rewrite description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-12 w-full max-w-2xl mx-auto shadow-lg" data-interactive="true">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary flex items-center">
          <Sparkles className="mr-2 h-6 w-6 text-accent" />
          AI-Powered Description Enhancer
        </CardTitle>
        <CardDescription>
          Paste your project description (or relevant resume section) below. Our AI will help you enhance its structure and formatting for better presentation.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="resumeContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Current Description / Resume Snippet</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste your project description or relevant parts of your resume here..."
                      className="min-h-[150px] resize-y"
                      {...field}
                      data-interactive="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {rewrittenText && (
              <div className="space-y-2">
                <FormLabel>AI Enhanced Description</FormLabel>
                <div className="rounded-md border bg-muted/50 p-4 min-h-[150px] whitespace-pre-wrap font-code text-sm">
                  {rewrittenText}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90" data-interactive="true">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Enhance with AI
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
