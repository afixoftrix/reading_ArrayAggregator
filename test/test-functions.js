var fns = {
    setter: {
        //builds ups the accumulator
        nothing: null,
        undefined: undefined,
        nullFunction: () => null,
        emptyObject: () => {},
        emptyArray: () => [],
        accumulateNone: accumulator => accumulator,
        randomFunc: (accumulator, value, iteratedVal, array) => {
            var stringRay = toString(array);
            return (accumulator * value) / iteratedVal - stringRay;
        },
        pusher: (accumulator, value, iteratedVal, array) => {
            if (typeof value === "string") {
                accumulator.push({ [`${iteratedVal}`]: val })
            }
            return accumulator
        },
        modulo: (accumulator, value, iteratedVal, array) => {
            var sum = array.reduce((total, num) => {
                return total + num
            })
            if ((sum%val) === 0){
                accumulator.push[(value + iteratedVal)]
            }
        },
        keyPlay: (accumulator, value, iteratedVal, array) => {
            var keys = []
            function mapper(objToMap){
                objToMap.map(val => {
                    if (Object.keys(val) > 0) {
                        keys.push[Object.keys(val)]
                    }
                })
            }
            accumulator.push[mapper(array) + mapper(value)]
        }
    },
    iteratee: {
        //This value works on the array. It's more useful if array contains objects
        nothing: null,
        undefined: undefined,
        nullFunction: () => null,
        emptyObject: () => {},
        emptyArray: () => [],
        stringRemover: value => {
            if (typeof value === "string") {
                return value + " key";
            }
        },
        numberRemover: value => {
            if (typeof value === "number") {
                return value;
            }
        },
        multiplier: value => {
            return value * 2;
        },
        keyCheckLength: value => {
            if (value.keys > 2) {
                return value;
            }
        },
        keyMutator: value => {
            if (!!value.keys) {
                return "not an object";
            }
        }
    }
};

module.exports = fns