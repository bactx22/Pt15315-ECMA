import CategoryAPI from "../api/categoryAPI";


const Header = {
    async render() {
        const { data : categories } = await CategoryAPI.getAll();
        // console.log(categories);
        return /*html*/`
        
            <p class="h5 my-0 me-md-auto fw-normal">!!</p>
        <nav class="my-2 my-md-0 me-md-3">
            <a class="p-2 text-dark" href="/">HomePage</a>
            <a class="p-2 text-dark" href="/#/products">ProductPage</a>
            ${categories.map(category => {
            return /*html*/`
                    <a class="p-2 text-dark" href="/#/category/${category.id}">${category.name}</a>   
                `
        }).join("")
            }
            <a class="p-2 text-dark" href="/#/listproduct">Dashboard</a>
            <a class="p-2 text-dark" href="/#/blog">Blog</a>
            <a class="p-2 text-dark" href="/#/new">New</a>
            <a class="p-2 text-dark" href="/#/contact">Contact</a>
            
        </nav>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        
        `
    }
}
export default Header;
