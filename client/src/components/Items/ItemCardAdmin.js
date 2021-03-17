import { useState, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, UpdateQuantity, getItemQuantity } from "../../utils/redux/cartSlice";
import { MinusCircle, PlusCircle } from "react-feather";
import axios from "axios";


const ItemCardAdmin = ({ name, img, width, price, _id }) => {
  function deleteItem(e) {
    // this was working --> console.log(e.target.id)
    const id = e.target.id;
     axios.delete('/api/grocery/' + id)
       .then((data) => {
         alert("Item deleted!");
         window.location.reload();
       })
       .catch(err => console.log(err));
  }


  return (
    <div className="item">
      <div className="imgContainer">
        <img src={img} width={width} />
      </div>
      <div className="detailsContainer">
        <h3>{name}</h3>
        {/* <h3>{description}</h3> */}
        <h3>{price}</h3>
        {/* Add Button to delete item from page here */}
          <button type="button" className="btn btn-danger" id={_id}
            onClick={deleteItem}>
            Remove Item

          </button>
            

      </div>
    </div>
  );
};

export default ItemCardAdmin;