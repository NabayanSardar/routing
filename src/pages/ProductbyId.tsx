import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../types/interface/product.interface";

const ProductbyId = () => {
  const navigate = useNavigate();
  const {id} = useParams();
//   console.log("parms", id);

 const [isLoading, setisLoading] = useState<boolean>(false);
  const [isError, setisError] = useState<string>("");
  const [product, setproduct] = useState<Product| null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      setisLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log("response", response);
        setproduct(response.data);
      } catch (error: any) {
        setisError(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchProductData();
  }, [id]);
  console.log("product", product)

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => navigate("/products")}
        className="border border-black p-2 w-36"
      >
        back to product
      </button>
      <div>
        <h1>Product Details</h1>
        {isLoading && <p>loading...</p>}
      </div>
    </div>
  );
};

export default ProductbyId;
