import shell from "shelljs";
export function executeScriptWithProgress(script,text) {
  let progress = 0;
  const progressBarWidth = 50;
  const progressBarChar = '█';

  // 创建一个定时器，每隔一定时间更新进度信息
  const progressInterval = setInterval(() => {
    progress += 0.1; // 每次增加 10% 的进度
    const filledBarWidth = Math.round(progressBarWidth * progress);
    const emptyBarWidth = progressBarWidth - filledBarWidth;
    const filledBar = progressBarChar.repeat(filledBarWidth);
    const emptyBar = progressBarChar.repeat(emptyBarWidth);
    const percentage = Math.round(progress * 100);

    process.stdout.clearLine(); // 清除当前行
    process.stdout.cursorTo(0); // 光标移动到行首
    process.stdout.write(`Progress: [${filledBar}${emptyBar}] ${percentage}%`);
  }, 1000); // 每秒更新一次进度

  // 执行脚本
  const result = shell.exec(script);

  clearInterval(progressInterval); // 清除定时器

  if (result.code === 0) {
    console.log(`${text} Script execution completed successfully!`);
  } else {
    console.log(`${text} Script execution failed.`);
  }
}

import { exec,spawn } from 'child_process';
export const runExec = async (script,text) => {
  // 执行脚本
  exec(script, (error, stdout, stderr) => {
    if (error) {
      console.error(`${text} 执行脚本时出错: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`${text} 脚本执行产生了错误输出: ${stderr}`);
      return;
    }

    console.log(`${text} 脚本执行结果: ${stdout}`);
  });
}
export const spawnScriptWithProgress = async (command,args = [],text) => {
  const spawnScript = spawn(command, args);

  spawnScript.stdout.on('data', (data) => {
    console.log(`${text} 脚本输出：${data}`);
  });

  spawnScript.stderr.on('data', (data) => {
    console.error(`${text} 脚本错误：${data}`);
  });

  spawnScript.on('close', (code) => {
    console.log(`${text} 脚本执行完成，退出码：${code}`);
  });
}
