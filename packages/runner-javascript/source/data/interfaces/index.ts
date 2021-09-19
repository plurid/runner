// #region module
export type Runner = <P = any, R = any>(
    prepareOrRun: RunnerPrepare<P> | RunnerRun<P, R>,
    run?: RunnerRun<P, R>,
    postpare?: RunnerPostPare<P, R>,
    options?: RunnerOptions,
) => Promise<void>;

export type RunnerPrepare<P> = (check: Check) => Promise<P>;
export type RunnerRun<P, R> = (check: Check, preparation?: P) => Promise<R>;
export type RunnerPostPare<P, R> = (check: Check, preparation: P, result: R) => Promise<void>;
export interface RunnerOptions {
    silentPass?: boolean;
}


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


export type RunnerTime =
    | 'instant'
    | 'fast'
    | 'network'
    | 'network-slow'
    | 'network-fast';
// #endregion module
