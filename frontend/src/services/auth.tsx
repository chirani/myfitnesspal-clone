import z from "zod";
import api from ".";

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupService = async (data: unknown) => {
  try {
    const validatedData = signupSchema.parse(data);
    const res = await api.post("/api/auth/sign-in/email", validatedData);

    return res;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(" Validation Error:", error.message);
    } else {
      console.error(" Axios or Network Error:", error);
    }
  }
};

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginService = async (data: unknown) => {
  try {
    const validatedData = loginSchema.parse(data);
    const res = await api.post("/api/auth/sign-in/email", validatedData);

    return res;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(" Validation Error:", error.message);
    } else {
      console.error(" Axios or Network Error:", error);
    }
  }
};

export const logoutService = async () => {
  return await api.post("/api/auth/sign-out");
};
