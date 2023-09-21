import { useEffect, useState } from "react";

const ProductListComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>My Product</h1>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {/* {isLoading ? <p></p> : <div></div>} */}

        {isLoading ? (
          <p>Products are loading ...</p>
        ) : (
          products.map((item) => {
            return (
              <div key={item.id} style={{ width: 140 }}>
                <img src={item.image} alt="" height={70} width={70} />
                <p key={item.id} style={{ fontSize: 15 }}>
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

export default ProductListComponent;
