const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 is Recorded');
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 2 recorded')
})
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
}).catch((messages) => {
    console.log("Failed", messages)
})