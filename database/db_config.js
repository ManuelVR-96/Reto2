const Sequelize = require('sequelize')

const pacienteModel = require('../models/pacientes')

const db = new Sequelize('contagiados', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

const paciente = pacienteModel(db, Sequelize)

db.sync({force:false})
    .then(() => {
        console.log("DB sincronizada")
    })
    .catch(error => {
        console.log("Error para conectar con la BD", error)
    })

    module.exports = {
        paciente:paciente
    }