const ubigeosProv=(state=[],action)=>
{
    switch(action.type)
    {
        case 'ADD_UBIGEO_PROV':

            return [
                ...state,
                action.ubigeo
            ];
        case 'CLEAN_UBIGEO_PROV':       
            return [];
        default:
            return state;
    }
}

export default ubigeosProv;