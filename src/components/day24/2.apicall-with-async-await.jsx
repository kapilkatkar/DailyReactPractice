import { useEffect, useState } from "react";
import axios from "axios";

const APICallingWithAsync = () => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const loadAPI = async () => {
      try {
        const categoriesParseData = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        console.log(categoriesParseData);
        setCategories(categoriesParseData);

        const productData = await axios.get(
          "https://fakestoreapi.com/products"
        );
        console.log("productData : ", productData);
        setProducts(productData);
      } catch (err) {
        console.log("err : ", err);
      }
    };

    loadAPI();
  }, []);

  console.log({ products, categories });
  return (
    <div>
      <h1>My Products</h1>
    </div>
  );
};
export default APICallingWithAsync;
