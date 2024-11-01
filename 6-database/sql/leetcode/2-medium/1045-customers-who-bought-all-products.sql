WITH TEMP AS (
    SELECT COUNT(*) AS total_count
    FROM Product
)
SELECT customer_id, COUNT(DISTINCT product_key)
FROM Customer
GROUP BY customer_id
HAVING COUNT(DISTINCT product_key) = (SELECT total_count FROM TEMP);