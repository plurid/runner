// #region module
export type Runner = <P = any, R = any>(
    prepareOrRun: RunnerPrepare<P> | RunnerRun<P, R>,
    run?: RunnerRun<P, R>,
    postpare?: RunnerPostpare<P, R>,
    options?: RunnerOptions,
) => Promise<void>;

export type RunnerPrepare<P = any> = (check: Check) => Promise<P>;
export type RunnerRun<P = any, R = any> = (check: Check, prepared?: P) => Promise<R>;
export type RunnerPostpare<P = any, R = any> = (check: Check, prepared: P, runned: R) => Promise<void>;
export interface RunnerOptions {
    silentPass?: boolean;
}


export type Check = (
    message: string,
    testValue: any,
    expectedValue: any,
    relationship?: CheckRelationship,
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
