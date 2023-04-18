function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  
  const input = prompt("Digite uma sequência de valores separados por vírgula:");
  const arr = input.split(",").map(Number);
  
  if (arr.some(isNaN)) {
    console.log("Entrada inválida. Por favor, digite uma sequência válida de números separados por vírgula.");
  } else {
    printReverse(arr);
  }