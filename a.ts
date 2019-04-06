const b = {
    a: 7,
};
const a = (p: object) => {
    switch (p) {
        case {}: {
            return 1;
        }
        default:
            return 2;
    }
};
a(b);
