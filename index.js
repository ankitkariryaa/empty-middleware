/*!
* express-empty-middleware
* Copyright(c) 2017 Ankit Kariryaa
* Apache License Version 2.0
*/

'use strict';	
module.exports = function empty-middleware() {
  return function(req, res, next) {
    next();
  }
}
