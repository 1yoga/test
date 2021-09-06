import populationArr from "../Geography/functions/populations";
import store from "./store";
import moneyArr from "../Geography/functions/money";
import moneyPerCapitaArr from "../Geography/functions/moneyPerCapita";

export let state = {
    data: [['Country', "Население"]],
    minValue: 50000,
    maxValue: 400000000
}

export let stateP = {
    data: populationArr,
    minValue: 50000,
    maxValue: 400000000,
    list: store.map((elem, item) =>
        <div>{item+1} . {elem[2] + " - " + elem[3]} человек </div>
    )
}

export let stateM = {
    data: moneyArr,
    minValue: 1000000000,
    maxValue: 5000000000000,
    list: store.map((elem, item) =>
        <div>{item+1} . {elem[2] + " - " + elem[4]} млн $ </div>
    )
}

export let stateMP = {
    data: moneyPerCapitaArr,
    minValue: 500,
    maxValue: 60000,
    list: store.map((elem,item) =>
        <div>{item+1} . {elem[2] + " - " + Math.round(elem[4]*1000000/elem[3])}$ </div>
    )
}
