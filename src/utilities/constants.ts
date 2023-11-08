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
        header: 'Test Page'
    },
    {
        endpoint: '/login',
        component: Login,
        label: 'Login',
        icon: IconLogin,
        header: 'Sign in'
    }
]