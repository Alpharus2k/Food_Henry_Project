import style from './Recipe-Form.module.css';
import React from "react";
import { NO_NAME, NO_DESC, NO_SCORE, NO_DIET, NO_STEPS } from "../Errors/Error-Recipe-Form"


export function validate({name, description, score, stepByStep, diets }){
  // eslint-disable-next-line
  const regexName = /^[a-zA-Z íáúóéñÑ]*$/;
  const MAX_SCORE = 100;
  const MIN_SCORE = 1;
  const errors = {};
  if( !regexName.test(name) ) errors.name = NO_NAME;
  if( !description.length ) errors.description = NO_DESC;
  if( isNaN(Number(score)) || (score < MIN_SCORE  || score > MAX_SCORE )) errors.score = NO_SCORE;
  if( !stepByStep ) errors.stepByStep = NO_STEPS;
  if( diets.length < 1 ) errors.diets = NO_DIET;

  return errors;
}

export default function RecipeForm(){
  // State de inputs
  const [ inputs, setInputs ] = React.useState({
    name: "",
    description: "",
    score: 0,
    stepByStep: "",
    diets: []
  })
  // State Errors
  const [ errors, setErrors ] = React.useState({
    name: "",
    description: "",
    score: 0,
    stepByStep: "",
    diets: []
  })
  // Changes Handler
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setInputs({...inputs, [property] : value});
    setErrors( validate({...inputs, [property] : value}) );
  }

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!Object.keys(errors).length){
      // Test
      alert("Datos completos");
      setErrors({
        name: "",
        description: "",
        score: 1,
        stepByStep: "",
        diets: []
      });
      setInputs({
        name: "",
        description: "",
        score: 1,
        stepByStep: "",
        diets: []
      })
    }else {
      alert("Debes corregir los errores")
    }
  }
  return(
    <>
    
    <div className={style.mainContainer}>
      <h1>Crear Receta</h1>
    <form onSubmit={handleSubmit} className={style.formContainer}>
      {/* Name Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="name" >Nombre</label>
        <input  name="name"
                type="text"
                placeholder='El nombre de la receta'
                value={inputs.name}
                onChange={handleChange}
                className={errors.name && "warning"}
        />
        {errors.name && <p className='danger'>{errors.name}</p>}
      </div>

      {/* Description Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="description" >Descripción</label>
        <textarea name="description"
                  type="text"
                  placeholder='Descripción...'
                  rows="5"
                  value={inputs.description}
                  onChange={handleChange}
                  className={errors.name && "warning"}
        />
        {errors.description && <p className='danger'>{errors.description}</p>}
      </div>

      {/* Score Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="score">Que tan saludable es</label>
        <input  name="score"
                type="number"
                placeholder= "Que tan saludable es de 1 a 100"
                value={inputs.score}
                onChange={handleChange}
                className={ errors.score && "warning"}
        />
        {inputs.score && <p className='danger'>{errors.score}</p>}
      </div>

      {/* Step By Step Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="stepByStep">Paso a paso</label>
        <textarea name="stepByStep"
                  type="text"
                  placeholder='Paso a aso...'
                  rows="5"
                  value={inputs.stepByStep}
                  onChange={handleChange}
                  className={errors.name && "warning"}
        />
        {errors.stepByStep !== "1" && <p className='danger'>{errors.stepByStep}</p>}
      </div>
      {/* Step By Step Input */}
      <div className={style.pairContainer}>
        <label>Tipo de dieta</label>
        {/* Armarlo con un FOR */}
        {/* <div>
          <input type="checkbox" id="scales" name="scales"/>
          <label for="scales">Scales</label>
        </div> */}
      </div>
      {/* AGREGAR EL BOTON!!! */}
      {/* <button></button> */}
    </form>
    </div>
  </>
  )
}

/*
import React from "react"
class Form2 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <h1>FORM</h1>
        <p>{this.props.name}</p>
      </>
    )
  }
}
exports default Form2
*/
/*
import React, { useState } from "react";
import { connect } from "react-redux";

import Caja from "../../assets/caja.png";
import "./form.css";

function Form() {
  const [product, setProduct] = useState({ name: "", price: "", id: "" });

  function handleInputChange(e) {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  return (
    <div className="formBg">
      <div className="inputBox">
        <label>Nombre: </label>
        <input name="name" onChange={handleInputChange} value={product.name} />
      </div>
      <div className="inputBox">
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          onChange={handleInputChange}
          value={product.price}
        />
      </div>
      <button className="formBtn">¡ADD!</button>
      <img src={Caja} alt="" className="logo" />
    </div>
  );
}

export function mapDispatchToProps() {}

export default connect(null, mapDispatchToProps)(Form);
*/