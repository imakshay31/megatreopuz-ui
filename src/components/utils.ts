import { SuspenseConfig } from "react";

export function formatGraphQLError(err: Error): string {
    const strArr = err.message.split("\n");
    if (strArr.length < 3) return "Unknown error";

    // First error
    const [, errMsg] = strArr[2].split(". ");
    if (!errMsg) return "Unknown error";

    return errMsg;
}

export const suspenseConfig: SuspenseConfig = {
    timeoutMs: 5000,
};
