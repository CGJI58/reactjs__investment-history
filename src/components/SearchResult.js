import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchResult = ({
  setStockList,
  stockList,
  setApiResponse,
  apiResponse,
}) => {
  const handleApiResponse = (item, index) => {
    console.log(item);
    try {
      const { results, request_id } = JSON.parse(item);
      const { T, c } = results[0];
      return (
        <tr key={index}>
          <td>
            <Link to={`/details/${request_id}`}>{T}</Link>
          </td>
          <td>{c}</td>
        </tr>
      );
    } catch {
      return <td>{"not found"}</td>;
    }
  };

  const handleStockList = (item, index) => {
    return (
      <tr key={index}>
        <td>{item}</td>
        <td>-</td>
      </tr>
    );
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
            ? apiResponse.map((item, index) => handleApiResponse(item, index))
            : stockList.map((item, index) => handleStockList(item, index))}
        </tbody>
      </table>
    </div>
  );
};

SearchResult.propTypes = {
  stockList: PropTypes.arrayOf(PropTypes.string).isRequired,
  apiResponse: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResult;
