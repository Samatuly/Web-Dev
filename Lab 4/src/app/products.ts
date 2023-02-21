export interface Product {
  image: string;
  name: string;
  description: string;
  rating: string;
  link: string;
}

export const products = [
  {
    image: "https://www.mechta.kz/export/1cbitrix/import_files/30/307bf4ea-18a2-11ed-a24a-005056b6dbd7.jpeg",
    name: "Samsung Galaxy S21 FE",
    description: "With the Samsung Galaxy S21 FE, you can experience seamless gaming and mesmerising photography. This device is made to make you smile every time you unlock it. With only a little tap, you can capture amazing moments with this phone's professional-grade camera.",
    rating: "4,66 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-new-6-gb-128-gb-seryi-grafit--106336742/?c=750000000#!/item"
  },
  {
    image: "https://m.media-amazon.com/images/I/61m1Dot5KCL.jpg",
    name: "Samsung Galaxy S21",
    description: "The Samsung Galaxy S21 specs are top-notch including a Snapdragon 888 chipset, 5G capability, 8GB RAM coupled with 128/256GB storage, and a 4000mAh battery. The phone sports a 6.2-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate. In the camera department, a triple-sensor setup is presente",
    rating: "4,69 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s21-8-gb-128-gb-seryi-100936560/?c=750000000#!/item"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0558/5541/5374/products/samsung-galaxy-s21-plus-pakistan-priceoye-ihqok-500x500_1200x1200.webp?v=1659079356",
    name: "Samsung Galaxy S21+",
    description: "The Samsung Galaxy S21+ is the bigger sibling of the regular Galaxy S21. Specification wise the phone carries a Snapdragon 888 chipset, 5G capability, 128/256GB storage, and a 4800mAh battery. The 6.7-inch Dynamic AMOLED display features an adaptive 120Hz refresh rate.",
    rating: "4,61 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s21-8-gb-128-gb-chernyi-100937328/?c=750000000#!/item"
  },
  {
    image: "https://cdn1.it4profit.com/brd2/q:68/g:sm/plain/s3://app/public/models/SM-G998BZKDSEK/large/j/210427160020957719.jpg",
    name: "Samsung Galaxy S21 Ultra",
    description: "The Samsung Galaxy S21 Ultra is the headliner of the S21 series. It's the first S series phone to support Samsung's S Pen. Specifications are top-notch including Snapdragon 888 chipset, 5G capability, up to 16gigs of RAM, and 512GB of storage.",
    rating: "4,83 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s21-ultra-12-gb-256-gb-chernyi-100937415/?c=750000000#!/item"
  },
  {
    image: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F260122_1.jpg&w=3840&q=85",
    name: "Samsung Galaxy A73",
    description: "The Samsung Galaxy A73 5G comes with 6.7-inch AMOLED display with 120Hz refresh rate and Octa-core processor. Specs also include 5000mAh battery with 25W charging speed.",
    rating: "4,56 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794/?c=750000000#!/item"
  },
  {
    image: "https://specificationsplus.com/wp-content/uploads/2021/09/Samsung-Galaxy-S22-FE-2.jpg ",
    name: "Samsung Galaxy S22 FE",
    description: "Samsung Galaxy S22 FE is powered with Octa-core Qualcomm SM8250 Snapdragon 865 (7 nm+) processor so that you can enjoy a seamless performance while accessing multiple applications at the same time. Also, the phone comes with 6 GB RAM and 128 GB inbuilt storage so that you can store various files.",
    rating: "4,62 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-new-6-gb-128-gb-seryi-grafit--106336742/?c=750000000#!/item"
  },
  {
    image: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F257387_1c.jpg&w=1080&q=85",
    name: "Samsung Galaxy S22",
    description: "The Samsung Galaxy S22 specs are top-notch including a Snapdragon 8 Gen 1 chipset, 8GB RAM coupled with 128/256GB storage, and a 3700mAh battery with 25W charging speed. The phone sports a 6.1-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate.",
    rating: "4,7 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item"
  },
  {
    image: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F257395_1cc.jpg&w=1920&q=85",
    name: "Samsung Galaxy S22+",
    description: "The Samsung Galaxy S22+ is the bigger sibling of the regular Galaxy S22 with it's 6.6-inch Dynamic AMOLED display with 120Hz refresh rate. Specs also include Qualcomm Snapdragon 8 Gen 1 processor, 4500mAh battery with 45Wcharging speed and Triple camera setup on the back.",
    rating: "4,42 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662854/?c=750000000#!/item"
  },
  {
    image: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F257403_10v.jpg&w=3840&q=85",
    name: "Samsung Galaxy S22 Ultra",
    description: "The Samsung Galaxy S22 Ultra is the headliner of the S22 series. It's the first S series phone to include Samsung's S Pen. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.",
    rating: "4,89 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-8-gb-128-gb-chernyi-103675087/?c=750000000#!/item"
  },
  {
    image: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_samsung_galaxy_z_flip4_128gb_lavender_264020_1v.jpg&w=3840&q=85",
    name: "Samsung Galaxy Z Flip4",
    description: "The Samsung Galaxy Z Flip 4 comes with 6.7-inch Dynamic AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8+ Gen 1 processor. The outer display is 1.9-inch, the battery is 3700mAh and on the back there is Dual camera setup with 12MP main sensor.",
    rating: "4,72 / 5",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-z-flip4-8-gb-128-gb-seryi-106305928/?c=750000000#!/item"
  }
];
