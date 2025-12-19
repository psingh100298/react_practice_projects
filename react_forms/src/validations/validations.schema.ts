import { z } from "zod";

export const schemas = {
  login: z.object({
    email: z.email("Enter a valid email").nonempty("Email is required"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be atleast 6 charadters"),
  }),
  registration: z.object({
    fullName: z
      .string()
      .nonempty("Full name should not be empty")
      .min(3, "Full name should have 3 characters"),
    email: z.email("Enter a valid email").nonempty("Email is required"),
    phoneNumber: z
      .string()
      .nonempty("Phone number is required")
      .min(10, "Phone number must be min 10 digits"),
    country: z.string().nonempty("Country is required"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password should be min 6 characters"),
    confirmPassword: z.string().nonempty("Please confirm the password"),
    gender: z.string().nonempty('Gender id required')
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  }),
};
