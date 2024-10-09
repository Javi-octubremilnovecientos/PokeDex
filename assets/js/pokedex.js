const listaPokemos = document.querySelector(".pokemon-todos");
const pokeContainer = document.querySelector("main")
function getRandomId(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const id = getRandomId(1, 151);

const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const {name} = data
    pintarCard(name)
  } catch (error) {
    
    alert("error");
  }
}

fetchData();


const pintarCard = (name)=>{

const card = document.createElement("div")

card.innerHTML = 
    `<div id="todos">
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
                <p class="electric">ELECTRIC</p>
                <p class="tipo">FIGHTING</p>
              </div>
              <div class="pokemon-stats">
                <p>4m</p>
                <p>30kg</p>
              </div>
            </div>
          </div>
    </div>;`


pokeContainer.append(card)
}