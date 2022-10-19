const SearchResult = ({
  setStockList,
  stockList,
  setApiResponse,
  apiResponse,
}) => {
  const handleApiResponse = (item) => {
    try {
      const json = JSON.parse(item).results[0];
      const { c } = json;
      return <td>{c}</td>;
    } catch {
      return <td>{"not found"}</td>;
    }
  };
  const onClear = () => {
    setStockList([]);
    setApiResponse([]);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item}</td>
              {handleApiResponse(apiResponse[index])}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {stockList.length ? <button onClick={onClear}>Clear</button> : null}
      </div>
    </div>
  );
};

export default SearchResult;
