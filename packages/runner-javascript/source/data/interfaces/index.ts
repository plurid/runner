// #region module
interface RunnerConfiguration {
    expected: any;
    comparison?: RunnerComparison;
    time: RunnerTime;
    name?: string;
}

type RunnerComparison = ':' | '<' | '<=' | '>' | '>=';
type RunnerTime = 'instant' | 'fast' | 'network';
// #endregion module



// #region exports
export {
    RunnerConfiguration,
    RunnerComparison,
    RunnerTime,
};
// #endregion exports
