var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'pets',
  file: './data/pets.csv'
});

