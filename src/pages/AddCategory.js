import ProductApi from '../api/ProductApi.js';
import CategoryAPI from '../api/categoryAPI.js';
import { reRender, $ } from '../utils.js';
import firebase from '../firebase/index.js'
const AddCategory = {
    render() {
        return /*html*/`
        <form id="form-add" >
        <div class="form-group">
            <input type="text" placeholder="Tên sp" id="category-name" class="form-control">
        </div>
        
        <div class="form-group">
            <input type="file" id="category-image">
        </div>
        
        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add product">
        </div>
        
        </form>
        `
    },
    async afterRender() {
        // ProductApi.add(product)
        
        $('#form-add').addEventListener('submit',async (e) => {
            e.preventDefault();
            const categoryImage = $('#category-image').files[0];
            const formData = new FormData();
            formData.append('name', $('#category-name').value)
            formData.append('photo', categoryImage)
            const data = await CategoryAPI.add(formData);
            console.log(data);
            window.location.hash = '/listcategory';
      })
    }
}
export default AddCategory;