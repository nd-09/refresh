import { useState } from "react";

const SearchFilter = (props) => {
  const { data } = props;
  const [searchText, setSearchText] = useState("");
  return (
    <div className="filter-search-container ">
      <input
        type="text"
        className="search-text border border-solid border-green-700 px-1 rounded bg-zinc-50"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <button
        className="search-btn border border-solid border-green-700 mx-2 px-1 rounded bg-lime-100"
        onClick={() => {
          const search = data.filter((data) => data.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
          props.filterVal(search);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchFilter;
