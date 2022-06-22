import React from "react";
import Main from "../pages/Main";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    MAIN='/'
}

export const privateRoutes: IRoute[] = [
 {path: RouteNames.MAIN, exact: true, component: Main}
]