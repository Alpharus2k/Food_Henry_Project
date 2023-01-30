import {getFullDetail} from "../../redux/actions/index"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const NO_DATA_MSG = "Sin especificar";

const RecipeFull = () => {
    const { id } = useParams();
    const dispatch = useDispatch();                                       // Dispachador de Redux
    useEffect(() => { dispatch(getFullDetail(id)) },[dispatch, id])        // Precarga los elementos a mostrar
    const recipeFull = useSelector((state) => state.recipeFull);          // Hook de traer data del estado global
    console.log(recipeFull);
    return(
        <>
            <div>
                <img src={recipeFull.url} alt={recipeFull.name} />
                <h2>{recipeFull.name}</h2>
                <h5>Tipo de Plato</h5>
                <h5><b>Diet: </b>{recipeFull.diets ? recipeFull.diets : NO_DATA_MSG}</h5>
                <h5>Healty Score: {recipeFull.score ? recipeFull.score : NO_DATA_MSG}</h5>
                <h5>Description: </h5>
                <h6>    {recipeFull.description ? recipeFull.description : NO_DATA_MSG}</h6>
                <h5>Step by Step: </h5>
                {recipeFull.stepByStep ? recipeFull.stepByStep : NO_DATA_MSG }
            </div>
        </>
    )
}
export default RecipeFull
