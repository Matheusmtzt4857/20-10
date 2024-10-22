let pessoa = {
    nome: "matheus",
    sobrenome: "canabarro",
    idade: 16,
    altura: 1.80,
    dormir: function(){
     console.log(`${pessoa.nome} está dormindo. roooooooooc!`)
     }
}


{
console.log(pessoa)
console.log(pessoa.nome, pessoa.sobrenome)
console.log(pessoa["nome"], pessoa["sobrenome"])

pessoa.nome = "Julia"

console.log(pessoa.nome)

pessoa.idade = 16
console.log(pessoa.idade)








}