import * as yaml from 'js-yaml';
import * as fs from 'fs';
export var loadConfig = function (path) {
    try {
        return yaml.load(fs.readFileSync(path ? path : '../pull-request-validator-config.yaml', 'utf8'));
    }
    catch (e) {
        console.log(e);
        return {};
    }
};
