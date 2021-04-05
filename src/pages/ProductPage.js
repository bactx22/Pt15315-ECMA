// import data from '../data.js';
import ProductApi from '../api/ProductApi'
import CategoryAPI from "../api/categoryAPI";

import axios from "axios";

// console.log(data.products);
const ProductPage = {
    async render() {
        try { 
            const { data: products } = await ProductApi.getAll();
            const { data : categories } = await CategoryAPI.getAll();
            console.log(products)
            // const response = await axios('https://5e79b4b817314d00161333da.mockapi.io/products');
            // const products = await response.data;
            const result = (products.data).map(product => {
                return /*html*/`       
                
            <div class="col-4">
                <div class="card" >
                    <img src="http://localhost:4000/api/product/photo/${product._id}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <a href="/#/product/${product._id}" style="text-decoration: none;"><h5 class="card-title">${product.name}</h5></a>
                        <div class="price">
                            <strong class="card-text" style="color:red">${product.price}</strong>
                        </div>
                        <a href="/#/product/${product._id}" class="btn btn-primary">Chi tiết</a>
                    </div>
                    </div>
            </div>
        `
            }).join("");
            
            return /*html*/`
            <h1>ProductPage</h1>
            <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                ${(categories.data).map(category => {
                return /*html*/`
                            <a class="nav-link active" class="p-2 text-dark" href="/#/category/${category._id}">${category.name}</a>   
                        `
            }).join("")
                    } 
            </nav>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 ">
                    ${result}
                </div>
            </main>
            </div>
        `
        } catch (error) {
            console.log(error); 
        }
        // const { products } = data;
        // const result = products.map(product => {
        //     return `
        //     <div class="col-4">
        //         <div class="card" >
        //             <img src="${product.image}" class="card-img-top" alt="...">
        //             <div class="card-body">
        //                 <h5 class="card-title">${product.name}</h5>
        //                 <p class="card-text">${product.description}</p>
        //                 <a href="/#/products/${product.id}" class="btn btn-primary">Chi tiết</a>
        //             </div>
        //             </div>
        //     </div>
        // `
        // }).join("");
        
    }
}
export default ProductPage;