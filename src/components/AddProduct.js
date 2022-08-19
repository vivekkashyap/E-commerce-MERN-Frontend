import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ADD_PRODUCT_URL, APPLICATION_JSON, POST } from '../app.constant';

const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");

    const addProduct = async () => {
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
            <input className='inputBox' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            <input className='inputBox' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
            <input className='inputBox' type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            <button className='appButton' type="button" onClick={addProduct}> Add Product </button>
        </div>
    )
}

export default AddProduct;