const runner = require('../distribution').default;


runner(
    (check) => {
        check('strings', 'asd', 'asd');
        check('strings · fails', 'asdf', 'asd', '==');
    },
);
