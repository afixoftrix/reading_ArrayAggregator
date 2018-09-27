const arrayAggregator = require("../0-arrayAggregator");
const cases = require("./test-cases");
const assert = require("tressa")

assert.title('arrayAggregator');


for (let cond of cases) {
    console.log(...cond.input)
    console.log(arrayAggregator(...cond.input))
    assert(arrayAggregator(...cond.input) === cond.expected, cond.message);
};
