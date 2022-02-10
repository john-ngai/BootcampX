// Node Postgres
const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// Node inputs
const inputs = process.argv.slice(2);
const cohort = inputs[0];

// Get the name of all teachers that performed an assistance request during a cohort.
pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohort || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  const data = res.rows;
  data.forEach(row => {
    const teacher = row.teacher;
    const cohort = row.cohort;
    console.log(`${cohort}: ${teacher}`);
  });
})
.catch(err => console.error('query error', err.stack));
