WITH TEMP AS (
    SELECT 
        request_at AS _day, 
        COUNT(*) AS total_count, 
        SUM(IF(a.status != 'completed', 1, 0)) AS cancel_count
    FROM (
        SELECT id, client_id, driver_id, status, request_at
        FROM Trips
        WHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'
    ) a
    INNER JOIN Users b ON a.client_id = b.users_id AND b.banned = 'No'
    INNER JOIN Users c ON a.driver_id = c.users_id AND c.banned = 'No'
    GROUP BY request_at
)
SELECT 
    _day AS 'Day', 
    ROUND(cancel_count / total_count, 2) AS 'Cancellation Rate'
FROM TEMP;
