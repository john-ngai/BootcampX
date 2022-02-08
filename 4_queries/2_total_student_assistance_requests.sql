-- 2_total_student_assistance_requests.sql
-- Get the total number of assistance_requests for a student.
SELECT COUNT(assistance_requests.*) AS total_assistances,
  students.name AS name
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;
