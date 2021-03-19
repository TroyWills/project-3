// import { useEffect, useState } from "react";
import ItemCard from "../../components/Items/ItemCard"
import "./style.css";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

const Home = (props) => {

  return (
    
    <div className="body">
      <LightSpeed left>
      <div className="heading1">The Mini Mart</div>
      </LightSpeed>
      <div className="items">
        {props.filteredProducts &&
          props.filteredProducts.map((product) => {
            return (
              <Fade top>
              <ItemCard
                key={product.name}
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
                width={product.width}
              // height={product.height}
              />
              </Fade>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
