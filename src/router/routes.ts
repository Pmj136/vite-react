import {lazy} from "react";
import {RouteType} from "react-router-control";
import NotFound from "@/router/NotFound";

const Welcome = lazy(() => import("@/pages/welcome/welcome")),
    Home = lazy(() => import("@/pages/home/home"))
const routes: Array<RouteType> = [
    {
        path: "/",
        component: Welcome
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "*",
        component: NotFound
    }
]

export default routes
