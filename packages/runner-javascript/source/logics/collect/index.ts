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
    const runExtensioon = '.run' + extension;
    const testExtension = '.test' + extension;

    const runnerRegExp = new RegExp(`${runnerExtensioon}$`);
    const runRegExp = new RegExp(`${runExtensioon}$`);
    const testRegExp = new RegExp(`${testExtension}$`);

    if (value.match(runnerRegExp)) {
        return true;
    }

    if (value.match(runRegExp)) {
        return true;
    }

    if (value.match(testRegExp)) {
        return true;
    }

    return false;
}
// #endregion module



// #region exports
export {
    isRunnerFile,
};
// #endregion exports
