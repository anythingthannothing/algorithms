SELECT b.name AS Department, a.name AS Employee, a.salary AS Salary
FROM Employee a, Department b
WHERE a.departmentId = b.id AND (a.departmentId, a.salary) IN (
        SELECT departmentId, MAX(salary) AS salary
        FROM Employee
        GROUP BY departmentId
);