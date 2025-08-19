import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number too short")
    .max(20, "Phone number too long"),
  company: z.string().optional(),
  notes: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
