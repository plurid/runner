import runner, {
    RunnerPrepare,
    RunnerPostpare,
    RunnerRun,
} from '../distribution';



interface Prepared {
    data: boolean;
}
interface Runned {
    data: boolean;
}


const prepare: RunnerPrepare<Prepared> = async (
    check,
) => {
    const data = Math.random() < 0.5;

    check('example · works', data, true);

    return {
        data,
    };
}

const run: RunnerRun<Prepared, Runned> = async (
    check,
    prepared,
) => {
    check('example · works', prepared.data, true);

    return {
        data: false,
    };
}

const postpare: RunnerPostpare<Prepared, Runned> = async (
    check,
    prepared,
    runned,
) => {
    check('example · works', prepared.data, true);
    const passed = check('example · works', runned.data, true);

    if (passed) {
        // passed action
    } else {
        // not passed action
    }
}


runner(
    prepare,
    run,
    postpare,
);
