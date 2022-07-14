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
        "Disc":"Hi",
        "Image":Image1
    },
    {
        "Name": "Youtube Search Api",
        "Disc":"Hi",
        "Image":Image2
    },
    {
        "Name": "Quote Generator",
        "Disc":"Hi",
        "Image":Image3
    }
],

    "ReactJs":[
        {
            "Name":"Ecommerce Website",
            "Disc":"Ecommerce-Website-with-React-Redux with JSON server to Fetch Mock Data",
            "Image":Ecom
        },
        {
            "Name":"TODO List",
            "Disc":"Hi",
            "Image":Todo
        }
    ],
    "Angular":[
        {
            "Name":"User Management Webpage",
            "Disc":"Hi",
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
