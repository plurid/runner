// #region imports
    // #region external
    import {
        RunnerOptions,
        Check,
        CheckRelationship,
        CheckRecord,
    } from '~data/interfaces';

    import {
        SILENT_PASS,
    } from '~data/constants';
    // #endregion external
// #endregion imports



// #region module
const runner = async <P = any, R = any>(
    prepare: (check: Check) => Promise<P>,
    run: (preparation: P, check: Check) => Promise<R>,
    postpare: (preparation: P, result: R, check: Check) => Promise<void>,
    options?: RunnerOptions,
) => {
    try {
        let checks: CheckRecord[] = [];

        const check: Check = (
            testValue: any,
            expectedValue: any,
            relationship: CheckRelationship = '==',
            message: string = '',
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

            checks.push({
                testValue,
                expectedValue,
                relationship,
                passed,
                message,
            });
        }


        const preparation = await prepare(check);
        const result = await run(preparation, check);
        await postpare(preparation, result, check);


        for (const check of checks) {
            const {
                testValue,
                expectedValue,
                relationship,
                passed,
                message,
            } = check;

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
            const messageString = message
                ? ` :: ${message.toString()}`
                : '';

            const logString = `test ${passedString} :: ${testValueString} ${notString}${relationship} ${expectedValueString}${messageString}`;

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
