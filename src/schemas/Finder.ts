import z from "zod";
import { UPOZILAS_PABNA } from "../constants/upozila";

export const FinderRegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters" }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
        message: "Invalid email address",
      }),

    phoneNumber: z
      .string()
      .min(11, { message: "Phone number must be 11 digits" })
      .max(11, { message: "Phone number must be 11 digits" })
      .regex(/^01[3-9]\d{8}$/, {
        message: "Invalid Bangladeshi phone number",
      }),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(18, { message: "Password must not exceed 18 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,18}$/,
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        }
      ),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),

    upozila: z.enum(UPOZILAS_PABNA),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
