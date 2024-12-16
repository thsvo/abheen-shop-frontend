const menu_data = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about'
  },
  {
    id: 3,
    title: 'Contact',
    link: '/contact'
  },
  {
    id: 4,
    title: 'Shop',
    link: '/shop'
  },
  {
    id: 5,
    hasDropdown: true,
    title: 'Pages',
    link: '#',
    submenus: [
      { title: 'FAQs', link: '/faq' },
      { title: 'Privacy & Policy', link: '/policy' },
      { title: 'Terms & Conditions', link: '/terms' },
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: 'My Cart', link: '/cart' },
      { title: 'My Wishlist', link: '/wishlist' },
      { title: 'My Compare', link: '/compare' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'Error 404', link: '/404' },
    ]
  },
  {
    id: 6,
    hasDropdown: true,
    title: 'Category',
    link: '#',
    submenus: [
      { title: 'Ipad Phone & Tablets', link: '/shop?Category=ipad-phone--tablets' },
      { title: 'Planer & Virtual', link: '/shop?Category=planer--virtual' },
      { title: 'Wireless & Watches', link: '/shop?Category=wireless--watches' },
      { title: 'Computers Monitor & Laptop', link: '/shop?Category=computers-monitor--laptop' },
      { title: 'Exercise Bike & Shaver Clean', link: '/shop?Category=exercise-bike--shaver-clean' },
      { title: 'Spinning Reel & Kettle', link: '/shop?Category=spinning-reel--kettle' },
      { title: 'Camera Bluetooth & Headset', link: '/shop?Category=camera-bluetooth--headset' }
    ]
  },
  {
    id: 7,
    hasDropdown: true,
    title: 'Brand',
    link: '#',
    submenus: [
      { title: 'Logitech', link: '/shop?Brand=logitech' },
      { title: 'Deepcool', link: '/shop?Brand=deepcool' },
      { title: 'Apple', link: '/shop?Brand=apple' },
      { title: 'Sony', link: '/shop?Brand=sony' },
      { title: 'Samsung', link: '/shop?Brand=samsung' },
      { title: 'Lenovo', link: '/shop?Brand=lenovo' }
    ]
  },
  {
    id: 8,
    hasDropdown: true,
    title: 'Store',
    link: '#',
    submenus: [
      { title: 'Amazon', link: '/shop?Store=amazon' },
      { title: 'Flipkart', link: '/shop?Store=flipkart' },
      { title: 'Alibaba', link: '/shop?Store=alibaba' },
      { title: 'Daraz', link: '/shop?Store=daraz' },
      { title: 'Zomata', link: '/shop?Store=zomato' },
      { title: 'Fedex', link: '/shop?Store=fedex' }
    ]
  }
]

export default menu_data;
