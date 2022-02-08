-- 2_cohorts_total_assignment_duration.sql
-- Get the total amount of time tht all students from a specific cohort have spent on all assignments.
SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'FEB12';