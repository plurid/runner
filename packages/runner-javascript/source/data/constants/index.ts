// #region module
// values in microseconds
const timeBenchmarkValues = {
    instant: parseInt(process.env.RUNNER_TIME_BENCHMARK_INSTANT || '') ?? 0,
    fast: parseInt(process.env.RUNNER_TIME_BENCHMARK_FAST || '') ?? 15_000,
    network: parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK || '') ?? 500_000,
};

// value in microseconds
const timeTolerance =  parseInt(process.env.RUNNER_TIME_BENCHMARK_TOLERANCE || '') ?? 5_000;
// #endregion module



// #region exports
export {
    timeBenchmarkValues,
    timeTolerance,
}
// #endregion exports
