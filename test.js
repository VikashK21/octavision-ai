// salesman 
// mansales

function anagram(str1, str2) {
    let letterL = str2.length;
    let strLis = str2.split('')
    for (let letters of str1) {
        if (strLis.includes(letters)) {
            letterL --;
            let inc = strLis.indexOf(letters)
            strLis.splice(inc, 1)
        }
    }
    if (letterL ===0) {
        return true;
    }
    else {
        return false;
    }
}

let check = anagram('sales', 'sales')
console.log(check);