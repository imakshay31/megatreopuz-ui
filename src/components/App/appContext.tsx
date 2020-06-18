import { createContext } from "react";

export interface AppContext {
    pageLoading: boolean;
}

export const appContext = createContext<AppContext>({
    pageLoading: false,
});

export const { Provider: AppContextProvider } = appContext;
