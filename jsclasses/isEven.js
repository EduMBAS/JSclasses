function isEven(num) {
  return num % 2 === 0;
}

const input = prompt("Digite um número:");
const num = Number(input);

if (isNaN(num)) {
  console.log("Entrada inválida, por favor digite um número!");
} else if (isEven(num)) {
  console.log(num + " é um número par.");
} else {
  console.log(num + " é um número ímpar.");
}