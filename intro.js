//funcion conectarse a la db
//obtener alumnos

let respuestaPeticion = [
  { id: "1", nombre: "Axel", email: "", edad: 20, carrera: "ISC" },
  { id: "2", nombre: "Jacob", email: "", edad: 23, carrera: "ISC" },
  { id: "3", nombre: "Sara", email: "", edad: 23, carrera: "IGE" },
].map((e) => {
  e.email = e.nombre + "@gmail.com";
  return e;
});
console.log(respuestaPeticion);

// for (let index = 0; index < respuestaPeticion.length; index++) {
//   respuestaPeticion[index].email =
//     respuestaPeticion[index].nombre + "@Gmail.com";
// }

// console.log(respuestaPeticion);

//   a.map((e) => {
//     if (e.carrera == "ISC") {
//       e.fecha_examen = "20 de frebrero";
//     } else {
//       e.fecha_examen = "21 de febrero";
//     }
//   });
