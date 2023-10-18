/**
 * step 1 - get current date and time
 * step 2 - get future date and time when sale is going to be live
 * step 3 - show the product at sale time
 * step 4 - if time exceeds then also show the products
 */

import { useEffect, useState } from "react";

const FlipcartSale = () => {
  const [saleTime, setSaleTime] = useState();
  const [showProduct, setShowProduct] = useState(false);
  useEffect(() => {
    let currentTime = new Date();
    const saleDate = new Date("October 13, 2023 09:37:00");
    setSaleTime(saleDate - currentTime);
    if (currentTime >= saleDate) {
      setShowProduct(true);
    }
  }, []);

  return (
    <div>
      {!showProduct ? (
        <div>
          <h1></h1>Sale is live in {saleTime}
        </div>
      ) : (
        <div>
          <h1>sale is live now</h1>
          <h1>product list</h1>
        </div>
      )}
    </div>
  );
};
export default FlipcartSale;
