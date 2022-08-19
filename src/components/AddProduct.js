import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ADD_PRODUCT_URL, APPLICATION_JSON, POST } from '../app.constant';

const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [error, setError] = React.useState(false);

    const addProduct = async () => {
        console.warn(isNaN(price));
        if(!name || !price || isNaN(price) || !category || !company){
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch(ADD_PRODUCT_URL, {
            method: POST,
            body: JSON.stringify({name, price, category, userId, company}),
            headers: {
                'Content-Type': APPLICATION_JSON
            }
        });
        result = await result.json();
        console.warn(result);
    }

    return (
        <div className='product'>
            <h1> Add Product </h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            { error && !name && <span className='invalid-input'> Enter Valid Name </span>}
            <input className='inputBox' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            { error && (!price || isNaN(price)) && <span className='invalid-input'> Enter Valid Price </span>}
            <input className='inputBox' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
            { error && !category && <span className='invalid-input'> Enter Valid Category </span>}
            <input className='inputBox' type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            { error && !company && <span className='invalid-input'> Enter Valid Company </span>}
            <button className='appButton' type="button" onClick={addProduct}> Add Product </button>
        </div>
    )
}

export default AddProduct;