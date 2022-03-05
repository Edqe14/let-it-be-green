const urls = [
  {
    title: 'jokes from <strong>jokeapi.dev</strong>',
    name: 'jokeapi.dev',
    url: 'https://v2.jokeapi.dev/joke/Programming,Pun?type=single&safe-mode',
    extract: (body) => body.joke?.replace(/\n/gi, '<br>')
  },
  {
    title: 'activity from <strong>boredapi.com</strong>',
    name: 'boredapi.com',
    url: 'https://www.boredapi.com/api/activity',
    extract: (body) => body.activity
  },
  {
    title: 'beers from <strong>punkapi.com</strong>',
    name: 'punkapi.com',
    url: 'https://api.punkapi.com/v2/beers/random',
    extract: (body) => `${body.name}<br>${body.tagline}`
  }
];

module.exports = urls;