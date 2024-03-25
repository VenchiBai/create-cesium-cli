/**
 * @description 问题列表自定义交互式命令行的问题及简单的校验
 * */
const { red } = require('chalk');
// const { checkFilenameRules } = require('../utils/checkFilenameRules');
const questions = [
  {
    name: 'projectName',
    type: 'input',
    message: '请输入模板名称',
    default: 'vue-template',
    // validate(val) {
    //   // 校验
    //   // 1. 输入不能为中文
    //   if (checkFilenameRules(val)) {
    //     return true;
    //   } else {
    //     console.log(red('项目名不合法'));
    //     return false;
    //   }
    // },
  },
];
module.exports = questions;
