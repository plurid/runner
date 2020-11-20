// #region imports
    // #region external
    import {
        RunnerConfiguration,
    } from '#data/interfaces';

    import expect from '#functions/expect';
    import timeBenchmark from '#functions/timeBenchmark';
    // #endregion external
// #endregion imports



// #region module
const runner = async (
    configuration: RunnerConfiguration,
    fn: any,
) => {
    const start = Date.now();
    const result = await fn();
    const end = Date.now();

    expect(
        // TODO
        // extract the value from the result based on the configuration target
        // loque.extract(
        //     configuration.target,
        //     result,
        // ),
        result,
        configuration.expected,
        configuration.comparison,
    );

    timeBenchmark(
        start,
        end,
        configuration.time,
        configuration.name,
    );
}
// #endregion module



// #region exports
export default runner;
// #endregion exports
