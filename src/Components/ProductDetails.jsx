import React from 'react';
import Products from '../JSON/Products.json';
import { matchPath, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './css/product.css'

const ProductDetails = ({addToCart}) => {
    const { id } = useParams();
    const product = Products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="card-details">
            <p>{matchPath}</p>
            <div className="imgbtn">
                <img src={product.src1} alt={product.title} />
                
            </div>
            <h3 className='title'>{product.title}</h3>
            
            <p className='price'>${product['new-price']}<br/><s>${product['old-price']}</s></p>
            <button onClick={()=> addToCart(product)} className='cart-btn'>Add To Cart</button>
            <h4 className='hrtop'>Product Description:</h4>
            <hr />
            <p>{product.description} </p>
            <h4>Product Specification:</h4>
            <hr />
            <p>{product.Specification}</p>
        </div>
    );
}

export default ProductDetails;
