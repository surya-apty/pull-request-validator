import { runCommand } from "./command";

export const getLocalBranch = async () => {
    return runCommand(`git rev-parse --abbrev-ref HEAD`);
}

export const getAuthUsingToken = async (tokenFilePath: string) => {
    return runCommand(`gh auth login --with-token < ${tokenFilePath}`)
}