import { makeResolvable } from "../src/components/resolvablePromise";

describe("Resolvable promise", () => {
    it("Resolves with the given value", (done) => {
        expect.hasAssertions();

        const { promise, resolve } = makeResolvable<boolean>(() => {
            // Do nothing
        });
        resolve(true);
        promise.then((val) => {
            expect(val).toBe(true);
            done();
        });
    });
});
