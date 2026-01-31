import api from ".";

export const searchProductService = async (name: string): Promise<any> => {
  const res = await api.get(`/api/products?name=${name}`);
  return res.data;
};
