function curseOfJS() {
    return 'Data type of NaN is: ' + typeof NaN + '\n' +
        "'1' + 2 + 3" + ' = ' + '1' + 2 + 3 +
        "\n0.5 + 0.1 == 0.6: " + (0.5 + 0.1 == 0.6) + ' ,but' +
        "\n0.1 + 0.2 == 0.3: " + (0.1 + 0.2 == 0.3) + '\n' +
        "Math.max() > Math.min(): " + (Math.max() > Math.min()) + '\n' +
        "Math.min() = " + Math.min() + '\n' +
        "Math.max() = " + Math.max() + '\n' +
        "[] + [] = " + '"' + ([] + []) + '"' + '\n' +
        "[] + {} = " + '"' + ([] + {}) + '"' + '\n' +
        "true + true + true === 3: " + (true + true + true === 3) + '\n' +
        "true - true" + ' = ' + (true - true) + '\n' +
        "true == 1 : " + (true == 1) + " ,but" + '\n' +
        "true === 1 : " + (true === 1) + '\n' +
        "(! + [] + [] + ![]).length : " + (! +[] + [] + ![]).length + '\n' +
        "9 + '1' : " + (9 + '1') + '\n' +
        "9 - '1' : " + (9 - '1') + '\n' +
        "[] == 0" + ' = ' + ([] == 0) + '\n' +
        "9999999999999999 + 1 = " + 9999999999999999 + 1 + " ,but" + '\n' +
        "(9999999999999999 + 1) = " + (9999999999999999 + 1);
}

console.log(curseOfJS());
// Output: Data type of NaN is: number
// because NaN is a number type in JavaScript but it is not a number in mathematics. 
// NaN is a result of an operation that cannot produce a normal result.

// '1' + 2 + 3 = 123
// because JavaScript is a loosely typed language, so it will convert the number to a string and concatenate it.
// If the first operand is a string, the rest of the operands will be converted to a string and concatenated.

// 0.5 + 0.1 == 0.6: true ,but
// 0.1 + 0.2 == 0.3: false
// because 0.1 + 0.2 = 0.30000000000000004
// The reason is that the computer stores numbers in binary.
// 0.1 is not exactly 1/10, its real value is 3602879701896397 / 2 ^ 55.
// 0.2 is not exactly 1/5, its real value is 7205759403792794 / 2 ^ 56.
// 0.5 is exactly 1/2, so it can be expressed exactly in binary.

// Math.min() = Infinity
// because Math.min() = Infinity, reason is that Math.min() is a function that returns the smallest number.
// If there is no parameter, it will return Infinity.

// Math.max() = -Infinity
// because Math.max() = -Infinity ,reason is that Math.max() is a function that returns the largest number.
// If there is no parameter, it will return -Infinity.

// Math.max() > Math.min(): true
// because Math.max() = -Infinity and Math.min() = Infinity
// -Infinity > Infinity is false, but Infinity > -Infinity is true.

// [] + [] = ""
// because [] + [] = "" ,reason is that [] + [] is a string concatenation operation.
// If the operand is an array, it will be converted to a string and then concatenated.

// [] + {} = [object Object]
// because [] + {} = [object Object] ,reason is that {} is an object, so it will be converted to a string and then concatenated.
// The string representation of an object is "[object Object]".
// If the operand is an object, it will be converted to a string and then concatenated.
// If the operand is an array, it will be converted to a string and then concatenated.

// true + true + true === 3: true
// because true + true + true === 3 is true ,reason is that true is converted to 1.
// so, true + true + true = 1 + 1 + 1 = 3

// true - true = 0
// because true - true = 0 ,reason is that true is converted to 1.
// so, true - true = 1 - 1 = 0

// true == 1 : true ,but
// true === 1 : false
// because true == 1 is true ,reason is that true is converted to 1.
// so, true == 1 is 1 == 1, it is true.

// (! + [] + [] + ![]).length : 9
// because (! + [] + [] + ![]).length = 9 ,reason is that (! + [] + [] + ![]) is a string.
// (! + [] + [] + ![]) = (! + []) + [] + (![])
// (! + []) = (! + "") = (!"") = true
// (! + [] + [] + ![]) = true + [] + true = "true" + [] + "true" = "true" + "" + "true" = "true" + "true" = "truetrue"
// "truetrue".length = 9

// 9 + '1' : 91
// because 9 + '1' = 91 ,reason is that 9 is converted to a string and then concatenated.
// If the first operand is a string, the rest of the operands will be converted to a string and concatenated.
// If the first operand is a number, the rest of the operands will be converted to a number and added.

// 9 - '1' : 8
// because 9 - '1' = 8 ,reason is that 9 is converted to a number and then subtracted.
// If the first operand is a number, the rest of the operands will be converted to a number and added.
// If the first operand is a string, the rest of the operands will be converted to a string and concatenated.

// [] == 0 = true
// because [] == 0 = true ,reason is that [] is converted to 0.
// If the first operand is an array, it will be converted to a string and then converted to a number.
// If the first operand is a string, the rest of the operands will be converted to a string and concatenated.
// If the first operand is a number, the rest of the operands will be converted to a number and added.

// 9999999999999999 + 1 = 10000000000000000 ,but
// (9999999999999999 + 1) = 10000000000000000
// because 9999999999999999 + 1 = 10000000000000000 ,reason is that 9999999999999999 is converted to 10000000000000000.
// The reason is that the computer stores numbers in binary.
// 9999999999999999 is not exactly 9999999999999999, its real value is 10000000000000000.
// 9999999999999999 + 1 = 10000000000000000
// (9999999999999999 + 1) = 10000000000000000
// 10000000000000000 is exactly 10000000000000000, so it can be expressed exactly in binary.
