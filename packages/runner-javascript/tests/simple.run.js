const runner = require('../distribution').default;


runner(
    (check) => {
        check('simple', true, true);
    },
);
