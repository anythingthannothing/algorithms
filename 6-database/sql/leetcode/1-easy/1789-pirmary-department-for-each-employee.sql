SELECT employee_id, department_id
FROM Employee
WHERE primary_flag = 'Y' OR emplyee_id IN (
    SELECT emplyee_id
    FROM Employee
    GROUP BY employee_id
    HAVING COUNT(*) = 1
);