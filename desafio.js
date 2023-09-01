// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let hora = 15;  // Supondo que 15 representa 15:00 (3:00 PM)

if (hora >= 6 && hora < 18) {
    console.log("Está claro, é dia.");
} else {
    console.log("Está de noite.");
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 03 - crie uma função que exiba uma mensagem no console

function showMessage() {
    console.log("Serei uma grande programadora.");
}

showMessage();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibirNome(nome) {
    console.log("Nome recebido:", nome);
}

exibirNome("Lucy");

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function exibirInformacoes(nome, idade, estiloMusical) {
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Estilo Musical Preferido:", estiloMusical);
}
exibirInformacoes("Lucy", 28, "Rock");

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function infoGosto(filme, musica) {
    console.log("Filme:", filme);
    console.log("Musica:", musica);
}
infoGosto("Totoro", "Love in the Dark");

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triploDoNumero(numero) {
    return numero * 3;
}

let numeroRecebido = 5;
let resultado = triploDoNumero(numeroRecebido);
console.log("O triplo de", numeroRecebido, "é:", resultado);

// 08 - crie uma função que  verifique se uma  variável é true ou false

function verificarBooleano(valor) {
    if (typeof valor === 'boolean') {
        if (valor) {
            return "A variável é true.";
        } else {
            return "A variável é false.";
        }
    } else {
        return "A variável não é um booleano.";
    }
}

// Testando a função com diferentes valores
console.log(verificarBooleano(true));
console.log(verificarBooleano(false)); 
console.log(verificarBooleano(10));      

// 09 - Crie um array que receba 5 itens e exiba no console.

let myArray = [10, "Texto", true, { nome: "Objeto" }, ["Item 1", "Item 2"]];

console.log(myArray);

// 10 - Utilize um método para adicionar um nome ao inicio do array.

let names = ["Lucy", "Rafael", "Renato", "José", "Joana"];
names.unshift("Luna");

console.log(names);

// 11 - Utilize um método para remover o último nome do array.

let namesExemple = ["Lucy", "Rafael", "Renato", "José", "Joana", "Luna"];
namesExemple.pop();
console.log(namesExemple);

// 12 - Utilize um método para adicionar dois nomes ao fim do array.

let nomes = ["Lucy", "Rafael", "Renato", "José"];
nomes.push("Joana", "Luna");

console.log(nomes);

// 13 - Utilize um método para remover o primeiro nome do array.

let nomeDelet = ["Lucy", "Rafael", "Renato", "José"];
nomeDelet.shift();
console.log(nomeDelet);

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); 

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.

let minhaInformacoes = {
    nome: "Lucy",
    idade: 28,
    paixao: "Senhor dos Aneis"
};

console.log(minhaInformacoes);

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.

let myInformations = {
    nome: "Lucy",
    idade: 28,
    paixao: "Senhor dos Aneis",
    gostoMusical: "Rock"
};

console.log(myInformations);

// 17 - Remova uma propriedade desse objeto.

let minhasInformacoes = {
    nome: "Lucy",
    idade: 28,
    paixao: "Senhor dos Aneis",
    gostoMusical: "Rock"
};
delete minhasInformacoes.idade;

console.log(minhasInformacoes);

// 18 - Mostre no console todas as propriedades desse objeto.

let myInformation = {
    nome: "Lucy",
    idade: 28,
    paixao: "Senhor dos Aneis",
    gostoMusical: "Rock"
};
for (let propriedade in myInformation) {
    console.log(propriedade + ": " + myInformation[propriedade]);
}

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
    {
        nome: "Lucy",
        idade: 28,
        telefone: "123456789",
        amigos: ["Rafael", "Lorena", "Gustavo", "Luna"]
    },
    {
        nome: "Rafael",
        idade: 27,
        telefone: "987654321",
        amigos: ["Nadir", "Luan", "Joana", "Emanoela"]
    },
    {
        nome: "Lorena",
        idade: 28,
        telefone: "555555555",
        amigos: ["Pollyana", "Geraldo", "Rosa", "Júlia"]
    },
    {
        nome: "Gustavo",
        idade: 29,
        telefone: "222222222",
        amigos: ["Lúcia", "Carlos", "Ana", "Miguel"]
    },
    {
        nome: "Luna",
        idade: 7,
        telefone: "444444444",
        amigos: ["Marluce", "Antonio", "Maria", "Rafael"]
    }
];

console.log(cadastro);

// 20 - Mostre no console o nome de um amigo de cada lista.
let cadastros = [
    {
        nome: "Lucy",
        idade: 28,
        telefone: "123456789",
        amigos: ["Rafael", "Lorena", "Gustavo", "Luna"]
    },
    {
        nome: "Rafael",
        idade: 27,
        telefone: "987654321",
        amigos: ["Nadir", "Luan", "Joana", "Emanoela"]
    },
    {
        nome: "Lorena",
        idade: 28,
        telefone: "555555555",
        amigos: ["Pollyana", "Geraldo", "Rosa", "Júlia"]
    },
    {
        nome: "Gustavo",
        idade: 29,
        telefone: "222222222",
        amigos: ["Lúcia", "Carlos", "Ana", "Miguel"]
    },
    {
        nome: "Luna",
        idade: 7,
        telefone: "444444444",
        amigos: ["Marluce", "Antonio", "Maria", "Rafael"]
    }
];
for (let pessoa of cadastros) {
    console.log("Amigo de", pessoa.nome + ":", pessoa.amigos[0]);
}