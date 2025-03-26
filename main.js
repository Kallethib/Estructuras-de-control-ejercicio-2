    const nota = window.prompt("¿Que nota obtuviste? (DEL 0 AL 100)");
    if (nota >= 0  && nota <= 100) {
        if (nota >= 90) {
            alert("Excelente, sigue asi");
        } else if (nota >= 75) {
            alert("Bien, puedes mejorar");
        } else if (nota >= 60) {
            alert("Suficiente, esfuerzate mas");
        } else {
            alert("No apruebas, estudia mas");
        }
    } else{
        alert("El valor no esta dentro del rango");
    }
