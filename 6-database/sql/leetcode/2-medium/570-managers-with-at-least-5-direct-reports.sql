SELECT a.name
FROM Employee a
JOIN (
    SELECT managerId
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(*) >= 5) b
ON a.id = b.managerId;