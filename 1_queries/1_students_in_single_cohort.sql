-- 2_students_in_single_cohort.sql
-- Get all of the students from a single cohort.
SELECT id, name 
FROM students 
WHERE cohort_id = 1
ORDER BY name;
