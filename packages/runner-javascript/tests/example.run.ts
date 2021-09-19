import runner from '../distribution';



const prepare = async (
    check,
) => {
    check('works', true, true);
}

const run = async (
    check,
    prepared,
) => {
    check('works', true, true);
}

const postpare = async (
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
