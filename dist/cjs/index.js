"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var config_1 = require("./config");
var git_commands_1 = require("./git-commands");
var init = function (configFile) {
    var config = (0, config_1.loadConfig)(configFile || 'pull-request-validator-config.yaml');
    (0, git_commands_1.getLocalBranch)()
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
exports.init = init;
