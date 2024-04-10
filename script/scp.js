import './initScript.js'
import { exec } from 'child_process';
import {executeScriptWithProgress,runExec} from "./common.js";
const {VITE_HOST,VITE_NAME} = process.env

const script = `scp -r dist/* root@${VITE_HOST}:/home/server/${VITE_NAME}/`;
executeScriptWithProgress(script,'移动文件')
