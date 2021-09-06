import store from "./../../Store/store"

let moneyPerCapitaArr = store.map(function (elem){
    let arr = []
    arr[0] = {v: elem[0], f: elem[2]}
    arr[1] = Math.round(elem[4]*1000000/elem[3])
    return arr
})

moneyPerCapitaArr.unshift(['Country', "ВВП на душу населения"])

export default moneyPerCapitaArr