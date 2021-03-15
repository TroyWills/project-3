import { useEffect, useState } from "react";
import ItemCard from "../../components/Items/ItemCard"
import "./style.css"

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
<<<<<<< HEAD
    console.log(products)
=======
>>>>>>> main
  }, []);

  const getProducts = async () => {
    await fetch("/api/grocery")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => err.message);
  };

  return (
<<<<<<< HEAD
    <>
      <div className="body">
        <div className="heading">The Mini Mart</div>
        {/* sections that show categories */}
        {/* <h1>Produce */}
        {/* filter out proudcts that only have the category produce and render it */}
        {/* {products} */}
        {/* {products.filter(products => product.category == 'produce')} */}
        <div className="items"></div>
        {products && products.map((product) => {
          return (
            <Item
              img={product.img}
              name={product.name}
              description={product.description}
              price={product.price}
              width={product.width}
            // height={product.height}

            />

          );
        })}
=======
    <div className="body">
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
>>>>>>> main
      </div>
    </div>
  );
};

export default Home;
