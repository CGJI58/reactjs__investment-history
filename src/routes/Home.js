import { useState } from "react";
import "../App.css";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import CallApiBtn from "../components/CallApiBtn";
import styles from "../styles/modules/Home.module.scss";

function Home() {
  const [stockList, setStockList] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <div>
      <strong>1분에 한 번, 최대 5개까지 한번에 호출 가능</strong>
      <SearchForm
        setApiResponse={setApiResponse}
        setStockList={setStockList}
        stockList={stockList}
      />
      <CallApiBtn setApiResponse={setApiResponse} stockList={stockList} />
      <SearchResult
        setApiResponse={setApiResponse}
        apiResponse={apiResponse}
        setStockList={setStockList}
        stockList={stockList}
      />
    </div>
  );
}

export default Home;
