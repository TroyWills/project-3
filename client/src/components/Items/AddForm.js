import axios from "axios";
import React, { useState } from "react";


const AddForm = () => {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.price && formObject.category && formObject.quantity) {
            console.log(formObject)
            axios.post('/api/grocery', {
                name: formObject.name,
                price: formObject.price,
                category: formObject.category,
                quantity: formObject.quantity,
                description: formObject.description,
                img: formObject.imageUrl
            })
                .then(window.location.reload())
                .catch(err => console.log(err));
        }

    }
    return (
        <form>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Name (required)"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="price"
                    placeholder="Price (required)"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="category"
                    placeholder="Category (required)"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="quantity"
                    placeholder="Quantity (required)"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="imageUrl"
                    placeholder="image url (required)"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="description"
                    placeholder="Description (optional)"
                />
            </div>
            <button
                disabled={!(formObject.name
                    && formObject.price
                    && formObject.category
                    && formObject.quantity
                    && formObject.imageUrl
                )}
                onClick={handleFormSubmit}>
                Add Grocery Item
            </button>
        </form>
    )
};

export default AddForm