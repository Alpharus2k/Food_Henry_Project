//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { PORT, DB_FORCE } = process.env;


// Syncing all the models at once.
/*conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});*/
conn.sync({ force: DB_FORCE }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
