// function dateNow() {
//     let date = new Date()
//     let thisdate = date.toLocaleDateString()

//     return thisdate
// }

module.exports = {
    dateNow() {
        let date = new Date()
        let thisdate = date.toLocaleDateString()

        return thisdate
    }
}