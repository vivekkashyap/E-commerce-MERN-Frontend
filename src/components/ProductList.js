import React, { useEffect, useState } from 'react';
import { GET_PRODUCTS_URL, POST } from '../app.constant';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch(GET_PRODUCTS_URL);
        result = await result.json();
        setProducts(result);
    }

    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <ul>
                <li> S. No </li>
                <li> Name </li>
                <li> Price </li>
                <li> Category </li>
                <li> Company </li>
            </ul>
            {
                products.map((item, index) =>
                    <ul>
                    <li> {index + 1} </li>
                    <li> {item.name} </li>
                    <li> ₹{item.price} </li>
                    <li> {item.category} </li>
                    <li> {item.company} </li>
                </ul>
                )
            }
        </div>
    )
}

export default ProductList;