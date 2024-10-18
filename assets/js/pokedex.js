const listaPokemos = document.querySelector(".pokemon-todos");
const pokeContainer = document.querySelector("main");

for (i = 0; i <= 155; i++) {
  const id = i;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      let tipoUno = "";
      let tipoDos = "";
      if (data.types.length > 1) {
        tipoUno = data.types[0].type.name;
        tipoDos = data.types[1].type.name;
      } else {
        tipoUno = data.types[0].type.name;
        tipoDos = false;
      }
      const { name, height, weight } = data;
      pintarCard(name, tipoUno, tipoDos, height, weight);
    } catch (error) {
      // alert("error")
    }
  }

  const pintarCard = (name, tipoUno, tipoDos, height, weight) => {
    const card = document.createElement("div");
    if (tipoUno && tipoDos) {
      card.innerHTML = `<div id="todos">
          <div class="pokemon-todos">
            <div class="pokemon">
              <p class="pokemon-id-back">#${id}</p>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"
                alt="Picachu"/>
            </div>
            <div class="pokemonInfo">
              <div class="nombre-contenedor">
                <p class="pokemonId"></p>
                <h1 class="pokemon-nombre">${name}</h1>
                <div class="pokemon-tipos">
                  <p class="electric">${tipoUno}</p>
                   <p class="tipo">${tipoDos}</p>
                 </div>
                <div class="pokemon-stats">
                  <p>${height}m</p>
                  <p>${weight}kg</p>
                </div>
              </div>
            </div>
      </div>`;
    } else {
      card.innerHTML = `<div id="todos">
        <div class="pokemon-todos">
          <div class="pokemon">
            <p class="pokemon-id-back">#${id}</p>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"
              alt="Picachu"/>
          </div>
          <div class="pokemonInfo">
            <div class="nombre-contenedor">
              <p class="pokemonId"></p>
              <h1 class="pokemon-nombre">${name}</h1>
              <div class="pokemon-tipos">
                  <p class="electric">${tipoUno}</p>
                  <p class="tipo">${tipoDos}</p>
              </div>
              <div class="pokemon-stats">
                <p>${height}m</p>
                <p>${weight}kg</p>
              </div>
            </div>
          </div>
    </div>`;
    }
    const primerTipo = card.querySelector(".pokemon-tipos .electric");
    const segundoTipo = card.querySelector(".pokemon-tipos .tipo ");
    primerTipo.setAttribute("id", tipoUno);
    segundoTipo.setAttribute("id", tipoDos);
    pokeContainer.append(card);
  };
  fetchData();
}

const botones = document.querySelectorAll("nav ul li button");

botones.forEach((boton) => {
  boton.addEventListener("click", (event) => {
    let tipo = event.target.id;

    pokeContainer.innerHTML = "";

    for (k = 0; k <= 155; k++) {
      const id = k;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

      async function fetchData() {
        try {
          const response = await fetch(url);
          const data = await response.json();

          const tipoUno = data.types[0].type.name;
          const tipoDos = data.types[1].type.name;

          const { name, height, weight } = data;

          if (tipoUno === tipo) {
            pintarCard(name, height, tipoUno, tipoDos, weight);
          } else if (tipoDos === tipo) {
            pintarCard(name, height, tipoUno, tipoDos, weight);
          }
          pintarCard();
        } catch (error) {
          //alert("error")
        }
      }
      fetchData();
    }
  });
});
