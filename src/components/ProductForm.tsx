import React from "react";
import { useForm } from "react-hook-form";
import useProductStore from "../store/producStore";

interface NewProduct {
  name: string;
  price: number;
}

interface Product extends NewProduct {
  id: number;
}

const ProductForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Product>();
  const { addProduct, updateProduct } = useProductStore();

  const onSubmit = (data: NewProduct & Partial<Product>) => {
    if (data.id) {
      updateProduct(data as Product);
    } else {
      addProduct(data);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        {...register("name")}
        placeholder="Nombre"
        className="border p-2 rounded"
      />
      <input
        type="number"
        {...register("price")}
        placeholder="Precio"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
    </form>
  );
};

export default ProductForm;
