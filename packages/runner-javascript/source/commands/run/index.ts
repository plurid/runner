// #region imports
    // #region libraries
    import {
        exec,
    } from 'child_process';
    // #endregion libraries


    // #region external
    import {
        ESRUN_PATH,
        EXTENSION_TYPESCRIPT,
    } from '~data/constants';

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
                if (runner.endsWith(EXTENSION_TYPESCRIPT)) {
                    const esrun = exec(
                        `${ESRUN_PATH} ${runner}`,
                    );
                    esrun.stdout?.on('data', (data) => {
                        console.log(data);
                    });
                    esrun.stderr?.on('data', (data) => {
                        console.log(data);
                    });
                } else {
                    require(
                        runner,
                    );
                }
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
