// #region imports
    // #region external
    import {
        RunnerComparison,
    } from '#data/interfaces';
    // #endregion external
// #endregion imports



// #region module
const expect = <V>(
    value: V,
    expected: V,
    comparison: RunnerComparison = ':',
    message?: string,
) => {
    const messageText = message || `\n\tExpected not met '${value}' ${comparison} '${expected}'`;

    switch (comparison) {
        case ':':
            if (value !== expected) {
                throw messageText;
            }
            break;
        case '<':
            if (value >= expected) {
                throw messageText;
            }
            break;
        case '<:':
            if (value > expected) {
                throw messageText;
            }
            break;
        case '>':
            if (value <= expected) {
                throw messageText;
            }
            break;
        case '>:':
            if (value < expected) {
                throw messageText;
            }
            break;
    }

    return;
}
// #endregion module



// #region exports
export default expect;
// #endregion exports
