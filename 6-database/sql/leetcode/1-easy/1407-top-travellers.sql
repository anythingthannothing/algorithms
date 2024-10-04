SELECT b.name, IFNULL(a.travelled_distance, 0) AS travelled_distance
FROM (
    SELECT user_id, SUM(distance) AS travelled_distance
    FROM Rides
    GROUP BY user_id
) a
RIGHT JOIN Users b
ON a.user_id = b.id
ORDER BY 2 DESC, 1;