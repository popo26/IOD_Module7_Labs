import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="NavBar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/bitcoin">Bitcoin</NavLink>
                </li>
            </ul>
        </nav>
    )
}