function createIteratorIntervall(debut = 0, fin = Infinity, pas = 1) {
  let prochaineIndex = debut;
  let nbInteration = 0;

  const rangIteration = {
    next: function () {
      let result;
      if (prochaineIndex < fin) {
        result = { value: prochaineIndex, done: false };
        prochaineIndex += pas;
        nbInteration++;
        return result;
      }

      return { value: nbInteration, done: true };
    },
  };
  return rangIteration;
}

let iterations = createIteratorIntervall(1, 10, 2);
let result = iterations.next();
while (!result.done) {
  console.log(result.value);
  result = iterations.next();
}

console.log("La sequence parcourue contenait", result.value, "elements");
const superHeroes = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log(superHeroes.homeTown);
console.log(superHeroes["active"]);
console.log(superHeroes["formed"]);
console.log(superHeroes["members"][1]["powers"][2]);
