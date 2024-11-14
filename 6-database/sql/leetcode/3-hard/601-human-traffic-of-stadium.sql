WITH TEMP AS (
    SELECT *,
        LEAD(id, 1) OVER (ORDER BY id) AS next_id,
        LEAD(id, 2) OVER (ORDER BY id) AS second_next_id,
        LAG(id, 1) OVER (ORDER BY id) AS prev_id,
        LAG(id, 2) OVER (ORDER BY id) AS second_prev_id
    FROM stadium
    WHERE people >= 100 
)
SELECT DISTINCT id, visit_date, people
FROM TEMP 
WHERE (next_id - id = 1 AND id - prev_id = 1)
    OR (second_next_id - next_id = 1 AND next_id - id = 1)
    OR (id - prev_id = 1 AND prev_id - second_prev_id = 1)
ORDER BY visit_date;