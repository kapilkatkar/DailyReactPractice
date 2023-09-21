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
    </div>
    {/* <ProductListComponen></ProductListComponen> */}
    <ProductList></ProductList>
  </>
);
