import "./style.css"

const ItemCard = ({ name, img, width, price }) => {
    console.log({img})
  return (
    <div className="item">
      <img src={img} width={width} />
      <h3>{name}</h3>
      {/* <h3>{description}</h3> */}
      <h3>{price}</h3>
    </div>
  );
};

export default ItemCard;