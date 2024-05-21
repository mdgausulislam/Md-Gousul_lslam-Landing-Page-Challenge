
import React, { useEffect, useState } from 'react';
import CartItem from '../../Pages/CartItem/CartItem';
import axios from 'axios';
import './Product.css'

const Product = () => {

    const [products, setProducts] = useState([]);
    const [filterType, setFilterType] = useState('latest')

    useEffect(() => {
        axios.get('product.json')
            .then(res => {
                setProducts(res.data)
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
            })
    }, [])

    const handleFilterChange = (type) => {
        setFilterType(type)
    }

    const filteredProducts = products.filter(product => product.type === filterType)

    return (
        <div className='lg: container mx-auto mt-5 py-5 px-4 lg:px-28'>
            <h1 className='text-3xl font-bold pb-3'>Our Product</h1>
            <div className='flex justify-between items-center'>
                <div>
                    <p>Experience crystal clear vision and elevated style with our <br />premium collection of eyeglasses.</p>
                </div>
                <div className="join join-vertical md:join-horizontal">
                    <button className="buyButton3 join-item" onClick={() => handleFilterChange('latest')}>Latest</button>
                    <button className="buyButton3 join-item" onClick={() => handleFilterChange('special')}>Special</button>
                    <button className="buyButton3 join-item" onClick={() => handleFilterChange('bestseller')}>Best Seller</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                {
                    filteredProducts.map((product, index) => {
                        return <CartItem key={index} id={index} product={product} />;
                    })
                }

            </div>
        </div>
    );
};

export default Product;

