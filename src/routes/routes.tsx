import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/books/:id',
                element:<BookDetails/>
            },
            {
                path:'/book/edit/:id',
                element:<EditBook/>
            },
            {
                path:'/add-book',
                element:<AddBook/>
            }
        ]
    },
    
    {
        path:'*',
        element:<NotFound/>
    }
])

export default routes;