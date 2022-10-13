"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { exec } = require('child_process');
const runCommand = (command) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {
        stderr: null,
        stdout: null,
        errorMessage: null
    };
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
                result.errorMessage = error.message;
                reject(result);
            }
            if (stderr) {
                result.stderr = stderr;
                reject(result);
            }
            result.stdout = stdout;
            resolve(result);
        });
    });
});
runCommand(`git rev-parse --abbrev-ref HEAD`)
    .then((result) => {
    console.log(result.stdout);
    const branch = result.stdout;
    const branchValidatorRegex = new RegExp(/\[\s(CB|LSP)-\d+\s\]/g);
    console.log(branchValidatorRegex.test("[ LSP-24234 ] Fix: added custom validator"));
});
