import runner, {
    RunnerPrepare,
    RunnerPostpare,
    RunnerRun,
} from '../distribution';



interface Prepared {
    prepareData: boolean;
}
interface Runned {
    runData: boolean;
}


const prepare: RunnerPrepare<Prepared> = async (
    check,
) => {
    check('example · works', true, true);

    return {
        prepareData: true
    };
}

const run: RunnerRun<Prepared, Runned> = async (
    check,
    prepared,
) => {
    check('example · works', true, true);

    return {
        runData: false,
    };
}

const postpare: RunnerPostpare<Prepared, Runned> = async (
    check,
    prepared,
    runned,
) => {
    check('example · works', true, true);
}


runner(
    prepare,
    run,
    postpare,
);
