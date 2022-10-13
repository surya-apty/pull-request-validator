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
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = void 0;
const child_process_1 = require("child_process");
const runCommand = (command) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {
        stderr: '',
        stdout: '',
        error: null
    };
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(command, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
                result.error = new Error(error.message);
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
exports.runCommand = runCommand;
//# sourceMappingURL=command.js.map