import {Component} from 'react';
import Product from "./Product";

class ProductList extends Component {
    state = {
        products:  [
            {
                id: 1,
                title: "Yellow Pail"
            },
            {
                id: 2,
                title: "Blue Pail"
            }
        ]
    }
    
    render() {
        const lis = this.products.map(product => (
            <Product 
                key={product.id} 
                title={product.title} 
            />
        ))
        return (
            <ul>
                { lis }
            </ul>
        );
    }
}

export default ProductList;
