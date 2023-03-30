import Card from "./components/card/card.component";
import Data from "./components/data/data";
import { useState } from "react";
import FilterContainer from "./components/button/button.component";

const App = () => {
  const [initialProducts, setInitialProducts] = useState(Data);
  // console.log(initialProducts);
  const [isAscending, setIsAscending] = useState(false);
  const sortProducts = () => {
    setIsAscending(!isAscending);
    const copyProducts = [...initialProducts];
    copyProducts.sort((products1, products2) => {
      if (isAscending) {
        return products1.price - products2.price;
      }
      return products2.price - products1.price;
    });
    setInitialProducts(copyProducts);
  };

  const searchProducts = (e, search) => {
    e.preventDefault();
    const searchInput = search.toLowerCase().trim();
    const copyProducts = [...initialProducts];

    const filterProducts = copyProducts.filter((product) => {
      return console.log(
        product.brand.toLowerCase().trim().includes(searchInput)
      );
    });
    setInitialProducts(filterProducts);
    console.log(filterProducts);
  };

  const filterCategory = () => {};

  return (
    <div className="container">
      <FilterContainer
        sortProducts={sortProducts}
        searchProducts={searchProducts}
        filtercategory={filterCategory}
        data={initialProducts}
      />
      <Card data={initialProducts} />
    </div>
  );
};
export default App;
