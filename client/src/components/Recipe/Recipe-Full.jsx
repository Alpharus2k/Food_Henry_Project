import React from "react";
import {getFullDetail} from "../../redux/actions/index"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Recipe-Full.module.css"
import dietsConverter from "../Utils/Diets-Converter"
const NO_DATA_MSG = "Sin especificar";

const RecipeFull = () => {
    const { id } = useParams();
    const dispatch = useDispatch();                                       // Dispachador de Redux
    useEffect(() => { dispatch(getFullDetail(id)) },[dispatch, id])        // Precarga los elementos a mostrar
    const recipeFull = useSelector((state) => state.recipeFull);          // Hook de traer data del estado global
    
    const steps = recipeFull.stepByStep ? stepByStepConverter(recipeFull.stepByStep) : NO_DATA_MSG;
    const diets = dietsConverter(recipeFull)
    return(
        <div className={style.detailContainer}>
            <h1 className={style.title}>{recipeFull.name}</h1>
            <div className={style.detailContainer}>
                <img className={style.image} src={recipeFull.url} alt={recipeFull.name} />
                <div className={style.rowContainer}>
                    <div className={style.rowRigthElem}>
                        <h5><b>Diet: </b></h5>
                        <p>{diets}</p>
                    </div>
                    <div className={style.rowLeftElem}>
                        <h5><b>Dish Types: </b></h5>
                        <p>{recipeFull.dishTypes ? recipeFull.dishTypes : NO_DATA_MSG}</p>
                    </div>
                    <div className={style.rowLeftElem}>
                        <h5><b>Healty Score: </b></h5>
                        <p>{recipeFull.score ? recipeFull.score : NO_DATA_MSG}</p>
                    </div>
                </div>

                <div className={style.descContainer}>
                    <h5>Description: </h5>
                    <p>{recipeFull.description ? recipeFull.description : NO_DATA_MSG}</p>
                </div>
                <div className={style.descContainer}>
                    <h5>Step by Step: </h5>
                    <div id="stepByStep">
                        {steps}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RecipeFull;

const stepByStepConverter = (text) => {
    const arr = text.replaceAll(/<[^>]*>/g, "").split(".")
    return arr.map( (elem, index) => {
        return (
            <p key={index}>{elem}</p>
        )
    });
}
