import {Component} from "react";

class Product extends Component {
    render() {
        return (
            (<li> { this.product.title } </li>)
        );
    }
}

export default Product;