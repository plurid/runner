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

        const check = (mode: string): Check => (
            message: string = '',
            testValue: any,
            expectedValue: any,
            relationship: CheckRelationship = '==',
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
                mode,
            });
        }


        if (!run) {
            const run = prepareOrRun as RunnerRun<any, any>;

            await run(check('run'));
        } else {
            const prepare = prepareOrRun as RunnerPrepare<any>;

            const preparation = await prepare(check('prepare'));
            const result = await run(check('run'), preparation);
            if (postpare) {
                await postpare(check('postpare'), preparation, result);
            }
        }


        for (const check of checks) {
            const {
                testValue,
                expectedValue,
                relationship,
                passed,
                message,
                mode,
            } = check;

            if (
                (options?.silentPass || SILENT_PASS)
                && passed
            ) {
                return;
            }

            const passedString = passed ? 'passed' : 'failed';
            const notString = passed ? '' : 'not ';
            const testValueString = typeof testValue === 'string'
                ? `'${testValue}'`
                : testValue.toString();
            const expectedValueString = typeof expectedValue === 'string'
                ? `'${expectedValue}'`
                : expectedValue.toString();
            const messageString = message
                ? `:: ${message.toString()} `
                : '';

            const colors = passed
                ? MAGENTA_BACKGROUND
                : RED_BACKGROUND;
            const modeString = `${mode} ${passedString}`;
            const logString = `${messageString}:: ${testValueString} ${notString}${relationship} ${expectedValueString}`;

            console.log(colors, modeString, logString);
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
