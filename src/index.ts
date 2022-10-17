import { loadConfig } from './config';
import { getLocalBranch } from "./git-commands";

const config = loadConfig('../pull-request-validator-config.yaml');

getLocalBranch()
  .then((branch) => {
    if (branch.stdout.length <= config.branch.meta.maxLength) {
      const rules = config.branch.rules;
      rules.forEach((value, index) => {

      });
      console.log(`Update your branch name, length exceeded!`);

    }
  });
