#!/usr/bin/env node

import { loadConfig, Rule, Rules } from "./config";
import { createPullRequest } from "./git-commands";

const prompts = require('prompts');

const config = loadConfig('pull-request-validator-config.yaml');
interface Response {
  project: string;
  type: string;
  heading: string;
  rootCause: string;
  additionalComments: string;
}
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
      if (heading.length > config.branch.meta.maxLength) {
        return `Length should be less then ${config.branch.meta.maxLength} characters.`;
      }
      if (config.branch.shouldIncludeTicketNo) {
        const regex = new RegExp(config.branch.ticketRegex);
        if (!regex.test(heading)) {
          return 'Ticket no should be present!'
        }
      }
      return true;
    }
  },
  {
    type: 'text',
    name: 'rootCause',
    message: 'Enter the root cause'
  },
  {
    type: 'text',
    name: 'additionalComments',
    message: 'Any additional Comments, If any',
    initial: 'Would you like to share more abut this PR'
  }
];

(async () => {
  const response: Response = await prompts(questions);
  const prHeading = response.heading;
  const prBody = `
  # ROOT Cause:
  ${response.rootCause}

  # Additional Message:
  ${response.additionalComments}

  # Project:
  ${response.project}

  # Pull Request For:
  ${response.type}

  This is a auto generated pull request, for more information [check docs here](https://github.com/suryashekhawat/pull-request-validator).
  `  
  createPullRequest(prHeading, prBody)
  .then((result) => {
    console.log(`Done`, result);
    
  }).catch(error => console.error(error));
  
  // => response => { username, age, about }
})();