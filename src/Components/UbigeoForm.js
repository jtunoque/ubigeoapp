import React, { Component } from "react";
import {addUbigeoDep,addUbigeoProv,addUbigeoDist
    ,cleanUbigeoDep,cleanUbigeoProv,cleanUbigeoDist} from '../actions/index';
import { Field, reduxForm } from "redux-form";
import Ubigeo from '../models/Ubigeo';
import Common from '../helpers/common';
import UbigeoTableView from './UbigeoTableView';
import './UbigeoForm.scss';

const UbigeoForm = props => {
  const {handleSubmit,submitting, dispatch  } = props;

  const handleProcesar = (values)=>
  {    

    dispatch(cleanUbigeoDep());
    dispatch(cleanUbigeoProv());
    dispatch(cleanUbigeoDist());

    let ubigeosText = values.ubigeoString;
    
    //Get departamentos
    let regExpDepLines = /(\d+\s*[\w\sáéíóúÁÉÍÓÚ]*\s*)\/(\s*)\/(\s*)/g; 
    const depArr = ubigeosText.match(regExpDepLines)
    
    for(let i in depArr)
    {
      let ubigeoInfo=Common.formatUbigeo(depArr[i]);
      let objDpto=new Ubigeo(ubigeoInfo.codigo,ubigeoInfo.nombre,"-","-");

      dispatch(addUbigeoDep(objDpto));
    }

    //Get provincias
    let regExpProvLines = /(\d+\s*[\w\sáéíóúÁÉÍÓÚ]*\s*)\/(\s*\d+\s*[\w\sáéíóúÁÉÍÓÚ]*\s*)\/\s[^\w*]/g; 
    const provArr = ubigeosText.match(regExpProvLines)
    
    for(let i in provArr)
    {

      console.log(provArr[i]);
      let provString = provArr[i];
     
      let regExpProv=/\d+[\w\sáéíóúÁÉÍÓÚ]*/g;      
      let provDetArr=provString.match(regExpProv);

      let ubigeoInfoFirst=Common.formatUbigeo(provDetArr[0]);
      let ubigeoInfoSecond=Common.formatUbigeo(provDetArr[1]);
      let objProv=new Ubigeo(ubigeoInfoSecond.codigo,ubigeoInfoSecond.nombre,
            ubigeoInfoFirst.codigo,ubigeoInfoFirst.nombre);
      
      dispatch(addUbigeoProv(objProv));
    }


    //Get distritos
    let regExpDistLines = /\d+.*\/\s\d+\s.*\s\/\s\d+.*/g; 
    const distArr = ubigeosText.match(regExpDistLines)
    
    for(let i in distArr)
    {
      let distString = distArr[i];
      
      let regExpUbigeo=/\d+[\w\sáéíóúÁÉÍÓÚ]*/g;
      let distDetArr=distString.match(regExpUbigeo);

      let ubigeoInfoFirst=Common.formatUbigeo(distDetArr[1]);
      let ubigeoInfoSecond=Common.formatUbigeo(distDetArr[2]);
      let objDist=new Ubigeo(ubigeoInfoSecond.codigo,ubigeoInfoSecond.nombre,
            ubigeoInfoFirst.codigo,ubigeoInfoFirst.nombre);
      
      dispatch(addUbigeoDist(objDist));
    }

  }

  return (
    <form onSubmit={handleSubmit(handleProcesar)}>
      <div className="section">
        <label>Archivo de texto</label>
        <span>&nbsp;(<a href="https://github.com/jtunoque/ubigeoapp" target="_blank">Código fuente</a>)</span>
        <div>
          <Field className="form-control ubigeoString" name="ubigeoString" component="textarea"  />
        </div>
      </div>
      <div className="section">
        <button type="submit" disabled={submitting} className="btn btn-primary" >
          Procesar
        </button>
      </div>
     
      
    </form>
    
  );
};


export default reduxForm(
    {
        form:"ubigeoForm",
        initialValues:{ubigeoString:
            '"01 Lima /  / "\n"01 Lima / 50 Lima / "\n"01 Lima / 51 Barranca / "\n"01 Lima / 50 Lima / 202 La Molina"\n"01 Lima / 50 Lima / 203 San Isidro"\n"02 Arequipa /  / "\n"02 Arequipa / 63 Arequipa / "\n"02 Arequipa / 64 Caylloma / "\n"02 Arequipa / 63 Arequipa / 267 Cercado"'
        }
    })(UbigeoForm);

    