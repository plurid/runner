// #region imports
    // #region libraries
    import path from 'path';
    // #endregion libraries
// #endregion imports



// #region module
const isRunnerFile = (
    value: string,
) => {
    const extension = path.extname(value);
    const runnerExtensioon = '.runner' + extension;
    const re = new RegExp(`${runnerExtensioon}$`);

    if (!value.match(re)) {
        return false;
    }

    return true;
}
// #endregion module



// #region exports
export {
    isRunnerFile,
};
// #endregion exports
