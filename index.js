let data = ["anali", "carlos", "juan", "Joan", "Pablo", "ezequiel", "jesus"]
let jsonRes = [{
    name: "Cris",
    mail: "Cris@dev.com"
},
{
    name: "Raul",
    mail: "Raul@dev.com",
    res: [{
        1: "Carbon",
        2: "Metal"
    }]
}]
let mail = "Pablo"
let res = "Raul@dev.com"

const dataFilter =  jsonRes.filter(e =>{
    console.log(e);
    return e.mail == res
}).map(a => {return a})
console.log("Dato----", dataFilter);