import CategoryAPI from "../api/categoryAPI";
import { reRender, $ } from '../utils.js';
const Header = {
    async render() {
        if (sessionStorage.length > 0) {
            var user = JSON.parse(sessionStorage.getItem("user"));
            var role = user.user.role;
            if (role == 1) {
                    var user1 = /*html*/`
                    <div class="menu-wrap">
                         <a href="/">
                             <div class="logo">
                                 !!_Shop
                             </div>
                         </a>    
                     <div class="menu h-xs">
                         <a href="/">
                             <div class="menu-item">
                                 Home
                             </div>
                         </a>
                         <a href="/#/products">
                             <div class="menu-item">
                                 ProductPage
                             </div>
                         </a>
                         <a href="/#/blog">
                             <div class="menu-item">
                                 Blog
                             </div>
                         </a>
                         <a href="/#/dashboard">
                             <div class="menu-item">
                                 Dashboard
                             </div>
                         </a>
                         
                        <div class="menu-item"  id="btn">
                            Logout
                        </div>
                         
                         
                     </div>
                     <div class="right-menu">
                         <div class="cart-btn">
                             <i class='bx bx-cart-alt'></i>
                         </div>
                         <div class="cart-btn">
                             <a href="/#/account"><i class="bi bi-person-circle"></i></a>
                         </div>
                     </div>
                `
            } else {
                var user1 = /*html*/`
                    <div class="menu-wrap">
                         <a href="/">
                             <div class="logo">
                                 !!_Shop
                             </div>
                         </a>    
                     <div class="menu h-xs">
                         <a href="/">
                             <div class="menu-item">
                                 Home
                             </div>
                         </a>
                         <a href="/#/products">
                             <div class="menu-item">
                                 ProductPage
                             </div>
                         </a>
                         <a href="/#/blog">
                             <div class="menu-item">
                                 Blog
                             </div>
                         </a>
                         
                             <div class="menu-item" id="btn">
                                 Logout
                             </div>
                         
                         
                     </div>
                     <div class="right-menu" >
                         <div class="cart-btn">
                             <i class='bx bx-cart-alt'></i>
                         </div>
                         <div class="cart-btn">
                             <a href="/#/account"><i class="bi bi-person-circle"></i></a>
                         </div>
                     </div>
                `
            }
                
        } else {
                var user1 = /*html*/`
                    <div class="menu-wrap">
                         <a href="/">
                             <div class="logo">
                                 !!_Shop
                             </div>
                         </a>    
                     <div class="menu h-xs">
                         <a href="/">
                             <div class="menu-item">
                                 Home
                             </div>
                         </a>
                         <a href="/#/products">
                             <div class="menu-item">
                                 ProductPage
                             </div>
                         </a>
                         <a href="/#/blog">
                             <div class="menu-item">
                                 Blog
                             </div>
                         </a>
                         <a href="/#/signin">
                             <div class="menu-item">
                                 Login
                             </div>
                         </a>
                     </div>
                     <div class="right-menu">
                         <div class="cart-btn">
                             <i class='bx bx-cart-alt'></i>
                         </div>
                         
                     </div>`
        }
        
        return /*html*/`
        <div class="nav1">
        ${user1}
        </div>
        `
    },
    async afterRender() {
        
            $('#btn').addEventListener("click",async (e) => {
                console.log('hi')
      })
        
    }
}
export default Header;
