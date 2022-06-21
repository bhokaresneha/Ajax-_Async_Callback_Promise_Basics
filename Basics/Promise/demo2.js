const userLeft = false
const userWatchCatMeme = true
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            resolve({
                name: "User Left",

                message: ":("

            })
        }
        else if (userWatchCatMeme) {
            resolve({
                name: "User Watching Cat Meme",

                message: "Web Development Simplified < Cat"

            })
        }
        else {
            reject("Thumbs Up and Suscribe")
        }
    })
}
watchTutorialPromise().then((message) => {
    console.log("Success", message)
}).catch((message) => {
    console.log("Error", message)
})