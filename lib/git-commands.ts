import { runCommand } from "./command";

export const getLocalBranch = async () => {
    return runCommand(`git rev-parse --abbrev-ref HEAD`);
}