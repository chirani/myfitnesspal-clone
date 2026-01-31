import api from ".";
import type { FoodFormValues } from "../routes/foods/new";

export const searchProductService = async (name: string): Promise<any> => {
  const res = await api.get(`/api/products?name=${name}`);
  return res.data;
};

export const createProductSevice = async (body: FoodFormValues) => {
  const res = await api.post("/api/products/new", body);
  return res.data;
};
