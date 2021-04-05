// import data from '../data.js';
import ProductApi from '../api/ProductApi'
import axios from "axios";

// console.log(data.products);
const Dashboard = {
  async render() {
        try { 
          const { data: products } = await ProductApi.getAll();
          
        console.log(products.length);
            // const response = await axios('https://5e79b4b817314d00161333da.mockapi.io/products');
            // const products = await response.data;
          const result = products.map(product => {
              
                return `           
            <tr>
            <td>${product.id}</td>
              <td>${product.name}</td>
              <td><img src="${product.image}" style="width: 20%"></td>
              <td>${product.price}</td>
              <td>${product.status}</td>
              <td>${product.quantity}</td>
              <td>
                <a href="/#/" class="btn btn-primary">xoá</a>
              </td>
              <td><a href="/#/" class="btn btn-primary">sửa</a></td>
            </tr>
        `
            }).join("");
            return /*html*/`
            <h1>!!!!</h1>
            <div>Tổng ${products.length}</div>
            <td><a href="/#/" class="btn btn-primary">Thêm</a></td>
            <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Status</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${result}
            
          </tbody>
        </table>
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
export default Dashboard;