const runner = require('../distribution').default;


runner(
    (check) => {
        check('equals', 1, 1, '==');
        check('less than', 1, 2, '<');
        check('less than or equal', 1, 2, '<=');
        check('more than', 2, 1, '>');
        check('more than or equal', 2, 1, '>=');
    },
);
