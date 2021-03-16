import { useEffect, useState } from "react";
import ItemCard from "../../components/Items/ItemCard"
import "./style.css";

const Home = (props) => {
  // const [products, setProducts] = useState();
  // const [filteredProducts, setFilteredProducts] = useState();

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   await fetch("/api/grocery")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setFilteredProducts(data);
  //     })
  //     .catch((err) => err.message);
  // };

  return (
    <div className="body">
      <div className="heading">The Mini Mart</div>
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
