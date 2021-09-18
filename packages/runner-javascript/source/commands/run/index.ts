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

        for (const runner of runners) {
            try {
                require(runner);
            } catch (error) {
                console.log(`\n\tcould not evaluate run in '${runner}'\n`, error);
                continue;
            }
        }

        return;
    } catch (error) {
        console.log(`\n\tcould not read runs in '${runPath}'\n`, error);
        return;
    }
}
// #endregion module



// #region exports
export default run;
// #endregion exports
