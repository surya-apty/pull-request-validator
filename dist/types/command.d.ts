/// <reference types="node" />
/// <reference types="node" />
import { ExecException } from "child_process";
export interface CommandResult {
    stderr: string | Buffer;
    stdout: string | Buffer;
    error: ExecException | null;
}
export declare const runCommand: (command: string) => Promise<CommandResult>;
