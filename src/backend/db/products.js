import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Apple iPhone 14 Pro Max",
    description:
      "6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front cover. A15 Bionic chip. 5G capable. Pro camera system.Dynamic Island, a magical new way to interact with iPhone.48MP Main camera for up to 4x greater resolution.Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos.All-day battery life and up to 29 hours of video playback.",
    price: 139900,
    discountedPrice: 127999,
    ram: "6GB",
    storage: "128GB",
    category: "Smartphones",
    brand: "Apple",
    image: "https://i.postimg.cc/fTMy77Xg/iphone-14-pro-max.jpg",
    rating: 4.8,
    cartValue: false,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy S23 Ultra 5G",
    description:
      "6.8-inch Dynamic AMOLED 2X display. Gorilla Glass Victus front and back. Exynos 2100 or Snapdragon 888 chipset. 5G capable. Quad camera system.More innovation, less footprint – Galaxy S23 Ultra's striking symmetrical design returns with one major difference: recycled and eco-conscious materials. From the metal frame to the glass finish, it's polished with fresh new colors inspired by nature.",
    price: 149900,
    discountedPrice: 124900,
    ram: "12GB",
    storage: "256GB",
    category: "Smartphones",
    brand: "Samsung",
    image: "https://i.postimg.cc/9MyX1xF0/s23-ultra.jpg",
    rating: 4.7,
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Google Pixel 7 Pro",
    description:
      "6.7-inch QHD+ LTPO OLED display. Gorilla Glass Victus front. Google Tensor chip. 5G capable. Dual camera system.",
    price: 88000,
    discountedPrice: 73000,
    ram: "12GB",
    storage: "256GB",
    category: "Smartphones",
    brand: "Google",
    image: "https://i.postimg.cc/VNxLqyw2/pixel-7-pro.jpg",
    rating: 3.5,
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Apple MacBook Air M2",
    description:
      "15.3-inch Retina display with True Tone. M2 chip.  Get more done faster with a powerful 8-core CPU, 10-core GPU and up to 24GB of unified memory.MacBook Air features a fanless design that runs completely silent, no matter the task.",
    price: 134900,
    discountedPrice: 126806,
    ram: "8GB",
    storage: "256GB",
    category: "Laptops",
    brand: "Apple",
    image: "https://i.postimg.cc/c40CkN3S/mabook-air-m2.jpg",
    rating: 4.6,
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Dell XPS 13",
    description:
      "The Dell XPS 13 is a powerful laptop with a 13.4-inch Full HD+ InfinityEdge display. It features the 11th Gen Intel Core i7 processor for seamless performance and Intel Iris Xe Graphics for stunning visuals. With up to 32GB of RAM, this laptop can handle multitasking and demanding applications with ease. The sleek and compact design makes it perfect for on-the-go productivity. Enjoy fast and reliable performance for work or entertainment. The discounted price for this laptop is $1,099.99. Choose the Dell XPS 13 for a premium computing experience.",
    price: 2676777,
    discountedPrice: 229670,
    category: "Laptops",
    brand: "Dell",
    image: "https://i.postimg.cc/cJ26FgR9/dell-xps-13.jpg",
    rating: 2.7,
    ram: "Up to 32GB",
    storage: "256GB SSD",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "HP Spectre x360",
    description:
      "Experience versatility and performance with the HP Spectre x360. This 2-in-1 laptop features a 13.3-inch Full HD IPS display for vibrant visuals. Powered by the 11th Gen Intel Core i7 processor and Intel Iris Xe Graphics, it delivers smooth and responsive performance. The convertible design allows you to use it as a laptop or tablet according to your needs. The HP Spectre x360 is perfect for both work and entertainment. With a discounted price of $999.99, it offers excellent value for money. Get the HP Spectre x360 and unleash your creativity and productivity.",
    price: 1099,
    discountedPrice: 999.99,
    category: "Laptops",
    brand: "HP",
    image: "https://i.postimg.cc/MK6ZbmkZ/specte-x-360.jpg",
    rating: 3.6,
    ram: "16GB",
    storage: "512GB SSD",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy Tab S7",
    description:
      "Enjoy immersive multimedia and productivity on the Samsung Galaxy Tab S7. It features an 11-inch LTPS TFT display that delivers sharp and vivid visuals. Powered by the Snapdragon 865+ chipset, this tablet offers fast and efficient performance. The dual-camera system allows you to capture stunning photos and videos. With 5G capability, you can stay connected wherever you go. The Samsung Galaxy Tab S7 comes with the S Pen included, providing a seamless writing and drawing experience. Upgrade your tablet experience with the Samsung Galaxy Tab S7, available at a discounted price of $649.99. Get ready to redefine what a tablet can do.",
    price: 699,
    discountedPrice: 649.99,
    category: "Tablets",
    brand: "Samsung",
    image: "https://i.postimg.cc/prtrtw1K/galaxy-tab-s7.jpg",
    rating: 2.4,
    ram: "6GB",
    storage: "128GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Microsoft Surface Pro 8",
    description:
      "Experience the power of a laptop and the versatility of a tablet with the Microsoft Surface Pro 8. It features a 13-inch PixelSense display that delivers stunning visuals. With the 11th Gen Intel Core i5 or i7 processor and Intel Iris Xe Graphics, it offers fast and smooth performance for both work and play. The Surface Pro 8 is compatible with the Surface Pen, allowing you to take notes, draw, and sketch with precision. With a discounted price of $1,199.99, it offers excellent value for money. Upgrade your productivity with the Microsoft Surface Pro 8.",
    price: 1299,
    discountedPrice: 1199.99,
    category: "Tablets",
    brand: "Microsoft",
    image: "https://i.postimg.cc/15vmWVPG/surface-8-pro.jpg",
    rating: 3.6,
    ram: "16GB",
    storage: "512GB SSD",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Amazon Kindle Paperwhite",
    description:
      "Get lost in your favorite books with the Amazon Kindle Paperwhite. Featuring a 6-inch glare-free display and built-in adjustable light, it offers a comfortable reading experience in any lighting condition. The Kindle Paperwhite is waterproof, allowing you to read by the pool or at the beach without worry. With 8GB of storage, you can carry thousands of books with you wherever you go. The Kindle Paperwhite is the perfect companion for book lovers. Get yours today at a discounted price of $99.99 and immerse yourself in a world of endless stories.",
    price: 129,
    discountedPrice: 99.99,
    category: "Tablets",
    brand: "Amazon",
    image: "https://i.postimg.cc/cCMH1FV2/kindle-paperwhite.jpg",
    rating: 2.5,
    ram: "N/A",
    storage: "8GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Logitech MX Master 3",
    description:
      "Take control of your workflow with the Logitech MX Master 3. This advanced ergonomic mouse features ultra-fast and precise scrolling, allowing you to navigate through documents and webpages with ease. The customizable buttons provide quick access to your favorite shortcuts. With its comfortable design, you can use it for hours without fatigue. The Logitech MX Master 3 is the perfect companion for productivity enthusiasts. Enhance your workflow with the Logitech MX Master 3, available at a discounted price of $89.99. Get ready to redefine how you work.",
    price: 99,
    discountedPrice: 89.99,
    category: "Accessories",
    brand: "Logitech",
    image: "https://i.postimg.cc/qMwR9ZcC/MX-master-3.jpg",
    rating: 4.8,
    ram: "N/A",
    storage: "N/A",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Sony WH-1000XM4",
    description:
      "Immerse yourself in your favorite music with the Sony WH-1000XM4 noise-canceling headphones. These industry-leading headphones deliver exceptional sound quality and high-resolution audio. The advanced noise-canceling technology blocks out ambient noise, allowing you to focus on your music. With a long-lasting battery, you can enjoy music all day long. The Sony WH-1000XM4 headphones are the perfect companion for music lovers. Get yours today at a discounted price of $299.99 and experience music like never before.",
    price: 349,
    discountedPrice: 299.99,
    category: "Accessories",
    brand: "Sony",
    image: "https://i.postimg.cc/vTMYKWcz/sony-wh-1000-mx4.jpg",
    rating: 3.7,
    ram: "N/A",
    storage: "N/A",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "OnePlus 9 Pro",
    description:
      "Capture stunning photos and enjoy flagship performance with the OnePlus 9 Pro. It features a 6.7-inch Fluid AMOLED display that delivers vibrant visuals. Powered by the Snapdragon 888 chipset, this smartphone offers fast and smooth performance for gaming and multitasking. The Hasselblad quad camera system allows you to capture professional-grade photos and videos. With 5G capability, you can experience faster download and upload speeds. The OnePlus 9 Pro is the perfect choice for tech enthusiasts. Get yours today at a discounted price of $799.99 and experience the future of mobile technology.",
    price: 899,
    discountedPrice: 799.99,
    category: "Smartphones",
    brand: "OnePlus",
    image: "https://i.postimg.cc/htGjgbMZ/oneplus-10-pro.jpg",
    rating: 3.8,
    ram: "12GB",
    storage: "256GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Lenovo ThinkPad X1 Carbon",
    description:
      "The Lenovo ThinkPad X1 Carbon is a premium business laptop with a 14-inch WQHD display. It features the 11th Gen Intel Core i7 processor and Intel Iris Xe Graphics for smooth performance and stunning visuals. The laptop is durable and lightweight, making it perfect for professionals on the go. With up to 32GB of RAM, you can handle multitasking and demanding applications effortlessly. The Lenovo ThinkPad X1 Carbon is the perfect choice for professionals who require top-notch performance and portability. Get yours today at a discounted price of $1,499.99 and take your productivity to new heights.",
    price: 1599,
    discountedPrice: 1499.99,
    category: "Laptops",
    brand: "Lenovo",
    image: "https://i.postimg.cc/RFx43cQB/thinkpad-x1-carbon.jpg",
    rating: 1.9,
    ram: "Up to 32GB",
    storage: "1TB SSD",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "iPad Pro 12.9-inch",
    description:
      "Experience unmatched performance and creativity with the iPad Pro 12.9-inch. It features a stunning Liquid Retina XDR display that brings your content to life. Powered by the Apple M1 chip, this tablet offers desktop-class performance for productivity and graphics-intensive tasks. With 5G capability, you can stay connected wherever you go. The iPad Pro 12.9-inch is perfect for artists, designers, and content creators. Get yours today at a discounted price of $999.99 and unleash your creativity.",
    price: 1099,
    discountedPrice: 999.99,
    category: "Tablets",
    brand: "Apple",
    image: "https://i.postimg.cc/qRKqSJQk/ipad-pro.jpg",
    rating: 4.8,
    ram: "8GB",
    storage: "128GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Razer Blade 16",
    description:
      "Elevate your gaming experience with the Razer Blade 16 gaming laptop. It features a 15.6-inch Full HD display for immersive visuals. Powered by the 11th Gen Intel Core i7 processor and NVIDIA GeForce RTX 3070, it delivers exceptional gaming performance. The RGB Chroma keyboard allows you to customize the lighting according to your preferences. With a sleek and portable design, the Razer Blade 16 is perfect for gaming on the go. Get yours today at a discounted price of $1,799.99 and step into the world of high-performance gaming.",
    price: 1999,
    discountedPrice: 1799.99,
    category: "Laptops",
    brand: "Razer",
    image: "https://i.postimg.cc/rsJV2K4L/razer-blade-16.jpg",
    rating: 1.7,
    ram: "16GB",
    storage: "1TB SSD",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Anker PowerCore 26800",
    description:
      "Stay charged and connected with the Anker PowerCore 26800 power bank. With a high-capacity battery, it can charge your devices multiple times before needing a recharge. The dual micro-USB inputs allow for faster recharging of the power bank. Equipped with PowerIQ and VoltageBoost technology, it delivers the fastest and safest charging speed for your devices. The Anker PowerCore 26800 is the perfect companion for travel and emergencies. Get yours today at a discounted price of $49.99 and never run out of power again.",
    price: 59,
    discountedPrice: 49.99,
    category: "Accessories",
    brand: "Anker",
    image: "https://i.postimg.cc/VL80yC32/anker-powercore-36800.jpg",
    rating: 2.5,
    ram: "N/A",
    storage: "N/A",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Google Pixel 7a",
    description:
      "Capture your precious moments with the Google Pixel 7a smartphone. It features a 6.4-inch OLED display that delivers vibrant colors and sharp details. Powered by the Snapdragon 765G chipset, it offers smooth and efficient performance. The dual-camera system allows you to capture stunning photos and videos. With 5G capability, you can stream and download content faster than ever. The Google Pixel 7a is the perfect choice for photography enthusiasts. Get yours today at a discounted price of $399.99 and enjoy flagship features without breaking the bank.",
    price: 499,
    discountedPrice: 399.99,
    category: "Smartphones",
    brand: "Google",
    image: "https://i.postimg.cc/13Yzznjm/pixel-7a.jpg",
    rating: 4.6,
    ram: "6GB",
    storage: "128GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Asus ROG Zephyrus G14",
    description:
      "Unleash your gaming potential with the Asus ROG Zephyrus G14 gaming laptop. It features a 14-inch QHD display with a 120Hz refresh rate, providing a smooth and immersive gaming experience. Powered by the AMD Ryzen 9 5900HS processor and NVIDIA GeForce RTX 3060, it delivers exceptional gaming performance. The AniMe Matrix LED display on the lid allows you to customize the lighting for a unique gaming setup. With a discounted price of $1,599.99, the Asus ROG Zephyrus G14 is a must-have for gaming enthusiasts.",
    price: 1699,
    discountedPrice: 1599.99,
    category: "Laptops",
    brand: "Asus",
    image: "https://i.postimg.cc/pXJhPdvr/asus-rog-zephyrus-G14.jpg",
    rating: 3.8,
    ram: "16GB",
    storage: "1TB SSD",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy Tab A7",
    description:
      "Experience entertainment on the go with the Samsung Galaxy Tab A7. It features a 10.4-inch TFT display that delivers clear and bright visuals. Powered by the Snapdragon 662 chipset, this tablet offers smooth performance for streaming and gaming. With a large battery capacity, you can enjoy hours of entertainment without interruption. The Samsung Galaxy Tab A7 is the perfect companion for entertainment enthusiasts. Get yours today at a discounted price of $199.99 and enjoy entertainment wherever you go.",
    price: 229,
    discountedPrice: 199.99,
    category: "Tablets",
    brand: "Samsung",
    image: "https://i.postimg.cc/CxMZ5VMN/galaxy-tab-a7.jpg",
    rating: 2.6,
    ram: "3GB",
    storage: "64GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Apple AirPods Pro",
    description:
      "Immerse yourself in your favorite music with the Apple AirPods Pro. Featuring active noise cancellation, these earbuds block out background noise, allowing you to focus on your music. The adaptive EQ delivers rich and immersive sound quality. With a sweat and water-resistant design, you can use them during workouts or rainy days. The Apple AirPods Pro are the perfect companion for music lovers. Get yours today at a discounted price of $199.99 and enjoy music like never before.",
    price: 249,
    discountedPrice: 199.99,
    category: "Accessories",
    brand: "Apple",
    image: "https://i.postimg.cc/qBn6ZLZ8/airpods-pro.jpg",
    rating: 4.9,
    ram: "N/A",
    storage: "N/A",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Sony Xperia 1 V",
    description:
      "Capture professional-grade photos with the Sony Xperia 1 V smartphone. It features a 6.5-inch 4K OLED display for stunning visuals. Powered by the Snapdragon 888 chipset, this smartphone offers fast and efficient performance. The triple camera system, developed in collaboration with ZEISS optics, allows you to capture sharp and detailed photos and videos. With 5G capability, you can stay connected and share your content in real-time. The Sony Xperia 1 V is the perfect choice for photography enthusiasts. Get yours today at a discounted price of $1,099.99 and experience photography at its best.",
    price: 1199,
    discountedPrice: 1099.99,
    category: "Smartphones",
    brand: "Sony",
    image: "https://i.postimg.cc/v8LHVSNS/sony-xperia-1-v.jpg",
    rating: 2.7,
    ram: "12GB",
    storage: "256GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Logitech G Pro Wireless",
    description:
      "Enhance your gaming performance with the Logitech G Pro Wireless gaming mouse. It features an ultra-lightweight design, allowing for quick and precise movements. Equipped with the HERO 25K sensor, it delivers accurate tracking and fast response times. With a long-lasting battery life, you can game for hours without interruptions. The Logitech G Pro Wireless is the perfect choice for esports and competitive gaming. Get yours today at a discounted price of $99.99 and gain the competitive edge in every game.",
    price: 129,
    discountedPrice: 99.99,
    category: "Accessories",
    brand: "Logitech",
    image: "https://i.postimg.cc/gcvrK0ns/logitech-g-pro-wireless.jpg",
    rating: 3.8,
    ram: "N/A",
    storage: "N/A",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Lenovo Yoga 9i",
    description:
      "Experience premium performance and entertainment with the Lenovo Yoga 9i. It features a 14-inch 4K IPS display for stunning visuals. Powered by the 11th Gen Intel Core i7 processor and Intel Iris Xe Graphics, it offers smooth performance for multitasking and entertainment. The Rotating Sound Bar with Dolby Atmos delivers immersive audio for an enhanced entertainment experience. With a discounted price of $1,499.99, the Lenovo Yoga 9i is the perfect choice for those who demand top-notch performance and entertainment.",
    price: 1599,
    discountedPrice: 1499.99,
    category: "Laptops",
    brand: "Lenovo",
    image: "https://i.postimg.cc/x170QrXq/yoga-9i.jpg",
    rating: 2.6,
    ram: "16GB",
    storage: "1TB SSD",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Amazon Echo (4th Gen)",
    description:
      "Upgrade your smart home with the Amazon Echo (4th Gen). It features premium sound for a rich audio experience. With the built-in smart home hub, you can easily control your smart devices with just your voice. Alexa, the voice assistant, allows you to get information, play music, and perform various tasks effortlessly. The Amazon Echo (4th Gen) is the perfect companion for a connected and smart home. Get yours today at a discounted price of $79.99 and experience the convenience of a smart home.",
    price: 99,
    discountedPrice: 79.99,
    category: "Accessories",
    brand: "Amazon",
    image: "https://i.postimg.cc/mrtt3NH1/echo-5th-gen.jpg",
    rating: 4.5,
    ram: "N/A",
    storage: "N/A",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy S23",
    description:
      "Experience flagship performance and photography with the Samsung Galaxy S23 smartphone. It features a 6.6-inch Super AMOLED display for stunning visuals. Powered by the Exynos 2200 or Snapdragon 895 chipset, this smartphone offers fast and efficient performance. The triple camera system allows you to capture professional-grade photos and videos. With 5G capability, you can enjoy faster download and upload speeds. The Samsung Galaxy S23 is the perfect choice for tech enthusiasts. Get yours today at a discounted price of $999.99 and experience the future of mobile technology.",
    price: 1099,
    discountedPrice: 999.99,
    category: "Smartphones",
    brand: "Samsung",
    image: "https://i.postimg.cc/nhdXQwCt/galaxy-s23.jpg",
    rating: 4.7,
    ram: "8GB",
    storage: "256GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Microsoft Surface Go 3",
    description:
      "Stay productive on the go with the Microsoft Surface Go 3. It features a 10.5-inch PixelSense display that delivers sharp and vibrant visuals. Powered by the Intel Pentium Gold or Core i3 processor, it offers smooth performance for productivity tasks. The lightweight and portable design make it easy to carry around for work or entertainment. The Microsoft Surface Go 3 is the perfect companion for students and professionals. Get yours today at a discounted price of $299.99 and elevate your productivity.",
    price: 399,
    discountedPrice: 299.99,
    category: "Tablets",
    brand: "Microsoft",
    image: "https://i.postimg.cc/L8hHG46r/surface-go-3.jpg",
    rating: 3.6,
    ram: "8GB",
    storage: "128GB",
    cartValue: false,
    wishlistValue: false,
  },
  {
    _id: uuid(),
    name: "Acer Predator Helios 300",
    description:
      "Unleash your gaming potential with the Acer Predator Helios 300 gaming laptop. It features a 15.6-inch Full HD IPS display for immersive gaming visuals. Powered by the 10th Gen Intel Core i7 processor and NVIDIA GeForce RTX 3060, it delivers high-performance gaming. The laptop is equipped with advanced cooling technology to keep temperatures low during intense gaming sessions. The Acer Predator Helios 300 is the perfect choice for gamers who demand top-tier performance. Get yours today at a discounted price of $1,099.99 and conquer the gaming battlefield.",
    price: 1299,
    discountedPrice: 1099.99,
    category: "Laptops",
    brand: "Acer",
    image: " https://i.postimg.cc/fyx3tz0H/acer-predator-helios-300.jpg",
    rating: 2.7,
    ram: "16GB",
    storage: "512GB SSD",
    cartValue: false,
    wishlistValue: false,
  },
];
