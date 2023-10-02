function run(operator, bilangan1, bilangan2) {
    let hasil = 0;

  switch (operator) {
    case '+':
      hasil = bilangan1 + bilangan2;
      break;
    case '-':
      hasil = bilangan1 - bilangan2;
      break;
    case '*':
      hasil = bilangan1 * bilangan2;
      break;
    case '/':
      if (bilangan2 !== 0) {
        hasil = bilangan1 / bilangan2;
      } else {
        return 'Error'; 
      }
      break;
    default:
      return 'Operator tidak valid';
  }
  return hasil;
}
const operator = '+'; 
const bilangan1 = 1; 
const bilangan2 = 2; 
const hasil = run(operator, bilangan1, bilangan2);
if (hasil === 'Error') {
  console.log(`${hasil}`);
}