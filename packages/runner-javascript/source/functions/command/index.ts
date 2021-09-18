// #region imports
    // #region libraries
    import {
        execSync,
    } from 'child_process';
    // #endregion libraries
// #endregion imports



// #region module
const command = async (
    cmd: string,
    args: string[],
) => {
    try {
        const commandText = [
            cmd,
            ...args,
        ].join(' ');
        const result = execSync(commandText).toString();

        try {
            return JSON.parse(result);
        } catch (error) {
            return result;
        }
    } catch (error) {
        console.log('curl error', error);
        return;
    }
}
// #endregion module



// #region exports
export default command;
// #endregion exports
