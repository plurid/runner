// #region imports
    // #region external
    import {
        Runner,
        RunnerPrepare,
        RunnerRun,
        Check,
        CheckRelationship,
        CheckRecord,
    } from '~data/interfaces';

    import {
        SILENT_PASS,

        MAGENTA_BACKGROUND,
        RED_BACKGROUND,
    } from '~data/constants';
    // #endregion external
// #endregion imports



// #region module
const runner: Runner = async (
    prepareOrRun,
    run,
    postpare,
    options,
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


        let defined = false;
        if (!run && !postpare) {
            defined = true;
        } else if (run && postpare) {
            defined = true;
        }
        if (!defined) {
            console.log(`runner requires one or three functions, 'run' or 'prepare, run, postpare'`);
            return;
        }


        if (!run && !postpare) {
            const run = prepareOrRun as RunnerRun<any, any>;
            await run(check);
        } else if (run && postpare) {
            const prepare = prepareOrRun as RunnerPrepare<any>;
            const preparation = await prepare(check);
            const result = await run(check, preparation);
            await postpare(check, preparation, result);
        }


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

            const colors = passed
                ? MAGENTA_BACKGROUND
                : RED_BACKGROUND;

            const runString = `run ${passedString}`;
            const logString = `:: ${testValueString} ${notString}${relationship} ${expectedValueString}${messageString}`;

            console.log(colors, runString, logString);
        }
    } catch (error) {
        console.log('run error', error);
        return;
    }
}
// #endregion module



// #region exports
export default runner;
// #endregion exports
