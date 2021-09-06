import store from "./../../Store/store"


let populationArr = store.map(function (elem){
    let arr = []
    arr[0] = {v: elem[0], f: elem[2]}
    arr[1] = elem[3]
    return arr
})



populationArr.unshift(['Country', "Население"])

export default populationArr