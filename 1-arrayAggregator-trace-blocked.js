//My basic idea of this function is that it takes in two functions,
// one to describe how to deal with an object or an array,
// the other for inital state.
//Then it returns a function that takes in an array/object and uses its arguments as function to deal with them.

//arguments: setter and initializer
const accumulator = ["a", "g"]
const array = [1, "d", 4, "s", 4, 2, "f", 4]
const iteratee = value => {
    if (typeof value === "string") {
        return value + " key"
    }
}
const setter = (accumulator, val, mink = iteratee(val), ray) => {
    if (typeof val === "string") {
        accumulator.push({[`${mink}`]: val})
    }
}


const args = {
    array: {
        value: array,
        type: "array",
        desc: "Array that you want to work on"
    },
    setter: {
        value: setter,
        type: "function",
        desc: "The logic of how the array is morphed"
    },
    iteratee: {
        value: iteratee,
        type: "function",
        desc: "Operates on the keys."
    },
    accumulator: {
        value: accumulator,
        type: "array",
        desc: "An inital array that the return can propagate from"
    }
}

const expected = {
    value: ['a', 'g', { 'd key': 'd' }, { 's key': 's' }, { 'f key': 'f' }],
    type: "array"
}

{
    let retVal
    let index = 0
    let length = args.array.value.length

    while (index < length){
        let val = args.array.value[index]
        args.setter.value(
            args.accumulator.value,
            val,
            args.iteratee.value,
            args.accumulator.value
        )
        index = index + 1
    }

}
/** learned aboubt the difference btw ++i and i++ 
 * 
*/