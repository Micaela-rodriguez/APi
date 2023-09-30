

document.getElementById("boton").addEventListener("click", function () {
   let nombrePoke = document.getElementById("buscador").value.toLowerCase();
    
    let url = `https://pokeapi.co/api/v2/pokemon/${nombrePoke}`;

     fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon');
            }
            return response.json();
        })
        .then(data => {
            let element = document.getElementById("mostrarPokemon");
            element.innerHTML = `
                <h1>${data.name}</h1>
                <p>Número en la Pokedex: ${data.order}</p>
                <p>Altura: ${data.height} decímetros</p>
                <p>Peso: ${data.weight} hectogramos</p>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            `;
        })
        .catch(err => {
            let element = document.getElementById("mostrarPokemon");
            element.innerHTML = '<p>Pokémon no encontrado</p>';
            console.log(err);
        });
});