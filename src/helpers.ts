export interface PullRequest {
    branch: string;
    heading: string;
}
export const validatePullRequest = async (pr: PullRequest) => {
    // code here
}

export const checkIfLocalBranchIsValid = async (branch: string, regex: RegExp) => {
    return regex.test(branch);
}


