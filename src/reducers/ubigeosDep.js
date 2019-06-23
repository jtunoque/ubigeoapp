const ubigeosDep=(state=[],action)=>
{
    switch(action.type)
    {
        case 'ADD_UBIGEO_DEP':

            return [
                ...state,
                action.ubigeo
            ];
        case 'CLEAN_UBIGEO_DEP':       
            return [];
        default:
            return state;
    }
}

export default ubigeosDep;