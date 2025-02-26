#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { loadConfig } from "./config";
import { createNewBranch, createPullRequest } from "./git-commands";
var prompts = require('prompts');
var config = loadConfig('pull-request-validator-config.yaml');
var questions = [
    {
        type: 'text',
        name: 'ticketNo',
        message: 'Enter your jira ticket no',
        initial: 'LSP-XXXX'
    },
    {
        type: 'select',
        name: 'branchType',
        message: 'Select your branch type',
        choices: ['feature', 'bugfix', 'enhancement'].map(function (value) {
            return { title: value, value: value };
        }),
        initial: 1
    },
    {
        type: 'text',
        name: 'branchName',
        message: 'Enter your branch name',
        initial: 'login-button-update'
    },
    {
        type: 'select',
        name: 'project',
        message: 'Pick a project?',
        choices: config.branch.projects.map(function (project) {
            return { title: project, value: project };
        }),
        initial: 1
    },
    {
        type: 'select',
        name: 'type',
        message: 'What kind of fix your pull request includes?',
        choices: ['fix', 'build', 'ci', 'pref'].map(function (value) {
            return { title: value, value: value };
        }),
        initial: 1
    },
    {
        type: 'text',
        name: 'heading',
        message: 'Enter your pull request heading',
        validate: function (heading) {
            if (heading.length > config.branch.meta.maxLength) {
                return "Length should be less then ".concat(config.branch.meta.maxLength, " characters.");
            }
            if (config.branch.shouldIncludeTicketNo) {
                var regex = new RegExp(config.branch.ticketRegex);
                if (!regex.test(heading)) {
                    return 'Ticket no should be present!';
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
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, prHeading, prBody;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prompts(questions)];
            case 1:
                response = _a.sent();
                prHeading = response.heading;
                prBody = "\n  # ROOT Cause:\n  ".concat(response.rootCause, "\n\n  # Additional Message:\n  ").concat(response.additionalComments, "\n\n  # Project:\n  ").concat(response.project, "\n\n  # Pull Request For:\n  ").concat(response.type, "\n\n  This is a auto generated pull request, for more information [check docs here](https://github.com/suryashekhawat/pull-request-validator).\n  ");
                createNewBranch(response.branchType, response.ticketNo, response.branchName)
                    .then(function (res) {
                    console.log('done branch');
                }).catch(function (error) { return console.error(error); });
                createPullRequest(prHeading, prBody, __spreadArray([], config.branch.reviewer, true))
                    .then(function (result) {
                    console.log("Done", result);
                }).catch(function (error) { return console.error(error); });
                return [2 /*return*/];
        }
    });
}); })();
