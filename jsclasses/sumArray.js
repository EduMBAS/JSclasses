function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const input = prompt("Digite uma sequência de valores separados por vírgula:");
  const arr = input.split(",").map(Number);
  
  if (arr.some(isNaN)) {
    console.log("Entrada inválida. Por favor, digite uma sequência válida de números separados por vírgula.");
  } else {
    const result = sumArray(arr);
    console.log(result);
  }