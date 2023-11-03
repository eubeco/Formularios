//Al cargarse el formulario establecer el foco en el cuadro de texto nombre.
window.onload = function() {
  if (document.forms.length > 0) {
    for (var i=0; i < document.forms[0].elements.length; i++){
      var campo = document.forms[0].elements[i];
      if (campo.type != "hidden"){
        campo.focus();
        break;
      }
    }
  }
}

//Incluir mi foto, permitirá cargar una imagen
function cargarImagen() {


    const referencias = window.showOpenFilePicker({
                                                          types: [
                                                            {
                                                              description: 'Image Files',
                                                              accept: {
                                                                'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
                                                              },
                                                            },
                                                          ],
                                                          excludeAcceptAllOption: true,
                                                          multiple: false,
                                                        });

}
function mostrarAlert(){
  var lista = document.getElementById("aficiones");
  var indexSelec = lista.options[lista.selectedIndex].value;
  var valorSelec = lista.options[lista.selectedIndex].text;

  alert("La longitud de la lista es " + lista.length + "\n" + "El índice seleccionado es el " + indexSelec + "\n" + "El valor del índice seleccionado es " + valorSelec);
}

function limita(caracteresMax){
  var elemento = document.getElementById("observaciones");
  if (elemento.value.length >= caracteresMax){
    return false;
  }
  else{
    return true;
  }
}

function borrarDatosIntroducidos() {
  document.getElementById("formulario").reset();
}

function guardarCambios() {
  if (!validarTelefono()){
    alert("El teléfono debe estar formado por nueve dígitos consecutivos y sin espacios ni guiones entre las cifras.");
    return false;
  };
  if (!validarDNI()){
    alert("El DNI es un campo obligatorio");
    return false;
  };
}

function validarDNI(){
  //El DNI debe ser un campo obligatorio
  var valor = document.getElementById("dni").value;
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)){
    return false;
  }
  else{
    return true;
  }
}

function validarTelefono(){
  //El campo teléfono debe estar formado por nueve dígitos consecutivoos y sin espacios ni guiones entre las cifras
  var valor = document.getElementById("telefono").value;
  if (!(/^\d{9}$/.test(valor))){
    document.getElementById("telefono").value = "";
    return false;
  }
  else{
    return true;
  }
}
