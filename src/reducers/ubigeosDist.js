const ubigeosDist=(state=[],action)=>
{
    switch(action.type)
    {
        case 'ADD_UBIGEO_DIST':

            return [
                ...state,
                action.ubigeo
            ];
        case 'CLEAN_UBIGEO_DIST':       
            return [];
        default:
            return state;
    }
}

export default ubigeosDist;