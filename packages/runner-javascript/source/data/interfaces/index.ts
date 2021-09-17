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
type RunnerTime = 'instant' | 'fast' | 'network' | 'network-slow' | 'network-fast';



export type Check = (
    testValue: any,
    expectedValue: any,
    relationship: string,
) => void;

export type CheckTuple = [any, any, string, boolean];

export interface RunnerOptions {
    silentPass?: boolean;
}
// #endregion module



// #region exports
export {
    RunnerConfiguration,
    RunnerComparison,
    RunnerTime,
};
// #endregion exports
