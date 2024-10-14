WITH TEMP AS (
    SELECT COUNT(*) as total_count
    FROM Users
)
SELECT a.contest_id, ROUND(COUNT(*) / b.total_count * 100, 2) as percentage
FROM Register a, TEMP b
GROUP BY a.contest_id
ORDER BY 2 DESC, 1;