const os = require ('os');
const supervillains = require ('supervillains');
const chalk = require('chalk');
const http = require("http");
const handler = (request, response) => {
    console.log('Recibimos peticion');
    console.log(chalk.green(supervillains.random()));
    console.log(os.cpus());
   
    /* for(let i = 0, len = os.cpus().length; i < len; i++) {
        console.log("CPU %s:", i);
        var cpu = os.cpus[i], total = 0;
     
     
        for(var time in cpu.times) {
            total += cpu.time;
            response.end(total);
        }
    
       for(time in os.cpu.times) {
            console.log("\t ***", type, Math.round(100 * cpu.times[type] / total));
       }
    }*/
        console.log(os.cpus()[1].model);
        //Comentario nuevo

        //*****  ***** */
        console.log(os.cpus()[1].type);
    
  //  response.end(supervillains.random());
    response.end(`<h1>${os.cpus()[0].model}</h1>`);
   // response.end(os.cpus()[1].model);
  }
const server = http.createServer(handler);
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');

