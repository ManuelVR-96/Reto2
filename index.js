const axios = require('axios').default;
const express = require('express');

const { saveData } = require('./helpers/getData')

require('./database/db_config')

const app = express();

const port = 4000

app.use(express.json());
app.use('/', require('./routes/pacientes'));


setInterval(saveData,1000*60*10);

app.listen(port, ()=>{

    console.log(`corriendo en el puerto ${port}`)
})