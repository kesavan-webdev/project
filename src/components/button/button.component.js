import { useState } from "react";

const FilterContainer = ({ sortProducts, searchProducts, filterCategory }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const categories = ["smartphone", "laptops", "fragrances"];

  return (
    <section className="search-bar">
      <form
        className="Search-filter"
        onSubmit={(e) => {
          searchProducts(e, searchInputValue);
        }}
      >
        <input
          type="text"
          value={searchInputValue}
          onChange={(e) => {
            setSearchInputValue(e.target.value);
          }}
        ></input>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <select onChange={filterCategory}>
        {categories.map((val, ind) => (
          <option key={ind} value={val}>
            val
          </option>
        ))}
      </select>
      <button className="btn-sort" onClick={sortProducts}>
        Sort Item
      </button>
    </section>
  );
};
export default FilterContainer;
