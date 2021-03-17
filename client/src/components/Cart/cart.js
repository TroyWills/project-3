import {useDispatch} from "react-redux"; 
import { MinusCircle, PlusCircle, Trash2} from "react-feather"; 
import { UpdateQuantity, RemoveFromCart } from "../../utils/redux/cartSlice";
import "./style.css";
 
const Cart = ({
    name,
    description,
    price,
    img,
    width,
    quantity,
  }) => {
    const dispatch = useDispatch();
  
    return (
      <div className="cart_item">
        <div className="item_summary">
          <div className="image">
            <img src={img} width={width} />
          </div>
          <div className="description">
            <div className="item_name"> {name} </div>
            <div>{description}</div>
          </div>
        </div>
        <div className="quantity_updater">
          <MinusCircle
            className="button"
            onClick={() => dispatch(UpdateQuantity({ name, increment: false }))}
          />
          <span>{quantity}</span>
          <PlusCircle
            className="button"
            onClick={() => dispatch(UpdateQuantity({ name, increment: true }))}
          />
          <div>${`${(price * quantity).toFixed(2)}`}</div>
          <Trash2
            className="button"
            onClick={() => dispatch(RemoveFromCart({ name }))}
          />
        </div>
      </div>
    );
  };
  export default Cart;