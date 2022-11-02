import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/Home'
import ContactForm from "../Pages/ContactForm/ContactForm";
import SinglePage from "../Pages/Singlepage/SinglePage";
const PhonebookRouters=createBrowserRouter(
    [{
        path:"/",
        element:<Home/>
    },
        {

            path:"Add-Contact",
            element:<ContactForm/>
        },
        {
            path:"Edit-Contact/:Id",
            element:<ContactForm/>
        },
        {
            path:"/ShowContact/:Id",
            element:<SinglePage/>
        },
]
);
export default PhonebookRouters;