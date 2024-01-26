function encrypt() {
    var text = document.getElementById("input-text").value;
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (char.match(/[a-z]/i)) {
            var code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + 3) % 26) + 65); // El 3 es el desplazamiento por defecto
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + 3) % 26) + 97); // El 3 es el desplazamiento por defecto
            }
        }
        result += char;
    }
    document.getElementById("output-text").value = result;
    togglePlaceholder(); // Llamada para mostrar u ocultar el placeholder
}

function decrypt() {
    var text = document.getElementById("input-text").value;
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (char.match(/[a-z]/i)) {
            var code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - 3 + 26) % 26) + 65); // El 3 es el desplazamiento por defecto
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - 3 + 26) % 26) + 97); // El 3 es el desplazamiento por defecto
            }
        }
        result += char;
    }
    document.getElementById("output-text").value = result;
    togglePlaceholder(); // Llamada para mostrar u ocultar el placeholder
}

function togglePlaceholder() {
    var outputText = document.getElementById("output-text");
    var placeholder = document.querySelector(".placeholder");
    var text = document.querySelector(".text");
    if (outputText.value.trim() === "") {
        placeholder.style.display = "flex";
        text.style.display = "none";
    } else {
        placeholder.style.display = "none";
        text.style.display = "flex";
    }
}

function copyText() {
    var outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand('copy');
}
