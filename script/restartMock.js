import './initScript.js'
import { exec } from 'child_process';
import {executeScriptWithProgress,runExec} from "./common.js";
const {VITE_HOST,VITE_NAME} = process.env

const script = `ssh root@${VITE_HOST} "cd /home/server/${VITE_NAME}/mockServer && pnpm install && pm2 restart index"`;
executeScriptWithProgress(script,'部署mock服务')
