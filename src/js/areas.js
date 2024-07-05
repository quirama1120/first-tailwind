console.group("cuadrado")
function perimetroCuadrado(lado) {
    return lado * 4
}
function areaCuadrado(lado) {
    return lado * lado
}
console.groupEnd()
//medidas triángulo
console.group('triángulo')
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}
// calcular altura
function alturaTrianguloLado1(lado1, lado2, base) {
    const perimetro = Number(lado1) + Number(lado2) + Number(base)
    const semiPerimetro = perimetro / 2;
    const semiPerimetroLado1 = semiPerimetro - lado1;
    const semiPerimetroLado2 = semiPerimetro - lado2;
    const semiPerimetroLado3 = semiPerimetro - base;
    const altura = (2 / lado1) * (Math.sqrt(semiPerimetro * (semiPerimetroLado1 * semiPerimetroLado2 * semiPerimetroLado3)))
    return altura
}
function alturaTrianguloLado2(lado1, lado2, base) {
    const perimetro = Number(lado1) + Number(lado2) + Number(base)
    const semiPerimetro = perimetro / 2;
    const semiPerimetroLado1 = semiPerimetro - lado1;
    const semiPerimetroLado2 = semiPerimetro - lado2;
    const semiPerimetroLado3 = semiPerimetro - base;
    const altura = (2 / lado2) * (Math.sqrt(semiPerimetro * (semiPerimetroLado1 * semiPerimetroLado2 * semiPerimetroLado3)))
    return altura
}
function alturaTrianguloBase(lado1, lado2, base) {
    const perimetro = Number(lado1) + Number(lado2) + Number(base)
    const semiPerimetro = perimetro / 2;
    const semiPerimetroLado1 = semiPerimetro - lado1;
    const semiPerimetroLado2 = semiPerimetro - lado2;
    const semiPerimetroLado3 = semiPerimetro - base;
    const altura = (2 / base) * (Math.sqrt(semiPerimetro * (semiPerimetroLado1 * semiPerimetroLado2 * semiPerimetroLado3)))
    return altura
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd()
//medidas círculo
console.group("circulo")
const pi = Math.PI;
function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
}
console.groupEnd()

//cuadrado
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("resultArea").innerHTML = area;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("resultPerimeter").innerHTML = perimetro;
}

//triangulo
function calcularAreaTriangulo() {
    const inputAltura = document.getElementById("altura");
    const valueAltura = inputAltura.value;
    const inputBase = document.getElementById("base")
    const valueBase = inputBase.value;
    const area = areaTriangulo(valueBase, valueAltura);
    document.getElementById("areaTriangulo").innerHTML = area;

}
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("inputLado2")
    const valueLado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("base")
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    document.getElementById("perimetroTriangulo").innerHTML = perimetro
}

function calcularAlturaLado1() {
    const inputLado1 = document.getElementById("inputLado1")
    const value1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2")
    const value2 = inputLado2.value;
    const inputBase = document.getElementById("base")
    const valueBase = inputBase.value;
    const alturaLado1 = alturaTrianguloLado1(value1, value2, valueBase)
    document.getElementById("alturaLado1").innerHTML = alturaLado1.toFixed(2);
}

function calcularAlturaLado2() {
    const inputLado1 = document.getElementById("inputLado1")
    const value1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2")
    const value2 = inputLado2.value;
    const inputBase = document.getElementById("base")
    const valueBase = inputBase.value;
    const alturaLado2 = alturaTrianguloLado2(value1, value2, valueBase)
    document.getElementById("alturaLado2").innerHTML = alturaLado2.toFixed(2);

}

function calcularBase() {
    const inputLado1 = document.getElementById("inputLado1")
    const value1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2")
    const value2 = inputLado2.value;
    const inputBase = document.getElementById("base")
    const valueBase = inputBase.value;
    const alturaBase = alturaTrianguloBase(value1, value2, valueBase)
    document.getElementById("alturaBase").innerHTML = alturaBase. toFixed(2);
}

//Círculo
function calcularDiametro() {
    const input = document.getElementById("radio")
    const value = input.value;
    const diametro = diametroCirculo(value)
    document.getElementById("calculaDiametro").innerHTML = diametro;
}
function calcularCircunferencia() {
    const input = document.getElementById("radio")
    const value = input.value;
    const _circunferencia = circunferencia(value)
    document.getElementById("calcularCircunferencia").innerHTML = _circunferencia.toFixed(2);
}
function calcularRadio() {
    const input = document.getElementById("radio")
    const value = input.value;
    const _area = areaCirculo(value)
    document.getElementById("calcularRadio").innerHTML = _area.toFixed(2);
}

// función triángulo isoceles
function alturaTriánguloIsoceles(ladoA, ladoB, base) {
    if (ladoA !== ladoB) {
        console.log('los lados A y B deben de ser iguales')
    } else {
        const altura = Math.sqrt((ladoA ** 2) - (base ** 2 / 4))
        alert(altura)
    }
}