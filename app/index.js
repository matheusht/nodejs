const questions = [
    "o que aprendi hoje",
    "quem é você",
    "o que eu fiz hoje",
    "o que você faz hoje",
    "o que você está fazendo",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n,questions[index]" + " > ")
}


ask()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.lenght < questions.lenght) {
        ask(answers.lenght)
    } else {
        console.log(answers)
        process.exit()
    }
    process.exit()
})