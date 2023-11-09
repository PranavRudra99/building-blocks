import { noop } from "@babel/types";
import { ContextProviderInterface, GlobalContextInterface } from "../utilities/types";
import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { findSelectedIndex } from "../utilities/utils";

export const GlobalContext = createContext<GlobalContextInterface>({
    selectedPage: -1,
    setSelectedPage: noop
})

const GlobalContextProvider = ({children}: ContextProviderInterface): JSX.Element => {
    const location = useLocation()
    const route = location.pathname
    const [selectedPage, setSelectedPage] = useState<number>(findSelectedIndex(route))
    return (
        <GlobalContext.Provider
            value={{
                selectedPage,
                setSelectedPage
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider