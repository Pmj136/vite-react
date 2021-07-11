import React from "react";
import ReactRouterControl from "react-router-control"
import routes from "@/router/routes";

function AppRouter() {
    return <ReactRouterControl routes={routes}/>
}

export default AppRouter;