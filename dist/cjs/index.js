"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var git_commands_1 = require("./git-commands");
var config = (0, config_1.loadConfig)('../pull-request-validator-config.yaml');
(0, git_commands_1.getLocalBranch)()
    .then(function (branch) {
    if (branch.stdout.length <= config.branch.meta.maxLength) {
        var rules = config.branch.rules;
        rules.forEach(function (value, index) {
        });
        console.log("Update your branch name, length exceeded!");
    }
});
