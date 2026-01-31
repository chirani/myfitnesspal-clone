import { queryOptions } from "@tanstack/react-query";
import { searchProductService } from "../services/product";

export const fetchProductByName = (productName: string) =>
  queryOptions({
    queryKey: ["fetch-product-by-name", productName],
    queryFn: async () => await searchProductService(productName),
  });
