import { createBrowserRouter } from "react-router-dom";
import Home from "../Home Pages/Home/Home";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    }
])

export default router;