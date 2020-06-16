export async function processWithLoading(
    promise: Promise<void>,
    setLoading: (v: boolean) => void
): Promise<void> {
    setLoading(true);
    await promise;
    setLoading(false);
}
