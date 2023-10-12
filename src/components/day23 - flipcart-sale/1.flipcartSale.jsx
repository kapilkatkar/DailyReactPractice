/**
 * step 1 - get current date and time
 * step 2 - get future date and time when sale is going to be live
 * step 3 - show the product at sale time
 * step 4 - if time exceeds then also show the products
 */

const FlipcartSale = () => {
  let currentTime = new Date();
  let saleTime = new Date("October 12,2023 08:40:00");

  const saleStart = saleTime - currentTime;
  console.log({ saleStart });
  return (
    <div>
      <h1>Sale start at 09.00PM</h1>
    </div>
  );
};
export default FlipcartSale;
