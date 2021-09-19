const runner = require('../distribution').default;


runner(
    (check) => {
        check('simple · works', true, true);
    },
);
