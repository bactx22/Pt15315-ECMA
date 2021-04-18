const SidebarMenu = {
    render() {
        return /*html*/`
        <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/listproduct">
              Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/listcategory">
              Category
            </a>
          </li>
        </ul>
      </div>
        `
 }
}
export default SidebarMenu;