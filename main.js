'use strict';

var router = require('./Server/root.js');
var url = require('url');

module.exports = function(req,res) {
  var msg = req.url.replace("/" , "");
  var path = req.method + ' ' + req.url.charAt(0);
  router(msg,req,res,path);
};
