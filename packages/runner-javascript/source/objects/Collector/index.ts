// #region imports
    // #region libraries
    import path from 'path';
    // #endregion libraries


    // #region external
    import {
        isRunnerFile,
    } from '#logics/collect';

    import {
        getFiles,
    } from '#utilities/general';
    // #endregion external
// #endregion imports



// #region module
class Collector {
    private runnersPath: string;


    constructor(
        runnersPath: string,
    ) {
        const pathValue = path.isAbsolute(runnersPath)
            ? runnersPath
            : path.join(
                process.cwd(),
                runnersPath,
            );

        this.runnersPath = pathValue;
    }


    public async collect() {
        const runnerFiles: string[] = [];

        for await (const file of getFiles(this.runnersPath)) {
            if (isRunnerFile(file)) {
                runnerFiles.push(file);
            }
        }

        for (const runnerFile of runnerFiles) {
            console.log(runnerFile);
        }
    }
}
// #endregion module



// #region exports
export default Collector;
// #endregion exports
