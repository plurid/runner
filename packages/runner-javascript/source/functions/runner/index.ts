// #region imports
    // #region external
    import {
        RunnerConfiguration,
    } from '~data/interfaces';

    import expect from '~functions/expect';
    import timeBenchmark from '~functions/timeBenchmark';

    import {
        time,
    } from '~utilities/time';
    // #endregion external
// #endregion imports



// #region module
const runner = async <R>(
    run: () => R | Promise<R>,
    configuration: RunnerConfiguration<R>,
) => {
    const start = time();
    const result = await run();
    const end = time();

    if (!configuration.timeless) {
        timeBenchmark(
            start,
            end,
            configuration?.time,
            configuration?.name,
        );
    }

    if (configuration.expect) {
        configuration.expect(result);
    } else {
        expect(
            // TODO
            // extract the value from the result based on the configuration target
            // loque.extract(
            //     configuration.target,
            //     result,
            // ),
            result,
            configuration.expected,
            configuration?.comparison,
            configuration?.message,
        );
    }
}
// #endregion module



// #region exports
export default runner;
// #endregion exports
