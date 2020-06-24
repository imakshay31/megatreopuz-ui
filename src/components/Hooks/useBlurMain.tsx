import { useContext } from "react";
import React from "react";

const initialContext = (blurMain: boolean) => {
    void blurMain;
};
const loadingContext = React.createContext(initialContext);

export const LoadingScreenContextProvider = loadingContext.Provider;
export function useBlurMain(): typeof initialContext {
    return useContext(loadingContext);
}
