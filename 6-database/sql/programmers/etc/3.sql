WITH TEMP AS (
    SELECT a.ID AS ID
    FROM RESERVATION a
    JOIN RESERVATION b
    ON a.ID > b.ID AND 
    --  나보다 빨리 시작하면서 내 시작 시간보다 늦게 끝날 때
    ((a.START_TIME >= b.START_TIME AND a.START_TIME < b.END_TIME)
     OR
    --  나보다 늦게 시작하면서 내 종료 시간보다 빨리 시작할 때
     (a.START_TIME <= b.START_TIME AND a.END_TIME > b.START_TIME))
)
SELECT ID, START_TIME, END_TIME
FROM RESERVATION
WHERE ID NOT IN (SELECT ID FROM TEMP)
ORDER BY 2;