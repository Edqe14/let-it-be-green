const miniget = require('miniget');
const randomThings = require('./randomThings');

function replace(text, values) {
  if (typeof values !== 'object') throw new TypeError('Invalid type for `values`');

  return Object.keys(values).reduce(
    (prev, key) => prev.replace(new RegExp(`%${key}%`, 'gi'), values[key]), 
    text
  );
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function getRandomThings() {
  const { name, url, extract, title } = random(randomThings);
  const body = JSON.parse(await miniget(url).text());
  const text = extract(body);

  const struct = {
    title,
    text
  }

  return struct;
}

const functions = {
  replace,
  random,
  getRandomThings
};

module.exports = functions;