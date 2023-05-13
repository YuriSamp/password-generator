const numeros = Array.from({ length: 9 }, (_, i) => i + 1);

const letras_maiusculas = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

const letras_minusculas = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const caracteres_especiais = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '+',
  '=',
  '{',
  '}',
  '[',
  ']',
  '|',
  '\\',
  ':',
  ';',
  '<',
  '>',
  ',',
  '.',
  '?',
  '/',
];

export async function passwordGenerator(options, length) {
  let password = '';

  while (password.length < length) {
    let optionCase = options[Math.floor(Math.random() * options.length)];
    switch (optionCase) {
      case 'Lowercase Letters':
        password +=
          letras_minusculas[
            Math.floor(Math.random() * letras_minusculas.length)
          ];
        break;
      case 'Uppercase Letters':
        password +=
          letras_maiusculas[
            Math.floor(Math.random() * letras_maiusculas.length)
          ];
        break;
      case 'Numbers':
        password += numeros[Math.floor(Math.random() * numeros.length)];
        break;
      case 'Special Characters':
        password +=
          caracteres_especiais[
            Math.floor(Math.random() * caracteres_especiais.length)
          ];
        break;
    }
  }

  return password;
}
