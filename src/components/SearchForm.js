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

  const onClear = () => {
    setStockList(() => []);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Ticker"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          required={true}
        />
        <button type="submit">Add</button>
      </form>
      <ol>
        {stockList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {stockList.length ? <button onClick={onClear}>Clear</button> : null}
    </div>
  );
};

export default SearchForm;
