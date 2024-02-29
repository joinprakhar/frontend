import html from "./html.png";
import mongodb from "./mongodb.png";
import css from "./css.png";
import js from "./js.png";
import node from "./node.png";
import react from "./react.png";
import express from "./express.png";
import mysql from "./mysql.png";
import git from "./github.png";
import docker from "./docker.png";
import chart from "./chartjs.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./prj-assets"));

export const skillpoints = [
  { name: "Html", image: html, value: 7 },
  { name: "Css", image: css, value: 6 },
  { name: "Javascript", image: js, value: 8 },
  { name: "React", image: react, value: 8 },
  { name: "Node JS", image: node, value: 6 },
  { name: "Express JS", image: express, value: 7 },
  { name: "MongoDB", image: mongodb, value: 7 },
  { name: "MySQL", image: mysql, value: 8 },
  { name: "GIt and GitHub", image: git, value: 5 },
  { name: "Doker", image: docker, value: 8 },
  { name: "Chartjs", image: chart, value: 5 },
];

export const MiniProject = [
  {
    name: "Weather Watch Application",
    desc: "Weather App is a React-based application of weather for real-time updates of any location. It utilizes Lodash and RESTful APIs for data management and fetches weather data using geolocation.",
    images: [
      images["weatherwatch-mainscreen.png"],
      images["weatherwatch-unitselect.png"],
      images["weatherwatch-grantLoaction.png"],
    ],
    git: "https://github.com/joinprakhar/weatherApp",
    live: "https://theweathers.vercel.app/",
    tech: ["Html", "JavaScript", "React.Js", "Css"],
  },
  {
    name: "BlogChef",
    desc: "BlogChef is a backend application used for creating a blog application with CRUD functionality along with Authentication tool used for building this application is Node.Js, Express.Js, MongoDB, Javascript ",
    images: [images["blogchef-home.png"], images["blogchef-create.png"]],
    git: "https://github.com/joinprakhar/blogchef",
    live: "Backend",
    tech: ["Express.Js", "MongoDB", "Node.Js"],
  },
  {
    name: "Product Catelog and Comparision",
    desc: "This Project is built for viewing product details and comparing product with another. React, Redux and React router dom is used for building this project",
    images: [
      images["confronto-home.png"],
      images["confronto-compare.png"],
      images["confronto-detail.png"],
    ],
    git: "https://github.com/joinprakhar/Product-Catelog-and-Comparision",
    live: "https://reactjs.khcodelab.com:3035/",
    tech: ["Html", "Css", "JavaScript", "React.Js"],
  },
  {
    name: "Shopping Cart and filter Project",
    desc: "This Project is built for viewing product page and adding product to cart for checkout. React, Hooks, Redux and React router dom is used for building this project",
    images: [images["shopcart-home.png"], images["shopcart-cart.png"]],
    git: "https://github.com/joinprakhar/Shoping-cart-and-filter-project",
    live: "",
    tech: ["Html", "Css", "JavaScript", "React.Js"],
  },

  {
    name: "Supertune App",
    desc: "This Project is built for sorting list in ascending and descending order and view rating of songs etc. HTML, CSS , Javascript and React is used for building this project",
    images: [images["supertune.png"]],
    git: "https://github.com/joinprakhar/superTune",
    live: "",
    tech: ["Html", "Css", "JavaScript", "React.Js"],
  },
  {
    name: "Currency Converter",
    desc: "This Project is built for converting currency from one denomination to other and vice versa. We used external API for fetching conversion units. HTML, CSS , Javascript and React is used for building this project",
    images: [images["currency converter.png"]],
    git: "https://github.com/joinprakhar/Currency_Converter",
    live: "https://easyconverter.vercel.app/",
    tech: ["Html", "Css", "JavaScript", "MongoDB"],
  },
];

export const MajorProject = [
  {
    name: "EasyShop",
    desc: "The EasyShop e-commerce app is an innovative and feature-rich platform designed to provide users with a convenient and delightful online shopping experience. With the rapid growth of e-commerce in recent years.",
    image: [
      images["easyHome.png"],
      images["easyMyOrder.png"],
      images["easyOrder.png"],
      images["easyProduct.png"],
      images["easyRes.png"],
    ],
    git: "https://github.com/joinprakhar/blog-q",
    live: "https://easyshop-acsv.onrender.com/",
    tech: [
      "Html",
      "Css",
      "JavaScript",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
    skills: [
      "Redux / Redux Toolkit",
      "React-toastify",
      "React-Helmets",
      "Axios",
      "Responsive Design",
      "Tailwind",
      "JWT",
      "Multer",
      "CORS",
      "React-Quill",
      "React Router Dom",
    ],
    largedesc: [
      "The EasyShop e-commerce app is an innovative and feature-rich platform designed to provide users with a convenient and delightful online shopping experience. With the rapid growth of e-commerce in recent years, this app aims to cater to the needs of both businesses and consumers by offering a wide range of products, a user-friendly interface, secure payment options, and efficient order management.",
      "The Need for a Modern E-commerce App In the digital age, consumers increasingly prefer shopping online due to its convenience and accessibility. Businesses, too, recognize the potential of e-commerce in reaching a global audience and increasing sales. However, with the ever-changing landscape of technology and consumer preferences, it becomes essential to develop an up-to-date e-commerce app that aligns with the latest trends and demands.",
      "Key Features",
      "1. User Registration and Authentication To personalize the shopping experience and facilitate secure transactions, the app includes a user registration and authentication system. Users can easily create accounts using their email or social media credentials. The app ensures the security of user information by implementing JSON Web Tokens (JWT) for stateless and secure authentication.",
      "2. Product Browsing A smooth and intuitive product browsing experience is crucial to keep users engaged. The app allows users to explore an extensive range of products, categorized logically for easy navigation. Advanced filtering options enable users to find products based on various attributes such as price, size, brand, and customer ratings.",
      "3. Product Details and Media Each product page is designed to provide comprehensive information about the item. Users can access detailed product descriptions, prices, available sizes, customer reviews, and high-quality images to make informed purchasing decisions.",
      "4. Shopping Cart The shopping cart feature allows users to add products while browsing and view the contents of their cart at any time. Users can modify quantities, remove items, and check the total cost before proceeding to checkout.",
      "5. Secure Checkout The checkout process is optimized for security and simplicity. The app integrates with a reliable and secure payment gateway, ensuring that sensitive financial information is protected. Customers can choose from multiple payment options, including credit/debit cards, digital wallets, and cash on delivery, providing flexibility and convenience.",
      "6. Order Tracking To enhance transparency and build trust with customers, the app offers real-time order tracking. Users can monitor the status of their orders from the moment they are placed until delivery. Automated updates and notifications keep customers informed throughout the process.",
      "7. User Profiles Registered users have access to personalized profiles, where they can manage their personal information, track order histories, and view previous purchases. Additionally, users can manage their shipping addresses, making the checkout process smoother for future purchases.",
      "8. Product Reviews and Ratings The app encourages customer feedback by enabling users to leave reviews and ratings for products they have purchased. This feature not only helps other users make informed decisions but also provides valuable insights to businesses for product improvement.",
      "9. Search Functionality A powerful search feature is crucial for a large e-commerce platform. The app incorporates an efficient search system, allowing users to quickly find products based on keywords, categories, or specific attributes.",
      "10. Responsive Design In the mobile-first era, responsive design is a must for any modern app. The e-commerce app is built using responsive design principles, ensuring that it adapts and functions seamlessly across various devices, including desktop computers, tablets, and smartphones.",
      "11. Admin Dashboard For store administrators, the app includes an admin dashboard that grants access to various management functionalities. Admins can add or update product information, manage product categories, handle customer support requests, and monitor order status to ensure smooth operations.",
      "12. Pagination For better organisation of view pagination is implemented in the app",
      "Technologies Utilized The development of the modern e-commerce app leverages MERN technologies to ensure a robust and scalable platform:",
      "Frontend Technologies The frontend is developed using modern web technologies such as ReactJS, a popular JavaScript library known for its flexibility and performance. Redux is employed for state management, allowing for centralized data control and smooth data flow within the app. Bootstrap is used to design and style the user interface, creating an appealing and consistent look across the platform.",
      "Backend Technologies The app's backend is built using Node.js, a fast and efficient server-side JavaScript runtime, along with the Express.js framework to handle API requests and route management. The combination of Node.js and Express.js ensures rapid development and optimal performance.",
      "Database Management For storing and managing data, the app uses MongoDB, a NoSQL database known for its scalability and flexibility. MongoDB allows for the efficient storage of various types of data, including user profiles, product information, and order details. Mongoose, an Object Data Modeling (ODM) library, facilitates the interaction with the MongoDB database, making data manipulation straightforward and organized.",
      "Authentication and Security User authentication is a critical aspect of any e-commerce app. The use of JSON Web Tokens (JWT) ensures secure user login and access to protected routes. JWTs allow for stateless authentication, eliminating the need for session management on the server-side and enhancing security.",
      "Payment Integration To enable secure and smooth payment processing, the app integrates with a reliable and industry-standard payment gateway. The payment gateway securely handles financial transactions, ensuring that sensitive information is protected during the payment process.",
      "Cloud Storage To efficiently manage media assets like product images, the app employs cloud storage services like Cloudnary. Cloud storage allows for seamless access and delivery of media files, even during periods of high user traffic.",
    ],
  },
  {
    name: "The Post",
    desc: "The Post App The Blog Post App is a web application that allows users to create, read, update, and delete blog posts. The app also includes user authentication to ensure that only authorized users can perform CRUD operations. Additionally, the app incorporates a profanity filter to prevent the posting of offensive content.",
    image: [
      images["theblog-blog.png"],
      images["theblog-home.png"],
      images["theblog-create.png"],
      images["theblog-signin.png"],
      images["theblog-signup.png"],
    ],
    git: "https://github.com/joinprakhar/blog-q",
    live: "https://thepost.vercel.app/",
    tech: [
      "Html",
      "Css",
      "JavaScript",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
    skills: [
      "Responsive Design",
      "Tailwind",
      "JWT",
      "Multer",
      "CORS",
      "React-Quill",
      "React Router Dom",
    ],
    largedesc: [
      "The Post App The Blog Post App is a web application that allows users to create, read, update, and delete blog posts. The app also includes user authentication to ensure that only authorized users can perform CRUD operations. Additionally, the app incorporates a profanity filter to prevent the posting of offensive content.",
      "Introduction The Blog Post App is a full-stack web application that provides a platform for users to write and share blog posts with the community. Users can create accounts, log in, and perform CRUD operations on their blog posts. The app also ensures that offensive language is filtered out using a profanity filter.",
      "Features User Registration: New users can create accounts by providing a unique email and a secure password.",
      "Create a Blog Post: Authenticated users can create new blog posts by providing a title, content, and optional tags.",
      "Read Blog Posts: All users can read blog posts without authentication.",
      "Update Blog Post: Users who have created a blog post can edit the content, title, or tags of their own posts.",
      "Delete Blog Post: Users can delete their own blog posts.",
      "Authentication: The app ensures that only authenticated users can access protected routes for creating, updating, and deleting blog posts.",
      "Profanity Filter: The app utilizes a profanity filter to prevent the posting of content containing offensive language.",
      "Technologies Used The Blog Post App is built using the following technologies:",
      "Front-end:",
      "HTML, CSS, JavaScript React.js: A popular JavaScript library for building user interfaces. Axios: A library for making HTTP requests to the backend server.",
      "Back-end:",
      "Node.js: A server-side JavaScript runtime. Express.js: A web application framework for Node.js. MongoDB: A NoSQL database for storing blog posts and user information. Mongoose: An Object Data Modeling (ODM) library for MongoDB, used for interacting with the database.",
      "Authentication:",
      "JSON Web Tokens (JWT): Used for user authentication and session management.",
    ],
  },
  {
    name: "Blue Minch",
    desc: "Blue Minch is a front-end WebSite built on React have 9 diffrent pages with various in depth details buil in pixel perfect scaling using Figma",
    image: [images["bmmain.png"]],
    git: "https://github.com/joinprakhar/blue_minch_project",
    live: "https://blue-minch.vercel.app/",
    tech: ["Html", "Css", "React.Js", "JavaScript"],
    skills: ["Responsive Design", "React-Router-Dom"],
    largedesc: [
      "Blue Minch is a front-end WebSite built on React have 9 diffrent pages with various in depth details buil in pixel perfect scaling using Figma",
    ],
  },
];
