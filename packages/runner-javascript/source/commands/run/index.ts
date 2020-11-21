// #region imports
    // #region external
    import Collector from '#objects/Collector';
    // #endregion external
// #endregion imports



// #region module
const run = async (
    runPath: string | undefined,
) => {
    try {
        const collector = new Collector(
            runPath || process.cwd(),
        );

        await collector.collect();

        return;
    } catch (error) {
        return;
    }
}
// #endregion module



// #region exports
export default run;
// #endregion exports
