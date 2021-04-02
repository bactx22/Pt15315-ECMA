import CategoryAPI from '../api/categoryAPI.js';
import ProductApi from '../api/ProductApi.js';
import { parseRequestUrl, $ } from '../utils.js';
const ProductEditPage = {
    async render(){
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        const { data: categories } = await CategoryAPI.getAll();
        console.log(product);
        return/*html*/`
        <form id="form-update-product">
            <div class="mb-3">
                <input type="text" placeholder="ProductName" class="form-control" id="product-name" value="${product.name}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
            <input type="number" min="100" placeholder="Price" id="product-price" class="form-control" value="${product.price}">
            </div>
            <div>
            <select name="" id="categoryID">
            ${(categories.data.map(category => {
                    return/*html*/`
                        <option value="${category._id}">${category.name}</option>
                    `
                })).join("")}
            </select>
                
            </div>
            
            <div class="mb-3">
                <input type="text" placeholder="Description" id="product-description" class="form-control" value="${product.description}">
            </div>
            
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data : product } = await ProductApi.get(id);
        $('#form-update-product').addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('old', product);
            const formData = new FormData();
            formData.append('name', $('#product-name').value)
            formData.append('price', $('#product-price').value)
            formData.append('description', $('#product-description').value)
            formData.append('category',$('#categoryID').value)
            
            const data = await ProductApi.update(id,formData);

            window.location.hash = '/listproduct';
        })
    }
};
export default ProductEditPage;