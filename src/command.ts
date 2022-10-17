import { exec, ExecException } from "child_process";

export interface CommandResult {
    stderr: string | Buffer;
    stdout: string | Buffer;
    error: ExecException | null;
}

export const runCommand = async (command: string): Promise<CommandResult> => {
    console.log(`run: ${command}`);
    
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