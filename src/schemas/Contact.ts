import z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z
    .string()
    .min(1, "Email is required")
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "Invalid email address",
    }),

  subject: z.string().min(1, "Subject is required"),

  phoneNumber: z
    .string()
    .regex(/^01[3-9]\d{8}$/, "Please enter a valid Bangladeshi phone number")
    .optional(),

  message: z.string().min(1, "Message is required"),
});
