import CategoryAPI from "../api/categoryAPI";
import { parseRequestUrl, $ } from '../utils.js';

const CategoryEdit = {
    async render() {
        const { id } = parseRequestUrl();
        console.log(id)
        const { data: categories } = await CategoryAPI.get(id);
        return/*html*/`
           <form id="form-update-category">
            <div class="mb-3">
                <input type="text" placeholder="ProductName" class="form-control" id="product-name" value="${categories.name}" aria-describedby="emailHelp">
            </div>
            
            
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data : categories } = await CategoryAPI.get(id);
        $('#form-update-category').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', $('#product-name').value)
            
            const data = await CategoryAPI.update(id,formData);
            window.location.hash = '/listcategory';
        })
    }
}
export default CategoryEdit;