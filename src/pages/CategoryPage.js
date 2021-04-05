import CategoryAPI from "../api/categoryAPI";
import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils"

const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data : categories } = await CategoryAPI.getAll();
        const { data: products } = await ProductApi.getAll();
        // console.log(products);
        const result = products.data.filter(product => product.category == id).map(product => {
            return /*html*/`
            
                <div class="col-4">
                <div class="card" >
                    <img src="http://localhost:4000/api/product/photo/${product._id}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="price">
                            <strong class="card-text" style="color:red">${product.price}</strong>
                            <span style="color:black;text-decoration: line-through;">${product.price1}</span>
                        </div>
                        <a href="/#/products/${product.id}" class="btn btn-primary">Chi tiết</a>
                    </div>
                    </div>
            </div>
            `
        }).join("");
        return /*html*/`
        
            <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                ${categories.data.map(category => {
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
            </div>`;
    }
}
export default CategoryPage;