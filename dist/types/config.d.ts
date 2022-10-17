interface Rule {
    name: string;
    regex: string;
}
declare type Rules = {
    [key: string]: Rule;
};
export interface Config {
    version: string;
    branch: {
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
export {};
