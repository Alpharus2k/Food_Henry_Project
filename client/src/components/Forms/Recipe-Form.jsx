import style from './Recipe-Form.module.css';
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NO_NAME, NO_DESC, NO_SCORE, NO_DIET, NO_STEPS, NO_URL } from "../Errors/Error-Recipe-Form"
import { getDiets } from "../../redux/actions/index";

export function validate({name, description, score, stepByStep, diets, url }){
  // eslint-disable-next-line
  const regexName = /^[a-zA-Z íáúóéñÑ]*$/;
  // eslint-disable-next-line
  const regexUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  const MAX_SCORE = 100;
  const MIN_SCORE = 1;
  const errors = {};
  if( !regexName.test(name) ) errors.name = NO_NAME;
  if( !description.length ) errors.description = NO_DESC;
  if( url && !regexUrl.test(url) ) errors.name = NO_URL;
  if( isNaN(Number(score)) || (score < MIN_SCORE  || score > MAX_SCORE )) errors.score = NO_SCORE;
  if( !stepByStep ) errors.stepByStep = NO_STEPS;
  if( diets.length < 1 ) errors.diets = NO_DIET;

  return errors;
}

export function buildDiets (diets, handleChangeDiets) {
  const retorno = diets.map( diet => {
    return (
        <div key={diet.id}>
          <input  type="checkbox"
                  value={diet.id}
                  name="diets"
                  onChange={handleChangeDiets}
                  />
          <label htmlFor={diet.name}>{diet.name}</label>
        </div>
    )
  })
  return retorno;
}
export default function RecipeForm(){
  const dispatch = useDispatch();                             // Dispachador de Redux
  useEffect(() => { dispatch(getDiets()) },[dispatch])        // Precarga los elementos a mostrar
  const diets = useSelector((state) => state.diets);          // Hook de traer data del estado global

  const [ inputs, setInputs ] = React.useState({
    name: "",
    description: "",
    score: 0,
    stepByStep: "",
    diets: [],
    url: "",
  })
  // State Errors
  const [ errors, setErrors ] = React.useState({
    name: "",
    description: "",
    score: 0,
    stepByStep: "",
    diets: "",
    url: "",
  })
  // Changes Handler
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name] : event.target.value})
    setErrors( validate( {...inputs, [event.target.name] : event.target.value} ))
  }
  const handleChangeDiets = (event) => {
    let auxDiets = [...inputs.diets]
    auxDiets = auxDiets.includes(event.target.value) ?
          auxDiets.filter( elem => elem !== event.target.value) :
          [...inputs.diets, event.target.value]

    setInputs({ ...inputs, diets: auxDiets})
    setErrors( validate( {...inputs, [event.target.name] : auxDiets} ))
  }
 
  const dietsCheckBox = buildDiets(diets, handleChangeDiets);

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    if(!Object.keys(errors).length){
      // Test
      let aux = inputs.stepByStep.split("\n").reduce( (resu, step) => resu + "<h6>"+step+"</h6>", "")
      console.log(aux);

      alert("Posted!");
      setErrors({
        name: "",
        description: "",
        score: 1,
        stepByStep: "",
        diets: [],
        url: "",
      });
      setInputs({
        name: "",
        description: "",
        score: 1,
        stepByStep: "",
        diets: [],
        url: "",
      })
    }else {
      alert("Please Complete the Form b4 submit")
    }
  }
  return(
    <>
  <div className={style.mainContainer}>
      <h1>Create Recipe</h1>
    <form onSubmit={(e) => handleSubmit(e)} className={style.formContainer}>
      {/* Name Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="name" >Recipe Title: </label>
        <input  name="name"
                type="text"
                placeholder='Name of the recipe'
                value={inputs.name}
                onChange={handleChange}
                className={errors.name && "warning"}
        />
        {errors.name && <p className='danger'>{errors.name}</p>}
      </div>

      {/* Description Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="description" >Description: </label>
        <textarea name="description"
                  type="text"
                  placeholder='Description...'
                  rows="2"
                  value={inputs.description}
                  onChange={handleChange}
                  className={errors.name && "warning"}
        />
        {errors.description && <p className='danger'>{errors.description}</p>}
      </div>

      {/* Score Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="score">Healty Score</label>
        <input  name="score"
                type="number"
                placeholder= "Between 1 and 100"
                value={inputs.score}
                onChange={handleChange}
                className={ errors.score && "warning"}
        />
        {inputs.score && <p className='danger'>{errors.score}</p>}
      </div>

      {/* Step By Step Input */}
      <div className={style.pairContainer}>
        <label  htmlFor="stepByStep">Step-by-Step</label>
        <textarea name="stepByStep"
                  type="text"
                  placeholder='1. ....'
                  rows="5"
                  value={inputs.stepByStep}
                  onChange={handleChange}
                  className={errors.name && "warning"}
        />
        {errors.stepByStep !== "1" && <p className='danger'>{errors.stepByStep}</p>}
      </div>
      {/* Step By Step Input */}
      <fieldset className={style.gridContainer}>
        <legend >Type of diet</legend>
        {dietsCheckBox}
      </fieldset>
      {/* Submit */}
      <button type='submit'
                >Submit</button>
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