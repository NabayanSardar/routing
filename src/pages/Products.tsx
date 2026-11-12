import axios from "axios";
import  { useEffect, useState } from "react";
import type { Product } from "../types/interface/product.interface";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isError, setisError] = useState<string>("");
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      setisLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log("response", response);
        setproducts(response.data);
      } catch (error: any) {
        setisError(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchProductData();
  }, []);
  return (
    <>
      <div>
        <h1>Product List</h1>
        {isLoading ?( <p>loading...</p>):(
        <div>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>)}
      </div>
    </>
  );
};

export default Products;
