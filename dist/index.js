"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const git_commands_1 = require("./git-commands");
(0, git_commands_1.getLocalBranch)().then((branch) => {
    console.log(branch);
});
const branchValidatorRegex = new RegExp(/\[\s(CB|LSP)-\d+\s\]/g);
console.log(branchValidatorRegex.test("[ LSP-24234 ] Fix: added custom validator"));
//# sourceMappingURL=index.js.map