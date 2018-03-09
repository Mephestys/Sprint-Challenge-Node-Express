const fetch = require('node-fetch');

const CURRENT_VALUE_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const PREVIOUS_VALUE_ENDPOINT = 'https://api.coindesk.com/v1/bpi/historical/close.json?index=USD&for=yesterday';

const endpoints = [CURRENT_VALUE_ENDPOINT, PREVIOUS_VALUE_ENDPOINT];

function calculateValues(valuesArray) {
  const currentValue = valuesArray[0].bpi.USD.rate_float;
  const previousValue = Object.values(valuesArray[1].bpi);
  console.log(currentValue, previousValue[0]);
  return currentValue - previousValue[0];
}

function getValues() {
  return new Promise((resolve, reject) => {
    const valueArray = endpoints.map(endpoint => {
      return fetch(endpoint)
        .then(res => res.json())
        .catch(err => {
          console.log(err)
        })
    })
    Promise.all(valueArray)
      .then(valueArray => resolve(calculateValues(valueArray)))
      .catch(err => {
        reject(err);
      });
  })
}

module.exports = { getValues }
