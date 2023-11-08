import Demo from "../components/demo";
import Login from "../components/login";
import { Paths } from "./types";

export const paths: Paths[] = [
    {
        path: '/demo',
        component: Demo,
        label: 'Demo'
    },
    {
        path: '/login',
        component: Login,
        label: 'Login'
    }
]