import React from 'react';

const Product = (props) => {
    const {product, addToCart} = props;
    return (
        <div style={{border:'2px solid red',margin:'20px',padding:'20px'}}>
            <h2>{product.name}</h2>
            <button 
                onClick = {() => addToCart(product.id, product.name)}
            >Add to cart</button>
        </div>
    );
};

export default Product;