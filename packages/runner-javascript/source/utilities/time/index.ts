// #region module
const time = () => {
    // value in microseconds
    const hrTime = process.hrtime();

    return hrTime[0] * 1_000_000 + hrTime[1] / 1_000;
}
// #endregion module



// #region exports
export {
    time,
};
// #endregion exports
