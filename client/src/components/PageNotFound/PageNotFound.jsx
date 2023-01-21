import { Link } from "react-router-dom"
import style from "./PageNotFound.module.css"

function PageNotFound() {
    return (
        <div className={style.mainContainer}>
            <div className={style.centralContainer}>
                <h3>Henry's Recipies</h3>
                <h1>¡Pagina no encontrada!</h1>
                <Link to="/home"><button className={style.shadow__btn}>HOME {'>'}</button></Link>
            </div>
        </div>
    )
}
export default PageNotFound;

