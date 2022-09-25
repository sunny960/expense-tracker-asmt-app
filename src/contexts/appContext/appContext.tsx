import React, {createContext, FunctionComponent, useReducer} from "react";
import {appReducer} from "./appReducer";

// @ts-ignore
export const AppContext = createContext({});

interface IAppContextProviderProps {
    children: any;
}

// @ts-ignore
const AppContextProvider: FunctionComponent<IAppContextProviderProps> = ({children}) => {
    const initState = {
        loaderText: "Please wait...!!",
        addTransaction: {
            amount: '',
            text: '',
            error: '',
            isBtnEnabled: false
        },
        history : [],
        result: {
            income: '0',
            expense: '0',
            finalResult: '0'
        }
    };
    const [appState, dispatch] = useReducer(appReducer, initState);
    return (
        <AppContext.Provider value={{appState, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

// @ts-ignore
export default AppContextProvider;
