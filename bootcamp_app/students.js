// Some code examples will use Client, others will use Pool. However, using a Pool is the preferred way to query with node-postgres.
// More info found in the documentation: https://node-postgres.com/features/pooling#pooling
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// Node.js inputs
const inputs = process.argv.slice(2);
const cohort = inputs[0];
const limit = inputs[1];

// pool.query is a function that accepts an SQL query as a JavaScript string.
pool.query(`
SELECT students.id, students.name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${cohort}%'
LIMIT ${limit || 5};
`)
.then(res => {
  const data = res.rows;
  data.forEach(user => {
      const id = user.id;
      const name = user.name;
      const cohort = user.cohort;
      console.log(`${name} has an id of ${id} and was in the ${cohort} cohort`);
  });
})
.catch(err => console.error('query error', err.stack));