function promedioArray() {
    const inputPromedio = document.getElementById("valoresPromedio")
    const promedioValue = inputPromedio.value;
    const newArray = promedioValue.split(",")
    const sumaArray = newArray.reduce((elemento, elementoSumado) => { return Number(elemento) + Number(elementoSumado) })
    const promedioResultado = sumaArray / newArray.length
    document.getElementById("resultadoPromedio").innerHTML = promedioResultado.toFixed(2)
}

// Calculando la mediana JS
function arrayPar(array) {
    if (array.length % 2 === Number(0)) {
        return true
    } else { return false }
}

function medianaArray() {
    const inputMedia = document.getElementById("valoresMedia")
    const inputMediaValue = inputMedia.value
    const newArray = inputMediaValue.split(",")
    let arrayOrganizado = newArray.sort(function (a, b) {
        return a - b;
    })
    let mitadArray = parseInt(arrayOrganizado.length / 2);
    let mitad1 = arrayOrganizado[mitadArray - 1]
    let mitad2 = arrayOrganizado[mitadArray]
    if (arrayPar(newArray) === true) {
        let mediana = (Number(mitad1) + Number(mitad2)) / 2
        document.getElementById("resultadoMediana").innerHTML = mediana;
    } else {
        document.getElementById("resultadoMediana").innerHTML = mitad2
    }
}

// Calculando la moda
function calcularModa() {
    const objectOfArray = {};
    const inputModaValue = document.getElementById("valoresModa").value
    const newArray = inputModaValue.split(",")
    newArray.forEach(elemento => {
        if (objectOfArray[elemento]) {
            objectOfArray[elemento] += 1
        } else { objectOfArray[elemento] = 1 }
    })
    const arrayOfObject = Object.entries(objectOfArray).sort((a, b) => a[1] - b[1])
    document.getElementById("resultadoModa").innerHTML = arrayOfObject[arrayOfObject.length - 1][0]
}

// Media geométrica
function calcularMediaGeometrica() {
    console.log('first')
    const inputMediaGeometricaValue = document.getElementById("valoresMediaGeometrica").value;
    const arrayMediaGeometrica = inputMediaGeometricaValue.split(",").map(Number); 

    if (arrayMediaGeometrica.length === 0) {
        alert("Por favor ingresa al menos un valor numérico.");
        return;
    }

    const arrayMultiplicado = arrayMediaGeometrica.reduce((acumulador, elemento) => acumulador * elemento, 1); 
    const mediaGeometrica = Math.pow(arrayMultiplicado, 1.0 / arrayMediaGeometrica.length);

    document.getElementById("resultadoMediaGeometrica").textContent = mediaGeometrica.toFixed(2); 
}