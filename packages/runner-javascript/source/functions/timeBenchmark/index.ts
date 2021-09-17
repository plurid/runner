// #region imports
    // #region external
    import {
        timeBenchmarkValues,
        timeTolerance,
    } from '~data/constants';

    import {
        RunnerTime,
    } from '~data/interfaces';
    // #endregion external
// #endregion imports



// #region module
const timeBenchmark = (
    start: number,
    end: number,
    kind: RunnerTime = 'instant',
    id?: string,
) => {
    const duration = end - start;
    const benchmark = timeBenchmarkValues[kind] ?? timeBenchmarkValues.instant;
    const maximum = benchmark + timeTolerance;

    if (duration > maximum) {
        console.log(`\n\tExecution time of '${id}' exceeded: (${duration} ms instead of ${maximum} ms).`);
    }
}
// #endregion module



// #region exports
export default timeBenchmark;
// #endregion exports
