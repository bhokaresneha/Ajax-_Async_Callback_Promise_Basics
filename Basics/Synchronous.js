fun2 = () => {
    console.log("Function 2 is starting")
}
fun1 = () => {
    console.log("Function 1 is starting")
    fun2()
    console.log("Functions is ending")
}
fun1()