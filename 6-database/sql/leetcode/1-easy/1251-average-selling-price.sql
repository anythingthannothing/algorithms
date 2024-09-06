SELECT b.product_id AS product_id, IFNULL(ROUND(SUM(a.units * b.price) / SUM(a.units), 2), 0.00) AS average_price
FROM UnitsSold a
RIGHT JOIN Prices b
ON a.product_id = b.product_id AND a.purchase_date BETWEEN b.start_date AND b.end_date
GROUP BY b.product_id;