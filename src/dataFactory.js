const raw = require('./data.json');

function find(tel) {
  for(var i = 0; i < raw.length; i++) {
    var item = raw[i];
    if (item['电话1'] === tel || item['电话2'] === tel) {
      return item;
    }
  }
  return '查不到该电话号码的订单，请检查你的电话号码';
}

export default {
  find
}