function kali (value1,value2) {
    if(typeof value1 !== 'number' && typeof value2 !== 'number'){
        throw new Error ('Invalid Parameter. ')
    }
    
    let val1 = value1 
    let val2 = value2 || value1
    return val1 * val2
}

module.exports = kali