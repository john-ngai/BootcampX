-- 9_avg_total_cohort_assistance_duration.sql
-- Get the average total duration of assistance requests for each cohort.
SELECT AVG (total_duration) AS average_total_duration
FROM (
  SELECT cohorts.name AS cohort,
    SUM(completed_at-started_at) AS total_duration
  FROM assistance_requests
  JOIN students ON students.id = student_id
  JOIN cohorts on cohorts.id = cohort_id
  GROUP BY cohorts.name
  ORDER BY total_duration
) AS total_durations;