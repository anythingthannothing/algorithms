SELECT b.product_name, a.unit
FROM (
    SELECT product_id, SUM(unit) AS unit
    FROM Orders
    WHERE YEAR(order_date) = 2020 AND MONTH(order_date) = 02
    GROUP BY product_id
    HAVING SUM(unit) >= 100
) a
JOIN Products b
ON a.product_id = b.product_id;
