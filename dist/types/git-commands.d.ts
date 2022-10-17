export declare const getLocalBranch: () => Promise<import("./command").CommandResult>;
export declare const getAuthUsingToken: (tokenFilePath: string) => Promise<import("./command").CommandResult>;
export declare const createPullRequest: (heading: string, body: string, reviewer: string[]) => Promise<import("./command").CommandResult>;
export declare const createNewBranch: (type: string, ticket: string, title: string) => Promise<import("./command").CommandResult>;
