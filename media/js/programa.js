// Función que verifica si un conjunto es cerrado bajo una operación
function esCerrado(conjunto, operacion) {
    for (var i = 0; i < conjunto.length; i++) {
        for (var j = 0; j < conjunto.length; j++) {
            var resultado = operacion(conjunto[i], conjunto[j]);
            if (conjunto.indexOf(resultado) == -1) {
                return false;
            }
        }
    }
    return true;
}

// Función que verifica si una operación es asociativa
function esAsociativa(conjunto, operacion) {
    for (var i = 0; i < conjunto.length; i++) {
        for (var j = 0; j < conjunto.length; j++) {
            for (var k = 0; k < conjunto.length; k++) {
                var resultado1 = operacion(
                    operacion(conjunto[i], conjunto[j]),
                    conjunto[k]
                );
                var resultado2 = operacion(
                    conjunto[i],
                    operacion(conjunto[j], conjunto[k])
                );
                if (resultado1 != resultado2) {
                    return false;
                }
            }
        }
    }
    return true;
}

// Función que verifica si un conjunto con una operación forma un semigrupo
function esSemigrupo(conjunto, operacion) {
    return esCerrado(conjunto, operacion) && esAsociativa(conjunto, operacion);
}

// Función que verifica si un conjunto con una operación forma un grupo
function esGrupo(conjunto, operacion) {
    if (!esCerrado(conjunto, operacion) || !esAsociativa(conjunto, operacion)) {
        return false;
    }
    for (var i = 0; i < conjunto.length; i++) {
        var elementoInverso = null;
        for (var j = 0; j < conjunto.length; j++) {
            if (
                operacion(conjunto[i], conjunto[j]) == 0 &&
                operacion(conjunto[j], conjunto[i]) == 0
            ) {
                elementoInverso = conjunto[j];
                break;
            }
        }
        if (elementoInverso == null) {
            return false;
        }
    }
    return true;
}

// Función que se ejecuta al enviar el formulario
function validarFormulario() {
    // Obtener los valores del formulario
    var conjuntoStr = document.getElementById("conjunto").value;
    var operacionStr = document.getElementById("operacion").value;
    // Convertir el conjunto a un arreglo de números
    var conjunto = conjuntoStr.split(",").map(function (x) {
        return parseInt(x.trim());
    });
    // Convertir la operación a una función
    var operacion = new Function("a", "b", "return " + operacionStr + ";");
    // Verificar si el conjunto forma un semigrupo
    if (esSemigrupo(conjunto, operacion)) {
        document.getElementById("resultadoSemigrupo").innerHTML =
            "El conjunto forma un semigrupo.";
    } else {
        document.getElementById("resultadoSemigrupo").innerHTML =
            "El conjunto no forma un semigrupo.";
    }
    // Verificar si el conjunto forma un grupo
    if (esGrupo(conjunto, operacion)) {
        document.getElementById("resultadoGrupo").innerHTML =
            "El conjunto forma un grupo.";
    } else {
        document.getElementById("resultadoGrupo").innerHTML =
            "El conjunto no forma un grupo.";
    }
    // Evitar que se recargue la página
    return false;
}
