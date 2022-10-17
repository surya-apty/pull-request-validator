import { runCommand } from "./command";

export const getLocalBranch = async () => {
    return runCommand(`git rev-parse --abbrev-ref HEAD`);
}

export const getAuthUsingToken = async (tokenFilePath: string) => {
    return runCommand(`gh auth login --with-token < ${tokenFilePath}`);
}

export const createPullRequest = async (heading: string, body: string) => {
    return runCommand(`gh pr create --title "${heading}" --body "${body}"`);
}

export const createNewBranch = async (type: string, ticket: string, title: string) => {
    return runCommand(`git checkout -b ${type}/${ticket}/${title}`);
}

