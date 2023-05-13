const Numbers = Array.from({ length: 9 }, (_, i) => i + 1);

const Uppercase_Letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

const Lowercase_Letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const Special_Characters = [
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
          Lowercase_Letters[
            Math.floor(Math.random() * Lowercase_Letters.length)
          ];
        break;
      case 'Uppercase Letters':
        password +=
          Uppercase_Letters[
            Math.floor(Math.random() * Uppercase_Letters.length)
          ];
        break;
      case 'Numbers':
        password += Numbers[Math.floor(Math.random() * Numbers.length)];
        break;
      case 'Special Characters':
        password +=
          Special_Characters[
            Math.floor(Math.random() * Special_Characters.length)
          ];
        break;
    }
  }

  return password;
}
