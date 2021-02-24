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
];

export default projectInfo;
