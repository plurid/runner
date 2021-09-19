// #region imports
    // #region libraries
    import path from 'path';
    // #endregion libraries
// #endregion imports



// #region module
export const VERSION = process.env.RUNNER_VERSION || '0';

export const esrunPath = path.join(
    __dirname,
    '../node_modules/.bin/esrun',
);


export const fileExtensions = [
    '.ts',
    '.js',
];

export const runnerExtensions = [
    '.runner',
    '.run',
    '.test',
];


export const SILENT_PASS = process.env.RUNNER_SILENT_PASS === 'true';

export const MAGENTA_BACKGROUND = '\x1b[45m%s\x1b[0m';
export const RED_BACKGROUND = '\x1b[41m%s\x1b[0m';



// values in microseconds
export const timeBenchmarkValues = {
    'instant': parseInt(process.env.RUNNER_TIME_BENCHMARK_INSTANT || '') ?? 0,
    'fast': parseInt(process.env.RUNNER_TIME_BENCHMARK_FAST || '') ?? 15_000,
    'network': parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK || '') ?? 500_000,
    'network-slow': parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK_SLOW || '') ?? 1500_000,
    'network-fast': parseInt(process.env.RUNNER_TIME_BENCHMARK_NETWORK_FAST || '') ?? 300_000,
};

// value in microseconds
export const timeTolerance =  parseInt(process.env.RUNNER_TIME_BENCHMARK_TOLERANCE || '') ?? 5_000;
// #endregion module
