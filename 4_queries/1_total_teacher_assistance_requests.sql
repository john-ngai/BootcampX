-- 1_total_teacher_assistance_requests.sql
-- Get the total number of assistance_requests for a teacher.
SELECT count(assistance_requests.*) AS total_assistances,
  teachers.name AS name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;
