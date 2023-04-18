$(document).ready(function(){
	$.ajax({
		url: "https://pokeapi.co/api/v2/pokemon",
		type: "GET",
		success: function(data){
			//si la funcion es exitosa ejecuta este codigo
			var pokemonTable = $("#pokemon-table");

			//Agregar los pokemon a la tabla
			$.each(data.results, function(index, pokemon){
				var pokemonUrl = pokemon.url;
				$.ajax({
					url: pokemonUrl,
					type: "GET",
					success: function(pokemonData){
						//si la solicitud es exitosa obtenemos los datos de cada pokemon
						var pokemonName = pokemonData.name;
						var pokemonImage = pokemonData.sprites.front_default;

						//creamos una nueva fila en la tabla con el nombre y la imagen
			pokemonTable.append("<tr><td>" + pokemonName + "</td><td><img src='" + pokemonImage + "'> </td></tr>");
					},
					error: function(error){
						//Si la funcion falla mostrar mensaje de error 
						console.log("error al cargar los datos del pokemon: " + error.statusText);
					}//cierra consola

				}); //Cierra ajax

			}); //cierra each
		}, //cierra data
		error: function(error){
			//Si la funcion falla mostrar mensaje de error 
						console.log("error al cargar la lis delos pokemon: " + error.statusText);
					}//cierra consola
		

	}); //Cierra ajax pokemon


}); //Cierra document
