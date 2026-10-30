const fs = require('fs');
const path = require('path');
const getDb = require('../db');

const destination = path.resolve(__dirname, '../../..', 'build/static/db');
fs.mkdirSync(destination, { recursive: true });
for (const [key, value] of Object.entries(getDb())) {
  fs.writeFileSync(path.join(destination, `${key}.json`), JSON.stringify(value), 'utf8');
  console.log(`build/static/db/${key}.json`);
}
