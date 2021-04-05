import categoryAPI from '../api/categoryAPI'
import ProductApi from '../api/ProductApi'
const HomePage = {
    async render() {
        try { 
          const { data: products } = await ProductApi.getAll();
          const { data: categories } = await categoryAPI.getAll();
            console.log(products)
            const result = (products.data).map(product => {
                return /*html*/`
            
        <div class="col" style="margin-bottom:20px">
          <div class="card shadow-sm">
            <div class="card-body">
            <a href="/#/product/${product._id}" class="btn btn-primary">${product.name}</a>
            <div class="price">
              <strong class="card-text" style="color:red">${product.price}</strong>
              <img src="http://localhost:4000/api/product/photo/${product._id}" alt="" >
            </div>
              
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        
        `
            }).join("");
            
            return `
            
                ${result}
            
        `
        } catch (error) {
            console.log(error); 
        }
       
        
    }
}
export default HomePage;