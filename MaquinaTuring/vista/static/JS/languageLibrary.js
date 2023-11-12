export function interfazIdioma(validacion, idiomaSel) {
    if(validacion=="true"){
        idiomaSel=document.getElementById("lenguaje").value;
    }
    let cadenaCompleta=null;
    let primeraParte=null;
    let segundaParte=null;
    let palabraValida=null;
    let idiomaSelActual=null;
    let idiomaSelTrad=null;
    let pasoSelActual=null;
    let pasoSelTrad=null;
    let velSelActual=null;
    let velSelTrad=null;
    switch (idiomaSel) {
        case "Espaniol":
            document.getElementById("palabra").placeholder = "Ingrese una palabra...";
            document.getElementById("validacion").innerText = "Evaluar";
            document.getElementById("eleccionLeng").innerText = "elija el idioma:";
            document.getElementById("eleccionEval").innerText = "¿evaluar paso a paso?";
            document.getElementById("eleccionVel").innerText = "Elige la velocidad de ejecucion del grafo y la cinta:";
            idiomaSelActual=document.getElementById("lenguajeSelec").innerText;
            for(let i=0; i<idiomaSelActual.length; i++){
                if (idiomaSelActual[i]==":") {
                   idiomaSelTrad=idiomaSelActual.substring(0,i);
                }
            }
            pasoSelActual=document.getElementById("pasoSelec").innerText;
            for(let j=0; j<pasoSelActual.length; j++){
                if (pasoSelActual[j]==":") {
                   pasoSelTrad=pasoSelActual.substring(0,j); 
                }
            }
            velSelActual=document.getElementById("velocidadSelec").innerText;
            for(let j=0; j<velSelActual.length; j++){
                if (velSelActual[j]==":") {
                   velSelTrad=velSelActual.substring(0,j); 
                }
            }
            document.getElementById("lenguajeSelec").innerText = idiomaSelActual.replace(idiomaSelTrad,"{idioma seleccionado");
            document.getElementById("pasoSelec").innerText = pasoSelActual.replace(pasoSelTrad,"{paso a paso");
            document.getElementById("velocidadSelec").innerText = velSelActual.replace(velSelTrad,"{velocidad seleccionada");
            /*document.getElementById("eleccionVel").innerText = "elija la velocidad de ejecución del grafo y la pila:";
            document.getElementById("velocidad").options[0].text="normal";
            document.getElementById("velocidad").options[1].text="rápido";
            document.getElementById("velocidad").options[2].text="lento"*/
            if(document.getElementById("mensajeAutomata") != null) {
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"la cadena",cadenaCompleta);
                if (palabraValida==true) {
                    cadenaCompleta = reemplazarCadena(segundaParte, "es aceptada", cadenaCompleta);
                } 
                else {
                    cadenaCompleta=reemplazarCadena(segundaParte,"no tiene suficientes letras o tiene algun caracter invalido",cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="Mostrar historial";
            document.getElementById("botonBorrarHistorial").innerText="Borrar historial";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="Palabra ingresada";
                document.getElementById("tablaEstado").innerText='"Estado de la palabra"';
                cambiarIdiomaEstadoHistorial("la cadena","es aceptada","no tiene suficientes letras o tiene algun caracter invalido");
            }
            else{
                document.getElementById("sinHistorial").innerText='"No hay palabras en el historial."';
            }
            break;
        case "English":
            document.getElementById("palabra").placeholder="Enter a word...";
            document.getElementById("validacion").innerText="evaluate";
            document.getElementById("eleccionLeng").innerText="choose language:";
            document.getElementById("eleccionEval").innerText = "evaluate step by step?";
            document.getElementById("eleccionVel").innerText = "Choose the execution speed of the graph and the tape:";
            idiomaSelActual=document.getElementById("lenguajeSelec").innerText;
            for(let i=0; i<idiomaSelActual.length; i++){
                if (idiomaSelActual[i]==":") {
                   idiomaSelTrad=idiomaSelActual.substring(0,i); 
                }
            }
            pasoSelActual=document.getElementById("pasoSelec").innerText;
            for(let j=0; j<pasoSelActual.length; j++){
                if (pasoSelActual[j]==":") {
                   pasoSelTrad=pasoSelActual.substring(0,j); 
                }
            }
            velSelActual=document.getElementById("velocidadSelec").innerText;
            for(let j=0; j<velSelActual.length; j++){
                if (velSelActual[j]==":") {
                   velSelTrad=velSelActual.substring(0,j); 
                }
            }
            document.getElementById("lenguajeSelec").innerText = idiomaSelActual.replace(idiomaSelTrad,"{selected language");
            document.getElementById("pasoSelec").innerText = pasoSelActual.replace(pasoSelTrad,"{Step by Step");
            document.getElementById("velocidadSelec").innerText = velSelActual.replace(velSelTrad,"{selected speed");
            /*document.getElementById("eleccionVel").innerText = "choose the graph and stack execution speed:";
            document.getElementById("velocidad").options[0].text="normal";
            document.getElementById("velocidad").options[1].text="fast";
            document.getElementById("velocidad").options[2].text="slow";*/            
            if(document.getElementById("mensajeAutomata")!=null){
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"The string",cadenaCompleta);
                if (palabraValida==true) {    
                    cadenaCompleta=reemplazarCadena(segundaParte,"is accepted",cadenaCompleta); 
                }
                else {
                    cadenaCompleta=reemplazarCadena(segundaParte,"does not have enough letters or has some invalid character",cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="show history";
            document.getElementById("botonBorrarHistorial").innerText="Delete history";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="word entered";
                document.getElementById("tablaEstado").innerText='"word status"';
                cambiarIdiomaEstadoHistorial("The string","is accepted","does not have enough letters or has some invalid character");
            }
            else{
                document.getElementById("sinHistorial").innerText='"There are no words in the history."';
            }
            break;
        case "Frances":
            document.getElementById("palabra").placeholder="Saisir un mot...";
            document.getElementById("validacion").innerText="Évaluer";
            document.getElementById("eleccionLeng").innerText="choisir la langue :";
            document.getElementById("eleccionEval").innerText = "évaluer étape par étape?";
            document.getElementById("eleccionVel").innerText = "Choisissez la vitesse d'exécution du graphique et de la bande:";
            idiomaSelActual=document.getElementById("lenguajeSelec").innerText;
            for(let i=0; i<idiomaSelActual.length; i++){
                if (idiomaSelActual[i]==":") {
                   idiomaSelTrad=idiomaSelActual.substring(0,i); 
                }
            }
            pasoSelActual=document.getElementById("pasoSelec").innerText;
            for(let j=0; j<pasoSelActual.length; j++){
                if (pasoSelActual[j]==":") {
                   pasoSelTrad=pasoSelActual.substring(0,j); 
                }
            }
            velSelActual=document.getElementById("velocidadSelec").innerText;
            for(let j=0; j<velSelActual.length; j++){
                if (velSelActual[j]==":") {
                   velSelTrad=velSelActual.substring(0,j); 
                }
            }
            document.getElementById("lenguajeSelec").innerText = idiomaSelActual.replace(idiomaSelTrad,"{langue sélectionnée");
            document.getElementById("pasoSelec").innerText = pasoSelActual.replace(pasoSelTrad,"{pas à pas");
            document.getElementById("velocidadSelec").innerText = velSelActual.replace(velSelTrad,"{vitesse sélectionnée");
            /*document.getElementById("eleccionVel").innerText = "choisissez la vitesse d'exécution du graphe et de la pile :";
            document.getElementById("velocidad").options[0].text="normal";
            document.getElementById("velocidad").options[1].text="rapide";
            document.getElementById("velocidad").options[2].text="lent";*/            
            if(document.getElementById("mensajeAutomata")!=null){
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"La chaîne",cadenaCompleta);
                if (palabraValida==true) {
                    cadenaCompleta=reemplazarCadena(segundaParte,"est acceptée.",cadenaCompleta); 
                }
                else {
                    cadenaCompleta=reemplazarCadena(segundaParte,"n'a pas assez de lettres ou a un caractère invalide",cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="afficher l'historique";
            document.getElementById("botonBorrarHistorial").innerText="Supprimer l'historique";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="mot saisi";
                document.getElementById("tablaEstado").innerText='"statut du mot"';
                cambiarIdiomaEstadoHistorial("La chaîne", "est acceptée.", "n'a pas assez de lettres ou a un caractère invalide");
            }
            else{
                document.getElementById("sinHistorial").innerText='"Il n y a pas de mots dans l histoire."';
            }
        break;
    default:
        break;
    }
}