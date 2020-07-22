import { useContext } from "react";
import React from "react";

interface AppContext {
    blockingPopup: boolean;
    routeLoading: boolean;
}

const appContext = React.createContext<AppContext>({
    blockingPopup: false,
    routeLoading: false,
});

export const AppContextProvider = appContext.Provider;
export function useAppContext(): AppContext {
    return useContext(appContext);
}
