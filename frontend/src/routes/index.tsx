import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { fetchProductByName } from "../hooks/product";

export const Component = () => {
  const [productName, setProductName] = useState<string>("");
  const { data } = useQuery(fetchProductByName(productName));

  return (
    <div className="mx-auto w-300 mt-8">
      <input
        type="text"
        className="input"
        placeholder="find a food"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Component,
});
