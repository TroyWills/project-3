import AddForm from "../../components/Items/AddForm";
import ItemCardAdmin from "../../components/Items/ItemCardAdmin";
import "./style.css";

const Admin = (props) => {

  return (

    <div className="body">
      <div className="heading">The Mini Mart</div>
      <div className="items">
        {props.filteredProducts &&
          props.filteredProducts.map((product) => {
            return (
              <ItemCardAdmin
                _id={product._id}
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
        <AddForm />
      </div>
    </div>
  );
};

export default Admin;
