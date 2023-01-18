import { Link } from "react-router-dom"
import style from "./Landing.module.css"

const Landing = ()=>{
  return(
    <div className={style.mainContainer}>
      <div className={style.centralContainer}>
        <p>¿No sabes que cocinar hoy?</p>
        <p>¡Te simplificamos la vida!</p>
        <h1>Henry's Recipies</h1>
        <Link to={"/home"}><button className={style.shadow__btn}>HOME</button></Link>
      </div>
    </div>
  )
}

export default Landing;
