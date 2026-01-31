import { useMutation } from "@tanstack/react-query";
import {
  loginSchema,
  loginService,
  logoutService,
  signupService,
} from "../services/auth";
import { authClient } from "../auth";
import type z from "zod";

export const useSignup = () => {
  return useMutation({
    mutationFn: signupService,
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
    mutationFn: logoutService,
  });
};
