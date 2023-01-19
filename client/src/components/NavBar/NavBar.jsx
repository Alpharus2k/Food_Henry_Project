import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className={style.mainContainer}>
            <span className={style.logo}></span>
            <div className={style.centralLinks}>
                <Link to="/home">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    )
}
export default NavBar;