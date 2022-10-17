export interface PullRequest {
    branch: string;
    heading: string;
}
export declare const validatePullRequest: (pr: PullRequest) => Promise<void>;
export declare const checkIfLocalBranchIsValid: (branch: string, regex: RegExp) => Promise<boolean>;
