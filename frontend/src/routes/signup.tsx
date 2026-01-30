import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";
import { signupSchema } from "../services/auth";
import { useSignup } from "../hooks/auth";

export const Route = createFileRoute("/signup")({
  beforeLoad: ({ context }) => {
    const userId = context.session?.user.id;
    if (userId) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

export type LoginFormValues = z.infer<typeof signupSchema>;

function RouteComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(signupSchema),
  });
  const { mutate: signup } = useSignup();
  const onSubmit = async (_data: LoginFormValues) => {
    signup(_data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-96 flex flex-col gap-3 mt-16"
      noValidate
    >
      <label htmlFor="username" className="text-sm">
        Username
        <input id="username" className="input" {...register("username")} />
        {errors.username && (
          <p className="text-error">{errors.username.message}</p>
        )}
      </label>

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
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing up in…" : "Signup"}
      </button>
    </form>
  );
}
