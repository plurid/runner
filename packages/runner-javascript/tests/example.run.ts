import runner, {
    RunnerPrepare,
    RunnerPostpare,
    RunnerRun,
} from '../distribution';



const prepare: RunnerPrepare = async (
    check,
) => {
    check('works', true, true);
}

const run: RunnerRun = async (
    check,
    prepared,
) => {
    check('works', true, true);
}

const postpare: RunnerPostpare = async (
    check,
    prepared,
    runned,
) => {
    check('works', true, true);
}


runner(
    prepare,
    run,
    postpare,
);
