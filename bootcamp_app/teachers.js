// Node Postgres
const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// Query parameters.
const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`;
const cohort = process.argv[2] || 'JUL02';
const values = [cohort];

// Get the name of all teachers that performed an assistance request during a cohort.
pool.query(queryString, values)
.then(res => {
  const data = res.rows;
  data.forEach(row => {
    const teacher = row.teacher;
    const cohort = row.cohort;
    console.log(`${cohort}: ${teacher}`);
  });
})
.catch(err => console.error('query error', err.stack));

// e.g. Run 'node teachers.js JUL02'
