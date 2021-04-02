import CategoryAPI from "../api/categoryAPI";
import { reRender, $ } from '../utils.js';

const ListCategory = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/`
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              
              <th width="200">Action</th>
            </tr>
          </thead>
            <tbody>
                ${(categories.data).map((category,index) => {
                    return /*html*/`
                        <tr>
                            <td>${index}</td>
                            <td>${category.name}</td>
                            <td><img src="http://localhost:3000/api/category/photo/${category._id}" alt="" style="width: 100%;"></td>
                            <td>
                                <a href="/#/editcategory/${category._id}" class="btn btn-primary">Update</a>
                                <button class="btn btn-danger btn-remove" data-id="${category._id}">Remove</button>
                            </td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    },
    async afterRender() {
        const btns = $('#list-category .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function (e) {
                // const question = confirm('Bạn có muốn xoá không');
              if (btn.classList.contains('btn-remove')) {
                const question = confirm('Bạn có chắc xoá không ??');
                if (question) {
                  await CategoryAPI.remove(id);
                  await reRender(ListCategory, '#list-category');
                }
              }
                
            })
        })
    }

}

export default ListCategory;