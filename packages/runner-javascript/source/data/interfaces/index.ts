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
    relationship: CheckRelationship,
    message: string | undefined,
) => void;

export type CheckRecord = {
    testValue: any;
    expectedValue: any;
    relationship: CheckRelationship;
    passed: boolean;
    message: string | undefined;
}

export type CheckRelationship =
    | '==' | '<' | '<=' | '>' | '>=';

export interface RunnerOptions {
    silentPass?: boolean;
}


export type Runner = <P = any, R = any>(
    prepare: (check: Check) => Promise<P>,
    run: (preparation: P, check: Check) => Promise<R>,
    postpare: (preparation: P, result: R, check: Check) => Promise<void>,
    options?: RunnerOptions,
) => Promise<void>;
// #endregion module



// #region exports
export {
    RunnerConfiguration,
    RunnerComparison,
    RunnerTime,
};
// #endregion exports
