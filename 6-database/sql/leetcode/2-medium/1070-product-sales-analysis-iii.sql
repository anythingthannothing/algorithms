SELECT a.product_id, a.year AS first_year, c.quantity, c.price
FROM (    
    SELECT product_id, MIN(year) AS year
    FROM Sales
    GROUP BY product_id
) a
JOIN Sales c
ON a.product_id = c.product_id AND a.year = c.year;