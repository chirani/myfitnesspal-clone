import { queryOptions } from "@tanstack/react-query";

export const fetchProductByName = (productName: string) =>
  queryOptions({
    queryKey: ["fetch-product-by-name", productName],
    queryFn: () => {},
  });
