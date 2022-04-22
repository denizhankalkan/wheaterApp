/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
import search from "../../Assets/Icons/Svg/searchIcon.svg"

const Form = props => {
  return (
    <div>
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div>
            <input
              type="text"
              className="input-1"
              placeholder="City"
              name="city"
              autoComplete="off"        
            >    
            </input>
            <button type="submit" className="search-button"><img src={search} style={{marginBottom: '-5px'}}></img></button>    
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City!
    </div>
  );
};

export default Form;