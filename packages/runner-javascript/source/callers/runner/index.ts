// #region module
export type Check = (
    testValue: any,
    expectedValue: any,
    relationship: string,
) => void;

export type CheckTuple = [any, any, string, boolean];


const runner = async <P = any, R = any>(
    prepare: () => Promise<P>,
    run: (preparation: P, check: Check) => Promise<R>,
    postpare: (preparation: P, result: R) => Promise<void>,
) => {
    try {
        let checks: CheckTuple[] = [];

        const check: Check = (
            testValue: any,
            expectedValue: any,
            relationship: string = '==',
        ) => {
            let passed = false;

            switch (relationship) {
                case '==':
                    if (testValue === expectedValue) {
                        passed = true;
                    }
                    break;
                case '<':
                    if (testValue < expectedValue) {
                        passed = true;
                    }
                    break;
                case '<=':
                    if (testValue <= expectedValue) {
                        passed = true;
                    }
                    break;
                case '>':
                    if (testValue > expectedValue) {
                        passed = true;
                    }
                    break;
                case '>=':
                    if (testValue >= expectedValue) {
                        passed = true;
                    }
                    break;
                default:
                    break;
            }

            checks.push([
                testValue,
                expectedValue,
                relationship,
                passed,
            ]);
        }


        const preparation = await prepare();
        const result = await run(preparation, check);
        await postpare(preparation, result);


        for (const check of checks) {
            const [
                testValue,
                expectedValue,
                relationship,
                passed,
            ] = check;

            if (passed) {
                console.log(`test passed :: ${testValue.toString()} ${relationship} ${expectedValue.toString()}`)
            } else {
                console.log(`test failed :: ${testValue.toString()} not ${relationship} ${expectedValue.toString()}`)
            }
        }
    } catch (error) {
        console.log('runner error', error);
        return;
    }
}
// #endregion module



// #region exports
export default runner;
// #endregion exports
