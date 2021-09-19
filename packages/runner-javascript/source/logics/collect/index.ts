// #region imports
    // #region libraries
    import path from 'path';
    // #endregion libraries


    // #region external
    import {
        runnerExtensions,
    } from '~data/constants';
    // #endregion external
// #endregion imports



// #region module
export const isRunnerFile = (
    value: string,
) => {
    const extension = path.extname(value);

    for (const runnerExtension of runnerExtensions) {
        const combinedExtension = runnerExtension + extension;
        const runnerRegExp = new RegExp(`${combinedExtension}$`);
        if (value.match(runnerRegExp)) {
            return true;
        }
    }

    return false;
}
// #endregion module
