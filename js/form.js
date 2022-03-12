function validateForm(){
    var nombre = document.getElementById("name").value;
    var telefono = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("mensaje").value;
    var selector = document.getElementById("opciones");


    //condicional para campo de nombre
    if(nombre != ''){
        document.getElementById("name").classList.remove("error");
        document.getElementById("name").classList.add("success");
    } else {
        document.getElementById("name").classList.remove("success");
        document.getElementById("name").classList.add("error");
    }

    //condicional para campo de teléfono
    if(telefono != ''){

        //condiciona el largo del número telefónico
        if(telefono.length < 9){
            document.getElementById("error-tel").innerHTML="Ingresa al menos 9 dígitos";
            document.getElementById("tel").classList.remove("success");
            document.getElementById("tel").classList.add("error");
        } else {
            document.getElementById("tel").classList.remove("error");
            document.getElementById("tel").classList.add("success");
        }

        document.getElementById("tel").classList.remove("error");
        document.getElementById("tel").classList.add("success");
    } else {
        document.getElementById("tel").classList.remove("success");
        document.getElementById("tel").classList.add("error");
    }

    //condicional para correo electrónico
    if(email != ''){
        
        //condiciona la forma del correo electrónico
        if(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
            document.getElementById("email").classList.remove("error");
            document.getElementById("email").classList.add("success"); 
        } else {
            document.getElementById("email").classList.remove("success");
            document.getElementById("email").classList.add("error");
        }
        
        document.getElementById("email").classList.remove("error");
        document.getElementById("email").classList.add("success");
    } else {
        document.getElementById("email").classList.remove("success");
        document.getElementById("email").classList.add("error");
    }

    //condicional para comentario
    if(comentario != ''){
        document.getElementById("mensaje").classList.remove("error");
        document.getElementById("mensaje").classList.add("success");
    } else {
        document.getElementById("mensaje").classList.remove("success");
        document.getElementById("mensaje").classList.add("error");
    }

    //condicional para selector
    if(selector.options[selector.selectedIndex].value == "1"){
        console.log("🚀 ~ file: form.js ~ line 72 ~ validateForm ~ option1", selector.options[selector.selectedIndex])
        document.getElementById("opciones").classList.add("errorSelect");
    } else { 
        console.log("🚀 ~ file: form.js ~ line 72 ~ validateForm ~ option2", selector.options[selector.selectedIndex])
        document.getElementById("opciones").classList.remove("errorSelect");
        document.getElementById("opciones").classList.add("successSelect");
    }
}