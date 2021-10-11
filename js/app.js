// boton borrar
const borrar = () => {
    document.getElementById("inputState").value = "Estudiante"
    document.getElementById("inputEmail4").value = ""
    document.getElementById("inputPassword4").value = ""
    document.getElementById("inputAddress").value = ""
    document.getElementById("inputCity").value = ""
    document.getElementById("totalPagar").textContent = " Total a Pagar: $"
}

// boton resumen
const resumen = () => {
    estud = document.getElementById("inputState").value
    if (estud == "Estudiante") {
        porcent = 0.2
    }
    else if (estud == "Trainee") {
        porcent = 0.5
    }
    else {
        porcent = 0.85
    }
    canti = document.getElementById("inputCity").value
    document.getElementById("totalPagar").textContent = " Total a Pagar: $ " + (200 * canti * porcent)
}
