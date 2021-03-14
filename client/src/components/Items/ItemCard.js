const ItemCard = ({ name, price, catagory, quantity, img, height, width }) => {
    return (
        // <div className="item">
        //     <img src={img} width={width} heigt={height} />
        //     <h3>{name}</h3>
        //     <h6>{catagory}</h6>
        //     <h4>${`${price}`}</h4>
        //     <button
        //         className="addToCart"
        //         onClick={() =>
        //             console.log(`added ${name} to cart`)
        //         }
        //     >
        //         Add to cart
        // </button>
        // </div> 
        <div className="card item">
        <img src={img} className="card-img-top" width={width} height="150px" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>


    )
}

export default ItemCard
// heigt={height}