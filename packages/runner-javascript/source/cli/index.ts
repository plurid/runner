// #region imports
    // #region libraries
    import {
        program,
        Command,
    } from 'commander';
    // #endregion libraries


    // #region external
    import {
        run,
    } from '~commands/index';
    // #endregion external
// #endregion imports



// #region module
const main = async (
    program: Command,
) => {
    program
        .storeOptionsAsProperties(true);

    program
        .name('runner')
        .usage('[path]')
        .version('0.0.0-0', '-v, --version')
        .action(async (
            _,
            options,
        ) => {
            await run(
                options.args[0],
            );
        });


    program.parseAsync(
        process.argv,
    );
}


const cli = () => {
    main(program);
}
// #endregion module



// #region exports
export default cli;
// #endregion exports
