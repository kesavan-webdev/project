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
    const copyingProducts = [...initialProducts];
    copyingProducts.sort((products1, products2) => {
      if (isAscending) {
        return products1.price - products2.price;
      }
      return products2.price - products1.price;
    });
    setInitialProducts(copyingProducts);
  };

  const filter = ()=>{
    initialProducts.filter(())
  }

  return (
    <div className="container">
      <FilterContainer sortProducts={sortProducts} searchFilter={filter} />
      <Card data={initialProducts} />
    </div>
  );
};
export default App;
