const { log } = require('console');
const fs = require('fs');
const path = require('path');
let dni = "76543210M";

/** Leer README */

async function contributorsWithAMistake(){
    const fileContent = await fs.promises.readFile("./hacienda.json", "utf-8");

    const parsedData = JSON.parse(fileContent);

    parsedData.forEach(name => {
        // console.log(name.nombre);
    });
    // console.log(parsedData);

for ( let i = 0; i < parsedData.length; i++){
    if (parsedData[i].noficacionesPendientes = true){
        console.log(`El/la contribuyente/a ${parsedData[i].nombre} tiene notificaciones pendientes. Se enviará un email a ${parsedData[i].email}`);
    }
}


    



}

contributorsWithAMistake();