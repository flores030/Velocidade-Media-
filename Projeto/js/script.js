let distancia = document.querySelector("#distancia")
let tempo = document.querySelector ("#tempo")
let velocidade = document.querySelector("velocidade")
let resultado = document.querySelector ("#resultado")
let arrayVelocidade = []

const calcular = function () {
    velocidade.value = (distancia.value / tempo.value).tofixed(2)
     arrayVelocidade.push(["[",distancia.value, velocidade.value , tempo.value, " ] ",])
     resultado.value = arrayVelocidade
    
    }
