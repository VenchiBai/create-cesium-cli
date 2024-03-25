#!/usr/bin/env node
/**
 * @description: 通过交互式命令行创建项目
 * */
const inquirer = require('inquirer');
const questions = require('../data/question');
const path = require('path');
const { createFolder } = require('../IO/createFolder');
const cloneGit = require('../IO/cloneGit');
const  program  = require('commander');

program.version('1.0.0') // -v 或者 --versions输出版本号

program
  .command('init <template> <project>')
  .description('初始化项目模版')
  .action((templateName, projectName) => {
    const { downloadUrl } = templates[templateName];
    //download 
    // 第一个参数： 仓库地址
    // 第二个参数： 下载路径
    download(downloadUrl, projectName, {clone: true}, (err) => {
      if(err) {
        console.log('下载失败')
      } else {
        console.log('下载成功')
      }
    })
  })

program
  .command('list')
  .description('查看所有可用的模版')
  .action(() => {
    console.log(
      `vue3-template vue3模板(默认)
       vue2-template vue2模板
       react-template react模板`
    )
  })
program.option(
  "-n --name <name>",
  "the name of this project",
  "my-cesium"
);

program.parse(process.argv);
console.log(program.opts().name)

inquirer.prompt([
  {
    type: 'inpute',
    name: 'name',
    message: '请输入项目名称'
  }]).then((answers) => {
    console.log(answers)
  })

inquirer.prompt(questions).then((answers) => {
  const { projectName } = answers;
  const currentDirectory = process.cwd(); // 获取命令行执行的目录
  const folderPath = path.join(currentDirectory, projectName); // 构建文件夹路径
  const { IsCreated } = createFolder(folderPath); // 创建文件夹
  if (IsCreated) {
    console.log('folderPath', folderPath);
    cloneGit('smallDragon-z/itpsp-tv#main', folderPath);
  }
});
