SELECT 
    a.category,
    COUNT(b.account_id) AS accounts_count
FROM (
    SELECT 'Low Salary' AS category
    UNION ALL
    SELECT 'High Salary'
    UNION ALL
    SELECT 'Average Salary'
) AS a
LEFT JOIN Accounts b
ON 
    CASE 
        WHEN b.income < 20000 THEN 'Low Salary'
        WHEN b.income > 50000 THEN 'High Salary'
        ELSE 'Average Salary' 
    END = a.category
GROUP BY a.category;