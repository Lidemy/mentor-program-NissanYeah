function arrstar(x) {

    function starCreat(x) {
        var star = ""
        for (let i = 0; i < x; i++) {
            star = star + "*";

        }
        return star;
    }

    var arr = []
    for (let i = 1; i <= x; i++) {
        arr.push(starCreat(i));
    }
    return arr

}



// function arrstar(n) {
//     var arr = []
//     if (n == 0) {
//         return arr = []
//     } else

//         for (let a = 1; a < n; a++) {
//             arr[a] = starCreat(a)
//         }
//     return arr 
// } 帶除錯


module.exports = arrstar