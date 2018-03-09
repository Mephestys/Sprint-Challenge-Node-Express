const fetch = require('node-fetch');

const CURRENT_VALUE_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const PREVIOUS_VALUE_ENDPOINT = 'https://api.coindesk.com/v1/bpi/historical/close.json?index=USD&for=yesterday';

function getCurrentValue() {

}

function getPreviousValue() {

}

module.exports = {
  getCurrentValue,
  getPreviousValue,
}