/* Addition Program Using Callbacks*/
function printResult(res) {
    console.log("Result is", res)
}
function myCalculator(a, b, callbacks) {
    let c = a + b
    callbacks(c)
}
myCalculator(50, 20, printResult)