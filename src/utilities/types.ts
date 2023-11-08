export interface Paths {
    path: string,
    component: () => JSX.Element,
    label: string,
    icon: (props: any) => JSX.Element
}