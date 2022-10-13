import { getLocalBranch } from "./git-commands";

getLocalBranch().then((branch) => {
  console.log(branch);
  
});
const branchValidatorRegex = new RegExp(/\[\s(CB|LSP)-\d+\s\]/g);
console.log(
  branchValidatorRegex.test("[ LSP-24234 ] Fix: added custom validator")
);
