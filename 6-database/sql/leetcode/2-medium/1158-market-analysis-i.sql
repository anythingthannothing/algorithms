SELECT a.user_id AS buyer_id, a.join_date AS join_date, IFNULL(b.orders_in_2019, 0) AS orders_in_2019
FROM Users a
LEFT JOIN (
    SELECT buyer_id, COUNT(*) AS orders_in_2019
    FROM Orders
    WHERE YEAR(order_date) = 2019
    GROUP BY buyer_id
) b
ON a.user_id = b.buyer_id;