import { useState } from "react";

const SearchForm = ({ setStockList, stockList }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target[0].value.toUpperCase();
    if (stockList.length < 5) {
      setStockList((current) => [...current, newItem]);
    }
    setInputValue("");
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
      </form>
    </div>
  );
};

export default SearchForm;
