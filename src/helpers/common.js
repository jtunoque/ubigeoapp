class Common
{
    static formatUbigeo(ubigeoString)
    {
        //UbigeoString has following format:01 Lima
        let regExp=/\d+|[\w\sáéíóúÁÉÍÓÚ]*/g;      
        let detArr=ubigeoString.match(regExp);

        //console.log(detArr);

        return {codigo:detArr[0].trim(),nombre:detArr[1].trim()};
    }

}

export default Common;