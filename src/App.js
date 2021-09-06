import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {Calculator} from "./Components/Calculator/Calculator";
import {Weather} from "./Components/Weather/Weather";
import {Geography} from "./Components/Geography/Geography";


let App = () => {
    return (
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
            <div>
                <Switch>
                    <Route path='/calculator' component={Calculator}/>
                    <Route path='/weather' component={Weather}/>
                    <Route path='/geography' component={Geography}/>
                </Switch>
            </div>
        </div>
    )
}
export default App;
