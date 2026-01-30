import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

export const signupSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
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

  const onSubmit = async (_data: LoginFormValues) => {};

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
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing up in…" : "Signup"}
      </button>
    </form>
  );
}
