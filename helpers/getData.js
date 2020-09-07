const axios = require('axios').default;

const { paciente } = require('../database/db_config')

const getData = () => {
    return axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
    .then( response => {
        return response.data
    })
   
}

const saveData = () => {
    const data = getData()
    .then( (datos)=> {
        datos.map(async (item)=> {
            console.log("aca",item)
            try{
                const pacientes = await paciente.create({
                    id_de_caso: item.id_de_caso,
                    departamento:item.departamento,
                    fecha_de_notificacion: item.fecha_de_notificaci_n,
                    c_digo_divipola: item.c_digo_divipola,
                    atencion: item.atenci_n,
                    edad: item.edad,
                    sexo:item.sexo,
                    tipo:item.tipo,
                    estado: item.estado,
                    fis: item.fis,
                    fecha_diagnostico: item.fecha_diagnostico,
                    fecha_recuperado: item.fecha_recuperado,
                    fecha_reporte_web: item.fecha_reporte_web,
                    tipo_recuperacion: item.tipo_recuperaci_n,
                    codigo_departamento:item.codigo_departamento,
                    pertenencia_etnica:item.pertenencia_etnica,
                    pais_de_procedencia: item.pa_s_de_procedencia,
                    ciudad_ubicacion: item.ciudad_de_ubicaci_n
            
                })
            }
            catch(error){
                console.log("Error agregando dato", error)
            }
        })
    })
   .catch((error)=>{
       console.log("hubo un error", error)
   })
   return "hecho"
}
module.exports = {
    getData : getData,
    saveData : saveData
}