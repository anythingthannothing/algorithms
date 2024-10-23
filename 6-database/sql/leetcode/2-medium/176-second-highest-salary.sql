WITH TEMP AS (
    SELECT salary, DENSE_RANK () OVER (ORDER BY salary desc) AS ranking
	FROM Employee
)
SELECT MAX(salary) AS SecondHighestSalary
FROM TEMP
WHERE ranking = 2;
