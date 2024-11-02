WITH TEMP AS (
    SELECT player_id, 
            event_date,
            LEAD (event_date) OVER (PARTITION BY player_id ORDER BY event_date ASC) AS next_login, 
            ROW_NUMBER() OVER (PARTITION BY player_id ORDER BY event_date) AS rn
    FROM Activity
)
SELECT ROUND((SELECT COUNT(*) FROM TEMP WHERE rn = 1 AND DATEDIFF(next_login, event_date) = 1) / COUNT(DISTINCT player_id), 2) AS fraction
FROM Activity;
