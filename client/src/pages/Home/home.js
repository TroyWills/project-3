// import { useEffect, useState } from "react";
import ItemCard from "../../components/Items/ItemCard"
import "./style.css";

const Home = (props) => {

  return (
    <div className="body">
      <div className="heading1">The Mini Mart</div>
      <div className="items">
        {props.filteredProducts &&
          props.filteredProducts.map((product) => {
            return (
              <ItemCard
                key={product.name}
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
                width={product.width}
              // height={product.height}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
