import { SuspenseConfig } from "react";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function formatGraphQLError(err: any): string {
    return err.source?.errors[0]?.message ?? "Unknown error";
}

export const suspenseConfig: SuspenseConfig = {
    timeoutMs: 5000,
};
