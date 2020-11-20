// #region module
const timeBenchmarkValues = {
    instant: parseInt(process.env.RUNNER_TIME_BENCHMARK_INSTANT || '') ?? 0,
    fast: parseInt(process.env.RUNNER_TIME_BENCHMARK_FAST || '') ?? 10,
    network: parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK || '') ?? 500,
};

const timeTolerance =  parseInt(process.env.RUNNER_TIME_BENCHMARK_TOLERANCE || '') ?? 5;
// #endregion module



// #region exports
export {
    timeBenchmarkValues,
    timeTolerance,
}
// #endregion exports
