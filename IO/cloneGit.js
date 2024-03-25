/**
 * @description: 克隆git仓库到指定目录
 * */
const download = require('download-git-repo');
const ora = require('ora');
const cloneGit = (gitUrl, folderPath) => {
  const spinner = ora('Loading...').start();
  download(
    gitUrl,
    folderPath,
    {
      clone: true, // 是否使用 Git clone，默认为 false
      logger: function (message) {
        console.log('message', message);
      },
    },
    function (err) {
      // 使用ora添加一个loading效果
      if (err) {
        console.log('err', err);
        spinner.fail('git仓库克隆失败');
      } else {
        spinner.succeed('git仓库克隆成功');
      }
    },
  );
};

module.exports = cloneGit;
