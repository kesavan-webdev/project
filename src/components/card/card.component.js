import products from "../data/data";
// import Details from "../card-details/card.details.component";
import "../card/card.component.css";
import { useState } from "react";
const Card = () => {
  const [initialview, setsortview] = useState(products);
  console.log(initialview);
  console.log(setsortview);
  // function sorting() {
  //   products.sort((val) => {
  //     return console.log(val);
  //   });
  // }

  return products.map((val) => {
    return (
      <>
        <article className="card-container">
          <figure className="product-img-container">
            <img
              className="product-img"
              src={val.images[0]}
              alt={val.category}
            ></img>
          </figure>
          <div className="product-details-container">
            <div>
              <h4 className="product-brand">{val.brand}</h4>
              <h3 className="product-name ">{val.title}</h3>
              <div className="product-description">{val.description}</div>
            </div>
            <div className="product-rating">
              <span>{val.rating}</span>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="product-price">
              <span>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {val.price}
              </span>
            </div>
            <div className="product-discount-price">
              {val.discountPercentage} <i className="fa-light fa-percent"></i>
            </div>
            <div className="product-instock">
              <span>Product instock: </span>
              <span>{val.stock}</span>
            </div>
          </div>

          <button className="btn-sort"></button>
        </article>
      </>
    );
  });
};
export default Card;
