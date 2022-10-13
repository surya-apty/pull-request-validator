
const { exec } = require('child_process');

interface CommandResult {
    stderr: any;
    stdout: any;
    errorMessage: any;
}

const runCommand = async (command: string): Promise<CommandResult> => {
    let result: any = {
        stderr: null,
        stdout: null,
        errorMessage: null
    };
    return new Promise((resolve, reject) => {
        exec(command, (error: { message: any; }, stdout: any, stderr: any) => {
            if (error) {
                reject(error.message)
                result.errorMessage = error.message;
                reject(result)
            }
            if (stderr) {
                result.stderr = stderr;
                reject(result)
            }
            result.stdout = stdout;
            resolve(result);
        });
    });
    
}

runCommand(`git rev-parse --abbrev-ref HEAD`)
    .then((result) => {
        console.log(result.stdout);
        const branch = result.stdout;
        const branchValidatorRegex = new RegExp(/\[\s(CB|LSP)-\d+\s\]/g)
        console.log(branchValidatorRegex.test("[ LSP-24234 ] Fix: added custom validator"));
    });