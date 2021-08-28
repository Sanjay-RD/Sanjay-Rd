const projectInfo = [
  {
    id: 1,
    name: "Contact Keeper App",
    livedemo: "",
    intro:
      "MERN Stack App, Contact keeper is used to store contact of user, you can edit,remove and update contact",
    image: "/images/contactkeeper/main.png",
    description: [
      "This is the MERN Stack project called Contact keeper used to store contack of user.",
      "The System stored the data of user phone number so that you can access it later on.",
      "Node and Express is used for backend, ReactJs is used for frontend UI and MongoDB is used for database to store the user contact information, Context API is used for App level state management",
      "Contact Keeper enable you to edit, remove and update contact of user",
    ],

    technologies: [
      "React Js",
      "Node + Express Framwork",
      "MongoDB (for Database)",
      "react-transition-group (for smooth transition)",
      "Context API (for managing app level state)",
    ],
    moreImage: [
      {
        imgTitle: "Main Image",
        image: "/images/contactkeeper/main.png",
      },
      {
        imgTitle: "Login Page",
        image: "/images/contactkeeper/login.png",
      },
      {
        imgTitle: "Register page",
        image: "/images/contactkeeper/register.png",
      },
    ],
  },
  {
    id: 2,
    name: "Github Finder",
    livedemo: "https://kind-golick-6db13d.netlify.app/",
    intro:
      "Github finder is used to find the user available in github using github API",
    image: "/images/githubfinder/main.png",
    description: [
      "This was a very simple project used to find the github user using github API to collect the github user data",
      "This Project teach me a lot about react js , fetching API using axios and about React Context API for app level state management",
    ],
    technologies: [
      "React JS",
      "Github API",
      "Context API (for managing app level state)",
    ],
    moreImage: [
      {
        imgTitle: "Main Image",
        image: "/images/githubfinder/main.png",
      },
      {
        imgTitle: "Home page",
        image: "/images/githubfinder/home.png",
      },
      {
        imgTitle: "Individual Post Image",
        image: "/images/githubfinder/eachpost.png",
      },
    ],
  },
  {
    id: 3,
    name: "Covid-19 Tracker",
    livedemo: "https://wizardly-murdock-f3fb82.netlify.app/",
    intro:
      "Covid-19 Tracker is used to track the live data of covid patients around the word",
    image: "/images/covid/main.png",
    description: [
      "This was the first project I started while learning reactjs in covid-19 pandimic from clever programmer.",
      "This system is used to track the live data of covid affected patients around the world using API from diseash.sh website.",
      "Here I used bootstrap for styling and react leaflet to show the cases or data in map and chartjs to show the graph of covid-19 cases within the time interval",
      "User had the ability to view all data around the world or spacific conuntry with a dynamic click button of all country by default all data around the world are shown, In Live Cases by country, It show the highest number of cases by country in descending order",
      "Cases, Recovered and Deaths of live data around the world are shown in this APP",
    ],
    technologies: [
      "React JS",
      "API from https://disease.sh/docs/",
      "React Leaflet (to show the map)",
      "Bootstrap",
      "react-chartjs-2 (to show the line graph)",
    ],
    moreImage: [
      {
        imgTitle: "Demo One",
        image: "/images/covid/one.png",
      },
      {
        imgTitle: "Demo Two",
        image: "/images/covid/recover.png",
      },
      {
        imgTitle: "Demo Three",
        image: "/images/covid/death.png",
      },
    ],
  },
  {
    id: 4,
    name: "Jutta Pasal",
    livedemo: "https://juttapasal.herokuapp.com/",
    intro:
      "Jutta Pasal is online e-commerce site for buying only shoes of different brand",
    image: "/images/juttapasal/main.png",
    description: [
      "This is a college project, which is a fullstack online service application made using Reactjs, Node, Express, mongoDB",
      "This application is used for buying online shoes and feature to pay through online, add product to cart, order product, shipping etc. ",
      "User had the ability to view there order details, edit there profile",
      "Admin had the ability to view,edit and delete all order,user, product, admin can create new product,edit and delete a product",
    ],
    technologies: [
      "React JS",
      "Node & Express",
      "React Bootstrap for css",
      "MongoDB for database",
    ],
    moreImage: [
      {
        imgTitle: "Demo One",
        image: "/images/juttapasal/cart.png",
      },
      {
        imgTitle: "Demo Two",
        image: "/images/juttapasal/inside.png",
      },
      {
        imgTitle: "Demo Three",
        image: "/images/juttapasal/userprofile.png",
      },
      {
        imgTitle: "Demo Four",
        image: "/images/juttapasal/dashboard.png",
      },
    ],
  },
  {
    id: 5,
    name: "Game Store",
    livedemo: "",
    intro:
      "Game Store is a simple site where you can buy games, create Blog and read the existing Blog ",
    image: "/images/gamestore/main.png",
    description: [
      "This is a college project, which is a fullstack django application made using Django, HTML, CSS & JS",
      "This application is used for buying games and have the feature to pay through online, add games to cart, order games, user can create Blog and read the Existing Blog etc. ",
      "User had the ability to view there order games & blog, edit there profile, edit blog and create new blog",
      "Admin had the ability to view, edit and delete games, user, blog. Admin can create new game, edit and delete a games",
    ],
    technologies: ["Django", "HTML, CSS, JS", "Postgresql for database"],
    moreImage: [
      {
        imgTitle: "Demo One",
        image: "/images/gamestore/featured.png",
      },
      {
        imgTitle: "Demo Two",
        image: "/images/gamestore/games.png",
      },
      {
        imgTitle: "Demo Three",
        image: "/images/gamestore/blog.png",
      },
      {
        imgTitle: "Demo four",
        image: "/images/gamestore/cart.png",
      },
      {
        imgTitle: "Demo Five",
        image: "/images/gamestore/dashboard.png",
      },
    ],
  },
  {
    id: 6,
    name: "Room Finder",
    livedemo: "https://chaiyo1.herokuapp.com/",
    intro:
      "It is a online room finding site where you can find room, details, price, contact of the room",
    image: "/images/roomfinder/main.png",
    description: [
      "This is a personal project, which is a fullstack MARN application made using Reactjs, Node & Express, MongoDB",
      "This application is used for finding room online and have the feature to add room, delete room, search room,user and admin dashboard, query to owner, owner details",
      "User had the ability to view available room, edit there profile, query to owner and create new rooms",
      "Admin had the ability to view, edit and delete room  and user. Admin can also create new room, edit and delete a room if needed",
    ],
    technologies: ["ReactJS", "Node & Express", "MongoDB for database"],
    moreImage: [
      {
        imgTitle: "Demo One",
        image: "/images/roomfinder/inside.png",
      },
      {
        imgTitle: "Demo Two",
        image: "/images/roomfinder/userdashboard.png",
      },
      {
        imgTitle: "Demo Three",
        image: "/images/roomfinder/adminDashboard.png",
      },
    ],
  },
];

export default projectInfo;
