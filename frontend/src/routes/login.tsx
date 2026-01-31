import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";
import { useLogin } from "../hooks/auth";
import { loginSchema } from "../services/auth";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    const userId = context.session?.user.id;
    if (userId) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

export type LoginFormValues = z.infer<typeof loginSchema>;

function RouteComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const { mutate: login, isPending, isSuccess } = useLogin();

  useEffect(() => {
    if (isSuccess) {
      window.location.reload();
    }
  }, [isSuccess]);

  const onSubmit = async (data: LoginFormValues) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-96 flex flex-col gap-3 mt-16"
      noValidate
    >
      <label htmlFor="email" className="text-sm">
        Email
        <input
          id="email"
          className="input"
          type="email"
          {...register("email")}
        />
        {errors.email && <p className="text-error">{errors.email.message}</p>}
      </label>

      <label htmlFor="password" className="text-sm">
        Password
        <input
          id="password"
          className="input"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-error">{errors.password.message}</p>
        )}
      </label>
      <button className="btn btn-primary" type="submit" disabled={isPending}>
        {isPending ? "Loging in in…" : "Login"}
      </button>
    </form>
  );
}
