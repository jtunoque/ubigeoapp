import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Ubigeo from '../models/Ubigeo';
import Common from '../helpers/common';
import UbigeoTableView from './UbigeoTableView';
import './UbigeoForm.scss';

const UbigeoForm = props => {
  const {handleSubmit,submitting } = props;


  let objDptos=[],objProvs=[],objDists=[];

  const handleProcesar = (values)=>
  {    

    

    let ubigeosText = values.ubigeoString;
    
    //Get departamentos
    let regExpDepLines = /\d+\s\w{1,10000}\s{0,4}\/\s{0,4}\/\s{0,2}/g; 
    const depArr = ubigeosText.match(regExpDepLines)
    
    for(let i in depArr)
    {
      let ubigeoInfo=Common.formatUbigeo(depArr[i]);
      let objDpto=new Ubigeo(ubigeoInfo.codigo,ubigeoInfo.nombre,"-","-");
      objDptos.push(objDpto);
    }

     console.log(objDptos);

    //Get provincias
    let regExpProvLines = /\d+\s\w+\s\/\s\d+\s\w+\s\/\s[^\w*]/g; 
    const provArr = ubigeosText.match(regExpProvLines)
    
    for(let i in provArr)
    {
      let provString = provArr[i];
     
      let regExpProv=/\d+\s\w*/g;      
      let provDetArr=provString.match(regExpProv);

      let ubigeoInfoFirst=Common.formatUbigeo(provDetArr[0]);
      let ubigeoInfoSecond=Common.formatUbigeo(provDetArr[1]);
      let objProv=new Ubigeo(ubigeoInfoSecond.codigo,ubigeoInfoSecond.nombre,
            ubigeoInfoFirst.codigo,ubigeoInfoFirst.nombre);
      
      objProvs.push(objProv);
    }

    console.log(objProvs);

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
      
      objDists.push(objDist);
    }

    console.log(objDists);


  }

  return (
    <form onSubmit={handleSubmit(handleProcesar)}>
      <div className="section">
        <label>Archivo de texto</label>
        <div>
          <Field className="form-control ubigeoString" name="ubigeoString" component="textarea"  />
        </div>
      </div>
      <div className="section">
        <button type="submit" disabled={submitting} className="btn btn-primary" >
          Procesar
        </button>
      </div>
      <div className="section">
        <h5>Departamentos</h5>
        <UbigeoTableView name="departamentos" listado={objDptos} />
      </div>
      <div className="section">
        <h5>Provincias</h5>
        <UbigeoTableView name="provincias" listado={objProvs} />
      </div>
      <div className="section">
        <h5>Distritos</h5>
        <UbigeoTableView name="distritos" listado={objDists} />
      </div>
      
    </form>
    
  );
};

export default reduxForm(
    {
        form:"ubigeoForm",
    })(UbigeoForm);
