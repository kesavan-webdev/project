import { useState } from "react";
const FilterContainer = ({ sortProducts }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="search-bar">
      <form className="Search-filter" onSubmit={filter}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button type="submit"></button>
      </form>
      <button className="btn-sort" onClick={sortProducts}>
        Sort Item
      </button>
    </section>
  );
};
export default FilterContainer;
