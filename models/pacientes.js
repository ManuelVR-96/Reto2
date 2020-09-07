const  Sequelize  = require("sequelize");

const pacienteModel = (sequelize, type) => {
    return sequelize.define('paciente', {
        id_de_caso: {
            type:type.STRING,
            primaryKey:true
            
            
        },
        fecha_de_notificacion: {
            type:type.DATE,
            
        },
        c_digo_divipola: {
            type:type.INTEGER,
            
        },
        ciudad_ubicacion: {
            type:type.STRING,
            
        },
        departamento: {
            type:type.STRING,
            
        },
        atencion: {
            type:type.STRING,
            
        },
        edad: {
            type:type.INTEGER,
            
        },
        sexo: {
            type:type.STRING,
            
        },
        tipo: {
            type:type.STRING,
            
        },
        estado: {
            type:type.STRING,
            
        },
        pais_de_procedencia: {
            type:type.STRING,
            allowNull: true
            
        },
        fis: {
            type:type.DATE,
            
        },
        fecha_diagnostico: {
            type:type.DATE,
            
        },
        fecha_recuperado: {
            type:type.DATE,
            
        },
        fecha_reporte_web: {
            type:type.DATE,
            
        },
        tipo_recuperacion: {
            type:type.STRING,
            
        },
        codigo_departamento: {
            type:type.INTEGER,
            
        },
        codigo_pais: {
            type:type.INTEGER,
            allowNull: true
            
        },
        pertenencia_etnica: {
            type:type.STRING,
            
        },
       
    },
    {
        timestamps: false
    })
}

module.exports = pacienteModel