export interface Rule {
    name: string;
    regex: RegExp;
}
export declare type Rules = {
    [key: string]: Rule;
};
export interface Config {
    version: string;
    branch: {
        projects: string[];
        ticketRegex: RegExp;
        shouldIncludeTicketNo: boolean;
        featureOwners: {
            [key: string]: string;
        };
        meta: {
            maxLength: number;
        };
        rules: Rules[];
    };
}
export declare const loadConfig: (path: string) => Config;
