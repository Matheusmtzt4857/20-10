let carro = {
    marca: "lamborghini",
    modelo: "urus",
    cor: "preta com verde",
    andar: function () {
        console.log(`a ${carro.marca} ${carro.modelo} está andando`)
    },
    buzinar: function () {
        console.log(`a ${carro.marca} ${carro.modelo} está buzinando`)
    
    }

}

carro.andar()
carro.buzinar()

carro.marca = "porsche"
carro.modelo = "GT3 RS"