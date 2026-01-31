import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { fetchProductByName } from "../hooks/product";

export const Component = () => {
  const [productName, setProductName] = useState<string>("");
  const { data, isSuccess }: any = useQuery(fetchProductByName(productName));
  const productList = isSuccess ? data?.data : [];

  return (
    <div className="mx-auto w-300 mt-8">
      <input
        type="text"
        className="input"
        placeholder="find a food"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <div className="flex flex-col mx-auto w-100 gap-4 mt-8">
        {productList.map((item: any) => (
          <div
            key={item?.id}
            className="border rounded-box p-4 w-full hover:opacity-50 cursor-pointer"
          >
            <p className="text-lg font-bold">{item?.name}</p>
            <p className="text-sm">Calories: {item?.caloriesPer100g}Cal/100g</p>
            <p className="text-sm">Protein: {item?.proteinPer100g}g/100g</p>
            <p className="text-sm">Carbs: {item?.carbsPer100g}</p>
            <p className="text-sm">Fats: {item?.fatsPer100g}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Component,
});
