import Image1 from "../Assets&Images/InfiniteScroll.gif"
import Image2 from "../Assets&Images/YoutubeSearch.gif"
import Image3 from "../Assets&Images/QuoteGenerator.gif"
import Nodeimage from "../Assets&Images/Node.png"
import Ecom from "../Assets&Images/EcomHome.gif"
import Todo from "../Assets&Images/ToDolist.png"
import Usermng from "../Assets&Images/UserManag.png"

export const Technologies =[
    {"Name":"JavaScript"},
    {"Name": "ReactJs"},
    {"Name":"Angular"},
    {"Name":"NodeJs"}
]

export const Projects ={
    "JavaScript":[
    {
        "Name": "Infinite Scroller",
        "Disc":"Infinite scrolling is a feature that allows you to load some pics on a website and then load more before the user reaches the end of the webpage",
        "Image":Image1,
        "Link":"https://github.com/Sanidhya22/Infinity-scroll"
    },
    {
        "Name": "Youtube Search Api",
        "Disc":"Search API Returns a collection of search results that match the query parameters specified in the API reques",
        "Image":Image2,
        "Link":"https://github.com/Sanidhya22/Youtube-Search-V3Api-with-JS"
    },
    {
        "Name": "Quote Generator",
        "Disc":"The Random Quote Generator is used to generate random quotes From API",
        "Image":Image3,
        "Link":"https://github.com/Sanidhya22/Quote-generater"
    }
],

    "ReactJs":[
        {
            "Name":"Ecommerce Website",
            "Disc":"Ecommerce-Website-with-React-Redux with user JSON server to Fetch Mock Data",
            "Image":Ecom,
            "Link":"https://github.com/Sanidhya22/Ecommerce-Website-with-React-Redux"
        },
        {
            "Name":"TODO App",
            "Disc":"A simple todo application using React",
            "Image":Todo,
            "Link":"https://github.com/Sanidhya22/TODO-App-React"
        }
    ],
    "Angular":[
        {
            "Name":"User Management Webpage",
            "Disc":"User management System with Bootstrap",
            "Image":Usermng,
            "Link":""
        }
    ],
    "NodeJs":[
        {
            "Name":"CRUD-REST-API-with-NODE-JS-Express-and-POSTGRES-DB",
            "Disc":"CRUD REST SERVICE WITH VALIDATION and POSTGRESQL LAYERED ARCHITECTURE",
            "Image":Nodeimage,
            "Link":"https://github.com/Sanidhya22/CRUD-REST-API-with-NODE-JS-Express-and-POSTGRES-DB"
        }
    ]
}
