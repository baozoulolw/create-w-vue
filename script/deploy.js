import { exec } from 'child_process';
import {executeScriptWithProgress,runExec} from "./common.js";
const script = `yarn delete && yarn scp && yarn restart-mock`;

executeScriptWithProgress(script,'部署测试')


