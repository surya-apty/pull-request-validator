
import { exec, ExecException } from 'child_process';

interface CommandResult {
    stderr: string | Buffer;
    stdout: string | Buffer;
    error: ExecException | null;
}

const runCommand = async (command: string): Promise<CommandResult> => {
    let result: CommandResult = {
        stderr: '',
        stdout: '',
        error: null
    };
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error.message)
                result.error = new Error(error.message);
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