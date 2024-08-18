SELECT a.name AS Employee
FROM (
    SELECT name, salary, managerId
    FROM Employee
    WHERE managerId IS NOT NULL
) a
JOIN Employee b
ON a.managerId = b.id
WHERE a.salary > b.salary;