function converter() {
    var textoEntrada = document.getElementById("json-input").value;

    var textoPasso1 = textoEntrada.replaceAll("\\", "\\\\");

    var textoPasso2 = textoPasso1.replaceAll("\"", "\\\"");

    var textoSaida = `\"${textoPasso2}\"`;

    document.getElementById("string-output").value = textoSaida;
} 