// Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.

 class contaBanco {
    nome: string
    banco: string
    saldo: Number

    exibirDados(){
        console.log(`\nOlá, ${msg.nome}! Seja bem vindo ao ${msg.banco}!\nVocê tem ${msg.saldo} reais em sua conta.`)
    }
 }

    var msg = new contaBanco()
    msg.nome = "Paulo Rodrigues"
    msg.banco = "Nubank"
    msg.saldo = 500

        msg.exibirDados()