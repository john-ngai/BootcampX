-- 7_avg_assistance_request_wait_time.sql
-- Get the average time it takes to start an assistance request.
SELECT AVG(started_at - created_at) AS average_wait_time
FROM assistance_requests;
