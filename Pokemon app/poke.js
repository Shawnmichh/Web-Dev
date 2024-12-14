document.querySelector("#button1").setAttribute("onclick", "getPokemon()");

function getPokemon(){
    const numberOfCards=document.querySelector("#in1").value;
    const pokeID=document.querySelector("#in2").value;
    const cardContainer=document.querySelector("#card-container");

    cardContainer.innerHTML="";

    if(!numberOfCards || !pokeID){
        alert("Please enter valid inputs!");
        return;
    }

    for(let i=0; i<numberOfCards; i++){
        const pokemonID=parseInt(pokeID)+i;
        fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonID)
        .then(response=>response.json())
        .then(data=>renderPokemon(data))
        .catch(error=>console.error(error));
    }
}

function renderPokemon(pokemon){
    const cardContainer=document.querySelector("#card-container");

    const card=document.createElement("div");
    card.classList.add("card");

    const imageidk=document.createElement("div")
    imageidk.classList.add("star")

    let imageUrl=pokemon.sprites.front_default || "fallback-image.png";
    if(imageUrl.endsWith("/")){
        imageUrl=imageUrl.slice(0,1);
    }

    card.innerHTML=`
        <h3 style="display: flex; justify-content: center;">${pokemon.name.toUpperCase()}</h3>
        <div style="display: flex; justify-content: center;">
        <h4>ID:${pokemon.id}</h4>
        </div>
    `;

    imageidk.innerHTML=`
        <img src="${imageUrl}" alt="${pokemon.name}" />
    `;

    cardContainer.appendChild(card);
    cardContainer.appendChild(imageidk);
}
