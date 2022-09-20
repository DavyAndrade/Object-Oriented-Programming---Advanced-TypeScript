
// Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.

    class Patinete {
        marca: string
        ano: Number

        mostrarInfo() {
            console.log(`Esse é um Patinete da Marca ${patinete.marca}, criado em ${patinete.ano}.`)
        }
    }

    var patinete = new Patinete()
    patinete.marca = "CALOI"
    patinete.ano = 2020

    patinete.mostrarInfo()

