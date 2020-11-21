// #region imports
    // #region libraries
    import {
        promises as fs,
    } from 'fs';

    import path from 'path';
    // #endregion libraries
// #endregion imports



// #region module
async function* getFiles(
    dir: string,
): AsyncGenerator<string> {
    const dirents = await fs.readdir(dir, { withFileTypes: true });

    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* getFiles(res);
        } else {
            yield res;
        }
    }
}
// #endregion module



// #region exports
export {
    getFiles,
};
// #endregion exports
