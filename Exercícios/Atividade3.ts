// Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

    class Paciente {
        nome: string
        idade: Number
        estado: string
        doenças: string

    exibirDados(){
    console.log(`\n\t\tInformações do Paciente\n\n\tNome: ${pedro.nome}\n\tIdade: ${pedro.idade}\n\tEstado: ${pedro.estado}\n\tDoenças: ${pedro.doenças}`)
        }
    }

    var pedro = new Paciente()
    pedro.nome = "Pedro Jesus"
    pedro.idade = 23
    pedro.estado = "Estado Grave"
    pedro.doenças = "Asma"

    pedro.exibirDados()

