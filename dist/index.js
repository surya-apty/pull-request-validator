"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_commands_1 = require("./git-commands");
const inquirer_1 = __importDefault(require("inquirer"));
(0, git_commands_1.getLocalBranch)().then((branch) => {
    console.log(branch);
    inquirer_1.default
        .prompt([
        'Do you want to create pull request?',
        'Not Sure?'
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
});
const branchValidatorRegex = new RegExp(/\[\s(CB|LSP)-\d+\s\]/g);
console.log(branchValidatorRegex.test("[ LSP-24234 ] Fix: added custom validator"));
//# sourceMappingURL=index.js.map