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
    message: string,
    testValue: any,
    expectedValue: any,
    relationship: CheckRelationship,
) => void;

export type CheckRecord = {
    testValue: any;
    expectedValue: any;
    relationship: CheckRelationship;
    passed: boolean;
    message: string | undefined;
    mode: string;
}

export type CheckRelationship =
    | '==' | '<' | '<=' | '>' | '>=';

export interface RunnerOptions {
    silentPass?: boolean;
}


export type RunnerPrepare<P> = (check: Check) => Promise<P>;
export type RunnerRun<P, R> = (check: Check, preparation?: P) => Promise<R>;
export type RunnerPostPare<P, R> = (check: Check, preparation: P, result: R) => Promise<void>;

export type Runner = <P = any, R = any>(
    prepareOrRun: RunnerPrepare<P> | RunnerRun<P, R>,
    run?: RunnerRun<P, R>,
    postpare?: RunnerPostPare<P, R>,
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
