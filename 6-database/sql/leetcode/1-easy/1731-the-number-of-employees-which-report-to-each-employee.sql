SELECT a.employee_id, a.name, COUNT(*) as reports_count, ROUND(AVG(age)) as average_age
FROM (
    SELECT employee_id, name
    FROM Employees
    WHERE employee_id IN (
        SELECT DISTINCT reports_to
        FROM Employees
    )
) a
JOIN Employees b
ON a.employee_id = b.reports_to
GROUP BY employee_id
ORDER BY employee_id;