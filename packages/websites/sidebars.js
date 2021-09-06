/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


const globby = require("globby");
const getMenus = (key) =>
  globby.sync(`docs/${key}/*.mdx`).map((item) => item.slice(5, -4));

module.exports = {
  someSidebar: {
    开始: getMenus("get-started"),
    组件: getMenus("components"),
  },
};
