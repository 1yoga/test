import store from "./../../Store/store"


let moneyArr = store.map(function (elem){
    let arr = []
    arr[0] = {v: elem[0], f: elem[2]}
    arr[1] = elem[4]*1000000
    return arr
})

moneyArr.unshift(['Country', "ВВП"])

export default moneyArr