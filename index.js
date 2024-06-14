const fs = require("fs");
const path = require("path");


//*/**make folder create**//
 fs.mkdirSync(path.join(__dirname,"assets"));


///*****read file */
const d = fs.readdirSync(path.join(__dirname,"assets"));
 console.log(d);

///**folder delete */

fs.rmdirSync(path.join(__dirname,"db"));


//***rename file  */

 fs.renameSync(path.join(__dirname, "assets"), path.join(__dirname, "deassets"));


