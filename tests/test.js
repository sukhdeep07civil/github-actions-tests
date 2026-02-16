import assert from "assert";

function add(a,b){
    return a+b
}

assert.strictEqual(add(2,3),5)

console.log("All tests passed")