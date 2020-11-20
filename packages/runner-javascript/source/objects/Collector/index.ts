// #region imports
    // #region libraries
    import {
        promises as fs,
    } from 'fs';

    import path from 'path';
    // #endregion libraries
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
        const isDirectory = (await fs.lstat(this.runnersPath)).isDirectory();

        const runnersDirectory = isDirectory
            ? this.runnersPath
            : path.dirname(this.runnersPath);

    }
}
// #endregion module



// #region exports
export default Collector;
// #endregion exports
