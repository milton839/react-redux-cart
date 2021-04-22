import React from 'react';
import Product from '../Product/Product';

const products = [
    {name:'Lenovo Laptop', id:1},
    {name:'Asus Laptop', id:2},
    {name:'Dell Laptop', id:3},
    {name:'Hp Laptop', id:4},
    {name:'Walton Laptop', id:5},
]

const Shop = () => {
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(pd => <Product product={pd} key={pd.id}></Product>)
            }
        </div>
    );
};

export default Shop;