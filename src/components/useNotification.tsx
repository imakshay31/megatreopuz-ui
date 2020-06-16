import { useSnackbar, OptionsObject, SnackbarMessage } from "notistack";
import { useRef, ReactText } from "react";
import React from "react";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

type SnackBarHookValue = ReturnType<typeof useSnackbar>;

export interface NotificationHook {
    show: (...args: Parameters<SnackBarHookValue["enqueueSnackbar"]>) => void;
    hide: () => void;
    hideAll: () => void;
}

export default function useNotification(): NotificationHook {
    const key = useRef<ReactText>("");
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    return {
        show: (message: SnackbarMessage, options?: OptionsObject) => {
            key.current = enqueueSnackbar(message, {
                variant: "info",
                autoHideDuration: 5000,
                anchorOrigin: { horizontal: "center", vertical: "bottom" },
                ...options,
                action: (key) => (
                    <IconButton onClick={() => closeSnackbar(key)}>
                        {/* Hardcoded color */}
                        <CloseIcon
                            fontSize="small"
                            style={{ color: "white" }}
                        />
                    </IconButton>
                ),
            });
        },
        hide: () => closeSnackbar(key.current),
        hideAll: () => closeSnackbar(),
    };
}
