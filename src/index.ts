import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      name: 'initialValue',
      message: 'Valor inicial: ',
      type: 'number',
      default: 0.0,
    },
    {
      name: 'annualInterestRate',
      message: 'Taxa de juros anual (em porcentagem): ',
      type: 'number',
      default: 13.25,
    },
    {
      name: 'period',
      message: 'Período em (anos): ',
      type: 'number',
      default: 1,
    },
  ])
  .then((answers) => {
    const {initialValue, annualInterestRate, period} = answers;

    let amount = calculateAmount(initialValue, annualInterestRate, period);

    console.log(`
    Resultado (após ${period})

    Montante: R$ ${amount.toFixed(2)}
    Valor investido: R$ ${initialValue.toFixed(2)}
    Juros: R$ ${(amount - initialValue).toFixed(2)}
    `);
  })
  .catch((error) => console.log(error));

function calculateAmount(initialValue: number, interestRate: number, period: number): number {
  return initialValue * (Math.pow((1 + interestRate / 100), period));
}
