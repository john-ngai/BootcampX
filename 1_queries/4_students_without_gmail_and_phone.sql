-- 5_students_without_gmail_and_phone.sql
-- Get all of the students without a gmail.com account and a phone number.
SELECT name, id, email, cohort_id
FROM students
WHERE email NOT LIKE '%gmail.com'
AND phone IS NULL;
