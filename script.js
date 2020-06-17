function dark() {
    var element = document.body;
    element.classList.toggle("dark");
    /*esta funcion toma todo el documento y hace toggle a dark*/
    
    var text = document.getElementById("text");
        if (text.innerHTML.match("Hola")) {
        text.innerHTML = "Tus labios de rubi";
    } else {
        text.innerHTML = "Hola, soy una caja";
    }
}


