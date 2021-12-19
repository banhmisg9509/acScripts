#!/usr/bin/env node

import { prompt } from 'enquirer';

prompt({
  type: 'input',
  name: 'name',
  message: "What's your name?",
})
  .then(({ name }) => {
    console.log(`Hello ${name}`);
  })
  .catch(console.error);
