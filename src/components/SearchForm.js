import { useState } from "react";

const SearchForm = ({ setStockList }) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (items.length < 5) {
      setItems((current) => [...current, event.target[0].value.toUpperCase()]);
      setStockList(() => items);
    }
    setInputValue("");
  };

  const onClear = () => {
    setItems(() => []);
    setStockList(() => items);
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
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {items.length ? <button onClick={onClear}>Clear</button> : null}
    </div>
  );
};

export default SearchForm;
