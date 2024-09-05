function desa(){
    var nome, idade; // criando variavel
    // adicionando valor as variaveis
    nome = prompt(" Qual é o seu nome?");
    idade = Number(prompt("Olá " + nome + " Qual sua Idade?")); // o NUMBER força a variavel receber um numero
    
    if (nome == "Joãozinho" || nome == "Joaozinho")
        alert("Acabei de conhecer o amor da minha vida");
    else
        alert("Acabei de conhecer " + nome +  " cuja a idade é " + idade + " anos de vida");

}