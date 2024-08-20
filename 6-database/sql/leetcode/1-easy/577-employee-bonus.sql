SELECT a.name, b.bonus
FROM Employee a
LEFT JOIN Bonus b
ON a.empId = b.empId
WHERE IFNULL(b.bonus, 0) < 1000;