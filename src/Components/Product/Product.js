import React from 'react';

const Product = ({product}) => {
    const {name, id} = product;
    return (
        <div style={{border:'2px solid red',margin:'20px',padding:'20px'}}>
            <h2>{name}</h2>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;