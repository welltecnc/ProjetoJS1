//métodos
//limpeza e validação

const email = "    email@empresa.com      ";
const emailLimpo= email.trim(); // remove espaços extras
console.log(emailLimpo)

// includes - verifica se o dominio é válido
if(emailLimpo.includes("@")){
    console.log("email válido")
}else{
    console.log("email inválido")
}

// transformação de texto

const tituloLivro ="Como Aprender a PROGRAMAR";

const texto=tituloLivro
.toLowerCase()// deixa o texto minusculo
.split(" ") //remove parte do texto
.join("-") //criar uma unica string e texto

console.log(texto)

//to fixed
const precoProduto =199.99;
const desconto = 0.15; //15%
const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal)
console.log(`R$ ${precoFinal.toFixed(2)}`);

// Métodos de Array

const produtos =[
    {nome:"Teclado Mecânico", preco:200,promocao:true},
    {nome:"Mouse Gamer", preco:300,promocao:false},
    {nome:"Monitor Gamer", preco:900,promocao:true},
    {nome:"Pad Mouse", preco:70,promocao:false},
]
console.log(produtos)