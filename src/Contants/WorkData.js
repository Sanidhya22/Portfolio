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
        "Image":Image1
    },
    {
        "Name": "Youtube Search Api",
        "Disc":"Search API Returns a collection of search results that match the query parameters specified in the API reques",
        "Image":Image2
    },
    {
        "Name": "Quote Generator",
        "Disc":"The Random Quote Generator is used to generate random quotes From API",
        "Image":Image3
    }
],

    "ReactJs":[
        {
            "Name":"Ecommerce Website",
            "Disc":"Ecommerce-Website-with-React-Redux with user JSON server to Fetch Mock Data",
            "Image":Ecom
        },
        {
            "Name":"TODO App",
            "Disc":"A simple todo application using React",
            "Image":Todo
        }
    ],
    "Angular":[
        {
            "Name":"User Management Webpage",
            "Disc":"User management System with Bootstrap",
            "Image":Usermng
        }
    ],
    "NodeJs":[
        {
            "Name":"CRUD-REST-API-with-NODE-JS-Express-and-POSTGRES-DB",
            "Disc":"CRUD REST SERVICE WITH VALIDATION and POSTGRESQL LAYERED ARCHITECTURE",
            "Image":Nodeimage
        }
    ]
}
