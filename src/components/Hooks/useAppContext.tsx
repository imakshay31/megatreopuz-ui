import { useContext } from "react";
import { AppContext, appContext } from "../App/appContext";

export default function useAppContext(): AppContext {
    return useContext(appContext);
}