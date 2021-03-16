import { useState, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, UpdateQuantity, getItemQuantity } from "../../utils/redux/cartSlice";
import { MinusCircle, PlusCircle } from "react-feather";

const ItemCard = ({ name, img, width, price }) => {
  
  const [showQuantityUpdater, setShowQuantityUpdater] = useState(false);
  const dispatch = useDispatch();
  const itemQuantity = useSelector((state) => getItemQuantity(state, name));

  useEffect(() => {
    itemQuantity === 0
      ? setShowQuantityUpdater(false)
      : setShowQuantityUpdater(true);
  }, [itemQuantity]);

  return (
    <div className="item">
      <div className="imgContainer">
        <img src={img} width={width} />
      </div>
      <div className="detailsContainer">
        <h3>{name}</h3>
        {/* <h3>{description}</h3> */}
        <h3>{price}</h3>
        {!showQuantityUpdater && (
          <button
            className="addToCart"
            onClick={() =>
              dispatch(
                AddToCart({
                  name,
                  // description,
                  price,
                  img,
                  width,
                  quantity: 1,
                })
              )
            }
          >
            Add to cart
          </button>
        )}
        {showQuantityUpdater && (
          <div className="quantity_updater">
            <MinusCircle
              onClick={() =>
                dispatch(UpdateQuantity({ name, increment: false }))
              }
            />
            <div>
              <span>{itemQuantity}</span>
            </div>
            <PlusCircle
              onClick={() => dispatch(UpdateQuantity({ name, increment: true }))}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;