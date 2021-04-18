import categoryAPI from '../api/categoryAPI'
import ProductApi from '../api/ProductApi'
const HomePage = {
    async render() {
        try { 
          const { data: products } = await ProductApi.getAll();
            const { data: categories } = await categoryAPI.getAll();
            const result1 = (categories.data).map(category => {
                return /*html*/`
                <div class="col-1">
                    <div class="card" style="width: 100px;">
                        <a class="nav-link active" class="p-2 text-dark" href="/#/category/${category._id}">
                            <img src="http://localhost:4000/api/category/photo/${category._id}" class="card-img-top" alt="..." style="width=100%">
                        </a>
                    </div>
                </div>
                `
            })
            const result = (products.data).map(product => {
                return /*html*/`
              <div class="col-4">
                      <div class="card" >
                          <img src="http://localhost:4000/api/product/photo/${product._id}" class="card-img-top " alt="...">
                          <div class="card-body">
                              <a href="/#/product/${product._id}" style="text-decoration: none;"><h5 class="card-title">${product.name}</h5></a>
                              <div class="price">
                                  <strong class="card-text" style="color:red">${product.price}</strong>
                              </div>
                              
                          </div>
                          </div>
                  </div>
            `
            }).join("");
            
            return /*html*/`
            <main >
                <img src="https://cpn.vn/product_images/uploaded_images/dthoai-banner.png" alt="">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 " style="margin-top:30px;justify-content: center;">
                     ${result1}
                    
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 " style="margin-top:30px">
                     ${result}
                    
                </div>
            </main>
        `
        } catch (error) {
            console.log(error); 
        }
       
        
    }
}
export default HomePage;