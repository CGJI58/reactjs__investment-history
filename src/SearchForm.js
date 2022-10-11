import { useState } from "react";
import CallApiBtn from "./CallApiBtn";

const SearchForm = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (items.length < 5)
      setItems((current) => [...current, event.target[0].value.toUpperCase()]);
    setInputValue("");
  };

  const onClickClearBtn = () => {
    setItems([]);
  };

  return (
    <div>
      <strong>최대 5개까지 한번에 호출 가능</strong>
      <br />
      <strong>분당 5개 호출 가능</strong>
      <hr />
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
      {items.length ? <button onClick={onClickClearBtn}>Clear</button> : null}
      <hr />
      <CallApiBtn stockList={items} />
    </div>
  );
};

export default SearchForm;
