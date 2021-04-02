import ProductApi from '../api/ProductApi.js';
import { reRender, $ } from '../utils.js';
const ListProduct = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return /*html*/`
            <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th width="200">Action</th>
            </tr>
          </thead>
          <tbody>
          ${(products.data).map((product, index) => {
              return /*html*/`
              <tr>
              <td>${index}</td>
              
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td><img src="http://localhost:3000/api/product/photo/${product._id}" style=width:100%></td>
              <td>
                    <a href="/#/editproduct/${product._id}" class="btn btn-primary">Update</a>
                    <button class="btn btn-danger btn-remove" data-id="${product._id}">Remove</button>
              </td>
            </tr>`
          }).join('')}
          </tbody>
        </table>
        `
    },
    async afterRender() {
        const btns = $('#list-products .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function (e) {
                // const question = confirm('Bạn có muốn xoá không');
              if (btn.classList.contains('btn-remove')) {
                const question = confirm('Bạn có chắc xoá không ??');
                if (question) {
                  await ProductApi.remove(id);
                  await reRender(ListProduct, '#list-products');
                }
              }
                
            })
        })
    }
}
export default ListProduct;