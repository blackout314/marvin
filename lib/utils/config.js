
var nconf = require('nconf');

var margs     = process.argv.slice(2);

var configFile= 'config.json';
for(var i = 0; i < margs.length; i++) {
  if(margs[i].indexOf('--config=')>-1) {
    configFile = margs[i].replace('--config=','');
  }
}
//console.log('[CONFIG] '+configFile);
nconf.argv()
  .env()
  .file(configFile);

var config = nconf.get();

exports = module.exports = Object.freeze(config);
