//My basic idea of this function is that it takes in two functions,
// one to describe how to deal with an object or an array,
// the other for inital state.
//Then it returns a function that takes in an array/object and uses its arguments as function to deal with them.

//arguments: setter and initializer
let dependencies = {
    arrayAggregator: {
        value: require("arrayAggregator"),
        args: {
            array: {
                type: "Array",
                description: "The array to be iterated over."
            },
            setter: {
                type: "Function",
                description: "Initial state to be iterated upon"
            },
            iteratee: {
                type: "Function",
                description: "The iteratees to transform keys"
            },
            accumulator: {
                type: "Object",
                description: "How the "
            }
        },
        returnValue: {
            type: "Function",
            description: "Returns an Accumulator"
        }
    },
    baseAggregator: {
        value: require("baseAggregator"),
        args: {
            collection: {
                type: "Array or Object",
                description: "The collection to iterate over"
            },
            setter: {
                type: "Function",
                description: "The function to set accumulator values"
            },
            iteratee: {
                type: "Function",
                description: "The data structure being iterated over that transform keys"
            },
            accumulator: {
                type: "Object",
                description: "The initial aggregated object"
            }
        },
        returnValue: {
            type: "Function",
            description: "Returns an accumulator"
        }
    },
    baseIteratee: {
        value: require("baseIteratee"),
        args: {
            star: {
                type: "Any",
                description: "Takes in some params to turn into an iteratee"
            }
        }
    },
    isArray: {
        value: require("isArray"),
        args: {
            value: {
                type: "Any",
                description: "Take a javascript value."
            }
        },
        returnValue: {
            type: "Boolean",
            description: "Tells if the value passed to 'isArray' is of type 'Array'"
        }
    }
};

const args = {
    
}