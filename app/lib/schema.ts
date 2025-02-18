import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(5, "Message must be atleast 5 characters."),
});
