fun2 = () => {
    setTimeout(() => {
        console.log("Function 2 is starting")
    }, 3000)
}
fun1 = () => {
    console.log("Function 1 is starting")
    fun2()
    console.log("Functions is ending")
}
fun1()


//     setTimeout(myFunction,3000)
// function myFunction() {
// console.log("Hello admin---")
// }