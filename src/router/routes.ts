import {RouteType} from "react-router-control";
import Home from "@/pages/home";

const routes: Array<RouteType> = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
    }
]

export default routes
