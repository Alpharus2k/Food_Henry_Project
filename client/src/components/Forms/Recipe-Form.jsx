import style from './Recipe-Form.module.css'

function Form(props){
  return(
  <>
    <h1 className={style.bgRed}>FORM</h1>
    <p>{props.name}</p>
  </>
  )
}
export default Form;
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