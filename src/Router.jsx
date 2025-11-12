import { createBrowserRouter, useLocation } from "react-router";
import App from "./App";
import Movie from "./Components/Pages/Movie";
import Main from "./Components/Main/Main";
import Home from "./Components/Pages/Home";
import Movies from "./Components/Pages/Movies";
import Sign from "./Components/Pages/Sign";
import Login from "./Components/Pages/Login";
import About from "./Components/Pages/About";
import UserProvider from "./Context/UserContext";
import Profile from "./Components/Pages/Profile";
import Tv from "./Components/Main/Tv";
import TvList from "./Components/Pages/TvList";
import PeopleList from "./Components/Pages/PeopleList";
import Person from "./Components/Pages/Person";



export  const router = createBrowserRouter([
    

    {
        
        element: (
            <UserProvider>
                <App/>
            </UserProvider>
        ),
        children:[
            {
                path:"/",
                element:<Home />
            }
            ,
            {
                path:"/movies",
                element:<Movies/>
            }
            ,
            {
                path:"/movie/:id",
                element:<Movie/>
            }
            ,
            {
                path:"/sign",
                element:<Sign/>
            }
            ,
            {
                path:"/login",
                element:<Login/>
            }
            ,
            {
                path:"/about",
                element:<About/>
            }
            ,
            {
                path:"/tv",
                element:<TvList/>
            }
            ,
            {
                path:"/tv/:id",
                element:<Tv />
            }
            ,
            {
                path:"/people",
                element: <PeopleList />
            }
            ,
            {
                path:"/person/:id",
                element: <Person />
            }
            ,
            {
                path:"/farsimovie",
                element:<h1 className="bg-slate-100 my-10 text-4xl">farsimovie</h1>
            }
            ,
            {
                path:"/profile",
                element:<Profile />
            }
        ]
    },
]);

function Router(){

    return <App/>
}
export default Router