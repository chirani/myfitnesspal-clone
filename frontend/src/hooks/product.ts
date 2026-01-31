import { queryOptions, useMutation } from "@tanstack/react-query";
import { createProductSevice, searchProductService } from "../services/product";
import type { FoodFormValues } from "../routes/foods/new";

export const fetchProductByName = (productName: string) =>
  queryOptions({
    queryKey: ["fetch-product-by-name", productName],
    queryFn: async () => await searchProductService(productName),
    enabled: productName.length > 1,
  });

export const useCreateFood = () => {
  return useMutation({
    mutationFn: async (body: FoodFormValues) => await createProductSevice(body),
  });
};
