const runner = require('../distribution').default;


runner(
    (check) => {
        check('numbers · equals', 1, 1, '==');
        check('numbers · less than', 1, 2, '<');
        check('numbers · less than or equal', 1, 2, '<=');
        check('numbers · more than', 2, 1, '>');
        check('numbers · more than or equal', 2, 1, '>=');
    },
);
