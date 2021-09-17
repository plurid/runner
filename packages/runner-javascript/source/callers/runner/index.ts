// #region imports
    // #region external
    import {
        RunnerOptions,
        Check,
        CheckTuple,
    } from '~data/interfaces';

    import {
        SILENT_PASS,
    } from '~data/constants';
    // #endregion external
// #endregion imports



// #region module
const runner = async <P = any, R = any>(
    prepare: () => Promise<P>,
    run: (preparation: P, check: Check) => Promise<R>,
    postpare: (preparation: P, result: R) => Promise<void>,
    options?: RunnerOptions,
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

            if (
                (options?.silentPass || SILENT_PASS)
                && passed
            ) {
                return;
            }

            const passedString = passed ? 'passed' : 'failed';
            const notString = passed ? '' : 'not ';
            const testValueString = testValue.toString();
            const expectedValueString = expectedValue.toString();
            const logString = `test ${passedString} :: ${testValueString} ${notString}${relationship} ${expectedValueString}`;

            console.log(logString);
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
