import { useEffect, useState } from "react";

const ProductBasedOnCategories = () => {
  const [products, setProducts] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/categories")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCategoryProduct(data);
      });

    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        data.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};
export default ProductBasedOnCategories;
