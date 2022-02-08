-- 8_total_cohort_assistance_duration.sql
-- Get the total duration of all assistance requests for each cohort.
SELECT cohorts.name AS cohort,
  SUM(completed_at-started_at) as total_duration
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohort
ORDER BY total_duration;
