#!/usr/bin/env node

import figlet from 'figlet';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import { input, checkbox } from '@inquirer/prompts';
import { passwordGenerator } from './helpers/password.js';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Welcome to the ultimate password generator? \n'
  );

  await sleep();
  rainbowTitle.stop();
}

async function passwordlength() {
  const length = await input({
    message: 'Please type the length of your password',
  });

  const spinner = createSpinner('Next step...').start();
  await sleep();

  if (Number(length) !== NaN) {
    spinner.success({ text: `Next step` });
  } else {
    spinner.error({ text: `Please insert a number` });
    process.exit(1);
  }
  return length;
}

async function passwordOptions() {
  const options = await checkbox({
    message: 'Select at least one type of the digits',
    choices: [
      {
        value: 'Lowercase Letters',
      },
      {
        value: 'Uppercase Letters',
      },
      {
        value: 'Numbers',
      },
      {
        value: 'Special Characters',
      },
    ],
  });

  const spinner = createSpinner('Next step...').start();
  await sleep();

  if (options.length !== 0) {
    spinner.success({ text: `Next step` });
  } else {
    spinner.error({
      text: `Please select at least one bro, don't be an asshole`,
    });
    process.exit(1);
  }
  return options;
}

await welcome();
const length = await passwordlength();
const options = await passwordOptions();
const password = await passwordGenerator(options, length);

console.log(`\n Grab your fresh password : ${password} \n`);

figlet(`Thanks for using`, (err, data) => {
  console.log(gradient.pastel.multiline(data) + '\n');
});
