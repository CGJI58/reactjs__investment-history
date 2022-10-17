import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import CallApiBtn from "./components/CallApiBtn";

function App() {
  const [stockList, setStockList] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <div>
      <strong>1분에 한 번, 최대 5개까지 한번에 호출 가능</strong>
      <SearchForm setStockList={setStockList} stockList={stockList} />
      <CallApiBtn stockList={stockList} setApiResponse={setApiResponse} />
      <SearchResult apiResponse={apiResponse} />
    </div>
  );
}

export default App;
