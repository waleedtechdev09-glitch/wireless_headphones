export class NavbarViewModel {
  constructor() {
    this.brand = {
      main: "Playing /",
      light: "Market"
    };

    this.menuItems = [
      { id: 1, title: "Home", link: "#" },
      { id: 2, title: "Products", link: "#" },
      { id: 3, title: "Categories", link: "#" },
      { id: 4, title: "Contact", link: "#" }
    ];
  }

  getBrand() {
    return this.brand;
  }

  getMenuItems() {
    return this.menuItems;
  }
}
