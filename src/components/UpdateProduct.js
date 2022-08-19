import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APPLICATION_JSON, PRODUCT_URL, PUT } from '../app.constant';

const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [error, setError] = React.useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            console.warn(params);
            getProductdetails();
        }
    }, [])

    const getProductdetails = async () => {
        let result = await fetch(PRODUCT_URL + params.id);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        if (!name || !price || isNaN(price) || !category || !company) {
            setError(true);
            return false;
        }
        let result = await fetch(PRODUCT_URL + params.id, {
            method: PUT,
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': APPLICATION_JSON
            }
        });
        result = await result.json();
        if (result) {
            alert("Product Updated Successfully");
            navigate('/');
        }
    }

    return (
        <div className='product1'>
            <h1> Update Product </h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            {error && !name && <span className='invalid-input'> Enter Valid Name </span>}
            <input className='inputBox' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            {error && (!price || isNaN(price)) && <span className='invalid-input'> Enter Valid Price </span>}
            <input className='inputBox' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
            {error && !category && <span className='invalid-input'> Enter Valid Category </span>}
            <input className='inputBox' type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            {error && !company && <span className='invalid-input'> Enter Valid Company </span>}
            <button className='appButton' type="button" onClick={updateProduct}> Update Product </button>
        </div>
    )
}

export default UpdateProduct;