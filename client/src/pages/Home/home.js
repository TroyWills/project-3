import { useEffect, useState } from "react";
import Item from "../../components/Items/ItemCard"
import "./style.css"

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
      </div>
    </>
  );
};

export default Home;