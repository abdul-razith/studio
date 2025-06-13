"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// export type ContactFormState = {
//   message: string;
//   status: "success" | "error" | "idle";
//   errors?: {
//     name?: string[];
//     email?: string[];
//     message?: string[];
//   };
// };

export async function submitContactForm(
  prevState,
  formData
) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Invalid form data. Please check the fields.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // In a real application, you would send an email or save to a database here.
    // For this example, we'll just log the data.
    console.log("Contact form submission received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      status: "success",
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
