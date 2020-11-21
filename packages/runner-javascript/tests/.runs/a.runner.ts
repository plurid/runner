import adder from '../adder';


runner(
    () => {
        const r = adder(5, 7);
        return r;
    },
    {
        expected: 12,
    }
);
