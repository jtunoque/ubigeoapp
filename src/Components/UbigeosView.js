import React, { Component } from "react";
import UbigeoTableView from "../Components/UbigeoTableView";

const UbigeosView = props => {
  const { departamentos,provincias,distritos } = props;

  return (
    <div>
      <div className="section">
        <h5>Departamentos</h5>
        <UbigeoTableView listado={departamentos} />
      </div>
      <div className="section">
        <h5>Provincias</h5>
        <UbigeoTableView listado={provincias} />
      </div>
      <div className="section">
        <h5>Distritos</h5>
        <UbigeoTableView listado={distritos} />
      </div>
    </div>
  );
};

export default UbigeosView;
