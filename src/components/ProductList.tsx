import React from "react";
import useProductStore from "../store/producStore";

const ProductList: React.FC = () => {
  const { products, deleteProduct } = useProductStore();

  return (
    <ul className="mt-4">
      {products.map((product) => (
        <li key={product.id} className="flex justify-between border-b p-2">
          {product.name} - ${product.price}
          <button
            onClick={() => deleteProduct(product.id!)}
            className="text-red-500"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
