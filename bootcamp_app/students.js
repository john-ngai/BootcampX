// Some code examples will use Client, others will use Pool. However, using a Pool is the preferred way to query with node-postgres.
// More info found in the documentation: https://node-postgres.com/features/pooling#pooling
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// Query parameters.
const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
const cohort = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohort}%`, limit];

// pool.query is a function that accepts an SQL query as a JavaScript string.
pool.query(queryString, values)
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

// e.g. Run 'node students.js FEB 2'