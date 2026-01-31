import { useMutation } from "@tanstack/react-query";
import { loginSchema, signupSchema } from "../services/auth";
import { authClient } from "../auth";
import type z from "zod";

export type SignupFormValues = z.infer<typeof signupSchema>;

export const useSignup = () => {
  return useMutation({
    mutationFn: async (data: SignupFormValues) =>
      authClient.signUp.email({ ...data }),
  });
};

export type LoginFormValues = z.infer<typeof loginSchema>;

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginFormValues) =>
      await authClient.signIn.email({ ...data }),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => await authClient.signOut(),
  });
};
