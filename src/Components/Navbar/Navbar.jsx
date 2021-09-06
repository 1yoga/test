import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (<nav className={s.navbar}>
            <div className={s.item}>
                <div>
                    <NavLink to='/calculator'>Калькулятор</NavLink>
                </div>
                <div>
                    <NavLink to='/weather'>Погода</NavLink>
                </div>
                <div>
                    <NavLink to='/geography'>Ебучая География</NavLink>
                </div>
            </div>
        </nav>
    )
}