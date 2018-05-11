const loadprofile = require('./loadprofile');
const addaccount = require('./addaccount');
const addtodo = require('./addtodo');
const addorder = require('./addorder');
const deleteorder = require('./deleteorder');
const deleteaccount = require('./deleteaccount');
const deletetodo = require('./deletetodo');
const shiporder = require('./shiporder');

module.exports = function (app, db) {
  loadprofile(app, db);
  addaccount(app, db);
  addtodo(app, db);
  addorder(app, db);
  deleteorder(app, db);
  deleteaccount(app, db);
  deletetodo(app, db);
  shiporder(app, db);
}
