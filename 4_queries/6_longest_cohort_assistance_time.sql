-- 6_longest_cohort_assistance_time.sql
-- Get the cohort with the longest average duration of assistance requests.
SELECT cohorts.name AS name,
  AVG(completed_at - started_at) AS average_assistance_time
FROM assistance_requests 
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1;
