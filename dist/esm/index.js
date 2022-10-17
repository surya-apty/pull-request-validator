import { loadConfig } from './config';
import { getLocalBranch } from "./git-commands";
var config = loadConfig('../pull-request-validator-config.yaml');
getLocalBranch()
    .then(function (branch) {
    if (branch.stdout.length <= config.branch.meta.maxLength) {
        var rules = config.branch.rules;
        rules.forEach(function (value, index) {
        });
        console.log("Update your branch name, length exceeded!");
    }
});
