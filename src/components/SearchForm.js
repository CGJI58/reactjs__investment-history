import { useState } from "react";

const SearchForm = ({ setApiResponse, setStockList, stockList }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target[0].value.toUpperCase();
    if (stockList.length < 5) {
      setStockList((current) => [...current, newItem]);
    }
    setInputValue("");
  };

  const onClear = () => {
    setStockList([]);
    setApiResponse([]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Ticker"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          required={true}
          type="string"
        />
        <button type="submit">Add</button>
        {stockList.length ? <button onClick={onClear}>Clear</button> : null}
      </form>
    </div>
  );
};

export default SearchForm;
