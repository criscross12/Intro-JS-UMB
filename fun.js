let cerveza = [
  { nombre: "Modelo", capacidas: 500 },
  { nombre: "Carta Blanca", capacidas: 475 },
  { nombre: "Corona", capacidas: 600 },
  { nombre: "XMarca", capacidas: 350 },
];

let cervezaGrandes = cerveza.filter((e) => e.capacidas >= 400);

let mililitros = cerveza.map((e) => {
  return e.capacidas;
});

let valorMayor = cerveza.reduce((x, y) => {
  // console.log(y.capacidas);
  console.log("x-----", x);
  return Math.min(x, y.capacidas);
}, 0);
console.log("Valor Mayor----", valorMayor);
// console.log(Math.max(...mililitros));
