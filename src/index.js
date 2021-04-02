import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import ProductDetail from './pages/ProductDetail.js';
import { parseRequestUrl, $ } from './utils.js';
import Error404Page from './pages/Error404Page.js';
import CategoryPage from './pages/CategoryPage.js';
import Header from './components/Header.js';
import Blog from './pages/Blog.js';
import New from './pages/New.js';
import ProductAddPage from './pages/ProductAddPage.js';
import AdminProductPage from './pages/AdminProductPage.js';
import Footer from './components/Footer.js';
import ProductEditPage from './pages/ProductEditPage.js';
import Contact from './pages/Contact.js';
import Category from './pages/Category.js';
import Profile from './pages/Profile.js';
import AdminCategory from './pages/AdminCategory.js';
import AddCategory from './pages/AddCategory.js';
import CategoryEdit from './pages/CategoryEdit.js';

// const $ = selector => {
//     let elements = document.querySelectorAll(selector);
//     return elements.length == 1 ? elements[0] : [...elements];
// }
const routes = {
    '/': HomePage,
    '/products': ProductPage,
    '/product/:id': ProductDetail,
    '/category/:id': CategoryPage,
    '/addcategory': AddCategory,
    '/addproduct': ProductAddPage,
    '/listproduct': AdminProductPage,
    '/listcategory':AdminCategory,
    '/editproduct/:id': ProductEditPage,
    '/editcategory/:id':CategoryEdit,
    '/blog': Blog,
    '/new': New,
    '/contact' :Contact,
    '/profile': Profile,
    
}
const  router = async () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    console.log(parseUrl);
    const pages = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $('#footer').innerHTML = await Footer.render();
    $('#main-content').innerHTML = await pages.render(); 
    await pages.afterRender();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);