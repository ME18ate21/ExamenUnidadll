alert("Ingrese (RB) para registrar banda" + "Ingrese (RA) registrar un album" + "Ingrese (RC) registra cancion");

var menu=prompt("Ingrese la terminacion dependiendo de la accion que desea realizar");
var Porcion=prompt("¿Cuantas bandas desea registrar?");
switch (menu){
    case "RB":
      RegistroBandas();
      break


    case "RA":
        RegistroAlbums();
        break

      
    case "RC":
        RegistroCanciones();
        break    
}

function RegistroBandas(){
    let i=0;
    while(i < Porcion){
        i++;
        let titulo = prompt("Tecle el nombre de la Banda");
        let GeneroMusical = prompt("Porfavor ingresa el genero de la banda");
        let AñodeCreacion = prompt("Ingrese el año en el que la banda se creo");


        let informacion ={
            Nombre:titulo,
            GeneroMusical:GeneroMusical,
            Año:AñodeCreacion,
        }
        console.log(informacion);
        if(i==Porcion){
            break;
        }
    }
    

}

function RegistroAlbums(){
    let i=0;
    while (i==Porcion){
        i++;
        let NombreAlbum = prompt("Introdusca el nombre ddel album");
        let NombreBanda = prompt("Introduzsca nombre de la banda");
        let AñoAlbum = prompt("Ingrese el año en quese creo el album");


        let informacion={
            Nombre:NombreAlbum,
            Banda:NombreBanda,
            Año:AñoAlbum,

        }
        console.log(informacion);
        if(i==Porcion){
            break;
        }
    }
}

  
function RegistroCanciones(){
    let i=0;
    while(i==Porcion){
        i++;
        let NomAlbum = prompt("Introdusca el nombre del album");
        let NomCancion =  prompt("Ingrese el nombre de la cancion");
        let Duracion = Prompt("Ingrese la duracion de la cancion");
        

        let informacion={
            NombreAlbum:NomAlbum,
            NombreCancion:NomCancion,
            Tiempo:Duracion,

        }
        console.log(informacion);
        if(i==Porcion){
            break;
        }

    }
}

alert("Tecle (MIG) para mostrar informacion por genro" + "Tecle (BC) para mostrar cancion" + "Tecle (MT) para mostrar todo");
var opciones=prompt("¿Que accion desea realizar?")
switch (opciones){
    case "MIG":
      MostrarInfGenero();
      break


    case "BC":
        RegistroAlbums();
        break

      
    case "MT":
        for(i=0; i< RegistroBandas.length; i++){
            console.log("RegistroBandas[i]");
        }
      
        break    
}

function MostrarInfGenero(){
    let i=0;
    while(i==opciones){
        i++;
        
        let informacion={
            Nombre:NombreAlbum,
            Banda:NombreBanda,

        }
        
        console.log(informacion);
        if(i==Porcion){
            break;
        }

    }
}

