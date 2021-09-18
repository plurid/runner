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

    for (const value of runnerExtensions) {
        const runnerExtension = value + extension;
        const runnerRegExp = new RegExp(`${runnerExtension}$`);
        if (value.match(runnerRegExp)) {
            return true;
        }
    }

    return false;
}
// #endregion module
