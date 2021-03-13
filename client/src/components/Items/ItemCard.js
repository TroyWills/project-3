const ItemCard = ({ name, price, catagory, quantity, img, height, width }) => {
    return (
        <div className="item">
            <img src={img} width={width} heigt={height} />
            <h3>{name}</h3>
            <h6>{catagory}</h6>
            <h4>${`${price}`}</h4>
            <button
                className="addToCart"
                onClick={() =>
                    console.log(`added ${name} to cart`)
                }
            >
                Add to cart
        </button>
        </div>


    )
}

export default ItemCard
// heigt={height}