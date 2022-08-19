import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DELETE, PRODUCT_URL, GET_PRODUCTS_URL, SEARCH_URL } from '../app.constant';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        return () => {
            getProducts();
        }
    }, []);

    const getProducts = async () => {
        await fetch(GET_PRODUCTS_URL, {
            headers: {
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((res) => {
            return res.json();
        }).then((result) => {
            console.warn(result);
            setProducts(result);
        });
    }

    const deleteProduct = async (id) => {
        await fetch(PRODUCT_URL + id, {
            method: DELETE,
            headers: {
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((res) => {
            return res.json();
        }).then((result) => {
            if (result.status == 200) {
                console.warn(result);
                alert("Product Deleted Successfully");
                getProducts();
            }
        });
    }

    const search = async (event) => {
        let key = event.target.value;
        if (!key) {
            getProducts();
            return;
        }
        await fetch(SEARCH_URL + key, {
            headers: {
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((res) => {
            return res.json();
        }).then((result) => {
            if (result) {
                setProducts(result);
            }
        });
    }

    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <input className='search-product' type="text" onChange={search} placeholder='Search Product'/>
            <ul>
                <li> S. No </li>
                <li> Name </li>
                <li> Price </li>
                <li> Category </li>
                <li> Company </li>
                <li> Operation </li>
            </ul>
            {
                products.length > 0 ?
                    products.map((item, index) =>
                        <ul key={item._id}>
                        <li> {index + 1} </li>
                        <li> {item.name} </li>
                        <li> ₹{item.price} </li>
                        <li> {item.category} </li>
                        <li> {item.company} </li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}> Update </Link>    
                        </li>
                    </ul>
                    )
                :   <h1>No Products Found</h1>
            }
        </div>
    )
}

export default ProductList;