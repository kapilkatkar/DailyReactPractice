import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        // Success
        setIsLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        console.log("failed to load api", err);
        // Error
        setIsLoading(false);
      });
  }, []);

  console.log("Re-Render: ", isLoading, products);

  const onSearch = (e) => {
    let search = e.target.value.toLowerCase();

    const filterProducts = products.filter((elem) => {
      return elem.title.toLowerCase().includes(search);
    });

    setProducts(filterProducts);
  };

  return (
    <div>
      <h1>My Product</h1>
      <input
        type="search"
        name="search"
        placeholder="please search here"
        onKeyUp={onSearch}
      />
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {isLoading ? (
          <RiseLoader color="red" />
        ) : (
          products.map((item) => {
            return (
              <div style={{ width: 140 }} key={item.id}>
                <img width={70} height={70} src={item.image} />
                <p style={{ fontSize: 11 }} key={item.id}>
                  {item.title}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductList;
