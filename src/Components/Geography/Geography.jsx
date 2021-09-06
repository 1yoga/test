import {Map} from "./Map";
import {useState} from "react";
import {Table} from "./Table";
import {state, stateM, stateMP, stateP} from "../Store/state";


export const Geography = () => {
    const [newState, setState] = useState(state)
    return <div>
        <div>
            <button onClick={()=>setState(stateP)}>Население</button>
            <button onClick={()=>setState(stateM)}>ВВП</button>
            <button onClick={()=>setState(stateMP)}>ВВП на душу населения</button>
        </div>
        <Map data={newState.data} minValue={newState.minValue} maxValue={newState.maxValue}/>
        <Table list={newState.list}/>

    </div>
}



