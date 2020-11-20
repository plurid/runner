// #region module
interface RunnerConfiguration<E> {
    expected: E;
    comparison?: RunnerComparison;
    time?: RunnerTime;
    timeless?: boolean;
    name?: string;
    message?: string;

    expect?: (result: E) => void;
}

type RunnerComparison = ':' | '<' | '<:' | '>' | '>:';
type RunnerTime = 'instant' | 'fast' | 'network';
// #endregion module



// #region exports
export {
    RunnerConfiguration,
    RunnerComparison,
    RunnerTime,
};
// #endregion exports
