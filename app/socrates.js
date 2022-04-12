const pessoas = [
    { nome: "João", idade: 20 },
    { nome: "José", idade: 25 },
    { nome: "Maria", idade: 15 },
    { nome: "Carlos", idade: 40 },
]
function pessoasMaioresDeIdade(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade >= 18)
}
const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(pessoasMaioresDeIdade)
const pessoasMaioresDeIdade2 = pessoas.filter(pessoa => {
    return pessoa.idade >= 18
}
)
console.log(pessoasMaioresDeIdade2)
const pessoasMaioresDeIdade3 = pessoas.filter(pessoa => {
    return pessoa.idade >= 18
})
console.log(pessoasMaioresDeIdade3)
const pessoasMaioresDeIdade4 = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(pessoasMaioresDeIdade4)
const pessoasMaioresDeIdade5 = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(pessoasMaioresDeIdade5)
const pessoasMaioresDeIdade6 = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(pessoasMaioresDeIdade6)
const pessoasMaioresDeIdade7 = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(pessoasMaioresDeIdade7)