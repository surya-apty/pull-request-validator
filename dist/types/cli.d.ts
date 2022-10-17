#!/usr/bin/env node
declare const prompts: any;
declare const questions: ({
    type: string;
    name: string;
    message: string;
    initial?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    initial: string;
})[];
