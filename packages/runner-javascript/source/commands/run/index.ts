// #region imports
    // #region external
    import Collector from '~objects/Collector';
    // #endregion external
// #endregion imports



// #region module
const collectAndRun = async (
    runPath?: string,
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


const run = async (
    runPaths: string[],
) => {
    if (runPaths.length === 0) {
        collectAndRun();
        return;
    }

    for (const runPath of runPaths) {
        collectAndRun(runPath);
    }
}
// #endregion module



// #region exports
export default run;
// #endregion exports
