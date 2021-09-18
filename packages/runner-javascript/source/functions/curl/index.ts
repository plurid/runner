// #region imports
    // #region external
    import command from '../command';
    // #endregion external
// #endregion imports



// #region module
const curl = async (
    args: string[],
) => {
    return command(
        'curl',
        args,
    );
}
// #endregion module



// #region exports
export default curl;
// #endregion exports
