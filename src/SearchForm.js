import { useState } from "react";
import CallAPIBtn from "./CallAPIBtn";

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
      <strong>
        최대 5개의 티커를 한번에 검색할 수 있습니다(API 호출 횟수 제한: 1분에
        최대 5개)
      </strong>
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
      <CallAPIBtn stockList={items} />
    </div>
  );
};

export default SearchForm;
