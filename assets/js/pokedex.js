const listaPokemos = document.querySelector(".pokemon-todos");
const pokeContainer = document.querySelector("main")

for(i=0;i<=156;i++){
const id = i
const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const tipoUno = data.types[0].type.name
    const tipoDos =  data.types[1].type.name
    const {name, height, weight } = data 
   
    pintarCard(name,tipoUno, tipoDos,height,weight)
  
  } catch (error) {
   
  
  }
}

const pintarCard = (name,tipoUno, tipoDos, height, weight)=>{

  const card = document.createElement("div")
  if(tipoUno  && tipoDos){
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
                  <p class="electric">${tipoUno}</p>
                   <p class="tipo">${tipoDos}</p>
                 </div>
                <div class="pokemon-stats">
                  <p>${height}m</p>
                  <p>${weight}kg</p>
                </div>
              </div>
            </div>
      </div>`
  }else{
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
                  <p class="electric">${tipoUno}</p>
              
              </div>
              <div class="pokemon-stats">
                <p>${height}m</p>
                <p>${weight}kg</p>
              </div>
            </div>
          </div>
    </div>`
  }
  pokeContainer.append(card)
  }


fetchData();

}
