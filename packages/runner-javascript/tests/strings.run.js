const runner = require('../distribution').default;


runner(
    (check) => {
        check('strings · works', 'asd', 'asd');
        check('strings · fails', 'asdf', 'asd', '==');
    },
);
