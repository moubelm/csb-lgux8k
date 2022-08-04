//fetch
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.results)
    let arrayNombres = [];
    data.results.forEach((element) => {
      //console.log(element)
      arrayNombres.push(element.name);
    });
    console.log(arrayNombres);
  })
  .catch((error) => console.log(error));

//async await & map & filter
const obtenerPokemones = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const data = await res.json();
    //console.log(data.results)
    const arrayNombres = data.results.map((poke) => poke.name);
    //filter
    const arrayNombresFilter = data.results.filter(
      (poke) => poke.name === `bulbasaur`
    );
    const arrayNombresFilter2 = data.results.filter(
      (poke) => poke.name !== `bulbasaur`
    );
    console.log(arrayNombresFilter);
    console.log(arrayNombresFilter2);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
