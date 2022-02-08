-- 2_busy_days.sql
-- Get the total number of assignments for each busy day of bootcamp, where the total number of assignments is >= 10.
SELECT day, COUNT(*) as total_assignments 
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;
