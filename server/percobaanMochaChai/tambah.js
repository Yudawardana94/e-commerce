
function tambah (value1,value2) {
    
    let val1 = value1;
    let val2 = value2 || value1
    return val1 + val2
}
module.exports = tambah