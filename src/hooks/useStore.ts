import {useContext} from "react";
import {AppContext} from "../contexts/appContext/appContext";

export const useAppContext = (): any => {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    const {dispatch, appState: {addTransaction = {}, history=[], result={}}} = useContext(AppContext);

    return {
        dispatch,
        addTransaction,
        history,
        result,
    };
};
