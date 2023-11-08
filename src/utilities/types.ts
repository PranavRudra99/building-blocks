import { Dispatch } from "react"

export interface Paths {
    endpoint: string,
    component: () => JSX.Element,
    label: string,
    header: string
    icon: (props: any) => JSX.Element
}

export interface ContextProviderInterface {
    children: React.ReactNode
}

export interface GlobalContextInterface {
    selectedPage: number
    setSelectedPage: Dispatch<number>
}