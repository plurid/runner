// #region module
// values in microseconds
export const timeBenchmarkValues = {
    instant: parseInt(process.env.RUNNER_TIME_BENCHMARK_INSTANT || '') ?? 0,
    fast: parseInt(process.env.RUNNER_TIME_BENCHMARK_FAST || '') ?? 15_000,
    network: parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK || '') ?? 500_000,
    'network-slow': parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK_SLOW || '') ?? 1500_000,
    'network-fast': parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK_FAST || '') ?? 300_000,
};

// value in microseconds
export const timeTolerance =  parseInt(process.env.RUNNER_TIME_BENCHMARK_TOLERANCE || '') ?? 5_000;


export const SILENT_PASS = process.env.RUNNER_SILENT_PASS === 'true';



export const MAGENTA_BACKGROUND = '\x1b[45m%s\x1b[0m';
export const RED_BACKGROUND = '\x1b[41m%s\x1b[0m';
// #endregion module
