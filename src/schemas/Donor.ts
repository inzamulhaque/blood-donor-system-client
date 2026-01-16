import z from "zod";
import { BLOOD_GROUPS } from "../constants/bloodGroup";
import { UPOZILAS_PABNA } from "../constants/upozila";
import dayjs, { Dayjs } from "dayjs";

export const DonorUserRegisterSchema = z
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

    bloodGroup: z.enum(BLOOD_GROUPS),

    upozila: z.enum(UPOZILAS_PABNA),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const DonorSchema = z.object({
  name: z
    .string("Donor name is required")
    .trim()
    .min(2, "Name must be at least 2 characters long"),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "Invalid email address",
    })
    .optional(),

  phoneNumber: z
    .string("Phone number is required")
    .regex(/^[0-9]{11}$/, "Phone number must be 11 digits"),

  bloodGroup: z.enum(BLOOD_GROUPS),

  upozila: z.enum(UPOZILAS_PABNA),

  addedBy: z.number(),
});

export const DonateDateSchema = z.object({
  date: z.custom<Dayjs>((value) => dayjs.isDayjs(value), {
    message: "Invalid date",
  }),

  note: z
    .string()
    .max(150, { message: "Note must be at most 150 characters long" })
    .optional(),
});
