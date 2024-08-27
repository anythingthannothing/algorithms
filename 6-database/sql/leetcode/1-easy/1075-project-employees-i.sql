SELECT MAX(project_id) AS project_id, ROUND(AVG(b.experience_years), 2) AS average_years
FROM Project a
JOIN Employee b
ON a.employee_id = b.employee_id
GROUP BY project_id;