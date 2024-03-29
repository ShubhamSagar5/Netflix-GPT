import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useDispatch } from "react-redux";

const Body = () => {
    
    const dispatch = useDispatch()
    
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])
    




    return(
        <div className="">
            <RouterProvider router={appRouter}/>
        </div>
    )
}


export default Body