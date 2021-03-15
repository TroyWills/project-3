import { useEffect, useState } from "react";
import ItemCard from "../../components/Items/ItemCard"
import "./style.css";
import CheckoutForm from "../../CheckoutForm"

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
    console.log(products)
  }, []);

  const getProducts = async () => {
    await fetch("/api/grocery")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => err.message);
  };

  return (
    <div className="body">
      <CheckoutForm />
      <div className="heading">The Mini Mart</div>
      <div className="items">
        {products &&
          products.map((product) => {
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
