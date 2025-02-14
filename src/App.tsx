import { useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import useProductStore from "./store/producStore";

function App() {
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="p-4 max-w-md mx-auto">
          <h2 className="text-xl font-bold">CRUD de Productos</h2>
          <ProductForm />
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;
