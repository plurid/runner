// #region imports
    // #region libraries
    import path from 'path';
    import fs from 'fs';
    // #endregion libraries


    // #region external
    import {
        isRunnerFile,
    } from '~logics/collect';

    import {
        getFiles,
    } from '~utilities/general';
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
        const runnersStats = fs.statSync(this.runnersPath);
        if (runnersStats.isFile()) {
            if (isRunnerFile(this.runnersPath)) {
                return [
                    this.runnersPath,
                ];
            }

            return [];
        }

        const runnerFiles: string[] = [];
        for await (const file of getFiles(this.runnersPath)) {
            if (isRunnerFile(file)) {
                runnerFiles.push(file);
            }
        }

        return runnerFiles;
    }
}
// #endregion module



// #region exports
export default Collector;
// #endregion exports
