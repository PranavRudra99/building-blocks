import { noop } from "@babel/types";
import { ContextProviderInterface, GlobalContextInterface } from "../utilities/types";
import { createContext, useState } from 'react';

export const GlobalContext = createContext<GlobalContextInterface>({
    selectedPage: -1,
    setSelectedPage: noop
})

const GlobalContextProvider = ({children}: ContextProviderInterface): JSX.Element => {
    const [selectedPage, setSelectedPage] = useState<number>(1)
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