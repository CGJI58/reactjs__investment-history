import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchResult = ({
  setStockList,
  stockList,
  setApiResponse,
  apiResponse,
}) => {
  const handleApiResponse = (item) => {
    console.log(item);
    try {
      const { results, request_id } = JSON.parse(item);
      const { T, c } = results[0];
      return (
        <tr>
          <Link to={`/details/${request_id}`}>
            <td>{T}</td>
          </Link>
          <td>{c}</td>
        </tr>
      );
    } catch {
      return <td>{"not found"}</td>;
    }
  };

  const handleStockList = (item) => {
    return (
      <tr>
        <td>{item}</td>
        <td>-</td>
      </tr>
    );
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
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {apiResponse.length
            ? apiResponse.map((item) => handleApiResponse(item))
            : stockList.map((item) => handleStockList(item))}
        </tbody>
      </table>
      <div>
        {stockList.length ? <button onClick={onClear}>Clear</button> : null}
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  stockList: PropTypes.arrayOf(PropTypes.string).isRequired,
  apiResponse: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResult;
