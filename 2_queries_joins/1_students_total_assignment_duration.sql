-- 1_students_total_assignment_duration.sqk
-- Get the total amount of time a student has spent on all assignments.
SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';