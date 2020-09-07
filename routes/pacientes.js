const {Router} = require('express')
const  Sequelize  = require("sequelize");
const { paciente } = require('../database/db_config')



const router = Router();

router.get("/consultar", async (req,res)=>{
    const {sexo, estado, ciudad} = req.body;
    const where_clause = {}
    if(sexo){
        where_clause.sexo =sexo
    }
    if(estado){
        where_clause.estado = estado
    }
    if(ciudad){
        where_clause.ciudad = ciudad
    }

    const pacientes = await paciente.findAll({
        where:where_clause
        })
    
    const id_resultados = pacientes.map((item) => item.id_de_caso )

    console.log(pacientes)
    res.json(id_resultados)
})

module.exports = router;