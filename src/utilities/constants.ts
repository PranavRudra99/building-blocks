import Demo from "../components/demo";
import Login from "../components/login";
import { Paths } from "./types";
import { IconLogin, IconAnalyze } from '@tabler/icons-react';

export const paths: Paths[] = [
    {
        endpoint: '/demo',
        component: Demo,
        label: 'Demo',
        icon: IconAnalyze,
        header: 'Test Header',
        footer: 'Test Footer'
    },
    {
        endpoint: '/login',
        component: Login,
        label: 'Login',
        icon: IconLogin,
        header: 'Sign in',
        footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]