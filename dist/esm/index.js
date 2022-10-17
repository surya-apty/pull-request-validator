import { loadConfig } from './config';
import { getLocalBranch } from "./git-commands";
export var init = function (configFile) {
    var config = loadConfig(configFile || 'pull-request-validator-config.yaml');
    getLocalBranch()
        .then(function (branch) {
        if (branch.stdout.length <= config.branch.meta.maxLength) {
            var rules = config.branch.rules;
            rules.forEach(function (value, index) {
                console.log(value, index);
            });
            console.log("Update your branch name, length exceeded!");
        }
    });
};
