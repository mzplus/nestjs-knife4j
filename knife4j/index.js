/*
 * @Author: zfplus 627349266@qq.com
 * @Date: 2023-01-13 18:49:53
 * @LastEditors: zfplus 627349266@qq.com
 * @LastEditTime: 2023-01-13 19:28:38
 * @FilePath: /nestjs-knife4j/knife4j/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knife4jSetup = void 0;
const express = require("express");
const path_1 = require("path");
function knife4jSetup(app, services) {
  //   console.log("knife4jSetup");
  app.use("/", express.static(path_1.resolve(__dirname, "./public/")));
  //   app.use("/services.json", function (req, res) {
  app.use("/v3/api-docs/swagger-config", function (req, res) {
    res.send(services);
  });
}
exports.knife4jSetup = knife4jSetup;
//# sourceMappingURL=index.js.map
