/*Programming Appraoch Basic Call Backs*/

function func1() {
    console.log("Hello")
}
function mainFunction(callback) {
    console.log("My Name is Shahazad Shaikh")
    callback()
}
mainFunction(func1)