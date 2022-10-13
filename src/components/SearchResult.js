const SearchResult = ({ apiResponse }) => {
  const handleApiResponse = (item, index) => {
    const json = JSON.parse(item).results[0];
    const { T, c } = json;
    return <li key={index}>{`${T} : ${c}`}</li>;
  };
  return (
    <ol>{apiResponse.map((item, index) => handleApiResponse(item, index))}</ol>
  );
};

export default SearchResult;
