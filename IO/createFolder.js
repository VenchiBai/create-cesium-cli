/**
 * @description 创建目录
 * @param {String} folderPath 要创建的目录路径
 * @returns {Object} { IsCreated: true }
 * */

const fs = require('fs');
const { checkDirectoryExists } = require('../utils/checkDirectoryExists');
const chalk = require('chalk');
const createFolder = (folderPath) => {
  // 判断文件夹是否存在
  // 存在则删除
  if (checkDirectoryExists(folderPath)) {
    fs.rmSync(folderPath, { recursive: true });
  }
  // 创建文件夹
  try {
    // 创建目录，如果目录已存在，则抛出异常
    fs.mkdirSync(folderPath);
    return {
      IsCreated: true,
    };
  } catch (error) {
    console.log(chalk.red(`目录 ${folderPath} 创建失败`));
  }
};

module.exports = { createFolder };
