import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Pages/layout";
import { MainPage } from "./Pages/MainPage";
import { SearchPage } from "./Pages/SearchPage";
import { GalleryPage } from "./Pages/GalleryPage";
import { fetchBreeds } from "./ServerApi";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<MainPage/>
            },
            {
                path: "/search",
                element: <SearchPage/>
            },
            {
                path: "/gallery",
                element: <GalleryPage/>,
                loader: fetchBreeds,
            }
        ] 
    },
    {

    }
])