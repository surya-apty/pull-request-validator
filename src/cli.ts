#!/usr/bin/env node

import { loadConfig, Rule, Rules } from "./config";

const prompts = require('prompts');

const config = loadConfig('pull-request-validator-config.yaml');

console.log(config);

const questions = [
  {
    type: 'select',
    name: 'project',
    message: 'Pick a project?',
    choices: config.branch.projects.map((project) => {
      return { title: project, value: project }
    }),
    initial: 1
  },
  {
    type: 'select',
    name: 'type',
    message: 'Pick a type?',
    choices: ['fix', 'build', 'ci', 'pref'].map((value) => {
      return { title: value, value }
    }),
    initial: 1
  },
  {
    type: 'text',
    name: 'heading',
    message: 'Enter your pull request heading',
    validate: (heading: string) => {
      const rules: Rules[] = config.branch.rules;  
      rules.forEach((value: any, index) => {
        const rule = value;
        const regex = new RegExp(rule.regex as RegExp);
        console.log(regex.test(heading), rule.regex);
        
        return regex.test(heading) ? true : `${rule.name}`;
      });
      
    }
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?'
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);

  // => response => { username, age, about }
})();