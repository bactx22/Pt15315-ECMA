// import data from '../data.js'
import ProductApi from '../api/ProductApi'
import { parseRequestUrl } from '../utils.js';
const ProductDetail = {
    async render() {
        const { id } = parseRequestUrl();
        const { data : product } = await ProductApi.get(id);
        // const response = await axios('https://5e79b4b817314d00161333da.mockapi.io/products');
        // const products = await response.data;
        
        return /*html*/`
            <div class="row">
                <div class="col-6">
                    <img src="http://localhost:4000/api/product/photo/${product._id}" style="width:100%">
                </div>
                <div class="col-6">
                    <h1>${product.name}</h1>
                    <strong class="card-text" style="color:red">${product.price}</strong>
              
                    <p>${product.description}</p>
                    <span>Số Lượng :</span>
                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
                    <br>
                    <form>
                    <p>Loại :</p>
                    <input type="radio" id="128GB" name="gender" value="128GB">
                    <label for="128GB">128GB</label>
                    <input type="radio" id="256GB" name="gender" value="256GB">
                    <label for="256GB">256GB</label><br>
                   
                    </form>
                    
                    <br>
                    <button type="submit" class="btn btn-danger btn-remove">ADD</button>
                </div>
            </div>
            <hr>
            <div>
                <div>
                    <h3>Đặc điểm nổi bật của ${product.name}</h3>
                </div>
                
            </div>
            
        `
    }
}
export default ProductDetail;