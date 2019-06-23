import React, { Component } from "react";
import {bindActionCreators} from 'redux';


const UbigeoTableView=props=>
{
    const {listado}=props;

    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Código Padre</th>
                    <th>Nombre Padre</th>
                </tr>
            </thead>
            <tbody>
            {listado.map(
                    (item,i)=>
                    <tr key={i}>
                        <td>{item.Codigo}</td>
                        <td>{item.Nombre}</td>
                        <td>{item.CodigoPadre}</td>
                        <td>{item.NombrePadre}</td>
                    </tr>
                )
            }
            </tbody>
            </table>
    );
};

//export default UbigeoTableView;


export default UbigeoTableView;
  