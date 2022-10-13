import { getLocalBranch } from "./git-commands";
import inquirer from "inquirer";

getLocalBranch().then((branch) => {
  console.log(branch);
  inquirer
    .prompt([
      'Do you want to create pull request?',
      'Not Sure?'
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      
    })
    .catch((error: { isTtyError: any; }) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
});
const branchValidatorRegex = new RegExp(/\[\s(CB|LSP)-\d+\s\]/g);
console.log(
  branchValidatorRegex.test("[ LSP-24234 ] Fix: added custom validator")
);
