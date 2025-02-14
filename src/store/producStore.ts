import { create } from "zustand";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductStore {
  products: Product[];
  fetchProducts: () => void;
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    const response = await axios.get("http://localhost/api/v1/products");
    set({ products: response.data });
  },
  addProduct: async (product) => {
    const response = await axios.post(
      "http://localhost/api/v1/products",
      product
    );
    set((state) => ({ products: [...state.products, response.data] }));
  },
  updateProduct: async (product) => {
    await axios.put(`http://localhost/api/v1/products/${product.id}`, product);
    set((state) => ({
      products: state.products.map((p) => (p.id === product.id ? product : p)),
    }));
  },
  deleteProduct: async (id) => {
    await axios.delete(`http://localhost/api/v1/products/${id}`);
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    }));
  },
}));

export default useProductStore;
