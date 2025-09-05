import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
        index: true,
        element: <h1>HomePage</h1> ,
    },{
        path: "/catalog",
        element:<h2>Catalog</h2>,
    },{
        path:"/product/:id",
        element: <h2>product</h2>,
    },{
        path:"checkout",
        element: <h2>CheckOut</h2>,
    }],
  },
]);
