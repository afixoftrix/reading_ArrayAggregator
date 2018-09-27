const fns = require("./test-functions")
module.exports = [
    {
        input: [
            [1, "d", 4, "s", 4, 2, "f", 4],
            fns.setter.pusher,
            fns.iteratee.stringRemover,
            ["a", "g"]
        ],
        expected: [
            "a",
            "g",
            { "d key": "d" },
            { "s key": "s" },
            { "f key": "f" }
        ],
        message: "It worked!"
    }
];
/**
 * 
 * ,
    {s
        input: [
            "array [array]",
            "setter [function]",
            "iteratee [function]",
            "accumulator"
        ],
        expected: "   abc",
        message: "'abc', 6, null -> '   abc'"
    },
    {
        input: [
            "array [array]",
            "setter [function]",
            "iteratee [function]",
            "accumulator"
        ],
        expected: "   abc",
        message: "'abc', 6, null -> '   abc'"
    },
    {
        input: [
            "array [array]",
            "setter [function]",
            "iteratee [function]",
            "accumulator"
        ],
        expected: "   abc",
        message: "'abc', 6, null -> '   abc'"
    },
    {
        input: [
            "array [array]",
            "setter [function]",
            "iteratee [function]",
            "accumulator"
        ],
        expected: "   abc",
        message: "'abc', 6, null -> '   abc'"
    }
 */