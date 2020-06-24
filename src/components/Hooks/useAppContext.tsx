import { useContext } from "react";
import React from "react";

interface AppContext {
    blockingLoading: boolean;
    routeLoading: boolean;
}

const appContext = React.createContext<AppContext>({
    blockingLoading: false,
    routeLoading: false,
});

export const AppContextProvider = appContext.Provider;
export function useAppContext(): AppContext {
    return useContext(appContext);
}
