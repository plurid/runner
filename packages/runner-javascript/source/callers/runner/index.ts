// #region module
const runner = async <P = any, R = any>(
    prepare: () => Promise<P>,
    run: (preparation: P) => Promise<R>,
    postpare: (preparation: P, result: R) => Promise<void>,
) => {
    try {
        const preparation = await prepare();
        const result = await run(preparation);
        await postpare(preparation, result);
    } catch (error) {
        console.log('runner error', error);
        return;
    }
}
// #endregion module



// #region exports
export default runner;
// #endregion exports
