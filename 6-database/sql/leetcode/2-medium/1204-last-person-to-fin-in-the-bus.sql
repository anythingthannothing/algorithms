WITH TEMP AS (
    SELECT person_name,
            turn,
            SUM(weight) OVER (ORDER BY turn ASC) AS total
    FROM Queue
)
SELECT person_name
FROM TEMP
WHERE total <= 1000
ORDER BY turn DESC
LIMIT 1;