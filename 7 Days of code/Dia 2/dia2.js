var nomeDeUsuario = prompt("Qual seu nome?")
var idadeDoUsuario = prompt("Qual sua idade?")
var linguagemEmAprendizado = prompt("Qual linguagem de programação você está estudando no momento?")
var gostaDeEstudar = prompt("Você gosta de estudar " + linguagemEmAprendizado + "? Responda com 1 para sim e 2 para não!")

document.write("Olá " + nomeDeUsuario +"! Tudo bem? Vi que você tem " + idadeDoUsuario + " anos, certo? Nunca é tarde para estudar " + linguagemEmAprendizado + ".")

if (gostaDeEstudar == 1){
        document.write(" Legal saber que você tem gostado! Foca nos estudos práticos em " + linguagemEmAprendizado + ". O céu é o limite.")
}

if (gostaDeEstudar == 2){
    document.write(" Que pena saber que você não curtiu :/ . Procure algo que você goste e se torne o melhor profissional possível!")}

