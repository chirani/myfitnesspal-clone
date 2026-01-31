import { useMutation } from "@tanstack/react-query";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCreateFood } from "../../hooks/product";

export type FoodFormValues = {
  name: string;
  caloriesPer100g: number;
  proteinPer100g: number;
  carbsPer100g: number;
  fatsPer100g: number;
};

const initialState: FoodFormValues = {
  name: "",
  caloriesPer100g: 0,
  proteinPer100g: 0,
  carbsPer100g: 0,
  fatsPer100g: 0,
};

export const Route = createFileRoute("/foods/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const { mutate: createFood, isSuccess } = useCreateFood();
  const [form, setForm] = useState<FoodFormValues>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FoodFormValues, string>>
  >({});
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: typeof errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (form.caloriesPer100g < 0) newErrors.caloriesPer100g = "Must be ≥ 0";
    if (form.proteinPer100g < 0) newErrors.proteinPer100g = "Must be ≥ 0";
    if (form.carbsPer100g < 0) newErrors.carbsPer100g = "Must be ≥ 0";
    if (form.fatsPer100g < 0) newErrors.fatsPer100g = "Must be ≥ 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    if (isSuccess) {
      navigate({ to: "/" });
    }
  }, [isSuccess]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Food payload:", form);
    createFood(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-8">
      <div>
        <label>Name</label>
        <input
          className="input"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <label>Calories / 100g</label>
      <input
        className="input"
        type="number"
        name="caloriesPer100g"
        value={form.caloriesPer100g}
        onChange={handleChange}
      />
      {errors.caloriesPer100g && <p>{errors.caloriesPer100g}</p>}

      <label>Protein / 100g</label>
      <input
        className="input"
        type="number"
        name="proteinPer100g"
        value={form.proteinPer100g}
        onChange={handleChange}
      />

      <label>Carbs / 100g</label>
      <input
        className="input"
        type="number"
        name="carbsPer100g"
        value={form.carbsPer100g}
        onChange={handleChange}
      />

      <label>Fats / 100g</label>
      <input
        placeholder="Fats per 100g"
        className="input"
        type="number"
        name="fatsPer100g"
        value={form.fatsPer100g}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn-primary w-full">
        Save Food
      </button>
    </form>
  );
}
