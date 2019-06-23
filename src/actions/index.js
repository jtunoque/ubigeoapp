import Ubigeo from "../models/Ubigeo";

export const addUbigeoDep=(objUbigeo)=>
{
    return {ubigeo:objUbigeo,type:"ADD_UBIGEO_DEP"};
}

export const cleanUbigeoDep=()=>
{
    return {type:"CLEAN_UBIGEO_DEP"};
}

export const addUbigeoProv=(objUbigeo)=>
{
    return {ubigeo:objUbigeo,type:"ADD_UBIGEO_PROV"};
}

export const cleanUbigeoProv=()=>
{
    return {type:"CLEAN_UBIGEO_PROV"};
}

export const addUbigeoDist=(objUbigeo)=>
{
    return {ubigeo:objUbigeo,type:"ADD_UBIGEO_DIST"};
}

export const cleanUbigeoDist=()=>
{
    return {type:"CLEAN_UBIGEO_DIST"};
}