import ProductApi from '../api/ProductApi.js';
import CategoryAPI from '../api/categoryAPI.js';
import { reRender, $ } from '../utils.js';
import firebase from '../firebase/index.js'

 const ProductAddPage = {
    async render() {
         const { data: categories } = await CategoryAPI.getAll();
        
        console.log(categories)
        return /*html*/`
        
        <form id="form-add" >
        <div class="form-group">
            <input type="text" placeholder="Tên sp" id="product-name" class="form-control">
        </div>
        
        <div class="form-group">
            <input type="file" id="product-image">
        </div>
        <div class="form-group">
            <input type="number" min="100" placeholder="Price" id="product-price" class="form-control">
        </div>
        <div class="form-group">
            <input type="text" placeholder="Description" id="product-description" class="form-control">
        </div>
        <div class="form-group">
            <input type="number" placeholder="quantity" id="product-quantity" class="form-control">
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
            const productImage = $('#product-image').files[0];
            // let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            // storageRef.put(productImage).then( function () {
            //     console.log('Upload thành công')
            //     storageRef.getDownloadURL().then((url) => {
            //         const product = {
            //         id: Math.random()*100,
            //         name: $('#product-name').value,
            //         image: url,
            //         price: $('#product-price').value,
            //         description: $('#product-description').value,
            //         quantity: $('#product-quantity').value
            //     }
            //     ProductApi.add(product);
            //     window.location.hash = '/listproduct';
            //     })
            // })
            const formData = new FormData();
            formData.append('name', $('#product-name').value)
            formData.append('price', $('#product-price').value)
            formData.append('description', $('#product-description').value)
            formData.append('quantity', $('#product-quantity').value)
            formData.append('category',$('#categoryID').value)
            formData.append('sold', 0)
            formData.append('shipping', true)
            formData.append('photo', productImage)
            const data = await ProductApi.add(formData);
            console.log(data);
            window.location.hash = '/listproduct';
      })
    }
}  
export default ProductAddPage;  