import './initScript.js'
import {executeScriptWithProgress,runExec} from "./common.js";
const {VITE_HOST,VITE_NAME} = process.env

const script = `ssh root@${VITE_HOST} "rm -rf /home/server/${VITE_NAME} && mkdir /home/server/${VITE_NAME}"`;

executeScriptWithProgress(script,'清空旧文件');
