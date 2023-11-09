import { paths } from "./constants"

export const findSelectedIndex = (url: string): number => {
    return paths.findIndex((path) => {
        return path.endpoint === url
    })
}