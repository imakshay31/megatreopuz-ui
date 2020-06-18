/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function formatGraphQLError(err: any): string {
    return err.source?.errors[0]?.message ?? "Unknown error";
}
