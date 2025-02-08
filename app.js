let lista_amigos = []

//recibe el elemento y texto para que sea dinamico
function texto_para_elemento(elemento, texto){
    let variableHTML = document.getElementById(elemento);
    variableHTML.innerHTML = texto;
    return;
}

//funcion para limpiar el campo del input
function limpiar_input(){
    document.getElementById(`amigo`).value = '';
};

//Funcion donde recibe el valor del input
function añadir_amigo(){
    nombre = document.getElementById(`amigo`).value;

    if (isNaN(nombre)){
        if (nombre === ''){
            alert("Debe ingresar un string. ");
    
        }else{
            lista_amigos.push(nombre);
        }

    }else{
        alert("Debe ingresar un string. ");
    }

    texto_para_elemento(`lista_Amigos`, `Amigos: \n ${lista_amigos} \n`);

    console.log(lista_amigos);

    limpiar_input();
    return
}


//Funcion para sortear amigos
function escoger_amigo(){
    if (!lista_amigos || lista_amigos.length === 0){
        alert("Ingrese mas de dos amigos para escoger su amigo secreto. ")
    }else{
        let amigo_escogido = lista_amigos[Math.floor(Math.random() * lista_amigos.length)];
        texto_para_elemento(`resultado`, `Su amigo secreto es ${amigo_escogido}`);
    }
}


