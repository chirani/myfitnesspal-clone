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
            <p>{item?.name}</p>
            <p>Calories: {item?.caloriesPer100g}/100g</p>
            <p>Protein: {item?.proteinPer100g}/100g</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Component,
});
