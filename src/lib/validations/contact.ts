import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceType: z.enum(["Trust Services", "Digital Consultancy", "DISP Advisory", "Other"]),
});

export type ContactInput = z.infer<typeof contactSchema>;
