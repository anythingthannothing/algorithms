WITH TEMP AS (
    SELECT requester_id AS id
    FROM RequestAccepted
    UNION ALL
    SELECT accepter_id AS id
    FROM RequestAccepted
)
SELECT id, COUNT(*) AS num
FROM TEMP
GROUP BY id
ORDER BY 2 DESC
LIMIT 1;