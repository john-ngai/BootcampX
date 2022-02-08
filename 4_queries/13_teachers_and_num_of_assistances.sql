-- 13_teachers_and_num_of_assistances.sql
-- Get the name of all teachers and the total number of assistances performed during a cohort.
SELECT teachers.name AS teacher,
  cohorts.name AS cohort,
  COUNT(assistance_requests) AS total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teacher;
