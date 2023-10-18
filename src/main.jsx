import ReactDOM from "react-dom/client";
import "./index.css";
import MissigleLaunch from "./components/day10/missilebtn";
import ParentCompo from "./components/day11/parentCounter";
import ParentInput from "./components/day12/4.ParentInput";
import ParentReceiver from "./components/day12/task/parentReceiver";
import ParentForModel from "./components/day12/task/1.parentForModel";
import SearchExample from "./components/day13/useEffect-ex";
import APIWithUseEffect from "./components/day13/apiWithUseEffect";
import ProductList from "./components/day14/search-list";
//import ProductListComponen from "./components/day14/3.searc-product";
import DynamicForm from "./components/day21 -dynamic form/1.dynamic-form";
import FlipcartSale from "./components/day23 - flipcart-sale/1.flipcartSale";
import APICallingWithAsyn from "./components/day24/2.apicall-with-async-await";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div style={{ display: "none" }}>
      <SearchExample></SearchExample>
      <hr />
      <ParentForModel></ParentForModel>
      <hr />
      <ParentReceiver></ParentReceiver>
      <hr />
      <ParentInput></ParentInput>
      <ParentCompo></ParentCompo>
      <hr />
      <MissigleLaunch></MissigleLaunch>
      <APIWithUseEffect></APIWithUseEffect>
      {/* <ProductList></ProductList> */}
      <ProductList></ProductList>
      <DynamicForm></DynamicForm>
    </div>
    {/* <ProductListComponen></ProductListComponen> */}

    <FlipcartSale></FlipcartSale>

    <APICallingWithAsyn></APICallingWithAsyn>
  </>
);
