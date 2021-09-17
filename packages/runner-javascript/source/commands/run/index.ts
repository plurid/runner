// #region imports
    // #region external
    import Collector from '~objects/Collector';
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

        const runners = await collector.collect();
        console.log(runners);

        return;
    } catch (error) {
        console.log(`Could not find any runs in ${runPath}`);
        return;
    }
}
// #endregion module



// #region exports
export default run;
// #endregion exports
