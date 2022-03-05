const fs = require('fs/promises');
const path = require('path');
const template = require('./constants/template');
const { replace, getRandomThings } = require('./constants/utils');

(async () => {
  const { title, thing } = await getRandomThings();
  const generated = replace(template, {
    random_title: title,
    random_things: thing,
    last_updated: new Date().toLocaleString('en-GB', {
      timeZone: 'UTC',
      timeZoneName: 'short'
    })
  });
  
  await fs.writeFile(
    path.join(__dirname, 'README.md'),
    generated,
    'utf8'
  );
  
  console.log(`Finished writing generated content`);
})();