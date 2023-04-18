function isUniform(arr) {
    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== firstElement) {
        return false;
      }
    }
    return true;
  }
  
  const input = prompt("Digite uma sequência de valores separados por vírgula:");
  const arr = input.split(",").map(Number);
  
  if (arr.some(isNaN)) {
    console.log("Entrada inválida. Por favor, digite uma sequência válida de números separados por vírgula.");
  } else {
    const result = isUniform(arr);
    console.log(result);
  }